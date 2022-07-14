import React from "react";
import DirectoryItem from "../directoryItem/directoryItem.component";

import "./directory.styles.scss";

const Directory = ({ categories }) => {
  return (
    <div>
      <div className="directory-container">
        {categories.map((category) => {
          return <DirectoryItem category={category} key={category.id} />;
        })}
      </div>
    </div>
  );
};

export default Directory;
