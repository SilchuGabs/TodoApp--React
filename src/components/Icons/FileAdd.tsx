import * as React from "react";

function SvgFileAdd(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M8 7v2h6V7H8zm0 4h9v-1H8v1zm9 1H9v1h8v-1zm0 3v-1h-7v1h7zm-9-1H5v3H2v3h3v3h3v-3h3v-3H8v-3zM4 2v10h2V4h13v17h-6.643l-1 2H21V2H4z" />
    </svg>
  );
}

export default SvgFileAdd;
