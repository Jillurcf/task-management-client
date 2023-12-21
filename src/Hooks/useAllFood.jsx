

import { useEffect, useState } from 'react';


const useAllFood = () => {
    const [allFoodItems, setAllFoodItems] = useState([])
    console.log(allFoodItems);
    useEffect(()=>{
        fetch('https://assignment11-server-side-chi.vercel.app/api/v1/allFood')
        .then(res=> res.json())
        .then(data=> setAllFoodItems(data))
      
    },[])
    return allFoodItems;
}

export default useAllFood;