import React from 'react'
import './styles.css';
const Filter = ({ handleSubmit, label }) => {
    return (
        <form onSubmit={handleSubmit}>
            <label>{label}</label>
            <input type="text" />
            <button className="btn">Filter</button>
        </form>
    )
}

export default Filter