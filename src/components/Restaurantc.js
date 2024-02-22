import { CDN_URL } from "../utils/constants";
import { useContext } from "react";
import Usercontext from "../utils/Usercontext";

const Restaurantc = (props) => {
  const { resData } = props;

  console.log(resData);

  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } = resData;
  const { loggedInuser } = useContext(Usercontext);

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
      <h4>deliveryTime-{resData?.sla?.deliveryTime} mins</h4>
      <h4>User : {loggedInuser}</h4>
    </div>
  );
};

//Higher order component
export const withPromotedLabel = (Restaurantc) => {
  return (props) => {
    return (
      <div data-testid="rescard">
        <label className="absolute shadow-lg text-black m-2 p-2  rounded-lg">
          Shop is open
        </label>
        <Restaurantc {...props} />
      </div>
    );
  };
};

export default Restaurantc;
