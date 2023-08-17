import axios from "axios";
import { ICategories } from "./types/categories";
import { IResponse } from "./types/response";
import { ICategory } from "./types/category";

const baseUrl = "http://localhost:5039/api";

export const getAllCategories = async (): Promise<ICategories> =>{
    const res = await axios.get(`${baseUrl}/Category`);
    const {data: categories} = res;

    return categories;
}

export const addCategory = async (category: ICategory): Promise<IResponse> => {
    const res = await axios.post(`${baseUrl}/Category`,{name: category.name}, {headers: {'Content-Type':'application/json'}});
    const {data: newCategory} = res;
    return newCategory;
}