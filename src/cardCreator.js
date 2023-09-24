let buttonBgColor;

function createHtml(videoInfo) {
  console.log(videoInfo);

  const buttonsDiv = CreateMainButtonsDiv(videoInfo.Formats);
  const extraButtonsDiv = CreateExtraButtonsDiv();
  const videoNameP = CreateVideoName(videoInfo.VideoName);
  const imageImg = CreateImg(videoInfo.Thumbnail);

  let card = `<div
  id="card-div"
  class="flex h-64 w-full lg:w-1/2 flex-row overflow-hidden justify-between border-4 bg-green-600 border-black gap-4 shadow-[5px_5px_0px_0px_rgba(0,0,0)]"
>
        ${imageImg}
        <div class="flex flex-col leading-normal gap-2 p-4 w-1/2">
            ${videoNameP}
            ${buttonsDiv}
            ${extraButtonsDiv}
        </div>
    </div>`;

  const cleanedCard = DOMPurify.sanitize(card);

  return cleanedCard;
}

function CreateImg(thumbnail) {
  return `<img
    class="object-cover object-left w-1/2"
    loading="lazy"
    decoding="async"
    src="${thumbnail}"
  />`;
}

function CreateVideoName(videoName) {
  return `<p class="text-lg font-bold overflow-visible text-ellipsis h-1/4">
    ${videoName}
  </p>`;
}

function CreateMainButtonsDiv(Formats) {
  let buttons = CreateButtons(Formats);

  let baseButtons = [];
  let numberOfBaseButtons = 3;

  if (buttons.length <= 3) numberOfBaseButtons = buttons.length;

  for (let i = 0; i < numberOfBaseButtons; i++) {
    baseButtons.push(buttons[i]);
  }

  return `<div class="flex flex-row gap-2 justify-evenly font-semibold">
                    ${baseButtons.reverse().join("")}
                    </div>`;
}

function CreateButtons(Formats) {
  let buttons = [];

  for (let i = Formats.length - 1; i >= 0; i--) {
    if (Formats[i].webmOnly) buttonBgColor = "bg-red-500";
    else if (Formats[i].oneFile) buttonBgColor = "bg-green-400";
    else buttonBgColor = "bg-yellow-400";

    let buttonHtml = `<button data-videoCode="${Formats[i].formatCode}"
          style="transition: 300ms; transition-timing-function: ease"
          class="p-4 text-center flex-grow ${buttonBgColor} border-2 border-black hover:shadow-[4px_4px_0px_0px_#f6e05e,8px_8px_0px_0px_#f6ad55]"
        >
          ${Formats[i].size}
          <p class="text-xs font-light">${Formats[i].height}p@${Formats[i].frameRate}</p>
        </button>`;

    buttons.push(buttonHtml);
  }

  return buttons;
}

function CreateExtraButtonsDiv() {
  return `<div class="flex flex-row gap-2 justify-evenly px-6 font-semibold">
    <button data-videoCode="audioOnly"
    style="transition: 300ms; transition-timing-function: ease"
    class="p-2 text-center flex-grow bg-yellow-500 border-2 border-black hover:shadow-[4px_4px_0px_0px_#f6e05e,8px_8px_0px_0px_#f6ad55]"
  >
    Get audio only
  </button>
  <button
    style="transition: 300ms; transition-timing-function: ease"
    class="p-2 text-center flex-grow bg-blue-500 border-2 border-black hover:shadow-[4px_4px_0px_0px_#f6e05e,8px_8px_0px_0px_#f6ad55]"
  >
    See other <br />options
  </button>
    </div>`;
}

export default createHtml;
