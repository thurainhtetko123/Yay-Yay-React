import "./imageCard.css";
import VanillaTilt from "vanilla-tilt";

interface ImageCardProps {
  imageSrc: string;
  imgText: string;
}

function ImageCard({ imageSrc, imgText }: ImageCardProps) {
  return (
    <>
      <div className="imgContainer">
        <img src={imageSrc} alt="" className="img" data-tilt />
        <span className="imgText">{imgText}</span>
      </div>
    </>
  );
}

export default ImageCard;
