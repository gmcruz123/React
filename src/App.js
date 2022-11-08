import './App.css';
import HelloPureComponent from './components/HelloPureComponent';
import HelloComponent from './components/HelloComponent';
import HelloFunctionalComponent from './components/HelloFunctionalComponent';
import HelloCreateElement  from './components/HelloCreateElement'

function App() {
  return (
    <div className="App">
      <HelloPureComponent />
      <HelloFunctionalComponent />
      <HelloCreateElement />
      <HelloComponent />
    </div>
  );
}

export default App;
