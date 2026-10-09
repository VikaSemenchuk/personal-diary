export function capitalize(text) {
  if (!text) return "";
  return text.charAt(0).toLocaleUpperCase() + text.slice(1);
}
