import React from 'react';

class OpenMovieForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            titleVal: 'Enter movie title',
            notesVal: 'Enter notes about movie',
            theaterNum: '2'
        };

        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleNotesChange = this.handleNotesChange.bind(this);
        this.handleNumChange = this.handleNumChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleTitleChange(event){
        this.setState({titleVal: event.target.value});
    }

    handleNotesChange(event){
        this.setState({notesVal: event.target.value});
    }

    handleNumChange(event){
        this.setState({theaterNum: event.target.value});
    }

    addMovieToList(title, notes, theaterNum){
        const newMovie = new Movie(title, notes, theaterNum);
        movieList.movies.push(newMovie);
    }

    render(){
        return(
            <form className='openMovieForm' onSubmit={this.handleSubmit}>
                <label>
                    Title:  
                    <input value={this.state.titleVal} onChange={this.handleTitleChange} />
                </label>
                <label>
                    Notes:  
                    <input value={this.state.notesVal} onChange={this.handleNotesChange} />
                </label>
                <label>
                    Theater Number:  
                    <input value={this.state.theaterNum} onChange={this.handleNumChange} />
                </label>
                <button className='listButton'>Add to list</button>
            </form>
        );
    }
}

export default OpenMovieForm;
