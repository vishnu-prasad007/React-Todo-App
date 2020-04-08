import React, { useState } from 'react';
import Logosvg from './logo2.svg';
import './Addtodo.css';
import Radium from 'radium';
const Addtodo = (props) => {
   
    const [updateset,updateState]=useState({
        num:0
    })

    const fabAddbutton = () => {
        if (updateset.num===3) {
            return {
                ':hover': {
                    color: '#1089ff',
                    cursor: 'pointer',
                }
            }
        } else {
            return {
                ':hover': {
                    color: '#52de97',
                    cursor: 'pointer',
                }
            }
        }
    }
   const update =()=>{
       updateState({
           num:updateset.num+1
       })
   }

    return (
        <div className="container-left">
            <div className="imgtodo">
                <img src={Logosvg}></img>
                <button onClick={()=>update()}>Click</button>
                    <p>{updateset.num}</p>
            </div>
            <div className="addwrapper">
                <div className="wrapperinput">
                    <div>
                        <input placeholder="Add Item" onChange={props.inpu} value={props.val} />
                    </div>
                    <div>
                        <i class="fas fa-plus-circle fa-2x" onClick={props.clk} style={fabAddbutton()} ></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Radium(Addtodo);