// body component:
import RestaurentCard from "./RestaurentCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfFilterRes, setListOfFilterRes] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&collection=83649&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );

    const json = await data.json();
    // console.log(json.data.cards);
    // json.data.cards.
    setListOfFilterRes(json.data?.cards);
    setFilteredRes(json.data?.cards);
  };

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

    console.log(searchedRestaurent);
  };

  // handle search text onchage
  const handleSeachOnchange = (e) => {
    setSearchText(e.target.value);
  };

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
