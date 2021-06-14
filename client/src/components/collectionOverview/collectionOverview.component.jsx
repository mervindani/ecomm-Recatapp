import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionPreview from "../collectionPreview/collectionPreview.component";
import { selectCollectionsToPreview } from "../../redux/shop/shop.selectors";

import "./collectionOverview.style.scss";

const CollectionOverview = ({ collections }) => {
  return (
    <div className="collectionOverview">
      {collections.map(({ id, ...othercollprops }) => (
        <CollectionPreview key={id} {...othercollprops} />
      ))}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsToPreview,
});
export default connect(mapStateToProps)(CollectionOverview);
