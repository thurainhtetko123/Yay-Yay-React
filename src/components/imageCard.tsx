import "./imageCard.css";
import VanillaTilt from "vanilla-tilt";
import { Heart } from "lucide-react";

interface ImageCardProps {
  imageSrc: string;
  imgText: string;
}

const handleImageClick = (imageSrc: string) => {
  console.log("Image clicked:", imageSrc);
};

function ImageCard({ imageSrc, imgText }: ImageCardProps) {
  return (
    <>
      <div className="Container">
        <div className="ImgContainer">
          <img
            src={imageSrc}
            alt=""
            className="img"
            onClick={() => handleImageClick(imageSrc)}
            data-tilt
            loading="lazy"
          />
          <span className="imgText">{imgText}</span>
        </div>
      </div>
    </>
  );
}

export default ImageCard;
