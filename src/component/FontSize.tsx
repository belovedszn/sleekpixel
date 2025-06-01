import React from "react";
//import 'bootstrap/dist/css/bootstrap.min.css';

interface Props {
  defaultSize: number;
  setDefaultSize: (value: number | ((prev: number) => number)) => void;
}

const Fonts: React.FC<Props> = ({ defaultSize, setDefaultSize }) => {
  const handleIncreaseTextSize = () => {
    setDefaultSize((prev) => Math.min(prev + 2, 200));
  };

  const handleDecreaseTextSize = () => {
    setDefaultSize((prev) => Math.max(prev - 2, 12));
  };
  return (
    <div className="font-size effect-box">
      <td>
        <span className="quantity-container border flex items-center justify-evenly w-28 h-12 rounded-lg font-semibold select-none text-md">
          <span className="quantity">{defaultSize}</span>
          <span className="arrow grid content-center text-black cursor-pointer">
            <i
              className="bi bi-chevron-up"
              onClick={handleIncreaseTextSize}
              defaultValue={defaultSize}
            ></i>
            <i
              className="bi bi-chevron-down"
              defaultValue={defaultSize}
              onClick={handleDecreaseTextSize}
            ></i>
          </span>
        </span>
      </td>
    </div>
  );
};

export default Fonts;

/**
 * <input type="range" name="textsize" id="textsize" value={defaultSize} min="12" max="48" onChange={handleTextSize} />
    <span>{textSize}</span>
 */
