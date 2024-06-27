import { Component } from "react";

class AddComment extends Component {
    state = {
        comment: "",
    }
    
    addComment = (e) => {
        e.preventDefault();
        
    }
    
    render() {
        return (
            <form onSubmit={this.addComment}>
                <input type="text" value={this.state.comment} onChange={e => this.setState({comment: e.target.value})} placeholder="Add a comment..." />
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default AddComment;