import "./RollingDigit.css";

const RollingDigit = ({ digit }) => {
  const digits = Array.from({ length: 10 }, (_, i) => i.toString());

  return (
    <div className="digit-container">
      <div
        className="digit-wrapper"
        style={{
          transform: `translateY(-${digit * 1.2}em)`,
        }}
      >
        {digits.map((d, i) => (
          <span key={i} className="digit">
            {d}
          </span>
        ))}
      </div>
    </div>
  );
};

const RollingPercentage = ({ value }) => {
  const padded = value.toFixed(2).padStart(5, "0"); // "011.44"
  const chars = padded.split("");

  return (
    <div className="rolling-percentage">
      {chars.map((char, i) =>
        /\d/.test(char) ? (
          <RollingDigit key={i} digit={parseInt(char)} />
        ) : (
          <span key={i} className="digit-symbol">
            {char}
          </span>
        )
      )}
      <span className="digit-symbol">%</span>
    </div>
  );
};

export default RollingPercentage;
