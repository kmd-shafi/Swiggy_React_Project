import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resdata } = props;
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    resdata?.info;

  return (
    <div className="res-card m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        className="res-logo rounded-lg"
        alt="res-img"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>cuisines-{cuisines.join(", ")}</h4>
      <h4>⭐{avgRating} Star</h4>
      <h4>cost-{costForTwo}</h4>
      <h4>deliveryTime-{resdata?.info?.sla?.deliveryTime} mins</h4>
    </div>
  );
};
export default RestaurantCard;
