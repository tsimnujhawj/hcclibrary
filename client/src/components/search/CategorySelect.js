import React from "react";

const CategorySelect = props => {
    return(
        <option value={props.id}>{props.category}</option>
    )
}

export default CategorySelect;