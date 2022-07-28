import { useContext, Fragment } from "react";
import { CategoriesContext } from "./../../Context/categories.context";
import CategoryPreview from "./../../Components/CategoryPreview/index";

const CategoriesPreview = () => {
  const { categories } = useContext(CategoriesContext);

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
