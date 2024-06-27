import { Component } from "react";

class SingleComment extends Component {
  render() {
    return (
      <div className="border border-info ">
       
        <p>
          <strong>Comment:</strong> {this.props.comment.comment}
        </p>
        <p>
          <strong>Rate:</strong> {this.props.comment.rate}
        </p>
      </div>
    );
  }
}
export default SingleComment;
