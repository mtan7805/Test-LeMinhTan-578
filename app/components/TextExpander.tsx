"use client";

import { useState } from "react";

function TextExpander({ children }: { children: string }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const words = children.split(" ");
  const isShort = words.length <= 10;

  const displayText = isExpanded || isShort
    ? children
    : words.slice(0, 10).join(" ") + "...";

  return (
    <span>
      {displayText}
      {!isShort && (
        <button
          className="text-primary hover:underline font-semibold ml-1 cursor-pointer focus:outline-none"
          onClick={(e) => {
            e.stopPropagation();
            setIsExpanded(!isExpanded);
          }}
        >
          {isExpanded ? " Rút gọn" : " Xem thêm"}
        </button>
      )}
    </span>
  );
}

export default TextExpander;

