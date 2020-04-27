import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import DocumentCreate from "./routes/DocumentCreate";
import DocumentList from "./routes/DocumentList";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact component={DocumentList} />
        <Route path="/create" exact component={DocumentCreate} />
      </BrowserRouter>
    </div>
  );
};

export default App;
