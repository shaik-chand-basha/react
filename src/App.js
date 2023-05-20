import logo from './logo.svg';
import './App.css';

import Users from './Components/Users';
import style from "styled-components"
import UserForm from './Components/UserForm';
import { useState } from 'react';
import Modal from './Components/Modal';
const DUMMY_USERS = [
  {
    username: "chand",
    age: 45
  }
]

function App() {
  const [items, addItem] = useState([])
  const [modalData, openModal] = useState({
    isVisible: false,
    title: null,
    body: null
  })
  const closeModal = (e) => {
    openModal({
      isVisible: false,
      title: null,
      body: null
    })
  }
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
        {
          modalData.isVisible && <Modal {...modalData} closeModal={closeModal} />
        }
        <UserForm addItem={addItem} openModal={openModal}/>
        <Users items={items} deleteUserHandler={deleteUserHandler}></Users>
      </div>
    </>
  );
}

export default App;
