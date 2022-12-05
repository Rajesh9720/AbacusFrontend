
import Login from './UserCRUD/Login';
import UserAction from './UserCRUD/UserActions';
import { BrowserRouter, Route} from "react-router-dom";

function App() {
  return (    
    <>
     
      <BrowserRouter>
        <Route exact path="/" component={Login} />
		    <Route exact path="/useraction" component={UserAction} />
      </BrowserRouter>

      </>
     
  );
}

export default App;
