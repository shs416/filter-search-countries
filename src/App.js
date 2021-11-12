import { useState } from 'react';

import Search from './components/Search';
import TaskList from './components/CountryList';

import data from './data.js';

const App = () => {

  const [text, setText] = useState("");
  
  /* get text input from Search component */
  function callback(s) {
    setText(s);
  }

  return (
      <div>
        <Search callback={callback} />
        <TaskList text={text} data={data}/>  
      </div>
  );
}




// class App extends React.Component {
//   render() {
//     return <h1>hello</h1>
//   }
// }

export default App;
