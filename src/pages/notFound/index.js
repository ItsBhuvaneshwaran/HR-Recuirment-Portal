import React from "react";
import Lottie from "lottie-react";
import assets from "../../assets";
import "./notFound.css"; 

const NotFound = () => {
  const animationOptions = {
    loop: true,
    animationData: assets.Lottie.page404,
  };

  return (
    <div className="not-found-container">
      {/* <h1 className="not-found-title">404 Error Found</h1> */}
      <div className="lottie-container">
        <Lottie
          {...animationOptions}
          className="lottie-animation"
        />
      </div>
    </div>
  );
};

export default NotFound;








// ,------------------------------online code style merged ---------------------------->
// import React from "react";
// import Lottie from "lottie-react";
// import assets from "../../assets";

// const NotFound = () => {
//     const animationOptions = {
//         loop: true,
//         animationData: assets.Lottie.page404,
//     };

//     return (
//         <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
//             <h1>404 Error Found</h1>
//             <div style={{ width: "50%", maxWidth: "400px" }}>
//                 <Lottie
//                     {...animationOptions}
//                     style={{ width: "100%", height: "auto" }} // Adjust the width and height as needed
//                 />
//             </div>
//         </div>
//     );
// }

// export default NotFound;











// <-----------------------------my code ----------------------------->
// import React from "react";
// import Lottie from "lottie-react";
// import assets from "../../assets";

// const NotFound = () => {
//     return (
//         <div>
//             <h1>404 Error found</h1>
//             <Lottie animationData={assets.Lottie.page404} loop={true} />
//         </div>
//     )
// }

// export default NotFound;