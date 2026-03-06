import "./imageCard.css";
import VanillaTilt from "vanilla-tilt";
import {
  Heart,
  TurkishLira,
  Pencil,
  PencilOff,
  FlipHorizontal2,
  Eraser,
  Upload,
} from "lucide-react";
import { TbEraser, TbEraserOff } from "react-icons/tb";
import { useState } from "react";

interface ImageCardProps {
  imageSrc: string;
  imgText: string;
}

const handleImageClick = (imageSrc: string) => {
  console.log("Image clicked:", imageSrc);
};

function ImageCard({ imageSrc, imgText }: ImageCardProps) {
  const [flipped, setFlipped] = useState(false);
  function cardCicked() {
    if (flipped) {
      setFlipped(false);
    } else {
      setFlipped(true);
    }
  }

  type Tool = "pencil" | "eraser" | null;
  const [chosen, setChoose] = useState<Tool>(null);
  function Choose(tool: Exclude<Tool, null>) {
    setChoose((current) => (current === tool ? null : tool));
  }
  return (
    <>
      <div className="Container">
        <div className={`Card ${flipped ? "flipped" : ""}`}>
          <div className="ImgContainer" id="FrontCard">
            <img
              onClick={cardCicked}
              src={imageSrc}
              alt=""
              className="img"
              data-tilt
              loading="lazy"
            />
            <span className="imgText">{imgText}</span>
          </div>

          <div className="ImgContainer" id="BackCard">
            <canvas></canvas>
            <div className="tools">
              <div className="toolAndLabel">
                <div
                  className={`toolButton ${chosen === "pencil" ? "chosen" : ""}`}
                  onClick={() => Choose("pencil")}
                >
                  <Pencil />
                </div>
                <span className="toolLabel">Pencil</span>
              </div>

              <div className="toolAndLabel">
                {" "}
                <div
                  className={`toolButton ${chosen === "eraser" ? "chosen" : ""}`}
                  onClick={() => Choose("eraser")}
                >
                  <Eraser />
                </div>
                <span className="toolLabel">Eraser</span>
              </div>
              <div className="toolAndLabel">
                <div className="toolButton" onClick={cardCicked}>
                  <FlipHorizontal2 />
                </div>
                <span className="toolLabel">Flip</span>
              </div>
              <div className="toolAndLabel">
                <div className="toolButton">
                  <Upload/>
                </div>
                <span className="toolLabel">Save</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ImageCard;
