import React, { Suspense } from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import "./i18n"
import "./styles/index.css"
import App from "./App"
import { persistor, store } from "./store"
import Spinner from "./ui/spinner/Spinner"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <Suspense fallback={<Spinner />}>
        <App />
      </Suspense>
    </PersistGate>
    <ToastContainer />
  </Provider>,
)
