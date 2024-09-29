// src/components/CategorySelector.js
import React from 'react';

const CategorySelector = ({ categories, selectedCategory, onSelectCategory }) => {
    console.log(categories,"selectedCategory",selectedCategory,"onSelectCategory",onSelectCategory)
    function categoriesselector(e){
        let element=e.target;
        const value = element.getAttribute("data-value");
        onSelectCategory(value);
    }
    return (
        <div className='w-[25%]'  >
            {/* <option value="">All Categories</option> */}
            {categories.map((category) => (
                <div  onClick={categoriesselector} 
                //    className='categoryname p-4 bg-blue-50 mb-2 font-serif uppercase'
                   className={`categoryname p-4 bg-blue-50 mb-2 font-serif uppercase ${selectedCategory === category ? 'bg-blue-500' : 'bg-blue-50'}`}
                   key={category.title} data-value={category}
                >
                    {category}
                </div>
            ))}
        </div>
    );
};

export default CategorySelector;



{/* <div className='w-[25%]' value={selectedCategory} onClick={(e) => onSelectCategory(e.target.value)}>
            <option value="">All Categories</option>
            {categories.map((category) => (
                <div  className='categoryname p-4 bg-blue-50 mb-2 font-serif uppercase' key={category.title} value={category.category}>
                    {category}
                </div>
            ))}
        </div> */}
