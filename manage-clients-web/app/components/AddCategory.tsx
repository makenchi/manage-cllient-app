"use client"

import { AiOutlinePlus } from "react-icons/ai";
import Modal from "./Modal";
import { useState } from "react";
import { addCategory } from "@/api";
import { useRouter } from "next/navigation";

const AddCategory = () => {
    const router = useRouter();
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [newCategoryValue, setNewCategoryValue] = useState<string>("");

    const handleSubmitNewCategory: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        await addCategory({
            id: "novo",
            name: newCategoryValue
        });
        setNewCategoryValue("");
        setModalOpen(false);
        router.refresh();
    };

    return (
        <div>
            <button onClick={() => setModalOpen(true)} className="btn btn-primary w-full">
                Add new client category <AiOutlinePlus className="ml-2" size={18} />
            </button>

            <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
                <form onSubmit={handleSubmitNewCategory}>
                    <h3 className="font-bold text-lg">Add new category</h3>
                    <div className="model-action flex flex-row mt-4">
                        <input value={newCategoryValue} onChange={(e) => setNewCategoryValue(e.target.value)} type="text" placeholder="Type here" className="input input-bordered w-full" />
                        <button type="submit" className="btn ml-4">Submit</button>
                    </div>
                </form>
            </Modal>
        </div>        
    );
};

export default AddCategory;