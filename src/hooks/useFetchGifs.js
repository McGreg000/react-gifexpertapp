import { useEffect, useState } from "react"
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = ( category ) => {

   const [state, setState] = useState({
      data: [], 
      loading: true
   })

   useEffect ( (  ) => {
      getGifs( category )
         .then( imgs => {
            setTimeout(() => {
               
               setState({
                  data: imgs, 
                  loading: false
               });
               
            }, 500);
         });
   }, [ category ]) 
   /*useEffects sin depencias lo que consigue es que el elemento solo se ejecute la primera vez que se renderiza el componente */

   return state; 
}
