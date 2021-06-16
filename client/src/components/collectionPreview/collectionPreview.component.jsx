import React from "react";
import "./collectionPreview.style.scss";
import CollectionItem from "../collectionItem/collectionItem.component";
import { withRouter } from "react-router-dom";
import CustomButton from "../customButton/customButton.component";

const CollectionPreview = ({ title, items, match, linkUrl, history }) => (
  <div className="collectionPreview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
    <div className="collBtn">
      <CustomButton
        onClick={() => history.push(`${match.url}/${title.toLowerCase()}`)}
      >
        SEE MORE
      </CustomButton>
    </div>
  </div>
);
export default withRouter(CollectionPreview);
