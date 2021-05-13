import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import Header from "./components/Header";
import theme from "./components/Theme";
import Form from "./components/Form/Form";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Form />
      </Router>
    </ThemeProvider>
  );
}

export default App;
