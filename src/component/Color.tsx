import React, { useState, useEffect } from "react";
import { color } from "../color";
//import 'bootstrap/dist/css/bootstrap.min.css';

interface Props {
  defaultColor: string;
  setDefaultColor: (value: string) => void;
}

const Color: React.FC<Props> = ({ defaultColor, setDefaultColor }) => {
  const [colorPicked, setColorPicked] = useState<string>("#ffffff");
  const [dropdown, setDropdown] = useState<boolean>(false);

  function handleDropdown() {
    setDropdown(function (prev) {
      return !prev;
    });
  }

   useEffect(() => {
      function handleRtDropdown(event: MouseEvent) {
        if (
          dropdown &&
          !(event.target as HTMLElement).closest(".color, .dropdown")
        ) {
          setDropdown(false);
        }
      }
  
      document.addEventListener("click", handleRtDropdown);
      return () => document.removeEventListener("click", handleRtDropdown);
    }, [dropdown]);

  const handleColor = (
    className: string,
    colorCode: string,
    colorsBox: string
  ) => {
    setDefaultColor(className);
    setColorPicked(colorCode);
    console.log("Selected:", colorCode);
    console.log("Selected:", colorsBox);
  };

  return (
    <section className="color effect-box relative">
      <label>
        <div
          className="color-box w-30 p-2 border rounded-lg bg-white cursor-pointer flex justify-between items-center relative"
          onClick={handleDropdown}
        >
          <div
            className={`color-code ${defaultColor} font-bold`}
            style={{ color: "#000000" }}
          >
            {
              color.find((colors) => colors.className === defaultColor)
                ?.colorCode
            }
          </div>
          <span
            className="colors absolute top-5 right-2 p-2 rounded-sm"
            style={{ backgroundColor: colorPicked }}
          >
            {
              color.find((colors) => colors.colorCode === defaultColor)
                ?.colorsBox
            }
          </span>
        </div>
        {dropdown && (
          <div className="dropdown w-60 p-2 bg-white rounded-lg border mt-4 shadow-md max-h-80 z-10">
            <div className="color-package flex flex-col h-auto rounded-lg">
              <div className="first-container flex bg-gray-300 items-center justify-between py-2 px-4 mb-3 rounded-lg">
                <span className="not py-2 px-4">
                  <i className="bi bi-palette text-xl text-black"></i>
                </span>
                <span className="active bg-white py-2 px-4 rounded-lg h-full">
                  <i className="bi bi-brush-fill"></i>
                </span>
              </div>
              <div className="second-container flex flex-initial gap-1.5 flex-wrap">
                {color.map((colors, index) => (
                  <ul key={index}>
                    <li
                      onClick={() => {
                        handleColor(
                          colors.className,
                          colors.colorCode,
                          colors.colorsBox
                        );
                      }}
                      className={`${colors.className} px-2 py-2 w-6 h-6 list-none transition ease-in-out cursor-pointer`}
                    >
                      {colors.name}
                    </li>
                  </ul>
                ))}
              </div>
            </div>
          </div>
        )}
      </label>
    </section>
  );
};

export default Color;

/**
 * <span className="color blue"></span>
                <span className="color orange"></span>
                <span className="color yellow"></span>
                <span className="color lime"></span>
                <span className="color black"></span>
                <span className="color brown"></span>
                <span className="color pink"></span>
                <span className="color red"></span>
                <span className="color chocolate"></span>
                <span className="color grey"></span>
 */

/*
        {dropdown && (
          <div className="dropdown">
            {color.map((colors) => (
              <div
                key={colors}
                onClick={() => {
                  setDefaultColor(colors);
                  setDropdown(false);
                }}
              >
                <div className="color-package">
                  <div className="first-container">
                    <span className="not">
                      <i className="bi bi-palette"></i>
                    </span>
                    <span className="active">
                      <i className="bi bi-brush-fill"></i>
                    </span>
                  </div>
                  <div className="second-container">
                    <p className="color blue"></p>
                    <p className="color orange"></p>
                    <p className="color yellow"></p>
                    <p className="color lime"></p>
                    <p className="color black"></p>
                    <p className="color brown"></p>
                    <p className="color pink"></p>
                    <p className="color red"></p>
                    <p className="color chocolate"></p>
                    <p className="color grey"></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
*/
