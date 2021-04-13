import React from 'react';

class OpenMovieForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            titleVal: 'Enter movie title'
        };

        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    render(){
        return(
            <form className='openMovieForm' onSubmit={this.handleSubmit}>
                <label>
                    Title:  
                    <input value={this.state.titleVal} />
                </label>
            </form>
        );
    }
}

export default OpenMovieForm;
