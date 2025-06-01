import React from "react";
//import 'bootstrap/dist/css/bootstrap.min.css';

interface Props {
  defaultTextSpace: number;
  setDefaultTextSpace: (value: number) => void;
}

const TextSpace: React.FC<Props> = ({ defaultTextSpace, setDefaultTextSpace }) => {
  const handleTextSpace = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDefaultTextSpace(Number(event?.target.value))
  }
 /* const handleWeight = () => {
    setDefaultWeight((prev) => Math.min(prev + 2, 90));
  }; */

  return (
    <div className="weight effect-box">
      <input
        type="range"
        name="textspacing"
        id="textspacing"
        value={defaultTextSpace}
        min="0"
        max="20"
        step="1"
        onChange={handleTextSpace}
      />
    </div>
  );
};

export default TextSpace;

/**
 * <input type="range" name="textsize" id="textsize" value={defaultSize} min="12" max="48" onChange={handleTextSize} />
    <span>{textSize}</span>
 */
