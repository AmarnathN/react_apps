import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from "./CommentDetail";

const App = () =>{
    return (
        <div className= "ui container comments">
            <CommentDetail author="Amar" />
            <CommentDetail author="Akbar" />
            <CommentDetail author="Antony" />
        </div>
    );
    
};

ReactDOM.render(<App />, document.querySelector('#root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
