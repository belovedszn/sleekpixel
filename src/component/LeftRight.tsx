import React from "react";
//import 'bootstrap/dist/css/bootstrap.min.css';

interface Props {
  defaultLeftRightPosition: number;
  setDefaultLeftRightPosition: (
    value: number | ((prev: number) => number)
  ) => void;
}

const LeftRight: React.FC<Props> = ({
  defaultLeftRightPosition,
  setDefaultLeftRightPosition,
}) => {
  const moveLeft = () => {
    setDefaultLeftRightPosition((prev) => Math.max(prev - 10, 0));
  };

  const moveRight = () => {
    setDefaultLeftRightPosition((prev) => Math.min(prev + 10, 470));
  };

  return (
    <div className="position left-right flex flex-row effect-box">
      <div className="vertical">
        <div
          className="each-box bg-purple-500 m-4 w-12 h-12 cursor-pointer rounded-lg flex items-center justify-center"
          onClick={moveLeft}
          defaultValue={defaultLeftRightPosition}
        >
          <i className="bi bi-arrow-left-short"></i>
        </div>
      </div>

      <div className="horizontal">
        <div
          className="each-box cursor-pointer bg-purple-500 m-4 w-12 h-12 rounded-lg flex items-center justify-center"
          onClick={moveRight}
          defaultValue={defaultLeftRightPosition}
        >
          <i className="bi bi-arrow-right-short"></i>
        </div>
      </div>
    </div>
  );
};

export default LeftRight;

/**
 * <input type="range" name="textsize" id="textsize" value={defaultSize} min="12" max="48" onChange={handleTextSize} />
    <span>{textSize}</span>
 */
