import axios from "axios";
import { ICategory } from "./types/category";

const baseUrl = "http://localhost:5039/api";

export const getAllCategories = async (): Promise<ICategory[]> =>{
    const res = await axios.get(`${baseUrl}/Category`);
    const {data: categories} = res;

    return categories;
}