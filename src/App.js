//import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import "./App.css";
import Layout from "./components/Layout";
import MainPage from "./components/MainPage";

function App() {
  return (
    <React.Fragment>
      <Layout>
        <MainPage />
      </Layout>
    </React.Fragment>
  );
}

export default App;
