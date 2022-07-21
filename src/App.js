import { Routes, Route } from "react-router-dom";

import Navbar from "./Routes/Navbar/index";
import Home from "./Routes/Home";
import Shop from "./Routes/Shop/index";
import Authentication from "./Routes/Authentication/index";
import CheckOut from "./Routes/CheckOut/index";

const App = () => {
  return (
    <Routes>
      <Route to="/" element={<Navbar />}>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="/checkout" element={<CheckOut />} />
      </Route>
    </Routes>
  );
};

export default App;
