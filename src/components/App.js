import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisiblityTodoList from '../containers/VisibleTodoList'

const App = () =>(
    <div>
        <AddTodo/>
        <VisiblityTodoList/>
        <Footer/>
    </div>
)

export default App
