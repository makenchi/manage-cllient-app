import { ICategories } from "@/types/categories";

interface CategoryProps {
    category: ICategoriy
}

const Category: React.FC<CategoryProps> = ({ category }) =>{
    return(
        <tr key={category.id}>
            <td>{category.name}</td>
            <td>action</td>
        </tr>
    );
};

export default Category;