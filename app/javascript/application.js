// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import React from "react";
import ReactDOM from "react-dom";
import Greeting from "./components/Greetings";
import { BrowserRouter as Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from './store/store';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Greeting />} />
    </Routes>
  );
}

document.addEventListener("DOMContentLoaded", () => {
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root"));
});