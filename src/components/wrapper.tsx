import ImageCard from "./imageCard";
import Nav from "./nav";
import "./wrapper.css";

function Wrapper() {
  return (
    <>
      <div className="wrapper">
        <ImageCard imageSrc="/src/assets/img/1.jpg" imgText="First Image" />
        <ImageCard imageSrc="/src/assets/img/33.jpg" imgText="Second Image" />
      </div>
    </>
  );
}

export default Wrapper;
