import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import RouterComponent from "./components/Router";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <RouterComponent />
      </Router>
    </Provider>
  );
}

export default App;
