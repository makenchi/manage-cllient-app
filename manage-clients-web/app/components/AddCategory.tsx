"use client"

import { AiOutlinePlus } from "react-icons/ai";
import Modal from "./Modal";
import { useState } from "react";

const AddCategory = () => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div>
            <button onClick={() => setModalOpen(true)} className="btn btn-primary w-full">
                Add new client category <AiOutlinePlus className="ml-2" size={18} />
            </button>

            <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} />
        </div>        
    );
};

export default AddCategory;