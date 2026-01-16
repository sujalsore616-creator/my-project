import React from "react";


//Grandchild
function Grandchild(props){
    return <p>{props.message}</p>;

}


//ChildComponent
function Child(props){
    return (
        <div>
            <h2>Child Component</h2>
            <Grandchild message={props.message}/>
            </div>
    );
        
}


//parent Component

function Parent(props){
    const message="Hello From The Parent";
    return (
        <div>
            <h2>Parent Component</h2>
            <Child message={message}/>
            </div>
    );
        
}

export default Parent;
