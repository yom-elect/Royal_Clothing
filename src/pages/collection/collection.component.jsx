import React, { useContext } from "react";
// import { useSelector } from "react-redux";

import CollectionsContext from "../../contexts/collections/collections.context";

import CollectionItem from "../../components/collection-item/collection-item.component";
import { selectCollection } from "./mapCollection";
import "./collection.styles.scss";

const CollectionPage = ({ match }) => {
  // const collections = useSelector(({ shop }) => shop.collections);
  const collections = useContext(CollectionsContext);

  const { title, items } = selectCollection(
    collections,
    match.params.collectionId
  );
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;

// return (
//   <CollectionsContext.Consumer>
//     {(collections) => {
//       const { title, items } = selectCollection(
//         collections,
//         match.params.collectionId
//       );
//       return (
//         <div className="collection-page">
//           <h2 className="title">{title}</h2>
//           <div className="items">
//             {items.map((item) => (
//               <CollectionItem key={item.id} item={item} />
//             ))}
//           </div>
//         </div>
//       );
//     }}
//   </CollectionsContext.Consumer>
// );
