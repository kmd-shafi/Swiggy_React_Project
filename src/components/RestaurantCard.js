import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resdata } = props;
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    resdata?.info;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-img"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>cuisines-{cuisines.join(", ")}</h4>
      <h4>⭐{avgRating} Star</h4>
      <h4>cost-{costForTwo}</h4>
      <h4>deliveryTime-{resdata?.info?.sla?.deliveryTime} mins</h4>
    </div>
  );
};
export default RestaurantCard;
