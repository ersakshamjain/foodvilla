import { useParams } from "react-router-dom";
import { IMG_CDN } from "../constants";
import ShimmerUI from "./ShimmerUI";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";



const RestaurantMenu = () => {

  const params = useParams();
  const { resId } = params;
  
  const resturant = useRestaurant(resId);


  const dispatch = useDispatch()
  const handleAddItmes = ()=>{
    dispatch(addItem("graps")) 
  }
  
  return !resturant ? (
    <ShimmerUI />
  ) : (
    <div className="mx-20 mt-3">
      <h1> Restaurant: {resturant?.name} </h1>
      <h2>
        Resturant Status:{" "}
        {resturant.isOpen ? <span>Open</span> : <span>Close</span>}
      </h2>
      <img
        style={{ width: "200px" }}
        src={IMG_CDN + resturant?.cloudinaryImageId}
      />
      <h2>Restaurant id: {resId}</h2>
      <h2> Area Name: {resturant?.areaName}</h2>
      <h2> City: {resturant?.city}</h2>
      <h2> Rating: {resturant?.avgRating} stars</h2>
      <button className="p-2 m-5 bg-green-100" onClick={()=> handleAddItmes()}>Add Items</button>
    </div>
  );
};

export default RestaurantMenu;
