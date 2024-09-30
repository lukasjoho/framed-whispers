import React from "react";

const Over = () => {
  return (
    <div style={{ width: "600px", margin: "0 auto" }}>
      <svg width="600" height="300">
        <defs>
          {/* Adjusted clipPath to expand symmetrically from the center */}
          <clipPath id="overlapClip">
            <rect x="300" y="50" width="0" height="200">
              <animate
                attributeName="width"
                from="0"
                to="100"
                dur="1.5s"
                begin="1.5s"
                fill="freeze"
              />
              <animate
                attributeName="x"
                from="300"
                to="250"
                dur="1.5s"
                begin="1.5s"
                fill="freeze"
              />
            </rect>
          </clipPath>
        </defs>

        {/* Left Circle */}
        <circle
          cx="150"
          cy="150"
          r="100"
          fill="none"
          stroke="black"
          strokeWidth="2"
        >
          <animate
            attributeName="cx"
            from="150"
            to="250"
            dur="3s"
            fill="freeze"
          />
        </circle>
        <text x="150" y="150" textAnchor="middle" alignmentBaseline="middle">
          Qualitative
          <animate
            attributeName="x"
            from="150"
            to="250"
            dur="3s"
            fill="freeze"
          />
        </text>

        {/* Right Circle */}
        <circle
          cx="450"
          cy="150"
          r="100"
          fill="none"
          stroke="black"
          strokeWidth="2"
        >
          <animate
            attributeName="cx"
            from="450"
            to="350"
            dur="3s"
            fill="freeze"
          />
        </circle>
        <text
          x="450"
          y="150"
          textAnchor="middle"
          alignmentBaseline="middle"
          clipPath="url(#overlapClip)"
          fill="green"
        >
          Quantitative
          <animate
            attributeName="x"
            from="450"
            to="350"
            dur="3s"
            fill="freeze"
          />
        </text>

        {/* Overlapping Text */}
        <text
          x="300"
          y="150"
          textAnchor="middle"
          alignmentBaseline="middle"
          clipPath="url(#overlapClip)"
          fill="red"
        >
          Rich insight
        </text>
      </svg>
    </div>
  );
};

export default Over;
