// body component:
import RestaurentCard from "./RestaurentCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurents from "../utils/useRestaurents";

const Body = () => {
  const [searchText, setSearchText] = useState("");

  const { listOfFilterRes, setListOfFilterRes, filteredRes, setFilteredRes } =
    useRestaurents();

  // top rated resturents
  let handleTopRatedRes = function () {
    let filtered = listOfFilterRes.filter(
      (res) => res.card?.card?.info?.avgRating > 4.1
    );
    setFilteredRes(filtered);
  };

  // handle Search
  const handleSearch = () => {
    // filter the UI and Update the UI
    //Search text
    const searchedRestaurent = listOfFilterRes.filter((res) =>
      (res.card?.card?.info?.name || "")
        .toLowerCase()
        .includes(searchText.toLowerCase())
    );
    setFilteredRes(searchedRestaurent);
  };

  // handle search text onchage
  const handleSeachOnchange = (e) => {
    setSearchText(e.target.value);
  };

  // checking online and offline
  const onlineStatus = useOnlineStatus();
  console.log(onlineStatus, "online status...");
  if (onlineStatus === false) {
    return (
      <h1>Looks you are in offline!Please, Check your Internet Connection!</h1>
    );
  }

  // conditional Rendering..
  if (listOfFilterRes.length === 0) {
    return <Shimmer></Shimmer>;
  }

  return (
    <div className="body">
      {/* <div className="search">search</div> */}
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={handleSeachOnchange}
          />
          <button onClick={handleSearch}>Search</button>
        </div>

        <button className="filter-btn" onClick={handleTopRatedRes}>
          Top Rated Restaurents
        </button>
      </div>
      <div className="res-container">
        {filteredRes.map((resData) => (
          <RestaurentCard
            key={resData.card?.card?.info?.id}
            resdata={resData}
          ></RestaurentCard>
        ))}
        {/* <RestaurentCard resdata={resList[0]}></RestaurentCard> */}
        {/* <RestaurentCard resname="KFC" cusines="America, Canada"></RestaurentCard> */}
      </div>
    </div>
  );
};

export default Body;
