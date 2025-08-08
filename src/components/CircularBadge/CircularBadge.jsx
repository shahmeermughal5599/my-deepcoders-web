import "./CircularBadge.css";

export function CircularBadge() {
  return (
    <div className="circular-badge">
      <div className="circular-badge-inner">
        <div className="rotating-text">
          <svg viewBox="0 0 100 100" className="svg-circle">
            <defs>
              <path
                id="circle"
                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              />
            </defs>
            <text className="circle-text">
              <textPath href="#circle" startOffset="0%">
                • Welcome To DeepCoders
              </textPath>
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
}
