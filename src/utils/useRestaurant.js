import { useState, useEffect } from "react";


const useRestaurant = (resId)=>{
    const [resturant, setResturant] = useState(null);
    useEffect(() => {
        getRestrauantInfo();
      }, []);
    
      async function getRestrauantInfo() {
         const data = await fetch(
          "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.2137468&lng=75.86483330000002&restaurantId=" +
            resId +
            "&catalog_qa=undefined&submitAction=ENTER"
        );
        const json = await data.json();
        const info = await json?.data?.cards[0]?.card?.card.info;
        // console.log(json)
        setResturant(info);
        
      }
      return resturant;
}

export default useRestaurant;