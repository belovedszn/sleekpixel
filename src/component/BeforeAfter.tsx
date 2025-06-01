import React, { useState } from "react";
//import 'bootstrap/dist/css/bootstrap.min.css';

interface Props {
  defaultBeforeAfter: number;
  setDefaultBeforeAfter: (value: number) => void;
}

const BeforeAfter: React.FC<Props> = ({ defaultBeforeAfter }) => {
  const [behindText, setBehindText] = useState<number>();
  const [aboveText, setAboveText] = useState<number>();

  function handleBehindText(event: React.MouseEvent<HTMLDivElement>) {
    const value = event.currentTarget.getAttribute("data-value");
    setBehindText(Number(value));
  }

  function handleAfterText(event: React.MouseEvent<HTMLDivElement>) {
    const value = event.currentTarget.getAttribute("data-value");
    setAboveText(Number(value));
  }

  /* function handleBehindText(event: React.MouseEvent<HTMLDivElement>) {
  setBehindText(defaultBeforeAfter);
}

function handleAfterText(event: React.MouseEvent<HTMLDivElement>) {
  setAboveText(defaultBeforeAfter);
} */

  return (
    <div className="before-after effect-box">
      <div
        className="behind-text"
        onClick={handleBehindText}
        defaultValue={defaultBeforeAfter}
        data-value={defaultBeforeAfter}
      >
        {behindText}
      </div>
      <div
        className="after-text"
        onClick={handleAfterText}
        defaultValue={defaultBeforeAfter}
      >
        {aboveText}
      </div>
    </div>
  );
};

export default BeforeAfter;

/**
 * <input type="range" name="textsize" id="textsize" value={defaultSize} min="12" max="48" onChange={handleTextSize} />
    <span>{textSize}</span>
 */
