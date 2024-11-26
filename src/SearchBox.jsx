import React from "react";

export default function SearchBox(props) {
    return (
        <>
            <input type={props.type ?? 'text'} onChange={(e) => props.ChangeHandler(e.target.value)}  className="form-control my-3" placeholder={props.placeholder} />
        </>
    )
}