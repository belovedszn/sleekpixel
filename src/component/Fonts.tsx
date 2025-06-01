import React, { useEffect, useState } from "react";
//import 'bootstrap/dist/css/bootstrap.min.css';
import WebFont from "webfontloader";
import { font } from "../fonts";

interface Props {
  defaultFont: string;
  setDefaultFont: (value: string) => void;
}

const Fonts: React.FC<Props> = ({ defaultFont, setDefaultFont }) => {
  const [dropdown, setDropdown] = useState<boolean>(false);

  useEffect(function () {
    const fontsFamily = font.map((fonts) => fonts.className.split(",")[0]);
    WebFont.load({
      google: {
        families: fontsFamily,
      },
    });
  }, []);

  const loadFont = (fontName: string) => {
    WebFont.load({
      google: {
        // families: [fontName],
        families: [fontName.split(",")[0]],
      },
    });
  };

  function handleDropdown() {
    setDropdown(function (prev) {
      return !prev;
    });
  }

  useEffect(() => {
    function handleRtDropdown(event: MouseEvent) {
      if (
        dropdown &&
        !(event.target as HTMLElement).closest(".font-box, .dropdown")
      ) {
        setDropdown(false);
      }
    }

    document.addEventListener("click", handleRtDropdown);
    return () => document.removeEventListener("click", handleRtDropdown);
  }, [dropdown]);

  const handleFont = (font: { name: string; className: string }) => {
    loadFont(font.className);
    setDefaultFont(font.name);
    setDropdown(false);
  };

  return (
    <div className="font-family effect-box relative">
      <label>
        <div
          className="font-box w-28 p-2 border rounded-lg bg-white cursor-pointer flex justify-between items-center relative"
          onClick={handleDropdown}
        >
          <div style={{ fontFamily: defaultFont }}>
            {/*defaultFont.split(",")[0]*/}
            {font.find((fonts) => fonts.className === defaultFont)?.name}
          </div>
          <i className="bi bi-chevron-expand expand"></i>
        </div>
        {dropdown && (
          <ul className="dropdown w-52 bg-white rounded-lg border mt-4 shadow-md max-h-80 overflow-y-auto z-10">
            {font.map((fonts, index) => (
              <li
                key={index}
                className="px-2 py-3 list-none transition ease-in-out cursor-pointer"
                onClick={() => {
                  handleFont(fonts);
                }}
                style={{ fontFamily: fonts.className }}
              >
                {fonts.name}
              </li>
            ))}
          </ul>
        )}
      </label>
    </div>
  );
};

export default Fonts;

/**
 * setDefaultFont(fonts);
                  setDropdown(false)
 */
