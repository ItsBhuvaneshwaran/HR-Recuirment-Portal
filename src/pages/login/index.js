import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import './login.css'




const Login = () => {
  let navigate = useNavigate();

  // const importStyles = () => {
  //   if (window.innerWidth <= 768) {
  //     import('./login-mobile.css');
  //   } else {
  //     import('./login-desktop.css');
  //   }
  // };



  const handleClicktoRegister = () => {
    navigate("/auth/register")
  }

  const handleClicktoForgotPassword = () => {
    navigate("/auth/forgotpassword")
  }
  const handleClicktoHome = () => {
    navigate("/main/home")
  }

  useEffect(() => {

    // importStyles();

    const toggleButton = document.querySelector('.toggle');
    const sidebarContact = document.querySelector('.sidebar-contact');

    console.log('toggleButton:', toggleButton);
    console.log('sidebarContact:', sidebarContact);

    if (toggleButton && sidebarContact) {
      toggleButton.addEventListener('click', () => {
        console.log('Toggle button clicked');
        sidebarContact.classList.toggle('active');
        toggleButton.classList.toggle('active');
      });
    }
  }, []);

  return (
    <div>
      <div class="sidebar-contact">
        <div class="toggle"></div>
        <h2>👋 Sign in</h2>
        <div class="scroll">
          <form>
            <input type="text" name="" placeholder="Name" />
            <input type="email" name="" placeholder="Email" />
            {/* <input type="rel" name="" placeholder="Phone Number" /> */}
            <input type="password" name="" placeholder="Password" />
            {/* <textarea placeholder="Place you key skills here.."></textarea> */}
            <a className='Fgt-Pss' onClick={() => handleClicktoForgotPassword()}>Forgot your password?</a>
            <button className='btn-one' type="submit" name="" onClick={() => handleClicktoHome()}>Login</button>
            <button className='btn-two' type="submit" name="" value="Register" onClick={() => handleClicktoRegister()}>Register</button>
          </form>
        </div>
      </div>
      <div class="banner"></div>
      <div class="content">
        <p>
          <h2>What is ProTeam?</h2>
          ProTeam development is the process of conceiving, specifying, designing, programming, documenting, testing, and bug fixing involved in creating and maintaining applications, frameworks, or other software components. Software development involves writing and maintaining the source code, but in a broader sense, it includes all processes from the conception of the desired software through the final manifestation, typically in a planned and structured process often overlapping with software engineering. Software development also includes research, new development, prototyping, modification, reuse, re-engineering, maintenance, or any other activities that result in software products.
          <br /><br />
          <h2>Why Join with Us?</h2>
          We are a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).<br /><br />
          <h2> Where does it come from?</h2>
          Since 2008 ProTeam starts simply software text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

          The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
          <br /><br />
          <h2>what technologies are we using?</h2>
          There are many variations of passages of programming available, but we are using .net, VBnet, ReactJs and ReactNative the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
        </p>
      </div>
    </div >
  );
}

export default Login;
