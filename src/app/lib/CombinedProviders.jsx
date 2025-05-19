import { RouterProvider } from "react-router-dom";
import { router } from "../routes/router";
import { Provider } from "react-redux";
import { store } from "../model/store";

export function CombinedProviders() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}
