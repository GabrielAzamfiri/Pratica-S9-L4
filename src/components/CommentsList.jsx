import { Component } from "react";


class CommentsList extends Component {
    state = {
        comments: []
    };

    // author:     "ciaocaro@caro.caro"
    // comment: "130 Martin Garrix si vola"
    // createdAt : "2024-01-26T10:53:21.282Z"
    // elementId  :   "65b38f0931a73f0019d5c801"
    // rate  :  5
    // updatedAt :   "2024-01-26T10:53:21.282Z"
    // __v :   0
    // _id  :   "65b38f2131a73f0019d5c802"

    render() {
        return (
            <div>
                {this.props.comments.map((comment, index) => (
                    <div key={index}>
                        <p><strong>Author:</strong> {comment.author}</p>
                        <p><strong>Comment:</strong> {comment.comment}</p>
                        <p><strong>Rate:</strong> {comment.rate}</p>
                    </div>
                ))}
            </div>
            
        );
    }
}
export default CommentsList