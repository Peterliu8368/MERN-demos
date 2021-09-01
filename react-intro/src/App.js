import logo from './logo.svg';
import './App.css';

import Counter from "./components/Counter"

function App() {
  return (
    <div className="App">
      {/* This syntax executes the Counter function / constructor component. And passes any props (arguments) to the function. */}

      {/* new Counter({title: "Counting Bugs", description="Bugs in the code!"}) */}

      <Counter title="Counting Bugs" description="Bugs in the code!" />
      <Counter title="Counting Users" description="Users making the bugs." />
    </div>
  );
}

export default App;
