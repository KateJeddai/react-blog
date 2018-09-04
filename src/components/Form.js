import React from 'react';
import moment from 'moment';

export class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: props.post ? props.post.title : '',
            text: props.post ? props.post.text : '',
            time: props.post ? props.post.time : '',
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
        let time = moment().format('x');
            
        const text = e.target.value;
        this.setState(() => ({ text, time }));
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
               {this.state.error && <p>{this.state.error}</p>}
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={this.handleTitleChange} />
                <label>Text</label>
                <textarea value={this.state.text} onChange={this.handleTextChange}></textarea>
                <button type="submit">Save Post</button>
            </form>
        );    
    };    
};