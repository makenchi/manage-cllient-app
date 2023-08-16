import React from "react";

const CategoryList = () => {
    return(
        <div className="overflow-x-auto">
        <table className="table">
            {/* head */}
            <thead>
            <tr>                
                <th>Name</th>
            </tr>
            </thead>
            <tbody>
            {/* row 1 */}
            <tr>
                <td>Cy Ganderton</td>
            </tr>
            {/* row 2 */}
            <tr>
                <td>Hart Hagerty</td>
            </tr>
            {/* row 3 */}
            <tr>
                <td>Brice Swyre</td>
            </tr>
            </tbody>
        </table>
        </div>        
    );
};

export default CategoryList;