import { useEffect } from "react";
import { useState } from "react";

/* basic example of hooks
function hello(){
return ["hellow","world"]
}

 */

function useCurrencyInfo(currency){
    const [data , setData]=useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res)=>res.json()) // then give call back  convert into json 
        .then((res)=>setData(res[currency])) //   
    },[currency])
    return data

}
export default useCurrencyInfo;
