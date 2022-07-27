import { DirectoryContainer } from "./Directory.styles";
import Category from "../DirectoryItem";

const Directory = ({ categories }) => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <Category key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
