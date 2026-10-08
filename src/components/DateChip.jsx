import { CalendarIcon } from "./icons";
import { formatDate, getToday } from "../utils/date";

// Чип дати. Сьогоднішній запис — зелений і з написом "Today".
const DateChip = ({ date, long = false }) => {
  const isToday = date === getToday();

  const label = isToday
    ? "Today"
    : long
      ? formatDate(date, { weekday: "long", month: "short", day: "2-digit", year: "numeric" })
      : formatDate(date);

  const colors = isToday
    ? "bg-secondary-cust-soft text-secondary-cust"
    : "bg-accent-cust-soft text-accent-cust-text";

  return (
    <time
      dateTime={date}
      className={`inline-flex items-center gap-1 self-start rounded-full px-2.5 py-1 text-overline font-semibold uppercase ${colors}`}
    >
      <CalendarIcon />
      {label}
    </time>
  );
};

export default DateChip;
