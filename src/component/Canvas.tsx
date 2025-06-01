const Canvas = ({
  downloadImageRef,
}: {
  downloadImageRef: React.RefObject<HTMLDivElement>;
}) => {
  return (
    <div ref={downloadImageRef} className="relative w-fit mx-auto">
      {/* Image and overlays go here */}
    </div>
  );
};

export default Canvas