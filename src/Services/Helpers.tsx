export function getCookie(name: string): string {
  const value = `; ${document.cookie}`;
  const parts: string[] = value.split(`; ${name}=`);

  return parts.length === 2 ? parts.pop()!.split(";").shift()! : "";
}

export function ExtractFileName(content: string | null): string {
  let fileName;
  const parts = content!.split(";");
  fileName = parts[1].split("=")[1];

  return fileName;
}

export function Preparedownload(blob: Blob, fileName: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");

  a.href = url;
  a.download = fileName;

  document.body.appendChild(a);

  a.click();

  document.body.removeChild(a);

  URL.revokeObjectURL(url);
}
