const Gallery = () => {
  return (
    <div id="Gallery" className="container mx-auto p-4 bg-black">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="/foto-1-1.webp"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="/foto-2-1.webp"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg "
              src="/foto-3.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="/foto-12.webp"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="/foto-6.webp"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="/foto-10.webp"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="/foto-4.webp"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="/foto-9.webp"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="/foto-5.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="/foto-7.webp"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="/foto-8.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const GallerySection = () => {
  return (
    <div className="min-w-full ">
      <Gallery />
    </div>
  );
};
