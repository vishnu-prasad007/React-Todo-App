import React,{useState} from 'react';
import './App.css';
import Addtodo from './Addtodo'
import Items from './Items';

const App = () => {
  const [todoItemState,setTodoItem]=useState({
    input:"",
    items:[]
  })
  const addTodoItem= (item)=>{
    if(item.length>=1||item.length>=1)
    {
    const itemObject = {todo:item};
    setTodoItem({
      input:"",
      items: todoItemState.items.concat(itemObject)
    })
  }
    console.log(todoItemState.items)
  }
  const setInputName=(e)=>{
    const inputItem =e.target.value;
    const oldItems=todoItemState.items;
    setTodoItem({
      input:inputItem,
      items:oldItems
    })
    }

    const deleteTodo = (todoIndex)=>{
      const refItems = todoItemState.items.slice();
      refItems.splice(todoIndex,1);
      setTodoItem({
        input:"",
        items:refItems
      })
    }
  return (
    <div className="App">
      <div className="container">
        <div className="title"><h1>Todo</h1></div>
        <div className="wrapper">
          <Addtodo inpu={setInputName} clk={()=>addTodoItem(todoItemState.input)} val={todoItemState.input}/>
          <div>
            <h2>Item</h2>
            {
              todoItemState.items.map((itm,index)=>{
                return <Items item={itm.todo} key={index} clk={()=>deleteTodo(index)}/>
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
