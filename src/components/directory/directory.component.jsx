import React from "react";
import CategoryItem from "../categoryItem/categoryItem.component";

import "./directory.styles.scss";

const Directory = ({ categories }) => {
  return (
    <div>
      <div className="directory-container">
        {categories.map((category) => {
          return <CategoryItem category={category} key={category.id} />;
        })}
      </div>
    </div>
  );
};

export default Directory;
