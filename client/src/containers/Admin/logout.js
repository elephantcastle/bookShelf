import React from 'react'
import axios from "axios"

function Logout(props) {

    let request = axios.get(`/api/logout`).then(
        request => { setTimeout(() => { props.history.push("/") }, 2000) }
    )

    return (
        <div className="logout_container">
            <h1>Bye!</h1>
        </div>
    )
}

export default Logout
