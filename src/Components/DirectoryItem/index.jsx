import Styles from "./DirectoryItem.styles";

const DirectoryItem = ({ category }) => (
  <Styles.DirectoryItemContainer>
    <Styles.BackgroundImage imgUrl={category.imageUrl} />
    <Styles.Body>
      <h2>{category.title}</h2>
      <p>Shop Now</p>
    </Styles.Body>
  </Styles.DirectoryItemContainer>
);

export default DirectoryItem;
