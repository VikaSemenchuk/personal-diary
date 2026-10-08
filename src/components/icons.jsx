// Лінійні іконки 24×24. Розмір задається класом (size-4, size-5),
// колір береться з тексту батька (currentColor).
const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

export const PlusIcon = ({ className = "size-5" }) => (
  <svg {...base} className={className}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export const XIcon = ({ className = "size-5" }) => (
  <svg {...base} className={className}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);

export const CalendarIcon = ({ className = "size-3.5" }) => (
  <svg {...base} className={className}>
    <rect x="3" y="5" width="18" height="16" rx="3" />
    <path d="M8 3v4M16 3v4M3 10h18" />
  </svg>
);

export const TrashIcon = ({ className = "size-4" }) => (
  <svg {...base} className={className}>
    <path d="M4 7h16M10 11v6M14 11v6M6 7l1 12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-12M9 7V4h6v3" />
  </svg>
);
