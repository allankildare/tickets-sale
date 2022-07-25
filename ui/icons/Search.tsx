import * as React from "react";

function Search(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 21 21" fill="none" {...props}>
      <path
        d="M16.205 3.997H4.538c-.92 0-1.666.747-1.666 1.667v11.667c0 .92.746 1.666 1.666 1.666h11.667c.92 0 1.667-.746 1.667-1.666V5.664c0-.92-.746-1.667-1.667-1.667zM13.705 2.33v3.334M7.039 2.33v3.334M2.872 8.997h15"
        stroke="#0A2156"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const MemoSearch = React.memo(Search);
export default MemoSearch;
