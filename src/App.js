import { Routes, Route } from "react-router-dom";

import Navbar from "./Routes/Navbar/index";
import Home from "./Routes/Home";
import Shop from "./Routes/Shop/index";
import Authentication from "./Routes/Authentication/index";

const App = () => {
  return (
    <Routes>
      <Route to="/" element={<Navbar />}>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/signin" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
