import React from 'react';
import '../css/likeButton.scss';
import ThumbUp from '@material-ui/icons/ThumbUp';

class LikeButton extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            likes: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick = () => {
        this.setState((prevState) => ({
            likes: prevState.likes + 1
        }));
        console.log(this.state.likes);
    }
    render(){
        return(
            <div className="like-button">
                <span>{`${this.state.likes}`}</span> <ThumbUp className="icon" /> <p onClick={this.handleClick}>Like</p> 
            </div>    
        );
    }
}

export default LikeButton;