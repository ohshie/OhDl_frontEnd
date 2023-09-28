import videoInfo from "./VideoInfo.js";
import createHtml from "./cardCreator.js";

const inputEl = document.getElementById("input-el");
const inputButton = document.getElementById("input-btn");
const cardContentDiv = document.getElementById("cardContent-div");
const cardEl = document.getElementById("card-div");

const placeholderDiv = document.getElementById("placeholder-div");

let formatButton;
let audioOnlyButton;
let otherButton;

const placeholderImgs = [
  "../assets/images/caravan.webp",
  "../assets/images/cowboy.webp",
  "../assets/images/dino.webp",
  "../assets/images/knight.webp",
  "../assets/images/priest.webp",
  "../assets/images/princess.webp",
  "../assets/images/ship.webp",
  "../assets/images/smuggler.webp",
  "../assets/images/sunset.webp",
];

let cardHtml;

inputButton.addEventListener("click", async function click() {
  if (inputEl.value.length != 0) {
    placeholderPicker();
    cardAnimator();
    await ProcessVideoUrl();
    await RenderCard();

    formatButton = document.getElementById("format-button");
    audioOnlyButton = document.getElementById("audioOnly-button");
    otherButton = document.getElementById("other-button");

    audioOnlyButton.addEventListener("click", async function click() {
      await ProcessAudioOnlyRequest();
    });
  }
});

async function ProcessAudioOnlyRequest() {
  const encodedUrl = encodeURIComponent(inputEl.value);
  const fullUrl = "http://localhost:5013/YtDl?videoUrl=" + encodedUrl;

  try {
    const response = await fetch(fullUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    const contentDisposition = response.headers.get("Content-Disposition");
    const fileName = ExtractFileName(contentDisposition);

    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");

    a.href = url;
    a.download = fileName;

    document.body.appendChild(a);

    a.click();

    document.body.removeChild(a);

    URL.revokeObjectURL(url);
  } catch (error) {
    console.log("Whoops, somethings is broken. " + error);
  }
}

async function ProcessVideoUrl() {
  const encodedUrl = encodeURIComponent(inputEl.value);
  const fullUrl = "http://localhost:5013/YtDl?videoUrl=" + encodedUrl;

  try {
    const response = await fetch(fullUrl, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    const obj = await response.json();

    ProcessVideoInfo(obj);
  } catch (error) {
    console.log("Whoops, somethings is broken. " + error);
  }
}

function ExtractFileName(content) {
  let fileName;
  const parts = content.split(";");
  fileName = parts[1].split("=")[1];

  return fileName;
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
