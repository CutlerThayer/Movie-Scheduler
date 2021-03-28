import React from 'react'

const Navbar = () => {
    return (
        <div className='Navbar'>
            <button style={addMovie}>Add Movie</button>
            <button style={removeMovie}>Remove Movie</button>
        </div>
    )
}

const addMovie = {
    backgroundColor: 'green'
}

const removeMovie = {
    backgroundColor: 'red'
}

export default Navbar
