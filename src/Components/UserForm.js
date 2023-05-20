import { styled } from "styled-components"
import { Card } from "./UI/Card"
import { toPascalCase } from "../Utility/Utility"
import { useState } from "react"
import { randomStr } from "../Utility/Utility"
let FormStyled = styled.form`

`
let Button = styled.button`
    padding:4px 8px;
    font-size:16px;
    border-radius:0.2rem;
    border:1px solid #ae3ec9;
    background-color:#ae3ec9;
    color:#f8f9fa;
    outline:none;
    cursor:pointer;
    transition:all 500ms ease-in-out;
    &:hover,&:active{
        outline:none;
        background-color:#862e9c;
    }
`
let FormGroup = styled.div`
display:flex;
flex-direction:column;
margin-bottom:0.5rem;
`
let FormInput = styled.input`
padding:4px 8px;
border:1.5px solid #adb5bd;
border-radius:0.25rem;
font-size:16px;
outline:none;
transition:all 500ms ease-in-out;
&:hover,&:focus{
    border:1.5px solid #343a40;
}

`

let FormLabel = styled.label`

font-size:16px;
font-weight:500;
margin-bottom:0.3rem;

`
export default function UserForm(props) {
    const toPascalInputHandler = e => {
        console.log("Called")
        e.target.value = toPascalCase(e.target.value)
    }
    const [username, setUsername] = useState("")
    const [age, setAge] = useState(0)
    const usernameHandler = e => {
        let value = toPascalCase(e.target.value);
        setUsername(value)
    }
    const ageHandler = e => { 
        let value = e.target.value
          
        setAge(e.target.value)
     }
    
    function addUser(e) {
        e.preventDefault();
        let isError = false;
        if(age<1){
            isError = true;
            props.openModal({
                isVisible:true,
                title:"Invalid Input",
                body:"Please enter valid age ie. age>0"
            })
          
        }  
        if(!username){
            isError = true;
            props.openModal({
                isVisible:true,
                title:"Invalid Input",
                body:"Username should not be empty"
            })
            
        }
        if(isError){
            return
        }
        let item = {
            username: username,
            age: Number.parseInt(age),
            id:randomStr("user-")
        }
        props.addItem(items => [item, ...items])
        setUsername("")
        setAge(0)
    }
    return (
        <Card>
            <FormStyled onSubmit={addUser}>
                <div className="form-inputs">
                    <FormGroup className="form-group">
                        <FormLabel htmlFor="">Username</FormLabel>
                        <FormInput type="text" onChange={usernameHandler} value={username} className="form-input" name="username" />
                    </FormGroup>
                    <FormGroup className="form-group">
                        <FormLabel htmlFor="">Age(Years)</FormLabel>
                        <FormInput type="number" onChange={ageHandler} step={1} value={age} className="form-input" name="age" />
                    </FormGroup>
                </div>
                <div className="form-actions">
                    <Button type="submit" className="form-action">Add User</Button>
                </div>
            </FormStyled>
        </Card>
    )
}
