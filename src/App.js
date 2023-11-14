import { useState } from "react";
import "./App.css";
import Course from "./Course";

function getRandomCourse() {
  const courseArray = ["Angular", "Boostrap", "Ccsharp", "KompleWeb"];
  return courseArray[Math.floor(Math.random() * courseArray.length)]; //math.random değeri 0-1 arası max değer çarpım sonucu 3.99 olur math.floor ise tabana yuvarladı ve 3 oldu
}

function App() {
  const [courses, setCourses] = useState([]); //içindeki img yollanıcak diziye eklenicek daha sonra tekrar aynı işlem olan dizi üzerine eklenicek.

  const handleClick = () => {
    setCourses([...courses, getRandomCourse()]); //courses önceki elemanlarıda istiyoruz yani daha öncekiler geçerli ve getRandomCourse ile yeni eleman
  };
  const courseList = courses.map((course, index) => {
    return <Course key={index} courseName={course} />; //courses önceki elemanlarıda istiyoruz yani daha öncekiler geçerli ve getRandomCourse ile yeni eleman
  });
  return (
    <div className="App">
      <button className="appButton" onClick={handleClick}>Add Course</button>
      <div className="courseList">{courseList}</div>
    </div>
  );
}

export default App;
