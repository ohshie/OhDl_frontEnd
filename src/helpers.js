function ExtractFileName(content) {
    let fileName;
    const parts = content.split(";");
    fileName = parts[1].split("=")[1];
  
    return fileName;
  }

  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }