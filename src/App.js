import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import Form from './components/Form'
import ApiList from './components/SvcComponent/ApiList'
function App() {
  return (
    <div className="App">
    <ApiList/>
      {/* <Hello/>
    <Greet name = "Jitendra" surName = "Samal">
      <p>This is the paragraph from Jitendra</p>
    </Greet>
    <Greet name = "Dharmendra" surName = "Biswal">
      <button>submit</button>
    </Greet>
    <Welcome name = "Jitendra" surName = "Samal"> </Welcome>
    <Welcome name = "Dharmendra" surName = "Biswal"> </Welcome> */}

    {/* <Message></Message> */}
    {/* <Counter/> */}
    {/* <FunctionClick />
     <ClassClick/>  */}
     {/* <EventBind></EventBind> */}
     {/* <Form></Form> */}
    
    
    </div>
  );
}

export default App;
