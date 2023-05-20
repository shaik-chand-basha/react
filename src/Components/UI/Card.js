import style from "./Card.module.css"
import styleC from "styled-components"
let CardDiv = styleC.div`
border-radius: 0.3rem;
box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
  rgba(0, 0, 0, 0.3) 0px 3px 7px -3px; 
  background-color:#f8f9fa;
  margin-bottom:0.6rem;
  margin-top:0.6rem;
  padding:0.5rem 1rem;
`
export function Card(props) {
    return (
        <CardDiv  className={props.className ?? ""}>{props.children}</CardDiv>
    )
}
