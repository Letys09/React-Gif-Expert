import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

const GifExpertApp = () => {

    const [categories, setCategories] = useState( ['One Punch'] );

    const onAddCategory = ( newCategory ) => {
        setCategories( [newCategory, ...categories] );
    }

    return (
        <>
            <h1>GifExpertApp</h1>  

            <AddCategory 
                onNewCategory={ ( event ) => onAddCategory(event) }
            />

            { 
                categories.map( ( category ) => (
                    <GifGrid 
                        key={ category }
                        category={ category }
                    />
                )) 
            }
        </>
    )
}

export default GifExpertApp;
