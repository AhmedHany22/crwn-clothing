import "./DirectoryItem.styles.scss";

const DirectoryItem = ({ category }) => (
  <div className="directory-item-container">
    <div
      className="background-image"
      style={{ backgroundImage: `url(${category.imageUrl})` }}
    />
    <div className="body">
      <h2>{category.title}</h2>
      <p>Shop Now</p>
    </div>
  </div>
);

export default DirectoryItem;
