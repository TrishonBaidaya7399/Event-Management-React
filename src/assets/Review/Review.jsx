import { useState, useEffect } from 'react';

const Review = () => {
  const [reviews, setReviews] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Fetch review data from your JSON file in the public folder
    fetch('/Data/review.json') // Assuming review.json is in the public folder
      .then((response) => response.json())
      .then((data) => {
        setReviews(data);
      })
      .catch((error) => console.error(error));
  }, []);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  return (
    <div className="bg-pink-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-pink-600 mb-6">Customer Reviews</h2>
        <div className="relative">
          <div className="mx-auto max-w-xl">
            <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between">
              <button
                onClick={handlePrevClick}
                className="text-4xl font-extrabold text-pink-600 p-2 transition duration-300 mr-4"
              >
                &larr;
              </button>
              <div className="flex items-center">
                <img
                  src={reviews[currentIndex]?.profilePic}
                  alt={reviews[currentIndex]?.name}
                  className="w-16 h-16 rounded-full mr-4 border-2 border-pink-600"
                />
                <div>
                  <p className="text-gray-600 mt-2 text-xl font-bold">{`${reviews[currentIndex]?.name}`}</p>
                  <p className="text-gray-700">{reviews[currentIndex]?.comment}</p>
                </div>
              </div>
              <button
                onClick={handleNextClick}
                className="text-4xl font-extrabold text-pink-600 p-2 transition duration-300 mr-4"
              >
                &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
