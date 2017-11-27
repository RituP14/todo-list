import { toggleToDo } from "../actions/index";
import {connect} from "react-redux";
import TodoList from "../components/TodoList";

const getVisibleTodos = (todos,filter) => {
    switch(filter){
        case 'SHOW_COMPLETED':
            return todos.filter(t=>t.completed)
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed)
        case 'SHOW_ALL':
        default :
            return todos
    }
}

const mapStateToProps = state =>{
    return{
        todos : getVisibleTodos(state.todos,state.visiblityFilter)
    }
}

const mapDispatchTpProps = dispatch =>{
    return {
        onTodoClick : id =>{
            dispatch(toggleToDo(id))
        }
    }
}

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchTpProps
)(TodoList)

export default VisibleTodoList