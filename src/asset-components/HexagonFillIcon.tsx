import { SVGProps } from "react"

const HexagonFillIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={224}
    height={250}
    fill="none"
    {...props}
  >
    <path
      fill="#30251D"
      d="M96 5.238a32 32 0 0 1 32 0l79.717 46.024a32 32 0 0 1 16 27.713v92.05a32.001 32.001 0 0 1-16 27.713L128 244.762a31.996 31.996 0 0 1-32 0l-79.717-46.024a32.002 32.002 0 0 1-16-27.713v-92.05a32 32 0 0 1 16-27.713L96 5.238Z"
    />
  </svg>
)

export { HexagonFillIcon }
