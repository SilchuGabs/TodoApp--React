import * as React from "react";

function SvgCheckmark(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 32 32"
      {...props}
    >
      <path d="M27 4L12 19l-7-7-5 5 12 12L32 9z" />
    </svg>
  );
}

export default SvgCheckmark;
