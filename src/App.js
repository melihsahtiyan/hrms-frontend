import "./App.css";
import "semantic-ui-css/semantic.min.css";
import Navi from "./layouts/Navi";
import Dashboard from "./layouts/Dashboard";
import Category from "./pages/Category";
import { Grid, Menu, Table } from "semantic-ui-react";

function App() {
  return (
    <div className="App">
      <Grid>
        <Grid.Row>
          <Navi />
        </Grid.Row>
        <Grid.Row>
          <Dashboard />
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default App;
