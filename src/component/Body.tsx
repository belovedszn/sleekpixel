import React, { useState, useEffect, useRef } from "react";
import ImageBox from "./ImageBox";
import UploadImage from "./UploadImage";
import InputBox from "./InputBox";
import Fonts from "./Fonts";
import Color from "./Color";
import FontSize from "./FontSize";
import LeftRight from "./LeftRight";
import UpDown from "./UpDown";
import Weight from "./Weight";
import TextSpace from "./TextSpace";
import BeforeAfter from "./BeforeAfter";
import Header from "./Header";

export const MyComponent: React.FC = () => {
  const [text, setText] = useState<string>("edit");
  const downloadImageRef = useRef<HTMLDivElement | null>(null);
  const [processedBlob, setProcessedBlob] = useState<Blob | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [defaultFont, setDefaultFont] = useState<string>("Inter");
  const [defaultColor, setDefaultColor] = useState<string>("color white");
  const [defaultSize, setDefaultSize] = useState<number>(100);
  const [defaultLeftRightPosition, setDefaultLeftRightPosition] =
    useState<number>(50);
  const [defaultUpDown, setDefaultUpDown] = useState<number>(50);
  const [defaultWeight, setDefaultWeight] = useState<number>(300);
  const [defaultTextSpace, setDefaultTextSpace] = useState<number>(0);
  const [uploadImage, setUploadImage] = useState<string>("");
  const [processedImage, setProcessedImage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [defaultBeforeAfter, setDefaultBeforeAfter] = useState<number | any>();
  const [isDirection, setIsDirection] = useState(false);
  const [isWeight, setIsWeight] = useState(false);
  const [isSpacing, setIsSpacing] = useState(false);

  useEffect(() => {
    return () => {
      [uploadImage, processedImage].forEach((url) => {
        if (url) URL.revokeObjectURL(url);
      });
    };
  }, [uploadImage, processedImage]);

  function handleDirection() {
    setIsDirection(function (prev) {
      return !prev;
    });
  }

  function handleWeight() {
    setIsWeight(function (prev) {
      return !prev;
    });
  }

  function handleSpacing() {
    setIsSpacing(function (prev) {
      return !prev;
    });
  }

  useEffect(() => {
    function handleRtDropdown(event: MouseEvent) {
      if (
        isDirection &&
        !(event.target as HTMLElement).closest(".direction-section")
      ) {
        setIsDirection(false);
      }
      if (
        isWeight &&
        !(event.target as HTMLElement).closest(".weight-section")
      ) {
        setIsWeight(false);
      }
      if (
        isSpacing &&
        !(event.target as HTMLElement).closest(".spacing-section")
      ) {
        setIsSpacing(false);
      }
    }

    document.addEventListener("click", handleRtDropdown);
    return () => document.removeEventListener("click", handleRtDropdown);
  }, [isDirection, isWeight, isSpacing]);

  const direction = isDirection ? (
    <div className="direction-dropdown absolute p-2 bg-white rounded-lg border shadow-md z-10">
      <span className="flex flex-col h-auto rounded-lg">
        <UpDown
          defaultUpDown={defaultUpDown}
          setDefaultUpDown={setDefaultUpDown}
        />
        <LeftRight
          defaultLeftRightPosition={defaultLeftRightPosition}
          setDefaultLeftRightPosition={setDefaultLeftRightPosition}
        />
      </span>
    </div>
  ) : null;

  const weight = isWeight ? (
    <div className="direction-dropdown absolute p-2 bg-white rounded-lg border shadow-md z-10">
      <span className="flex flex-col h-auto rounded-lg">
        <Weight
          defaultWeight={defaultWeight}
          setDefaultWeight={setDefaultWeight}
        />
      </span>
    </div>
  ) : null;

  const spacing = isSpacing ? (
    <div className="direction-dropdown absolute p-2 bg-white rounded-lg border shadow-md z-10">
      <span className="flex flex-col h-auto rounded-lg">
        <TextSpace
          defaultTextSpace={defaultTextSpace}
          setDefaultTextSpace={setDefaultTextSpace}
        />
      </span>
    </div>
  ) : null;

  return (
    <>
      {/* <Header canvasRef={canvasRef} /> */}
      <Header processedBlob={processedBlob} />

      <section //className="main p-4 w-full h-full px-4 flex flex-row justify-start items-start">
>
        <div className="effect-container flex flex-col items-start gap-8 w-1/12">
          <Fonts defaultFont={defaultFont} setDefaultFont={setDefaultFont} />
          <Color
            defaultColor={defaultColor}
            setDefaultColor={setDefaultColor}
          />
          <FontSize defaultSize={defaultSize} setDefaultSize={setDefaultSize} />
          <div className="direction-section text-md rounded-lg border items-center px-3 py-2">
            <div
              onClick={handleDirection}
              className="direction-toggle cursor-pointer flex gap-4 w-full justify-between text-black text-md"
            >
              Direction <i className="bi bi-arrows-move"></i>
            </div>
            <div className="relative">{direction}</div>
          </div>

          <div className="weight-section  text-md rounded-lg border items-center px-3 py-2">
            <span
              onClick={handleWeight}
              className="weight-toggle cursor-pointer flex gap-4 w-full justify-between text-black text-md"
            >
              Weight <i className="bi bi-arrows-expand-vertical"></i>
            </span>
            <div className="relative">{weight}</div>
          </div>

          <div className="spacing-section  text-md rounded-lg border items-center px-3 py-2">
            <span
              onClick={handleSpacing}
              className="spacing-toggle cursor-pointer flex gap-4 w-full justify-between text-black text-md"
            >
              Spacing <i className="bi bi-arrows-angle-expand"></i>
            </span>
            <div className="relative">{spacing}</div>
          </div>

          <BeforeAfter
            defaultBeforeAfter={defaultBeforeAfter}
            setDefaultBeforeAfter={setDefaultBeforeAfter}
          />

          <UploadImage
            uploadImage={uploadImage}
            loading={loading}
            setLoading={setLoading}
            processedImage={processedImage}
            setUploadImage={setUploadImage}
            setProcessedImage={setProcessedImage}
            setProcessedBlob={setProcessedBlob}
            processedBlob={processedBlob}
          />
        </div>
        <div className="input-area flex flex-col justify-center items-center w-5/6">
          <ImageBox
            text={text}
            defaultFont={defaultFont}
            defaultColor={defaultColor}
            defaultSize={defaultSize}
            defaultLeftRightPosition={defaultLeftRightPosition}
            defaultUpDown={defaultUpDown}
            defaultWeight={defaultWeight}
            defaultTextSpace={defaultTextSpace}
            uploadImage={uploadImage}
            processedImage={processedImage}
            loading={loading}
            downloadImageRef={downloadImageRef}
            canvaRef={canvasRef}
          />
          <InputBox text={text} setText={setText} />
        </div>
      </section>
    </>
  );
};
