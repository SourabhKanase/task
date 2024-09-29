// src/Pages/HomePage.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, fetchCategories, setSelectedCategory, setSearchQuery } from '../Redux/Actions/action';
import CategorySelector from '../Components/CategorySelector';
import SearchBar from '../Components/SearchBar';
import ProductList from '../Components/ProductList';

const HomePage = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);
    console.log("products",products.length)
    const categories = useSelector((state) => state.categories);
    const selectedCategory = useSelector((state) => state.selectedCategory);
    // console.log("selectedCategory==>",selectedCategory)
    const searchQuery = useSelector((state) => state.searchQuery);


    const [fetchingdata,setfetchingdata]=useState(true);
    const [lengthofproduct,setNumberlength]=useState(0);

    const [page, setPage] = useState(1);
    const pageSize = 5;

    // Fetch categories and products initially
    useEffect(() => {
        const fetchCategoriesFromAPI = async () => {

            setfetchingdata(true);
            const response = await fetch('https://dummyjson.com/products/category-list');
            const categories = await response.json();

            // console.log(categories);
            dispatch(fetchCategories(categories));
            setfetchingdata(false);
        };

        if(!selectedCategory)
        {
            console.log("comeinside because selected category is null")
            const fetchProductsFromAPI = async () => {
                setfetchingdata(true);
                const response = await fetch(`https://dummyjson.com/products?limit=${pageSize}&skip=${(page - 1) * pageSize}`);
                const products = await response.json();
                dispatch(fetchProducts(products.products));
                setfetchingdata(false);
            };
            fetchProductsFromAPI();
        }else{
            console.log("comeinside because selected category is not null",selectedCategory)
            const fetchProductsFromAPI = async () => {
                setfetchingdata(true);
                // https://dummyjson.com/products/category/smartphones/?limit=5&skip=5
                const response = await fetch(`https://dummyjson.com/products/category/${selectedCategory}/?limit=${pageSize}&skip=${(page - 1) * pageSize}`);
                const products = await response.json();
                dispatch(fetchProducts(products.products));
                setfetchingdata(false);
            };
            fetchProductsFromAPI();
        }

        fetchCategoriesFromAPI();
        // fetchProductsFromAPI();
    }, [selectedCategory]);

    // Fetch next batch of products when page changes
    useEffect(() => {
        if (page > 1 && !selectedCategory) {
            console.log("enetered to display data second time 1")
            const fetchMoreProducts = async () => {
                setfetchingdata(true);
                const response = await fetch(`https://dummyjson.com/products?limit=${pageSize}&skip=${(page - 1) * pageSize}`);
                const products = await response.json();
                dispatch(fetchProducts([...products.products]));
                setfetchingdata(false);
            };

            fetchMoreProducts();
        }else{
            if (page > 1 && selectedCategory) {

                console.log("enetered to display data second time 2")
                const fetchMoreProducts = async () => {
                    setfetchingdata(true);
                    const response = await fetch(`https://dummyjson.com/products/category/${selectedCategory}/?limit=${pageSize}&skip=${(page - 1) * pageSize}`);
                    const products = await response.json();
                    console.log(products);
                    dispatch(fetchProducts([...products.products]));
                    setfetchingdata(false);
                };

                fetchMoreProducts();
            }
        }
    }, [page, dispatch]);

    useEffect(()=>{
       console.log("called beacuse category changed");
       setPage(1);

    },[selectedCategory])

    // Handle category selection
    const handleCategorySelect = (category) => {
        console.log(category)
        dispatch(setSelectedCategory(category));
        setPage(1); // Reset pagination when category changes
    };

    // Handle search query input
    const handleSearch = (query) => {
        console.log(query)
        dispatch(setSearchQuery(query));
        setPage(1); // Reset pagination when search query changes
    };


    const filteredProducts = products.filter((product) =>
            (selectedCategory === '' || product.category === selectedCategory) &&
            product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
      
    return (
        <div>
            <h1 className='w-[100%] text-white bg-black p-5 font-serif font-bold text-3xl'>Products</h1>

            <div  className='w-[100%] bg-gray-200 py-4 px-2'>
               <SearchBar searchQuery={searchQuery} onSearch={handleSearch}/>
            </div>

            <div className='flex gap-6 '>
                <CategorySelector
                    categories={categories}
                    selectedCategory={selectedCategory}
                    onSelectCategory={handleCategorySelect}
                />

                <div className='h-[100vh]'>

                    <div>
                        {products.length === 0 ? (
                            <div className='w-[100%] h-[100%] flex items-center justify-center font-mono text-4xl'>
                            NO DATA FOUND IN API
                            </div>
                        ) : (
                            <p></p>
                        )}
                     </div>   
                     <div>
                        {fetchingdata ? <div className='w-[100%] h-[100%] flex items-center justify-center font-mono text-4xl'>Loading....</div> : <ProductList products={filteredProducts} />}
                      </div>

                       <button className='bg-black text-white px-6 py-1 rounded-xl mx-4' onClick={()=>setPage(page+1)}>Next</button>     
                </div>
            </div>
        </div>
    );
};

export default HomePage;
