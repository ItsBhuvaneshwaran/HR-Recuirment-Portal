import React from "react";
import Lottie from "lottie-react";
import assets from "../../assets";
import "./home.css"; 

const HomePage = () => {
  const animationOptions = {
    loop: true,
    animationData: assets.Lottie.homePage,
  };

  return (
    <div>
      {/* <h1 className="not-found-title">Welcomehome</h1> */}
      <div className="lottie-container">
        <Lottie
          {...animationOptions}
          className="lottie-animation-home"
        />
      </div>
    </div>
  );
};

export default HomePage;




// import React from 'react';

// function Home() {
//     return (
//       <p>Thanks for visiting us</p>
//   );
// }
// export default Home;