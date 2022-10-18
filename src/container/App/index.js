import React from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { getUser } from "./reducer";
import HomePage from "../HomePage";
import MainPage from "../MainPage";
import ItemView from "../ItemView";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import "./App.css";

function App() {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getUser());
  // }, []);

  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/app" element={<MainPage />}></Route>
        <Route path="/itemView/:id" element={<ItemView />}></Route>
      </Routes>
      <ToastContainer />
    </React.Fragment>
  );
}

export default App;
