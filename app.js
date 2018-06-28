
/*
//React.createElement(component, props, ...children) 
everything gets compiled to:
React.createElement(component/props, {propsitems:[]}, ...children component)


A React component in ES6 & JSX:
var App = () => ( // a function 
  <div>Some cliche salutation</div> //returns JSX, which represents the intended HTML of the rendered component.
);

compiles to :
var App = function App() {
  return React.createElement(
    "div",
    null,
    "Some cliche salutation"
  );
};

Render template: 
ReactDOM.render(componentInstance, DOMElement)
*/

// var App = () => ( 
//   <div>
//     <h2>Grocery List </h2>  {/* JSX representations of HTML*/}
//     <FrozenFruits/> // return JSX representations of React component instances
//     <Yogurt/>
//   </div>
// );

// var FrozenFruits = () => (
//   <li>
//     Frozen Fruits
//   </li>
// )


// Using props
// var Grocerylist = (props) => ( //
//   <ul>
//     <li>{props.items[0]}</li>
//     <li>{props.items[1]}</li>
//   </ul>
// )

// var App = () => ( 
//   <div>
//     <h2>Grocery List</h2> {/* every time a new html tag, react create new component*/}
//     <Grocerylist items = {['Frozen Fruits', 'yogurt']}/> {/* create an instance of 'grocerylist component, pass in props*/}
//   </div>
// );

// /*
// transpiled vertion:

// var Grocerylist = function Grocerylist(props) { //Grocerylist is referred to as props 
//   return React.createElement(
//     'ul',
//     null,
//     React.createElement(
//       'li',
//       null,
//       props.items[0]
//     ),
//     React.createElement(
//       'li',
//       null,
//       props.items[1]
//     )
//   );
// };

 
// var App = function App() { 
//   return React.createElement(
//     'div',
//     null,
//     React.createElement(
//       'h2',
//       null,
//       'Grocery List'
//     ),
//     React.createElement(Grocerylist, { items: ['Frozen Fruits', 'yogurt'] })
//   );
// };
// */

// Prop: 

// var TodoList = (props) => {

//   // This function will be called when the first `<li>` below is clicked on
//   // Notice that event handling functions receive an `event` object
//   // We want to define it where it has access to `props`

//   var onListItemClick = (event) => {
//     console.log('I got clicked');
//   };

//   // Because we used curly braces with this arrow function
//   // we have to write an explicit `return` statement
//     //very similar to handling events on the DOM
//   return (
//     <ul>
//       <li onClick={onListItemClick}>
//       {props.todos[0]}</li>
//             {/* React events are named using camelCase, rather than lowercase.
//               With JSX you pass a function as the event handler, rather than a string.*/}
//       <li>{props.todos[1]}</li>
//       <li>{props.todos[2]}</li>
//     </ul>
//   );
// }




// // A class component can be defined as an ES6 class
// // that extends the base Component class included in the React library

// class TodoListItem extends React.Component {

//   // A `constructor` method is expected on all ES6 classes
//   // When React instantiates the component,
//   // it will pass `props` to the constructor
//   constructor(props) {
//     // Equivalent to ES5's React.Component.call(this, props)
//     super(props);
//   }

//   // Every class component must have a `render` method
//   // Stateless functional components are pretty much just this method
//   render() {

//     // `props` is no longer passed as an argument,
//     // but instead accessed with `this.props`
//     console.log(this.props.todokey);
//     return (
//       <li>{this.props.todokey}</li>
//     );

//   }

// }

// // Update our `TodoList` to use the new `TodoListItem` component
// // This can still be a stateless function component!
// var TodoList = (props) => (
//   <ul>
//     {props.todos.map(eachtodo =>
//       <TodoListItem todokey ={eachtodo} />
//     )}
//   </ul>
// );

// //    props.todos.map(function (eachtodo) {
//     //   return React.createElement(TodoListItem, { todo: eachtodo });
//     // })

// var App = () => (
//   <div>
//     <h2>My Todo List</h2>
//     <TodoList todos={['Learn React', 'Crush Recast.ly', 'Maybe sleep']}/> 
//   </div>
// );

// //    React.createElement(TodoList, { todos: ['Learn React', 'Crush Recast.ly', 'Maybe sleep'] })


// ReactDOM.render(<App />, document.getElementById("app"));




class TodoListItem extends React.Component {
  constructor(props) {
    super(props);

    // `state` is just an object literal
    this.state = {
      done: false
    };
  }

  // When a list item is clicked, we will toggle the `done`
  // boolean, and our component's `render` method will run again
  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {
    // Making the style conditional on our `state` lets us 
    // update it based on user interactions.
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none'
    };

    // You can pass inline styles using React's `style` attribute to any component
    // snake-cased css properties become camelCased this this object
    return (
      <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.todo}</li>
    );
  }
}


// // Update our `TodoList` to use the new `TodoListItem` component
// // This can still be a stateless function component!
var TodoList = (props) => (
  <ul>
    {props.todos.map(todo =>
      <TodoListItem todo={todo} />
    )}
  </ul>
);


// var App = () => (
//   <div>
//     <h2>My Todo List</h2>
//     <TodoList todos={['Learn React', 'Crush Recast.ly', 'Maybe sleep']}/> 
//   </div>
// );



// ReactDOM.render(<App />, document.getElementById("app"));




// class GroceryListItems extends React.component {
//   constructor(props){
//     super(props);
//   }
  
//   rendere(){
//     return(
    
    
    
//     );
    
//   }
  
// } 




