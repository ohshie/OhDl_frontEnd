async function ProcessAudioOnlyRequest(url) {
  const fullUrl = "http://localhost:5013/YtDl/RequestAudioOnly";
  const payload = JSON.stringify({"videoUrl": url});

  try {
    const response = await fetch(fullUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-User-ID": getCookie("userID"),
      },
      body: payload
    });

    const contentDisposition = response.headers.get("Content-Disposition");
    const fileName = ExtractFileName(contentDisposition);

    return { blob: await response.blob(), fileName: fileName };
  } catch (error) {
    console.log("Whoops, somethings is broken. " + error);
  }
}

export default ProcessAudioOnlyRequest;
