/*export const downloadImageFromCanvas = (
  canvas: HTMLCanvasElement,
  fileName: string = "sleekpixel.png"
) => {
  const dataUrl = canvas.toDataURL("image/png");
  const a = document.createElement("a");
  a.href = dataUrl;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}; */

export const downloadImageFromCanvas = (
    canvas: HTMLCanvasElement,
    fileName: string = "sleekpixel.png"
  ): Promise<void> => {
    return new Promise((resolve, reject) => {
      try {
        const ctx = canvas.getContext('2d', { willReadFrequently: true });
        if (!ctx) {
          throw new Error("Could not get canvas context");
        }
  
        // More reliable way to check for empty canvas
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const pixelBuffer = new Uint32Array(imageData.data.buffer);
        const isEmpty = pixelBuffer.every(pixel => pixel === 0);
        
        if (isEmpty) {
          throw new Error("Canvas is empty, nothing to download");
        }
  
        // Create temporary canvas for reliable download
        const tempCanvas = document.createElement('canvas');
        tempCanvas.width = canvas.width;
        tempCanvas.height = canvas.height;
        const tempCtx = tempCanvas.getContext('2d');
        if (!tempCtx) {
          throw new Error("Could not create temporary canvas");
        }
  
        tempCtx.drawImage(canvas, 0, 0);
  
        tempCanvas.toBlob((blob) => {
          if (!blob) {
            reject(new Error("Failed to create image blob"));
            return;
          }
  
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = fileName;
          document.body.appendChild(a);
          a.click();
  
          // Clean up
          setTimeout(() => {
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            resolve();
          }, 100);
        }, 'image/png', 1.0);
      } catch (error) {
        reject(error);
      }
    });
  };