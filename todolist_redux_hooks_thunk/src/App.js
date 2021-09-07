import React, { useEffect } from "react";
import NewNote from "./containers/NewNote";
import Notes from "./containers/Notes";

import { initializeNotes } from "./store/actions";
import { useDispatch } from "react-redux";

import "./App.css";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeNotes());
  }, [dispatch]);

  return (
    <div>
      <NewNote />
      <Notes />
    </div>
  );
};

export default App;
