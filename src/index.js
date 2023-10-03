import videoInfo from "./VideoInfo.js";
import createHtml from "./cardCreator.js";
import ProcessAudioOnlyRequest from "./ProcessAudioRequest.js";
import ProcessVideoRequest from "./ProcessVideoRequest.js";

const inputEl = document.getElementById("input-el");
const inputButton = document.getElementById("input-btn");
const cardContentDiv = document.getElementById("cardContent-div");
const cardEl = document.getElementById("card-div");

const placeholderDiv = document.getElementById("placeholder-div");
const uniqueId = crypto.randomUUID();

document.cookie = `userID=${uniqueId}; max-age=604800; SameSite=strict`;

let responseBlobAndFileName = {
  blob: Blob,
  fileName: "",
};

let formatButton;
let audioOnlyButton;
let otherButton;

const placeholderImgs = [
  "./assets/images/caravan.webp",
  "./assets/images/cowboy.webp",
  "./assets/images/dino.webp",
  "./assets/images/knight.webp",
  "./assets/images/priest.webp",
  "./assets/images/princess.webp",
  "./assets/images/ship.webp",
  "./assets/images/smuggler.webp",
  "./assets/images/sunset.webp",
];

let cardHtml;

inputButton.addEventListener("click", async function click() {
  if (inputEl.value.length != 0) {
    placeholderPicker();
    cardAnimator();
    await ProcessVideoUrl();
    await RenderCard();

    formatButton = document.getElementsByName("format-button");
    audioOnlyButton = document.getElementById("audioOnly-button");
    otherButton = document.getElementById("other-button");

    audioOnlyButton.addEventListener("click", async function click() {
      const encodedUrl = encodeURIComponent(inputEl.value);
      responseBlobAndFileName = await ProcessAudioOnlyRequest(encodedUrl);
      ServeFile(responseBlobAndFileName);
    });

    formatButton.forEach((button) =>
      button.addEventListener("click", async function click() {
        const encodedUrl = encodeURIComponent(inputEl.value);
        const videoCode = button.dataset.videocode;
        responseBlobAndFileName = await ProcessVideoRequest(
          encodedUrl,
          videoCode,
        );
        ServeFile(responseBlobAndFileName);
      }),
    );
  }
});

function ServeFile(responseBlobAndFileName) {
  const url = URL.createObjectURL(responseBlobAndFileName.blob);
  const a = document.createElement("a");

  a.href = url;
  a.download = responseBlobAndFileName.fileName;

  document.body.appendChild(a);

  a.click();

  document.body.removeChild(a);

  URL.revokeObjectURL(url);
}

async function ProcessVideoUrl() {
  const encodedUrl = encodeURIComponent(inputEl.value);
  const fullUrl =
    "http://localhost:5013/YtDl/RequestVideoInfo";

  try {
    const response = await fetch(fullUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-User-ID": getCookie("userID"),
      },
      body: JSON.stringify({
        "videoUrl": encodedUrl})
    });

    const obj = await response.json();

    ProcessVideoInfo(obj);
  } catch (error) {
    console.log("Whoops, somethings is broken. " + error);
  }
}

function ProcessVideoInfo(obj) {
  videoInfo.VideoName = obj.videoName;
  videoInfo.Hosting = obj.hosting;
  videoInfo.VideoDesc = obj.videoDesc;
  videoInfo.Thumbnail = obj.thumbnail;
  videoInfo.Formats = obj.formats;

  cardHtml = createHtml(videoInfo);
}

async function RenderCard() {
  try {
    hidePlaceholder();
    cardContentDiv.innerHTML = cardHtml;
  } catch (error) {
    console.error("Error processing template:", error);
  }
}

function cardAnimator() {
  cardEl.classList.remove("invisible");

  // Force a reflow to make sure the next animations are recognized
  void cardEl.offsetWidth;

  // Add the animation classes
  cardEl.classList.remove("opacity-0", "translate-y-4");

  // Show the placeholder
  showPlaceholder();
}

function showPlaceholder() {
  placeholderDiv.classList.remove("hidden");
  placeholderDiv.classList.add("flex");
}

function hidePlaceholder() {
  placeholderDiv.classList.remove("flex");
  placeholderDiv.classList.add("hidden");
}

function placeholderPicker() {
  let placeholderImg = document.getElementById("placeholder-img");
  let randomizer = Math.floor(Math.random() * placeholderImgs.length);

  placeholderImg.src = placeholderImgs[randomizer];
}
