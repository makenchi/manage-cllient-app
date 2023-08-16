import { AiOutlinePlus } from "react-icons/ai";

const AddCategory = () => {
    return (
        <div>
            <button className="btn btn-primary w-full">
                Add new client category <AiOutlinePlus className="ml-2" size={18} />
            </button>
        </div>        
    );
};

export default AddCategory;