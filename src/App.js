import logo from './logo.svg';
import './App.css';

import Users from './Components/Users';
import style from "styled-components"
import UserForm from './Components/UserForm';
import { useState } from 'react';
const DUMMY_USERS = [
  {
    username: "chand",
    age: 45
  }
]

function App() {
  const [items, addItem] = useState([])
  const deleteUserHandler = e => {
    let id = e.currentTarget.dataset.id;
    addItem(itemsData => {
      let index = itemsData.findIndex(x => x.id === id)
      if (index >= 0) {
        itemsData.splice(index, 1)
      }
      return [...itemsData];
    });
  }
  return (
    <>

      <div className="container">
        <UserForm addItem={addItem} />
        <Users items={items} deleteUserHandler={deleteUserHandler}></Users>
      </div>
    </>
  );
}

export default App;
