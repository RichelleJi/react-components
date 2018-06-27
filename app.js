
/*

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

var TodoList = (props) => {

  // This function will be called when the first `<li>` below is clicked on
  // Notice that event handling functions receive an `event` object
  // We want to define it where it has access to `props`

  var onListItemClick = (event) => {
    console.log('I got clicked');
  };

  // Because we used curly braces with this arrow function
  // we have to write an explicit `return` statement
    //very similar to handling events on the DOM
  return (
    <ul>
      <li onClick={onListItemClick}>
      {props.todos[0]}</li>
            {/* React events are named using camelCase, rather than lowercase.
              With JSX you pass a function as the event handler, rather than a string.*/}
      <li>{props.todos[1]}</li>
      <li>{props.todos[2]}</li>
    </ul>
  );
}

var App = () => (
  <div>
    <h2>My Todo List</h2>
    <TodoList todos={['Learn React', 'Crush Recast.ly', 'Maybe sleep']}/> // Here we are creating an instance of the `TodoList` component
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));