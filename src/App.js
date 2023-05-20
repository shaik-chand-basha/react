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
 const [items,addItem]  = useState([])
  return (
    <>

      <div className="container">
        <UserForm   addItem={addItem} />
        <Users items={items}></Users>
      </div>
    </>
  );
}

export default App;
