import DownloadBtn from "./DownloadBtn";

/*interface HeaderProps {
  canvasRef: React.RefObject<HTMLCanvasElement | null>;
} */

interface HeaderProps {
  processedBlob: Blob | null;
}

const Header: React.FC<HeaderProps> = ({ processedBlob }) => {
  return (
    <header>
      <nav className="p-4 border-b-1 border-gray-200">
        <div className="flex justify-between items-center">
          <div className="cursor-auto">
            <div className="font text-3xl text-red-500">
              Sleek<span>Pixel</span>
            </div>
          </div>
          <div className="flex justify-between items-center gap-4">
            {processedBlob && <DownloadBtn myBlob={processedBlob} />}
            <div className="h-8 w-8 rounded-lg border cursor-pointer flex justify-center items-center">
              <i className="bi bi-moon-fill text-xl text-neutral-800"></i>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
