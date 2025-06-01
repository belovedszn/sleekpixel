import { removeBackground } from "@imgly/background-removal";

interface Props {
  uploadImage: string;
  processedImage: string;
  loading: boolean;
  processedBlob: Blob | null;
  setUploadImage: (url: string) => void;
  setProcessedImage: (url: string) => void;
  setLoading: (status: boolean) => void;
  setProcessedBlob: (blob: Blob) => void;
}

const UploadImage: React.FC<Props> = ({
  setUploadImage,
  setProcessedImage,
  setLoading,
  setProcessedBlob,
}) => {
  // const [processing, setProcessing] = useState<boolean>(false);

  const handleUploadImage = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files?.[0];
    if (!files) return;

    setLoading(true);

    try {
      const originalURL = URL.createObjectURL(files);
      setUploadImage(originalURL);

      const blob = await removeBackground(originalURL, {
        output: {
          format: "image/png",
          quality: 0.8,
        },
      });
      setProcessedBlob(blob);
      const processedURL = URL.createObjectURL(blob);
      setProcessedImage(processedURL);
    } catch (error) {
      console.error("Error during processing:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="upload effect-box">
      <label className="border rounded-lg w-32 text-md text-purple-500 hover:bg-purple-400 hover:text-white cursor-pointer inline-block">
        <span className="flex justify-center items-center">Upload Image</span>
        <input
          type="file"
          accept="image/*"
          onChange={handleUploadImage}
          style={{ visibility: "hidden" }}
        />
      </label>
    </div>
  );
};

export default UploadImage; 