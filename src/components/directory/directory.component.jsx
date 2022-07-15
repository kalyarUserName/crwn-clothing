import React from "react";

import DirectoryItem from "../directoryItem/directoryItem.component";

import { DirectoryContainer } from "./directory.styles";

const Directory = ({ categories }) => {
  return (
    <div>
      <DirectoryContainer>
        {categories.map((category) => {
          return <DirectoryItem category={category} key={category.id} />;
        })}
      </DirectoryContainer>
    </div>
  );
};

export default Directory;
