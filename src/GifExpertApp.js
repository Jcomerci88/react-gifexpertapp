//ver .map si es para recorrer arreglos o que?
//ver useState
//ver push
//ver handleAdd
import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch'])

/*   
    const handleAdd = () => {
        //react no renderiza, lo pone en categories pero no se ve
        //categories.push('Hunter');
        //console.log(categories);
        //setCategories( 'Hunter'); //rompe estado, transforma string al arreglo
        //setCategories([...categories, 'Hunter']); ok
        //otraforma
        setCategories(cats => [...cats, 'Hunter']); //ok
        console.log(categories);

        //<button onClick={handleAdd}>Agregar Anime</button>

    }
    */
    return (
        <>
            <h2>{ `GifExpertApp` }</h2>
            <AddCategory setCategories={ setCategories}/>
            <hr/>
            
            <ol>
                { categories.map( category => 
                     //<li key={category } >  {category}</li>
                     <GifGrid 
                        key= {category}
                        category = {category} 
                    />
                )   
                }

                
            </ol>
        </>
        
    )
        
} 

