import React from "react";
import Select from "react-select";
import './about.css'

const About = () => {
  const options = [
    { value: "chocolate", label: "Choolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  const handleSelect = (selectedOption) => {
    console.log(selectedOption.value);
  };

  return (
  
    <div className="ful-div">
     <div className="box-1"></div>
     <div className="box-2"></div>
     <div className="box-3"></div>
    </div >
  );
};

export default About;
