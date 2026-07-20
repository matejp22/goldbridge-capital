export type IconName =
  | "shield"
  | "network"
  | "structure"
  | "review"
  | "family"
  | "entrepreneur"
  | "investor"
  | "corporate"
  | "arrow"
  | "gold"
  | "document"
  | "custody"
  | "capital"
  | "check";

type IconProps = {
  name: IconName;
  className?: string;
};

export default function Icon({
  name,
  className = "",
}: IconProps) {
  const commonProps = {
    className,
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": true,
  };

  switch (name) {
    case "shield":
      return (
        <svg {...commonProps}>
          <path
            d="M12 3L19 6V11.2C19 15.7 16.2 19.6 12 21C7.8 19.6 5 15.7 5 11.2V6L12 3Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M9.25 12L11.15 13.9L15.25 9.8"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "network":
      return (
        <svg {...commonProps}>
          <circle
            cx="12"
            cy="5"
            r="2.25"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <circle
            cx="5"
            cy="18"
            r="2.25"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <circle
            cx="19"
            cy="18"
            r="2.25"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M10.9 6.95L6.15 16.05M13.1 6.95L17.85 16.05M7.25 18H16.75"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );

    case "structure":
      return (
        <svg {...commonProps}>
          <rect
            x="4"
            y="4"
            width="16"
            height="5"
            rx="1"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <rect
            x="4"
            y="15"
            width="6"
            height="5"
            rx="1"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <rect
            x="14"
            y="15"
            width="6"
            height="5"
            rx="1"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M12 9V12M7 12H17M7 12V15M17 12V15"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );

    case "review":
      return (
        <svg {...commonProps}>
          <path
            d="M7 3.75H14.5L19 8.25V20.25H7V3.75Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M14.5 3.75V8.25H19"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M10 12H16M10 15.5H14"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M4.5 7.5V20.25H15.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );

    case "family":
      return (
        <svg {...commonProps}>
          <circle
            cx="9"
            cy="7"
            r="2.5"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <circle
            cx="16.5"
            cy="8.5"
            r="2"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M4.5 19C4.5 15.7 6.4 13.5 9 13.5C11.6 13.5 13.5 15.7 13.5 19"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M14 14.5C14.75 13.75 15.6 13.4 16.5 13.4C18.5 13.4 20 15.1 20 17.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );

    case "entrepreneur":
      return (
        <svg {...commonProps}>
          <rect
            x="3.5"
            y="7"
            width="17"
            height="12.5"
            rx="1.5"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M8.5 7V5.5C8.5 4.65 9.15 4 10 4H14C14.85 4 15.5 4.65 15.5 5.5V7"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M3.5 11.5C8.4 13.5 15.6 13.5 20.5 11.5"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M10.25 12.5H13.75V15H10.25V12.5Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "investor":
      return (
        <svg {...commonProps}>
          <path
            d="M4 19.5H20"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M6 16L10 12L13 14.5L19 7.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.5 7.5H19V11"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "corporate":
      return (
        <svg {...commonProps}>
          <path
            d="M6 20V4H16V20"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M16 9H20V20"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M3 20H21"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M9 7.5H13M9 11H13M9 14.5H13"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );

    case "arrow":
      return (
        <svg {...commonProps}>
          <path
            d="M5 12H19M14 7L19 12L14 17"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "gold":
      return (
        <svg {...commonProps}>
          <path
            d="M7.25 6.5H16.75L20 17.5H4L7.25 6.5Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M6.25 12H17.75M9.25 6.5L8.25 12M14.75 6.5L15.75 12"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );

    case "document":
      return (
        <svg {...commonProps}>
          <path
            d="M6 3.5H14.5L19 8V20.5H6V3.5Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M14.5 3.5V8H19M9 12H16M9 15.5H16"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );

    case "custody":
      return (
        <svg {...commonProps}>
          <rect
            x="4"
            y="5"
            width="16"
            height="14"
            rx="1.5"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <circle
            cx="12"
            cy="12"
            r="3"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M12 9V15M9 12H15M7 8H7.01M17 8H17.01"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );

    case "capital":
      return (
        <svg {...commonProps}>
          <rect
            x="3.5"
            y="6"
            width="17"
            height="12"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <circle
            cx="12"
            cy="12"
            r="2.5"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M6.5 9.5C7.35 9.5 8 8.85 8 8M17.5 14.5C16.65 14.5 16 15.15 16 16"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );

    case "check":
      return (
        <svg {...commonProps}>
          <path
            d="M5.5 12.5L9.5 16.5L18.5 7.5"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    default:
      return null;
  }
}