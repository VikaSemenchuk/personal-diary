export function getToday() {
  const today = new Date();
  const year = today.getFullYear();

  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export function formatDate(
  isoDate,
  options = { month: "short", day: "2-digit", year: "numeric" },
) {
  const [year, month, day] = isoDate.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("de-DE", options);
}

export function getTodayLabel() {
  return formatDate(getToday(), {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
}
