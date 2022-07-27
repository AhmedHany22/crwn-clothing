import Directory from "../../Components/Directory";
import { useState, useEffect } from "react";

const Home = () => {
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

export default Home;
