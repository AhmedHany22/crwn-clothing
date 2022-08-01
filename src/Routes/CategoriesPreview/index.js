import { Fragment } from "react";
import { useSelector } from "react-redux";
import CategoryPreview from "./../../Components/CategoryPreview/index";
import { categorySelector } from "./../../Store/Category/category.selector";

const CategoriesPreview = () => {
  const categories = useSelector(categorySelector);
  return (
    <Fragment>
      {Object.keys(categories).map((title) => (
        <CategoryPreview
          key={title}
          title={title}
          products={categories[title]}
        />
      ))}
    </Fragment>
  );
};

export default CategoriesPreview;
