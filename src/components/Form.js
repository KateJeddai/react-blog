import React from 'react';
import moment from 'moment';
import '../css/form.scss';

export class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: props.post ? props.post.title : '',
            text: props.post ? props.post.text : '',
            time: props.post ? props.post.time : '',
            file: props.post ? props.post.file : null,
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
                text: this.state.text,
                time: this.state.time,
                file: this.state.file
            });
        }
    }
    
    handleTitleChange = (e) => {
        let title = e.target.value;
        this.setState(() => ({ title }));
    }
    handleImageUpload = (e) => {
        let fileImg = URL.createObjectURL(e.target.files[0]),
            file = fileImg.substr(5);
            console.log('url: ' + file);
        this.setState(() => ({ file }));
    }
    handleTextChange = (e) => {
        let time = moment().format('x');
        let text = e.target.value;
        this.setState(() => ({ text, time }));
    }

    render(){
        return(
          <div className="container">
            <div className="form">  
              <form onSubmit={this.handleSubmit}>
                 {this.state.error && <p>{this.state.error}</p>}
                 <label>Title</label>
                 <input type="text" value={this.state.title} onChange={this.handleTitleChange} />
                 <label>Upload an image</label>
                 <input type='file' name="image" multiple accept="image/*" onChange={this.handleImageUpload} />  
                 <label>Text</label>
                 <textarea value={this.state.text} onChange={this.handleTextChange}></textarea>
                 <button className="button" type="submit">Save Post</button>
              </form>
            </div>  
          </div> 
        );    
    };    
};

