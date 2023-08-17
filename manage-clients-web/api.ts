import axios from "axios";
import { ICategories } from "./types/categories";

const baseUrl = "http://localhost:5039/api";

export const getAllCategories = async (): Promise<ICategories> =>{
    const res = await axios.get(`${baseUrl}/Category`);
    const {data: categories} = res;

    return categories;
}