import Angular from "./images/angular.jpg";
import Boostrap from "./images/bootstrap5.png";
import Csharp from "./images/ccsharp.png";
import KompleWeb from "./images/kompleweb.jpg";

const courseMap = {
  //key value değerleri eşitse tekte yazılabilir.
  Angular,
  Boostrap,
  Ccsharp: Csharp,
  KompleWeb,
};

function Course({ courseName }) {
  //prop ismi ile ulaşabiliriz
  return (
    <div className="courseDiv">
      <img className="course" src={courseMap[courseName]} />{" "}
      {/* courseName ne ise mesela Angular daha sonra courseMap içinde Angular eş ne var ise img olarak onu getiriyor. */}
    </div>
  );
}

export default Course;
