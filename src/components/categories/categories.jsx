import { useEffect, useState } from "react";
import Category from "../Category/Category";

const Categories = () => {
    const [categoryData, setCategoryData] = useState([]);
    // const [displayCategories, setDisplayCategories] = useState([]);

    // const handleDosplayCategories = () => {

    // }

    useEffect(() => {
        fetch('category.json')
            .then(res => res.json())
            .then(data => setCategoryData(data))
            // .then(data => setDisplayCategories(data));
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="my-[100px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
            {
                categoryData.map(category => (<Category key={category.id} category={category}></Category>))
            }
        </div>
    );
};

export default Categories;
