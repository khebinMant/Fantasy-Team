import { Provider } from "react-redux";
import { MainRouter } from "./router/MainRouter";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store/store";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainRouter />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
