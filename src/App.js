import React from "react";
import "./App.css";
import Layout from "./components/Layout";
import MainPage from "./components/MainPage";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <Layout>
        <MainPage />
      </Layout>
    </React.Fragment>
  );
}

export default App;
