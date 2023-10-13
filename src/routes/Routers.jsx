import Home from "../Pages/Home";
import Login from "../components/Login/Login";
import Story from "../components/Story/Story";
import { Routes, Route } from "react-router-dom";
const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/story" element={<Story />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </>
  );
};

export default Routers;
