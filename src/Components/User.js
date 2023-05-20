import { Card } from "./UI/Card"
import style from "styled-components"
import { toPascalCase } from "../Utility/Utility";
let UserDiv = style.li``


function User(props) {
    let ageMessage = props.age && "(" + props.age + " years old)";
   
    return (
        <UserDiv>
            {toPascalCase(props.username)+" "+ageMessage}
        </UserDiv>
    )
}

export default User