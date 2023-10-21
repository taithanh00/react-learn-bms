import Home from "../Pages/Home";
import Login from "../components/Login/Login";
import Story from "../components/Story/Story";
import Contact from "../components/Contact/Contact";
import Help from "../components/Help/Help";
import ShopAll from "../components/ShopAll/ShopAll";
import { Routes, Route } from "react-router-dom";
const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/story" element={<Story />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/help" element={<Help />} />
        <Route path="/shopall" element={<ShopAll />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </>
  );
};

export default Routers;
