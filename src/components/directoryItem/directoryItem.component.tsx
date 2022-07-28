import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import {
  BackgroundImage,
  DirectoryItemContainer,
  Body,
} from "./directoryItem.styles";

import { DirectoryCategories } from "../directory/directory.component";

type DirectoryItemProps = {
  category: DirectoryCategories;
};

const DirectoryItem: FC<DirectoryItemProps> = ({ category }) => {
  const { title, imageUrl, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => {
    navigate(route);
  };
  return (
    <DirectoryItemContainer size={"800px"} onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
