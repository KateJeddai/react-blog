import React from 'react';
import moment from 'moment';

export class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: '',
            text: '',
            time: '',
            error: ''
        };
    }
    handleSubmit = (e) => {
        e.preventDefault();
                    
        if(!this.state.title || !this.state.text){
            this.setState(() => ({
                error: 'Please provide title and text'
            }));
        }
        else{
            this.setState(() => ({
                error: ''
            }));
            this.props.onSubmit({
                title: this.state.title,
                text:  this.state.text,
                time:  this.state.time
            });
        }
    }
    
    handleTitleChange = (e) => {
        const title = e.target.value;
        this.setState(() => ({ title }));
    }
    handleTextChange = (e) => {
        let time = moment().format();
            console.log(time);
        const text = e.target.value;
        this.setState(() => ({ text, time }));
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
               {this.state.error && <p>{this.state.error}</p>}
                <label>Title</label>
                <input type="text" onChange={this.handleTitleChange} />
                <label>Text</label>
                <textarea onChange={this.handleTextChange}></textarea>
                <button type="submit">Save Post</button>
            </form>
        );    
    };    
};