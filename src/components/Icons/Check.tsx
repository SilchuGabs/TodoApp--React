import * as React from "react";

function SvgCheck(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      {...props}
    >
      <path d="M8.294 16.998c-.435 0-.847-.203-1.111-.553L3.61 11.724a1.392 1.392 0 01.27-1.951 1.392 1.392 0 011.953.27l2.351 3.104 5.911-9.492c.407-.652 1.267-.852 1.921-.445s.854 1.266.446 1.92L9.478 16.34a1.39 1.39 0 01-1.12.656c-.022.002-.042.002-.064.002z" />
    </svg>
  );
}

export default SvgCheck;
