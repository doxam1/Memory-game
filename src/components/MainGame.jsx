import "../style/mainGame.scss";
import imageArrJson from "../assets/imageArray.json";
import shuffle from "./shuffle";
import { useState, useEffect } from "react";

const MainGame = ({
  clickedImages,
  setClickedImages,
  bestScore,
  setBestScore,
}) => {
  const [imageArr, setImageArr] = useState([]);

  const handleClick = (imageId) => {
    setImageArr(shuffle(imageArr));
    if (clickedImages.includes(imageId)) {
      setClickedImages([]);
      return console.log("bye bye!"); // a way to losing the game...
    }
    setClickedImages([...clickedImages, imageId]);
    handleBestScore();
  };

  function handleBestScore() {
    bestScore < clickedImages.length + 1
      ? setBestScore(clickedImages.length + 1)
      : setBestScore(bestScore);
  }

  // useEffect(() => {
  //   const fetchedImagesArray = [];
  //   // if i want a live update of images i can use this, but i'm limited to 100 requests per hour.
  //   async function fetchImage() {
  //     const response = await fetch(
  //       "https://api.giphy.com/v1/stickers/search?api_key=7vNx4XqSDBcod9JqE6DN18E4lSlchNh4&q=cute+dog&limit=12&offset=0&rating=g&lang=en&bundle=messaging_non_clips",
  //       { mode: "cors" }
  //     );
  //     const images = await response.json();
  //     for (let i = 0; i < 12; i++) {
  //       fetchedImagesArray.push({
  //         imageId: `${images.data[i].id}`,
  //         imageUrl: `${images.data[i].images.original.url}`,
  //       });
  //     }
  //     return fetchedImagesArray;
  //   }

  //   setImageArr(fetchImage());

  //   return () => console.log("i'm exiting.");
  // }, [imageArr]);
  useEffect(() => {
    async function fetchImage() {
      try {
        const response = await fetch(
          "https://api.giphy.com/v1/stickers/search?api_key=7vNx4XqSDBcod9JqE6DN18E4lSlchNh4&q=cute+dog&limit=12&offset=0&rating=g&lang=en&bundle=messaging_non_clips",
          { mode: "cors" }
        );
        const images = await response.json();
        const fetchedImagesArray = images.data.map((image) => ({
          imageId: image.id,
          imageUrl: image.images.original.url,
        }));

        setImageArr(fetchedImagesArray); // Update the state with fetched images
      } catch (error) {
        console.error("Error fetching images:", error);
        console.log("fetched images from Json");
        setImageArr(imageArrJson);
      }
    }

    fetchImage(); // Call the fetch function when the component mounts
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <div className="mainGame">
      {imageArr.map((image, index) => {
        return (
          <div
            className="square"
            tabIndex={0}
            onMouseDown={() => handleClick(image.imageId)}
            key={imageArr[index].imageId}
            style={{
              background: `black center/cover no-repeat url('${imageArr[index].imageUrl}')`,
            }}>
            {" "}
          </div>
        );
      })}
    </div>
  );
};

export default MainGame;

// maybe i'll do later a loop for building the squares.
