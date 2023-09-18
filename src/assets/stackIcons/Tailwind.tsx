interface Props {
  className?: string
}

export const Tailwind = ({ className }: Props) => {
  return (
    <div className={className}>
      <span
        className={'icons__span animate__animated animate__fadeIn'}
      >
        TailwindCss
      </span>
      <svg
        className="icons__icon"
        width="45"
        height="45"
        viewBox="0 0 45 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_313_1298)">
          <rect
            x="0.5"
            y="0.5"
            width="44"
            height="44"
            rx="0.5"
            stroke="#C778DD"
          />
          <path d="M120 44.905h80v80h-80zm40 160h80v80h-80z" />
        </g>
        <defs>
          <clipPath id="clip0_313_1298">
            <rect width="45" height="45" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  )
}
