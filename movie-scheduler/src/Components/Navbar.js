import OpenMovieForm from './OpenMovieForm'
// import RemoveMovieForm from 'RemoveMovieForm'

const Navbar = () => {
    
    

    return (
        <div className='navbar'>
            <button className='addButton'>Add Movie</button>
            <button className='removeButton'>Remove Movie</button>
            <OpenMovieForm />
        </div>

    )
}

export default Navbar
