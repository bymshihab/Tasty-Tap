import { useState, useEffect } from "react";

const useRestaurents = () =>{
    const [listOfFilterRes, setListOfFilterRes] = useState([]);
    const [filteredRes, setFilteredRes] = useState([]);

    useEffect(() => {
        fetchData();
      }, []);
    
      const fetchData = async () => {
        const data = await fetch(
          "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&collection=83649&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
        );
    
        const json = await data.json();
        setListOfFilterRes(json.data?.cards);
        setFilteredRes(json.data?.cards);
      };
    

      return {listOfFilterRes, setListOfFilterRes, filteredRes, setFilteredRes}; 
}

export default useRestaurents;