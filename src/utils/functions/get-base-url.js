export function getBasePath(url) {
  const segments = url.split("/").filter(Boolean);
  return segments[0] || "";
}
