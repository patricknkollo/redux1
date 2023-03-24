import Players from "./components/Players";

import { Provider } from "react-redux";
import Buteurs from "./components/ButeursList";
import { store } from "./redux/store/Store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Buteurs />
      </div>
    </Provider>
  );
}

export default App;
