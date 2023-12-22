import { useContext } from "react";
import userContext from "../utils/userContext";

const RestaurantCard = ({image,name,cusines,rating}) => {
    
  const {user} =useContext(userContext);
  
  return (
      <div className="card w-56 p-2 m-2 shadow-xl h-80 border-spacing-1">
        <img  className="w-[210px] h-48 p-1 rounded-xl "src={image} />
        <h2 className="font-bold text-xl pt-1">{name}</h2>
        <h3>{cusines.join(", ")}</h3>
        <h4>{rating} stars</h4>
        <h4 className="font-bold text-md">{user.name}-{user.gmail}</h4>
        {/* <button className="p-2 max-w-max">Add to cart</button> */}
      </div>
    );
  };

  export default RestaurantCard;