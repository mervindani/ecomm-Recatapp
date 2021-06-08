import React from "react";
import "./collectionPreview.style.scss";
import CollectionItem from "../collectionItem/collectionItem.component";
import { withRouter } from "react-router-dom";

const CollectionPreview = ({ title, items, match, linkUrl, history }) => (
  <div className="collectionPreview">
    <h1
      className="title"
      onClick={() => history.push(`${match.url}/${title.toLowerCase()}`)}
    >
      {title.toUpperCase()}
    </h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);
export default withRouter(CollectionPreview);
