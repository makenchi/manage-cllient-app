import { getAllCategories } from "@/api";
import AddCategory from "./components/AddCategory";
import CategoryList from "./components/CategoryList";

export default async function Home() {
  const categories = await getAllCategories();
  console.log(categories);
  
  return (
    <main className="max-w-4xl mx-auto mt-4">
      <div className="text-center my-5 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Manage Client Category</h1>
        <AddCategory />
      </div>
      <CategoryList />
    </main>
  )
}