import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import userContext from "../utils/userContext";

const Body = () => {
  const [filterRestraunts, setFilterRestraunts] = useState([]);
  const [allrestaurants, setAllrestaurants] = useState([]);
  const [searchText, setsearchText] = useState();

  useEffect(() => {
    showRestroant();
  }, []);

  async function showRestroant() {
    const data = await fetch(
      "https://mocki.io/v1/02f1eb1e-4dab-4e6d-a8d9-f69286ca8552"
    );
    console.log(data);
    const json = await data.json();
    setAllrestaurants(json);
    setFilterRestraunts(json);
    // console.log(json);
  }

  const { user, setUser } = useContext(userContext);
  
  // Conditional Rendring
  // if restraunt is emply render => shimmer UI
  // if restraunt is data render => actual data UI

  // Not render component (Early)
  
  if (!allrestaurants) return null;

  return allrestaurants.length === 0 ? (
    <ShimmerUI />
  ) : (
    <>
      <div className="search-container py-3 pr-5 mx-[105px]  ">
        <input
          type="text"
          className="search-input p-2 rounded-lg bg-purple-100 focus:bg-gray-200 outline-none "
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setsearchText(e.target.value);
          }}
        />
        <button
          className="search-button  bg-purple-900 text-white p-2 m-2 rounded-lg hover:bg-gray-300 hover:text-black"
          data-testid="search-btn"
          onClick={() => {
            //need to filter the data
            const data = filterData(searchText, allrestaurants);
            //update the state - restaurants
            setFilterRestraunts(data);
          }}
        >
          Search
        </button>

        <input
          className="bg-slate-200 p-3 ml-2"
          value={user.name}
          onChange={(e) => {
            setUser({ 
              ...user,
              name: e.target.value,
              });
          }}
        />
        <input
          className="bg-slate-200 p-3 ml-2" 
          value={user.gmail}
          onChange={(e) => {
            setUser({ 
              ...user,
              gmail: e.target.value,
              });
          }}
        />
      </div>

      <div className="resturant-list flex flex-wrap mx-[97px] bg-gray-100 p-3">
        {filterRestraunts.length === 0 ? (
          <h1 className="ml-[640px] text-2xl font-bold">
            No Restro Matched Your Search!!
          </h1>
        ) : (
          filterRestraunts.map((restraurant) => {
            return (
              <Link to={"/restaurant/" + restraurant.id} key={restraurant.id}>
                <RestaurantCard {...restraurant}  />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
