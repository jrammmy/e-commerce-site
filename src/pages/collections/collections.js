import React from "react";
import DATA from "./data.js";
import CollectionPreview from "../../components/collection-preview/collection-preview";

class Collections extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default Collections;
