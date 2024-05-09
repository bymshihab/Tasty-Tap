import { CDN_URL } from "../utils/constants";


// card design with inline css
const styleCard = {
    backgroundColor: "#f0f0f0",
  };


const RestaurentCard = (props) => {
  const {
    name,
    cuisines=[],
    costForTwo,
    avgRating,
    cloudinaryImageId,
  } = props.resdata.card?.card?.info || {};
  
    // console.log(resData.card.card.info.name);
    //console.log(name);
    //console.log(cuisines); // Log cuisines separately to check its value
  
    return (
      <div className="res-card" style={styleCard}>
        <img
          className="resImg"
          src={
           CDN_URL +
            cloudinaryImageId
          }
          alt="biriyani"
        />
        <h3>{name}</h3>
        {/* Check if cuisines array is empty before joining */}
        {<h4>{cuisines.join(", ")}</h4>}
        <h3>{costForTwo}</h3>
        <h3>{`Rating:  ${avgRating}`}</h3>
      </div>
    );
  };

  export default RestaurentCard;