//1 - rafc tab
//2 - poner el argumento category
//3 - se agrega en gifexpertapp
//4 - se agrega key
//useEffect para que no renderize todo ante cualquier cambio

//customhook, se comentan lineas de useEffect

//import React, {useState, useEffect} from 'react'
//import { getGifs } from '../helpers/getGifs';
import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

 export const GifGrid = ({category}) => {
    const { data:images, loading} = useFetchGifs(category);
    
    
    //const [count, setCount ] = useState(0);
    
    return (
        <>
            <h3 className= "animate__animated animate__rotateInDownRight"> {category}</h3>   
            {loading && <p>Cargando....</p>}
             <div className="card-grid">
         
            
            { images.map(img => (
                     //<li key={category } >  {category}</li>
                     <GifGridItem 
                     key= {img.id}
                     img= {img}
                     {...img}
                     />
                     
                    
                    
             ))   
            }
     
            </div> */
        </>
    )
}

//<h3 >{count}</h3> 
         //<button onClick= { () => setCount (count + 1)}></button>