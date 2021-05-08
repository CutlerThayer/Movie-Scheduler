import React from 'react';

class RemoveMovieForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            titleVal: 'Enter movie title',
            notesVal: 'Enter notes about movie',
            theaterNum: '2'
        };

        this.handleTitleChange = this.handleTitleChange.bind(this);
    }

    handleTitleChange(event){
        this.setState({titleVal: event.target.value});
    }

    render(){
        return(
            <form className='removeMovieForm' onSubmit={this.handleSubmit}>
                <label>
                    Title:  
                    <input value={this.state.titleVal} onChange={this.handleTitleChange} />
                </label>
                <button className='listButton'>Remove from list</button>
            </form>
        );
    }
}

export default RemoveMovieForm;
