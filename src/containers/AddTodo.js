import {connect} from "react-redux";
import React from "react";
import { addToDo } from "../actions";

let AddTodo = ({dispatch}) =>{
    let input
    return(
        <div>
            <form onSubmit ={e=>{
                    e.preventDefault()
                    if(!input.value.trim()){
                    return
                    }
                dispatch(addToDo(input.value))
                input.value=''
                }}
                >
                <input 
                    ref={node =>{
                     input=node
                }}
                />
                <button type="Submit">
                    ADD TODO
                </button>
            </form>
        </div>
    )
}
AddTodo= connect()(AddTodo)

export default AddTodo