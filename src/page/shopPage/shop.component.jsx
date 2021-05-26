import React from "react";
import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../components/collectionPreview/collectionPreview.component";
class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div>
        {collections.map(({ id, ...othercollprops }) => (
          <CollectionPreview key={id} {...othercollprops} />
        ))}
      </div>
    );
  }
}
export default ShopPage;
