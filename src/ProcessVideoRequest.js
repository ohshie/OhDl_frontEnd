async function ProcessVideoRequest(url,videoFormat) {
  const fullUrl =
    "http://localhost:5013/YtDl/RequestVideo?videoUrl=" + url +"&formatCode=" + videoFormat;

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

    return {blob: await response.blob(),
       fileName: fileName
      }
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

export default ProcessVideoRequest;
