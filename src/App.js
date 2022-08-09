import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";

import { checkUserSession } from "./Store/User/user.action";

import Navbar from "./Routes/Navbar/index";
import Home from "./Routes/Home";
import Shop from "./Routes/Shop/index";
import Authentication from "./Routes/Authentication/index";
import CheckOut from "./Routes/CheckOut/index";

const App = () => {
  // ------------------------------ Start of Redux dispatch ------------------------------
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  // ------------------------------ End of Redux dispatch ------------------------------
  return (
    <Routes>
      <Route to="/" element={<Navbar />}>
        <Route path="/" element={<Home />} />
        <Route path="/shop/*" element={<Shop />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="/checkout" element={<CheckOut />} />
      </Route>
    </Routes>
  );
};

export default App;
