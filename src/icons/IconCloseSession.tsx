import { SVGProps } from "react";

function IconCloseSession(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M20 2H8c-1.1 0-2 .9-2 2v12a2 2 0 0 0 2 2h12c1.11 0 2-.89 2-2V4a2 2 0 0 0-2-2m0 14H8V4h12zM4 6v14h14v2H4a2 2 0 0 1-2-2V6zm5.77 6.84L12.6 10L9.77 7.15l1.4-1.4L14 8.6l2.84-2.83l1.4 1.4L15.4 10l2.83 2.84l-1.4 1.4L14 11.4l-2.83 2.84z"
      />
    </svg>
  );
}

export default IconCloseSession;
