import React, {useState} from 'react'
import OpenMovieForm from './OpenMovieForm'
import RemoveMovieForm from './RemoveMovieForm'

class Navbar extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            addVisible: false,
            removeVisible: false
        };
    }

    handleAddClick = () => {
        console.log("add clicked");
        if(this.state.addVisible){
            this.setState({
                addVisible: false
            });
        }
        else{
            this.setState({
                addVisible: true,
                removeVisible: false
            });
        }
        console.log(this.state);
    }

    handleRemoveClick = () =>{
        console.log("remove clicked");
        if(this.state.removeVisible){
            this.setState({
                removeVisible: false
            });
        }
        else{
            this.setState({
                addVisible: false,
                removeVisible: true
            });
        }
        console.log(this.state);
    }

    render(){
        return(
            <div className='navbar'>
                <button className='addButton' onClick={this.handleAddClick}>Add Movie</button>
                <button className='removeButton' onClick={this.handleRemoveClick}>Remove Movie</button>
                <div>{this.state.addVisible ? <OpenMovieForm /> : null}</div>
                <div>{this.state.removeVisible ? <RemoveMovieForm /> : null}</div>           
            </div>
        )
    }
}

export default Navbar
