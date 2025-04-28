import { cn } from "@/lib/utils"

interface AvellJesterLogoProps {
  className?: string
}

export function AvellJesterLogo({ className }: AvellJesterLogoProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center font-bold text-primary bg-primary/10 rounded-md h-6 w-6 sm:h-7 sm:w-7",
        className,
      )}
      aria-label="Avell Jester Logo"
    >
      {/* Simplified jester hat icon */}
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5">
        <path
          d="M12 3C10.5 3 9.5 4 9 5C8.5 6 8 7 7 7.5C6 8 5 9 5 10.5C5 12 6 13 7 13.5C8 14 9 15 9 16.5V19C9 20.1 9.9 21 11 21H13C14.1 21 15 20.1 15 19V16.5C15 15 16 14 17 13.5C18 13 19 12 19 10.5C19 9 18 8 17 7.5C16 7 15.5 6 15 5C14.5 4 13.5 3 12 3Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 16.5C9 16.5 10 15.5 12 15.5C14 15.5 15 16.5 15 16.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="9" cy="10" r="1" fill="currentColor" />
        <circle cx="15" cy="10" r="1" fill="currentColor" />
      </svg>
    </div>
  )
}
