import { SVGProps } from "react"

const HexagonNoFillicon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={210}
    height={234}
    fill="none"
    {...props}
  >
    <path
      stroke="#F7F2EF"
      strokeWidth={2}
      d="m120.5 6.104 72.789 42.024a31.001 31.001 0 0 1 15.5 26.847v84.05a31.002 31.002 0 0 1-15.5 26.847L120.5 227.896a30.998 30.998 0 0 1-31 0l-72.79-42.024a31.001 31.001 0 0 1-15.5-26.847v-84.05a31 31 0 0 1 15.5-26.847L89.5 6.104a31 31 0 0 1 31 0Z"
    />
  </svg>
)

export { HexagonNoFillicon }
