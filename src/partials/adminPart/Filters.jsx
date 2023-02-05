import React from "react";
import AdminFiltersFilter from './AdminFiltersFilter';

function FiltersPart(){
    return(
        <>
        <div className="admin-main-content-box">
            <div className="admin-main-content-line">
                <div className="admin-main-content-product-box">
                    <p className="admin-main-content-line-text">Filter</p>
                </div>
            </div>
            <AdminFiltersFilter />
        </div>
        </>
    )
}

export default FiltersPart;
