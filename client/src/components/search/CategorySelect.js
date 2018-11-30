import React from "react";

const CategorySelect = props => {
    return(
        <option value={props.id} name="STUFF HERE">{props.category}</option>
    )
}

export default CategorySelect;