import { useState, useEffect } from "react";
import { downloadImageFromCanvas } from "@/download";

const DownloadBtn = ({ myBlob }: { myBlob: Blob }) => {
  const [blobUrl, setBlobUrl] = useState<string | null>(null);

  useEffect(() => {
    if (myBlob) {
      const url = URL.createObjectURL(myBlob);
      setBlobUrl(url);

      return () => URL.revokeObjectURL(url); // Cleanup
    }
  }, [myBlob]);

  const handleDownload = () => {
    if (!blobUrl) {
      console.error("No valid blob URL found");
      return;
    }

    const a = document.createElement("a");
    a.href = blobUrl;
    a.download = "sleekpixel.png";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div>
      {blobUrl && <img src={blobUrl} alt="Preview" className="hidden" />}
      <button onClick={handleDownload} className="px-4 py-2 bg-blue-500 text-white rounded">
        Download
      </button>
    </div>
  );
};

export default DownloadBtn; 