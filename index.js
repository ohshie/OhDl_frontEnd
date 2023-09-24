import videoInfo from "./VideoInfo.js";
import createHtml from "./cardCreator.js";

const inputEl = document.getElementById("input-el");
const inputButton = document.getElementById("input-btn");
const outputDiv = document.getElementById("output-div");

const baseFormats = [480, 720, 1080];
let foundBaseFormats = [];
let cardHtml;

inputButton.addEventListener("click", async function click() {
  if (inputEl.value.length != 0) {
    await ButtonClick();
    await RenderCard();
  }
});

async function ButtonClick() {
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

    ProcessVideoInfo(obj)
  } catch (error) {
    console.log("Whoops, somethings is broken.");
  }
}

function ProcessVideoInfo(obj){
  videoInfo.VideoName = obj.videoName;
    videoInfo.Hosting = obj.hosting;
    videoInfo.VideoDesc = obj.videoDesc;
    videoInfo.Thumbnail = obj.thumbnail;
    videoInfo.Formats = obj.formats;

    createHtml(videoInfo);
}

async function RenderCard() {
  try {
  } catch (error) {
    console.error("Error fetching template:", error);
  }
}
