import { useEffect } from "react";
const RestaurentMenu = () => {
  useEffect(() => {
    // fetchMenu();
  }, []);

//   const fetchMenu = async () => {
//     try {
//       const response = await fetch(
//         "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&collection=83649&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
//       );

//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       const json = await response.json();
//       console.log(json);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

  return (
    <div>
      <h1>This is Restaurent menu</h1>
      <h2>Menu:</h2>
      <ul>
        <li>briyani - </li>
        <li>Kala vuna</li>
        <li> Malai chop </li>
      </ul>
    </div>
  );
};

export default RestaurentMenu;
