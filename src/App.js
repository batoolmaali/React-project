
import './App.css';
import { Route, Routes } from "react-router-dom";
import Login from './Component/Login/login';
import Register from './Component/Register/register'

import Forget from './Component/Login/forget';
import FormDataStep from './Component/form/formData';

import Navbar from './Component/HomePage/navbar';
import Home from './Component/HomePage/home';
import Details from './Component/HomePage/details';
import ProjectsHome from './Component/HomePage/home-projects';
import Sidebar from './Component/Userprofile/sidebar';
import CompitionsHome from './Component/HomePage/home-compitions';
import Winners from './Component/HomePage/Winners';
import Vote from './Component/HomePage/vote';
import EditProfile from './Component/Userprofile/Editprofile';
import Profile from './Component/Userprofile/Profile';
import Projects from './Component/Userprofile/project';
import Competitions from './Component/Userprofile/compitions';
import LightBox from './Component/image';
import FormDataWithPayment from './Component/form2/formData';
import FinalStep3 from './Component/form/final-step3';
import Finalpayment from './Component/form2/finalpayment-step';
import PhoneNumber from './Component/otp/numberphone';
import OTP from './Component/otp/otp';
import Newpassword from './Component/otp/newpassword';
import Reset from './Component/Login/four';
import Four from './Component/Login/four';
import CompitionVote from './Component/HomePage/compition-vote';

function App() {
  return (
    <>


      <Routes>
        {/* home //////////////////////////////////////////////////////// */}
        <Route path="/" element={<Navbar />} >
          <Route path="home" element={<Home />} />
          <Route path="details" element={<Details />} />
          <Route path="project" element={<ProjectsHome />} />
          <Route path="compitions" element={<CompitionsHome />} />
          <Route path="winners" element={<Winners />} />
          <Route path="vote" element={<Vote />} />
          <Route path="CompitionVote" element={<CompitionVote />} />
        </Route>
        {/* profile //////////////////////////////////////////////////////// */}
        <Route path="/profile" element={<Sidebar />} >
          <Route path="Editprofile" element={<EditProfile />} />
          <Route path="userprofile" element={<Profile />} />
          <Route path="userProject" element={<Projects />} />
          <Route path="usercompetitions" element={<Competitions />} />
        </Route>

        {/*formdata //////////////////////////////////////////////////////// */}
        <Route path="/lo" element={<LightBox />} />
        {/* //////////////////////////////////////////////////////// */}
        <Route path="/formdata" element={<FormDataStep />} />
        <Route path="/final" element={<FinalStep3 />} />
        <Route path="/finalpayment" element={<Finalpayment />} />
        <Route path="/formPayment" element={<FormDataWithPayment />} />

        {/*login //////////////////////////////////////////////////////// */}
        <Route path="/Login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/password" element={<Password />} /> */}
        <Route path="forget" element={<Forget />} />
        <Route path="/Reset" element={<Reset />} />


      </Routes>


    </>
  );
}

export default App;
