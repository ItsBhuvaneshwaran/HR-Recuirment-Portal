import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import './slideStyle.css'
import dashboard from '../../assets/images/dashboard.jpeg'




const SideBoard = () => {
  let navigate = useNavigate();

  const handleClicktoIndustry = () => {
    navigate("/main/industry")
  }
  const handleClicktoDepartment = () => {
    navigate("/main/department")
  }

  const handleClicktoDesignation = () => {
    navigate("/main/designation")
  }

  const handleClicktoKeySkills = () => {
    navigate("/main/Keyskills")
  }
  const handleClicktoRole = () => {
    navigate("/main/role")
  }

  useEffect(() => {
    const toggleButton = document.querySelector('.slide-toggle');
    const sidebarContact = document.querySelector('.slide-sidebar-contact');

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
      <div class="slide-sidebar-contact">
        <div class="slide-toggle"></div>
        <img className='dashboard-img' src={dashboard} alt='DashBoard' />
        <h5 className='dash-head'>Dash Board</h5>
        <div class="scroll">
          <form>
            {/* <input type="text" name="" placeholder="Name" />
            <input type="email" name="" placeholder="Email" /> */}
            {/* <input type="rel" name="" placeholder="Phone Number" /> */}
            {/* <input type="password" name="" placeholder="Password" /> */}
            {/* <textarea placeholder="Place you key skills here.."></textarea> */}
            {/* <a className='slide-Fgt-Pss' onClick={() => handleClicktoForgotPassword()}>Forgot your password?</a> */}
            <button className='slide-btn-one' type="button" name="" onClick={() => handleClicktoIndustry()}>Industry</button>
            <button className='slide-btn-one' type="button" name="" onClick={() => handleClicktoDepartment()}>Department</button>
            <button className='slide-btn-one' type="button" name="" onClick={() => handleClicktoDesignation()}>Designatin</button>
            <button className='slide-btn-one' type="button" name="" onClick={() => handleClicktoKeySkills()}>Key Skills</button>
            <button className='slide-btn-one' type="button" name="" onClick={() => handleClicktoRole()}>Role</button>
          </form>
        </div>
      </div>
    </div >
  );
}

export default SideBoard;
