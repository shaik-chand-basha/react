import { styled } from "styled-components";
import { Card } from "./UI/Card";

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
let Title = styled.h6`
color:#f8f9fa;
font-size:24px;
font-weight:500;
margin:0;
`

let ModalCard = styled(Card)`
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
min-width:min(400px,98%);
box-sizing:border-box;
padding: 0;
border-radius:0.3rem;

`
export default function Modal(props) {

    return (
        <ModalCard  >
            <div className="modal-title" style={
                {
                    "marginTop": "0",
                    "marginBottom": "0.3rem",
                    backgroundColor: "#6B1281   ",
                    color: "#f8f9fa",
                    padding: "0.5rem",
                    textAlign: "left", borderRadius: "inherit",
                    borderBottomRightRadius: "0",
                    borderBottomLeftRadius: "0"

                }
            }>
                <Title>{props.title}</Title>
            </div>

            <div className="modal-body-wrapper" style={
                {
                    padding: "0.5rem",

                }
            }>
                <div className="message" style={{
                    marginBottom: "1rem"
                }}>{props.body}</div>
                <div className="modal-actions" style={
                    {
                        display: "flex",
                        justifyContent: "flex-end",
                        "marginTop": "2rem",
                        "marginBottom": "0.3rem"
                    }}>
                    <Button className="modal-action" onClick = {props.closeModal}>Okay</Button>
                </div>
            </div>
        </ModalCard>
    )
}
