import React from "react";
import Button from "./ButtonCreater";

function Row(props) {
    return (
        <div className="row col-sm-12" id={1}>
            {props.buttons.map((button, index) => (
                <Button 
                button={button} 
                clickFunction={props.clickfunction}
                />
             ))}
        </div>
    )
}

export default Row;