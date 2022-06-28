import { useState, useEffect } from "react";

import Directory from "./Components/Directory";

const App = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  return <Directory categories={categories} />;
};

export default App;
