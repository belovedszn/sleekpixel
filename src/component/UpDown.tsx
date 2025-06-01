import React from "react";
//import 'bootstrap/dist/css/bootstrap.min.css';

interface Props {
  defaultUpDown: number;
  setDefaultUpDown: (value: number | ((prev: number) => number)) => void;
}

const UpDown: React.FC<Props> = ({ defaultUpDown, setDefaultUpDown }) => {
  const moveUp = () => {
    setDefaultUpDown((prev) => Math.max(prev - 10, 0));
  };

  const moveDown = () => {
    setDefaultUpDown((prev) => Math.min(prev + 10, 470));
  };

  return (
    <div className="position up-down flex flex-row effect-box" defaultValue={defaultUpDown}>
      <div className="horizontal">
        <div className="each-box bg-purple-500 m-4 w-12 h-12 cursor-pointer rounded-lg flex items-center justify-center" onClick={moveUp}>
        <i className="bi bi-arrow-up-short"></i>
        </div>
      </div>

      <div className="vertical">
        <div className="each-box bg-purple-500 cursor-pointer m-4 w-12 h-12 rounded-lg flex items-center justify-center" onClick={moveDown}>
        <i className="bi bi-arrow-down-short"></i>
        </div>
      </div>
    </div>
  );
};

export default UpDown;

/**
 * <input type="range" name="textsize" id="textsize" value={defaultSize} min="12" max="48" onChange={handleTextSize} />
    <span>{textSize}</span>
 */
