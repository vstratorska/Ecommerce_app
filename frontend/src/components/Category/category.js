import React from "react";

const makeCategoryToLower = (props) =>
{
    return (props.c.toString().charAt(0)+props.c.toString().substring(1).toLowerCase().replace("_", "-"));
}

export default makeCategoryToLower;