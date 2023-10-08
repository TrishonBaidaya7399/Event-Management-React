import { useState, useEffect } from 'react';

const Gallery = () => {
  const [galleryData, setGalleryData] = useState([]);
  const [visibleCount, setVisibleCount] = useState(8); // Number of initially visible cards
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    // Load data from the JSON file
    fetch('/Data/gallery.json')
      .then((response) => response.json())
      .then((data) => setGalleryData(data))
      .catch((error) => console.error('Error loading gallery data:', error));
  }, []);

  const toggleShowMore = () => {
    // Toggle between showing more and fewer cards
    setShowMore(!showMore);

    // Update the visible count based on the toggle state
    if (!showMore) {
      setVisibleCount(galleryData.length);
    } else {
      setVisibleCount(8);
    }
  };

  return (
    <div className="lg:mx-[100px] my-12">
      <h1 className="text-4xl font-bold text-pink-600 text-center">Our Memories</h1>
      <p className="text-center text-xl font-semibold md:mb-12 mt-6">
        Step into a world of visual delight with our captivating gallery
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {galleryData.slice(0, visibleCount).map((item) => (
          <div key={item.id} className="relative h-[200px]">
            <img
              src={item.img}
              className="w-full h-[200px] object-cover duration-300 border-2 border-pink-600 rounded-md"
              alt=""
            />
            <div className="absolute inset-0 bg-pink-600 opacity-0 hover:opacity-60 transition-opacity duration-300 flex flex-col justify-center items-center text-white">
              <h2 className="text-xl text-center font-semibold">{item.title}</h2>
              <p className="text-sm text-center">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <button
          className="text-pink-600 text-xl hover:text-white hover:bg-pink-600 text-lg font-semibold rounded-lg px-4 py-1 border-2 border-pink-600"
          onClick={toggleShowMore}
        >
          {showMore ? 'See Less' : 'See More'}
        </button>
      </div>
    </div>
  );
};

export default Gallery;
