import React, { useRef, useEffect } from "react";
import { ButtonLoading } from "./Btn";

interface Props {
  text: string;
  defaultFont: string;
  defaultColor: string;
  defaultSize: number;
  defaultLeftRightPosition: number;
  defaultUpDown: number;
  defaultWeight: number;
  defaultTextSpace: number;
  uploadImage: string;
  processedImage: string;
  loading: boolean;
  // setDownloadImageRef: (ref: HTMLDivElement) => void;
  downloadImageRef?: React.RefObject<HTMLDivElement>;
  canvaRef?: React.RefObject<HTMLCanvasElement>;
}

const ImageBox: React.FC<Props> = ({
  text,
  defaultFont,
  defaultColor,
  defaultSize,
  defaultLeftRightPosition,
  defaultUpDown,
  defaultWeight,
  defaultTextSpace,
  uploadImage,
  processedImage,
  loading,
  downloadImageRef,
  canvaRef,
  //setDownloadImageRef,
}) => {
  const localRef = useRef<HTMLDivElement>(null);
  const ref = downloadImageRef || localRef;

  useEffect(() => {
    const canvas = canvaRef?.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw uploaded image
    if (uploadImage) {
      const baseImage = new Image();
      baseImage.src = uploadImage;
      baseImage.onload = () => {
        ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);

        // Draw processed image if exists
        if (processedImage) {
          const overlay = new Image();
          overlay.src = processedImage;
          overlay.onload = () => {
            ctx.drawImage(overlay, 0, 0, canvas.width, canvas.height);
            drawText(ctx); // Draw text after image
          };
        } else {
          drawText(ctx);
        }
      };
    } else {
      drawText(ctx);
    }

    function drawText(ctx: CanvasRenderingContext2D) {
      ctx.font = `${defaultWeight} ${defaultSize}px ${defaultFont}`;
      ctx.fillStyle = defaultColor;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.shadowColor = "rgba(0,0,0,0.5)";
      ctx.shadowBlur = 4;

      const x = (defaultLeftRightPosition / 100) * canvas.width;
      const y = (defaultUpDown / 100) * canvas.height;

      ctx.fillText(text, x, y);
    }
  }, [
    uploadImage,
    processedImage,
    text,
    defaultFont,
    defaultColor,
    defaultSize,
    defaultLeftRightPosition,
    defaultUpDown,
    defaultWeight,
    defaultTextSpace,
    canvaRef,
  ]);
  return (
    <div
      // ref={downloadImageRef}
      ref={ref}
      className="img-box"
      style={{
        position: "relative",
        height: "600px",
        width: "800px",
        overflow: "hidden",
        backgroundColor: "#f0f0f0",
        zIndex: "100",
      }}
    >
      {loading && (
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: "white",
            fontSize: "20px",
            fontWeight: "bold",
            transition: "opacity 0.5s ease-in-out",
            opacity: 1,
            zIndex: 4,
          }}
        >
          <ButtonLoading />
        </div>
      )}
      {uploadImage && (
        <img
          src={uploadImage}
          alt="Original"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "contain",
            zIndex: 1,
          }}
        />
      )}

      <div
        className={defaultColor}
        style={{
          position: "absolute",
          fontSize: `${defaultSize}px`,
          textWrap: "nowrap",
          fontWeight: defaultWeight,
          letterSpacing: `${defaultTextSpace}px`,
          textShadow: `0 2px 4px rgba(0,0,0,0.5)`,
          left: `${defaultLeftRightPosition}%`,
          top: `${defaultUpDown}%`,
          transform: "translate(-50%, -50%)",
          fontFamily: defaultFont,
          whiteSpace: "nowrap",
          zIndex: 2,
        }}
      >
        {text}
      </div>

      {processedImage && (
        <img
          src={processedImage}
          alt="Processed"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "contain",
            zIndex: 3,
          }}
        />
      )}
      <canvas
        ref={canvaRef as React.RefObject<HTMLCanvasElement>}
        width={800}
        height={600}
        style={{ display: "none" }} // hide it from view
      />
    </div>
  );
};

export default ImageBox;
