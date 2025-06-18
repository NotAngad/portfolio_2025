import Link from "next/link";

const DownloadCV = () => {
  return (
    <Link
      href="https://drive.google.com/file/d/1R7WqPVyAjOufn7msMkfT5XVTZnM_b7cF/view"
      download
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-12 right-12
        flex items-center
        rounded-full
        px-4 py-3
        bg-[#dee2e6]
        shadow-md hover:shadow-xl
        transition-shadow duration-300
        z-50
        space-x-2
        w-14 h-14
        md:w-auto md:h-auto
      "
      style={{ boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)" }}
      aria-label="Download CV"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7 flex-shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="#000"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 2v6h6" />
        <line x1="9" y1="12" x2="15" y2="12" strokeLinecap="round" />
        <line x1="9" y1="16" x2="15" y2="16" strokeLinecap="round" />
        <line x1="9" y1="20" x2="13" y2="20" strokeLinecap="round" />
      </svg>
      <span className="hidden md:inline-block font-semibold text-black select-none">
        Download CV
      </span>
    </Link>
  );
};

export default DownloadCV;
