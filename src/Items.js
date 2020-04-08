import React from 'react';
import './Items.css';

const Items = (props) =>{
    return(
        <div className="itemsContainer">
            <div className="item">
                <div>
                <li>{props.item}</li>
                </div>
                <div className="trash">
                <i class="fas fa-trash-alt" onClick={props.clk}></i>
                </div>
            </div>
        </div>
    )
}
export default Items;