import { ICategory } from "./types/category";

const baseUrl = "https://localhost:7039/api";

export const getAllCategories = async (): Promise<ICategory[]> =>{
    const res = await fetch(`${baseUrl}/Category`,{
        method:"GET",
        headers:{
            "Content-Type": "text/plain"
        }
    });
    const categories = await res.json();

    return categories;
}