import { Provider } from "react-redux";
import { store } from "./redux/store";
import { RouterProvider } from "react-router";
import router from "./routes/router";

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  );
};

export default App;
