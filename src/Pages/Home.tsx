import ImageCard from "../components/imageCard";
import ClockBox from "../components/clockBox";
import Nav from "../components/nav";

import "./Home.css";

import { Heart } from "lucide-react";

function Home() {
  return (
    <>
      <div className="beforeWrapper">
        <div className="checkBoxWrapper">
          <ClockBox />
        </div>
        <Nav />
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

export default Home;
    