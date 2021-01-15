import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
// import faker from "faker";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Amar"
        timeAgo="Today at 6:00 PM"
        commentText="Nice blog post yar!!!"
        avatar=" https://picsum.photos/id/1035/200"
      />
      <CommentDetail author="Akbar" timeAgo="Today at 6:01 PM" commentText="Amar, I +1 you!!" avatar=" https://picsum.photos/id/1062/200" />
      <CommentDetail
        author="Antony"
        timeAgo="Today at 6:10 PM"
        commentText="The best blog post yar!!!"
        avatar="https://picsum.photos/id/237/200"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
