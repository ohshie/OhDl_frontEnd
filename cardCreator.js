function createHtml(videoInfo){
    console.log(videoInfo);
    
    let amountOfFormats = videoInfo.Formats.length;

    var doc = document;

    let largeCard = videoInfo.Formats[amountOfFormats-1];
    let medCard = videoInfo.Formats[amountOfFormats-2];
    let smallCard = videoInfo.Formats[amountOfFormats-3];
}

export default createHtml;