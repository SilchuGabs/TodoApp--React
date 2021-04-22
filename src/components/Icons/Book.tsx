import * as React from "react";

function SvgBook(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="#fff"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M8.893.938l-4.311 3.18L4 4v17l13 3V7L7.202 4.706l2.12-1.644L19 5v8h1V3.166L8.893.938z" />
    </svg>
  );
}

export default SvgBook;
