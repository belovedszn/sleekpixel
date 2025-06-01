import React from "react";
//import 'bootstrap/dist/css/bootstrap.min.css';

interface Props {
  defaultWeight: number;
  setDefaultWeight: (value: number) => void;
}

const Weight: React.FC<Props> = ({ defaultWeight, setDefaultWeight }) => {
  const handleWeight = (event: any) => {
    setDefaultWeight(event?.target.value)
  }
 /* const handleWeight = () => {
    setDefaultWeight((prev) => Math.min(prev + 2, 90));
  }; */

  return (
    <div className="weight effect-box">
      <input
        type="range"
        name="vertical"
        id="vertical"
        value={defaultWeight}
        min="100"
        max="900"
        onChange={handleWeight}
      />
    </div>
  );
};

export default Weight;

/**
 * <input type="range" name="textsize" id="textsize" value={defaultSize} min="12" max="48" onChange={handleTextSize} />
    <span>{textSize}</span>
 */
