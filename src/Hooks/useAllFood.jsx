

import { useEffect, useState } from 'react';


const useAllFood = () => {
    const [allFoodItems, setAllFoodItems] = useState([])
    console.log(allFoodItems);
    useEffect(()=>{
        fetch('https://task-management-platform-server-iota.vercel.app/api/v1/allFood')
        .then(res=> res.json())
        .then(data=> setAllFoodItems(data))
      
    },[])
    return allFoodItems;
}

export default useAllFood;