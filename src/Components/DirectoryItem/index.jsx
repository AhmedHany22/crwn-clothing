import Styles from "./DirectoryItem.styles";
import { useNavigate } from "react-router-dom";

const DirectoryItem = ({ category }) => {
  const navigate = useNavigate();
  const handleNavigate = () => navigate(category.route);

  return (
    <Styles.DirectoryItemContainer onClick={handleNavigate}>
      <Styles.BackgroundImage imgUrl={category.imageUrl} />
      <Styles.Body>
        <h2>{category.title}</h2>
        <p>Shop Now</p>
      </Styles.Body>
    </Styles.DirectoryItemContainer>
  );
};

export default DirectoryItem;
