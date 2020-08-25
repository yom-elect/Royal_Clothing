import React from "react";
import { useSelector } from "react-redux";
import CollectionPreview from "../preview-collection/collection-preview.component";

import "./collections-overview.styles.scss";

const CollectionsOverview = () => {
  const collections = useSelector(({ shop }) => shop.collections);

  return (
    <div className="collections-overview">
      {Object.values(collections).map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default CollectionsOverview;
