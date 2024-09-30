import React from "react";

const Over2 = () => {
  return (
    <div
      style={{ width: "600px", margin: "0 auto", backgroundColor: "#1b1b1b" }}
    >
      <svg width="600" height="300">
        <defs>
          {/* ClipPath for revealing "Rich insight" text */}
          <clipPath id="overlapClip">
            <rect x="300" y="50" width="0" height="200">
              {/* Animate the rectangle to expand symmetrically */}
              <animate
                attributeName="width"
                from="0"
                to="100"
                dur="12s"
                begin="12s"
                fill="freeze"
              />
              <animate
                attributeName="x"
                from="300"
                to="250"
                dur="12s"
                begin="12s"
                fill="freeze"
              />
            </rect>
          </clipPath>

          {/* Mask for hiding circle texts in the overlapping area */}
          <mask id="textMask">
            {/* White rectangle to make texts visible */}
            <rect x="0" y="0" width="600" height="300" fill="white" />
            {/* Black rectangle to hide texts in overlapping area */}
            <rect x="300" y="50" width="0" height="200" fill="black">
              {/* Animate the rectangle to match the overlapping area */}
              <animate
                attributeName="width"
                from="0"
                to="100"
                dur="12s"
                begin="12s"
                fill="freeze"
              />
              <animate
                attributeName="x"
                from="300"
                to="250"
                dur="12s"
                begin="12s"
                fill="freeze"
              />
            </rect>
          </mask>
        </defs>

        {/* Left Circle */}
        <circle
          cx="150"
          cy="150"
          r="100"
          fill="none"
          stroke="#EAE9EA"
          strokeWidth="2"
        >
          {/* Animate circle movement */}
          <animate
            attributeName="cx"
            from="150"
            to="250"
            dur="24s"
            fill="freeze"
          />
        </circle>

        {/* Left Circle Text with Mask */}
        <text
          x="150"
          y="150"
          textAnchor="middle"
          alignmentBaseline="middle"
          mask="url(#textMask)"
          fill="#EAE9EA"
          className="font-semibold"
        >
          🗣️ Qualitative
          {/* Animate text movement */}
          <animate
            attributeName="x"
            from="150"
            to="250"
            dur="24s"
            fill="freeze"
          />
        </text>

        {/* Right Circle */}
        <circle
          cx="450"
          cy="150"
          r="100"
          fill="none"
          stroke="#EAE9EA"
          strokeWidth="2"
        >
          {/* Animate circle movement */}
          <animate
            attributeName="cx"
            from="450"
            to="350"
            dur="24s"
            fill="freeze"
          />
        </circle>

        {/* Right Circle Text with Mask */}
        <text
          x="450"
          y="150"
          textAnchor="middle"
          alignmentBaseline="middle"
          mask="url(#textMask)"
          fill="#EAE9EA"
          className="font-semibold"
        >
          Quantitative 📈
          {/* Animate text movement */}
          <animate
            attributeName="x"
            from="450"
            to="350"
            dur="24s"
            fill="freeze"
          />
        </text>

        {/* Overlapping Text */}
        <text
          x="300"
          y="140"
          textAnchor="middle"
          alignmentBaseline="middle"
          clipPath="url(#overlapClip)"
          fill="#EAE9EA"
          className="font-semibold"
        >
          Rich
        </text>
        <text
          x="300"
          y="160"
          textAnchor="middle"
          alignmentBaseline="middle"
          clipPath="url(#overlapClip)"
          fill="#EAE9EA"
          className="font-semibold"
        >
          insight
        </text>
      </svg>
    </div>
  );
};

export default Over2;
