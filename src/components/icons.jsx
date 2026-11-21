export function BrandMark() {
  return (
    <svg fill="none" aria-hidden viewBox="0 0 40 40">
      <rect x="8.5" y="8.5" width="23" height="16" rx="4" fill="#fff" />
      <rect x="18.3" y="24" width="3.4" height="4.3" fill="#fff" />
      <rect x="14" y="28" width="12" height="2.8" rx="1.4" fill="#fff" />
      <path
        d="M11.5 16.6H15L17 12.7 19.9 20.3 22 16.6H28"
        stroke="#D9A648"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export function PinIcon() {
  return (
    <svg fill="none" viewBox="0 0 24 24">
      <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
export function MenuIcon() {
  return (
    <svg fill="none" viewBox="0 0 24 24">
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
export function ValueIcon({ icon }) {
  const s = {
    location: (
      <>
        <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    shield: (
      <>
        <path d="M12 3l7 3v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z" />
        <path d="M9 12l2 2 4-4" />
      </>
    ),
    check: <path d="M20 6 9 17l-5-5" />,
    heart: <path d="M12 20s-7-4.6-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.4-7 10-7 10z" />,
  };
  return (
    <svg fill="none" viewBox="0 0 24 24">
      <g
        stroke="currentColor"
        strokeWidth={icon === "check" ? "2.6" : "2"}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {s[icon]}
      </g>
    </svg>
  );
}
export function ArrowRightIcon() {
  return (
    <svg fill="none" viewBox="0 0 24 24">
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export function PlayIcon() {
  return (
    <svg fill="none" aria-hidden viewBox="0 0 24 24">
      <path d="M8 5.5v13l11-6.5-11-6.5Z" fill="currentColor" />
    </svg>
  );
}
export function ChevronIcon() {
  return (
    <svg fill="none" viewBox="0 0 24 24">
      <path
        d="m6 9 6 6 6-6"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export function MailIcon() {
  return (
    <svg fill="none" viewBox="0 0 24 24">
      <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="2" />
      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
export function PhoneIcon() {
  return (
    <svg fill="none" viewBox="0 0 24 24">
      <path
        d="M6 3h3l2 5-2.5 1.5a11 11 0 0 0 5 5L16 12l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 4 6a2 2 0 0 1 2-3z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export function TickIcon() {
  return (
    <svg fill="none" viewBox="0 0 24 24">
      <path
        d="M20 6 9 17l-5-5"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export function TickIcon2() {
  return (
    <svg fill="none" viewBox="0 0 24 24">
      <path
        d="M20 6 9 17l-5-5"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export function MinusIcon() {
  return (
    <svg fill="none" viewBox="0 0 24 24">
      <path d="M6 12h12" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}
export function PlayIcon2() {
  return (
    <svg fill="none" aria-hidden viewBox="0 0 24 24">
      <path d="M8 5.5v13l11-6.5-11-6.5Z" fill="currentColor" />
    </svg>
  );
}
export function CrossIcon() {
  return (
    <svg fill="none" viewBox="0 0 24 24">
      <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}
export function ChartIcon() {
  return (
    <svg fill="none" viewBox="0 0 24 24">
      <path d="M4 4v16h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M8 14v3M12 10v7M16 6v11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
export function BoxIcon() {
  return (
    <svg fill="none" viewBox="0 0 24 24">
      <path
        d="M4 8l8-4 8 4-8 4-8-4zM4 8v8l8 4 8-4V8M12 12v8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export function ReceiptIcon() {
  return (
    <svg fill="none" viewBox="0 0 24 24">
      <path
        d="M6 3h12v18l-2.2-1.4L13.6 21 12 19.6 10.4 21l-2.2-1.4L6 21V3z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M9 8h6M9 12h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
export function ZapIcon() {
  return (
    <svg fill="none" viewBox="0 0 24 24">
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}
export function TruckIcon() {
  return (
    <svg fill="none" viewBox="0 0 24 24">
      <path d="M3 6h11v9H3zM14 9h4l3 3v3h-7z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <circle cx="7" cy="18" r="1.8" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="18" r="1.8" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
export function HospitalIcon() {
  return (
    <svg fill="none" viewBox="0 0 24 24">
      <path d="M5 21V7l7-4 7 4v14" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M12 8v5M9.5 10.5h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M9 21v-4h6v4" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
export function ReceiptIcon2() {
  return (
    <svg fill="none" viewBox="0 0 24 24">
      <path
        d="M6 3h12v18l-2.2-1.4L13.6 21 12 19.6 10.4 21l-2.2-1.4L6 21V3z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M9 8h6M9 12h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
export function StoreIcon() {
  return (
    <svg fill="none" viewBox="0 0 24 24">
      <path
        d="M4 9h16v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M3 9l1.5-5h15L21 9M3 9c0 1.7 1.3 3 3 3s3-1.3 3-3c0 1.7 1.3 3 3 3s3-1.3 3-3c0 1.7 1.3 3 3 3s3-1.3 3-3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export function UsersIcon() {
  return (
    <svg fill="none" viewBox="0 0 24 24">
      <circle cx="9" cy="8" r="3.2" stroke="currentColor" strokeWidth="2" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M16 5.2A3.2 3.2 0 0 1 18 11M17 14.4c2.3.6 4 2.7 4 5.1"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
export function ChartIcon2() {
  return (
    <svg fill="none" viewBox="0 0 24 24">
      <path d="M4 4v16h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M8 14v3M12 10v7M16 6v11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
export function PlusIcon() {
  return (
    <svg fill="none" viewBox="0 0 24 24">
      <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}
export function ChartIcon3() {
  return (
    <svg fill="none" viewBox="0 0 24 24">
      <path d="M4 4v16h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M8 14v3M12 10v7M16 6v11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
export function TickIcon3() {
  return (
    <svg fill="none" viewBox="0 0 24 24">
      <path
        d="M20 6 9 17l-5-5"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export function ShieldCheckIcon() {
  return (
    <svg fill="none" viewBox="0 0 24 24">
      <path
        d="M12 3l7 3v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M9 12l2 2 4-4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export function TruckIcon2() {
  return (
    <svg fill="none" viewBox="0 0 24 24">
      <path d="M3 6h11v9H3zM14 9h4l3 3v3h-7z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <circle cx="7" cy="18" r="1.8" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="18" r="1.8" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
export function WalletIcon() {
  return (
    <svg fill="none" viewBox="0 0 24 24">
      <rect x="3" y="6" width="18" height="13" rx="2.5" stroke="currentColor" strokeWidth="2" />
      <path d="M16 12h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M3 9h13" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
export function StoreIcon2() {
  return (
    <svg fill="none" viewBox="0 0 24 24">
      <path d="M4 9h16v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9z" stroke="currentColor" strokeWidth="2" />
      <path
        d="M3 9l1.5-5h15L21 9M3 9c0 1.7 1.3 3 3 3s3-1.3 3-3c0 1.7 1.3 3 3 3s3-1.3 3-3c0 1.7 1.3 3 3 3s3-1.3 3-3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export function ArrowRightIcon2() {
  return (
    <svg fill="none" viewBox="0 0 24 24">
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export function StarIcon() {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.8 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8L12 2z" />
    </svg>
  );
}
export function PlayIcon3() {
  return (
    <svg fill="none" aria-hidden viewBox="0 0 24 24">
      <path d="M8 5.5v13l11-6.5-11-6.5Z" fill="currentColor" />
    </svg>
  );
}
export function ScanIcon() {
  return (
    <svg fill="none" viewBox="0 0 24 24">
      <path
        d="M4 8V5a1 1 0 0 1 1-1h3M20 8V5a1 1 0 0 0-1-1h-3M4 16v3a1 1 0 0 0 1 1h3M20 16v3a1 1 0 0 1-1 1h-3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M7 12h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
export function BoxIcon2() {
  return (
    <svg fill="none" viewBox="0 0 24 24">
      <path
        d="M4 8l8-4 8 4-8 4-8-4zM4 8v8l8 4 8-4V8M12 12v8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export function FileCheckIcon() {
  return (
    <svg fill="none" viewBox="0 0 24 24">
      <path d="M6 3h9l5 5v13H6zM15 3v5h5" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path
        d="M9 13l2 2 4-4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export function BagIcon() {
  return (
    <svg fill="none" viewBox="0 0 24 24">
      <path d="M6 8h12l-1 12H7L6 8z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
export function RefreshIcon() {
  return (
    <svg fill="none" viewBox="0 0 24 24">
      <path
        d="M20 12a8 8 0 1 1-3.5-6.6M20 5v4h-4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export function LayersIcon() {
  return (
    <svg fill="none" viewBox="0 0 24 24">
      <path
        d="M12 4l8 4-8 4-8-4 8-4zM4 12l8 4 8-4M4 16l8 4 8-4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export function ScooterIcon() {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      viewBox="0 0 24 24"
    >
      <circle cx="5.5" cy="17.5" r="2.6" />
      <circle cx="18" cy="17.5" r="2.6" />
      <path d="M8.1 17.5H12l3.6-7H18" />
      <path d="M15.6 10.5l1.9 4.6" />
      <path d="M17.2 10.5l1.4-1.6" />
      <path d="M8.1 17.5 7 12.5h3.4" />
      <rect x="2.6" y="7.2" width="5.6" height="5.3" rx="0.7" />
      <path d="M2.6 9.7h5.6" />
    </svg>
  );
}
export function ClockIcon() {
  return (
    <svg fill="none" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <path
        d="M12 8v4l3 2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export function ShieldCheckIcon2() {
  return (
    <svg fill="none" viewBox="0 0 24 24">
      <path
        d="M12 3l7 3v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M9 12l2 2 4-4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
