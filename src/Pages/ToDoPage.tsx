import ImageCard from "../components/imageCard";
import ClockBox from "../components/clockBox";
import Nav from "../components/nav";
import ToDo from "../components/ToDo";

import "./Home.css";


function ToDoPage() {
  return (
    <>
      <div className="beforeWrapper">
        <div className="checkBoxWrapper">
          <ClockBox />
        </div>
        <Nav />
        <div className="wrapper">
          <ToDo />
        </div>
      </div>
    </>
  );
}

export default ToDoPage;
