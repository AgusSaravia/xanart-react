const Gallery = () => {
  return (
    <div id="Gallery" className="container mx-auto p-4 bg-black">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="/GalleryImages/foto-1-1.webp"
              alt="Ale tatuando"
              fetchPriority="low"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="/GalleryImages/foto-2-1.webp"
              alt="Ale tatuando"
              fetchPriority="low"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg "
              src="/GalleryImages/foto-3.webp"
              alt="Ale tatuando"
              fetchPriority="low"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="/GalleryImages/foto-12.webp"
              alt="Ale tatuando"
              fetchPriority="low"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="/GalleryImages/foto-6.webp"
              alt="Ale tatuando"
              fetchPriority="low"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="/GalleryImages/foto-10.webp"
              alt="Ale tatuando"
              fetchPriority="low"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="/GalleryImages/foto-4.webp"
              alt="Ale tatuando"
              fetchPriority="low"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="/GalleryImages/foto-9.webp"
              alt="Ale tatuando"
              fetchPriority="low"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="/GalleryImages/foto-5.webp"
              alt="Ale tatuando"
              fetchPriority="low"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="/GalleryImages/foto-7.webp"
              alt="Ale tatuando"
              fetchPriority="low"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const GallerySection = () => {
  return (
    <div>
      <Gallery />
    </div>
  );
};
