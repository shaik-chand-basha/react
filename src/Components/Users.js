import style from "styled-components"
import User from "./User"
import { Card } from "./UI/Card"
import PropTypes from "prop-types"
let TextCenter = style.li`
text-align:center;
`
let UsersDiv = style.ul`
border-radius:0.3rem;
list-style-type:none;
padding:0;
    & li{
            width:100%;
            padding:4px 8px;
            border:1px solid #495057;
            box-sizing:border-box;
            font-size:16px;
            font-weight:400;
            border-radius:inherit;
            margin-bottom:5px;
    }
`
export default function Users(props) {
    let items = props.items
    let itemsElement = <TextCenter>No users data exists</TextCenter>
    return (

        <Card>
            <UsersDiv>
                {items.length == 0
                    ?
                    itemsElement
                    :
                    items.map(x => <User {...x} key={Math.random()} />)
                }
            </UsersDiv>
        </Card >

    )
}

Users.defaultProps = {
    items: []
}