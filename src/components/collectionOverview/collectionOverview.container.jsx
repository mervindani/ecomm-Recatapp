import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import CollectionOverview from "./collectionOverview.component";
import { selectIsFetching } from "../../redux/shop/shop.selectors";
import WithSpinner from "../withSpinner/withSpinner.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsFetching,
});

const CollectionsOverviewcontainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverview);

export default CollectionsOverviewcontainer;
