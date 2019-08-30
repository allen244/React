console.log('App.js is running!');

const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: []
};


var appRoot = document.getElementById('app');

const onFormSubmit = (e) =>{
  e.preventDefault();
  const option = e.target.elements.option.value;
  e.target.elements.option.value="";
  if(option){
    app.options.push(option);
    renderApplication();
    //e.target.elements.option.value="";
  }

}

const remove =() =>{
  app.options=[];
  renderApplication();
};
const renderApplication = () =>{
const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
    <p>{app.options.length}</p>
    <button onClick={remove}>Remove All</button>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
    <form onSubmit={onFormSubmit} >
      <input type="text" name="option"/>
    <button>Add Option</button>
    </form>
  </div>
);
  ReactDOM.render(template,appRoot);
};
renderApplication();

// const user = {
//   name: 'Andrew',
//   age: 26,
//   location: 'Philadelphia'
// };
// function getLocation(location) {
//   if (location) {
//     return <p>Location: {location}</p>;
//   }
// }
// const templateTwo = (
//   <div>
//     <h1>{user.name ? user.name : 'Anonymous'}</h1>
//     {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
//     {getLocation(user.location)}
//   </div>
// );




