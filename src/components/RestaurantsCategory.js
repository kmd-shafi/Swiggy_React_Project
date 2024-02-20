import ItemList from "./ItemList";
import useOnlineStatus from "../utils/useOnlineStatus";

const RestaurantsCategory = (props) => {
  const { data, showItems, setShowIndex } = props;
  const handileClick = () => {
    setShowIndex();
  };

  return (
    <div>
      {/**Header */}
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handileClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️ {useOnlineStatus()}</span>
        </div>

        {showItems && <ItemList items={data?.itemCards} />}
      </div>
      {/**body*/}
    </div>
  );
};
export default RestaurantsCategory;
