import ImageCard from "./imageCard";
import ClockBox from "./clockBox";

import "./wrapper.css";

import { Heart } from "lucide-react";



function Wrapper() {
  return (
    <>
      <div className="beforeWrapper">
        <div className="checkBoxWrapper">
          <ClockBox />
        </div>
        <div className="wrapper">
          <ImageCard imageSrc="/src/assets/img/1.jpg" imgText="First Image" />
          <ImageCard imageSrc="/src/assets/img/33.jpg" imgText="Second Image" />
          <ImageCard imageSrc="/src/assets/img/33.jpg" imgText="Second Image" />
          <ImageCard imageSrc="/src/assets/img/33.jpg" imgText="Second Image" />
          <ImageCard imageSrc="/src/assets/img/33.jpg" imgText="Second Image" />
          <ImageCard imageSrc="/src/assets/img/33.jpg" imgText="Second Image" />
        </div>
      </div>
    </>
  );
}

export default Wrapper;
