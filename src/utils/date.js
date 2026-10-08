export function getToday() {
  const today = new Date();
  const year = today.getFullYear();

  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

// "2026-10-02" → "Oct 02, 2026"
// Розбираємо рядок вручну: new Date("2026-10-02") читає дату як UTC,
// і в деяких часових поясах можна отримати попередній день.
export function formatDate(
  isoDate,
  options = { month: "short", day: "2-digit", year: "numeric" },
) {
  const [year, month, day] = isoDate.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("en-US", options);
}
