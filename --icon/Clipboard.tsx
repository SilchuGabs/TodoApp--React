import * as React from "react";

function SvgClipboard(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
      <path d="M2 0v24h20V0H2zm18 22H4V2h16v20zM19 4h-3V3H8v1H5v17h14V4zM9 4h6v1H9V4zm9 16H6V5h2v1h8V5h2v15zM7 9h9V7H7v2zm0 2h9v-1H7v1zm0 2h9v-1H7v1zm0 2h9v-1H7v1zm0 2h4v-1H7v1z" />
    </svg>
  );
}

export default SvgClipboard;
