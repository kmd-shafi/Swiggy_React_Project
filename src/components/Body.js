import RestaurantCard from "./RestaurantCard";
import res_list from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState(res_list);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filter = res_list.filter((res) => res.info.avgRating > 4);
            setlistOfRestaurants(filter);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resdata={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
