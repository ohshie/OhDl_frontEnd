async function ProcessVideoRequest(url, videoFormat) {
  const fullUrl = "http://localhost:5013/YtDl/RequestVideo";
  try {
    const response = await fetch(fullUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-User-ID": getCookie("userID"),
      },
      body: JSON.stringify({
        "VideoUrl": url,
        "FormatCode": videoFormat,
      }),
    });

    const contentDisposition = response.headers.get("Content-Disposition");
    const fileName = ExtractFileName(contentDisposition);

    return { blob: await response.blob(), fileName: fileName };
  } catch (error) {
    console.log("Whoops, somethings is broken. " + error);
  }
}

export default ProcessVideoRequest;
