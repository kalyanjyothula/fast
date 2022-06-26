import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "./reducer";
// import "./App.css";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, []);

  return <div>Hello</div>;
}

export default App;
