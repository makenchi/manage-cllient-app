import { ICategories } from "@/types/categories";
import React from "react";
import Category from "./Category";

interface CategoryListProps {
    categories: ICategories
}

const CategoryList: React.FC<CategoryListProps> = ({ categories }) => {    
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>                
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>                    
                    {categories.categories.map((category) => (
                        <Category key={category.id} category={category}/>
                    ))}
                </tbody>
            </table>
        </div>        
    );
};

export default CategoryList;