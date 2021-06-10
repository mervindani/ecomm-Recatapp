import { connect } from "react-redux";
import { compose } from "redux";

import { createStructuredSelector } from "reselect";
import WithSpinner from "../../components/withSpinner/withSpinner.component";
import CollectionPage from "./collection.component";

import { selectIsCollectionLoading } from "../../redux/shop/shop.selectors";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionLoading(state),
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);

export default CollectionPageContainer;
