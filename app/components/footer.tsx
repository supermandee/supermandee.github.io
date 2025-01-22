'use client'

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Footer() {
  const copyRSSLink = () => {
    navigator.clipboard.writeText(window.location.origin + '/rss');
    alert('RSS link is copied!');
  };

  return (
    <footer className="mb-16">
      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
      <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://docs.google.com/forms/d/e/1FAIpQLSdtlCVbqbMjcTMw23w5Sv5p44Csnz7w85mrAU3w_S_ZmdxUqg/viewform?usp=sharing"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">subscribe</p>
          </a>
        </li>
        <li>
          <button
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            onClick={copyRSSLink}
          >
            <ArrowIcon />
            <p className="ml-2 h-7">rss</p>
          </button>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.instagram.com/samar.teahouse/"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">instagram</p>
          </a>
        </li>
      </ul>
    </footer>
  )
}
