"use client"
import { ICategories } from "@/types/categories";
import {FiEdit, FiTrash2} from "react-icons/fi";
import {useState} from "react";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import { editCategory } from "@/api";

interface CategoryProps {
    category: ICategoriy
}

const Category: React.FC<CategoryProps> = ({ category }) =>{
    const router = useRouter();
    const [openMadelEdit, setOpenModalEdit] = useState<boolean>(false);
    const [openMadelDelete, setOpenModalDelete] = useState<boolean>(false);
    const [categoryToEdit, setTaskToEdit] = useState<string>(category.name);

    const handleSubmitEditCategory: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        await editCategory({
            id: category.id,
            name: categoryToEdit
        });
        setTaskToEdit("");
        setOpenModalEdit(false);
        router.refresh();
    };

    return(
        <tr key={category.id}>
            <td className="w-full">{category.name}</td>
            <td className="flex gap-5">
                <FiEdit onClick={() => setOpenModalEdit(true)} cursor="pointer" className="text-blue-500" size={25} />
                <Modal modalOpen={openMadelEdit} setModalOpen={setOpenModalEdit}>
                    <form onSubmit={handleSubmitEditCategory}>
                        <h3 className="font-bold text-lg">Edit category</h3>
                        <div className="model-action flex flex-row mt-4">
                            <input value={categoryToEdit} onChange={(e) => setTaskToEdit(e.target.value)} type="text" placeholder="Type here" className="input input-bordered w-full" />
                            <button type="submit" className="btn ml-4">Submit</button>
                        </div>
                    </form>
                </Modal>                
                <FiTrash2 cursor="pointer" className="text-red-500" size={25} />
            </td>
        </tr>
    );
};

export default Category;