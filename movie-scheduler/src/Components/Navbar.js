import OpenMovieForm from 'OpenMovieForm'
import RemoveMovieForm from 'RemoveMovieForm'

const Navbar = () => {
    
    openNewMovie = () =>{
    }

    openRemoveMovie = () =>{

    }

    return (
        <div className='navbar'>
            <button className='addButton' onClick={openNewMovie}>Add Movie</button>
            <button className='removeButton' onClick={openRemoveMovie}>Remove Movie</button>
        </div>
    )
}

export default Navbar
