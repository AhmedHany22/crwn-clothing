import { Fragment } from "react";
import { useSelector } from "react-redux";
import Spinner from "../../Components/Spinner";
import CategoryPreview from "./../../Components/CategoryPreview/index";
import {
  categoryIsLoadingSelector,
  categorySelector,
} from "./../../Store/Category/category.selector";

const CategoriesPreview = () => {
  const categories = useSelector(categorySelector);
  const isLoading = useSelector(categoryIsLoadingSelector);

  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categories).map((title) => (
          <CategoryPreview
            key={title}
            title={title}
            products={categories[title]}
          />
        ))
      )}
    </Fragment>
  );
};

export default CategoriesPreview;
