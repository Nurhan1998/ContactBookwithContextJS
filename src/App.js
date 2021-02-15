import Routes from "./Routes";
import "./App.css";
import ContactContextProvider from "./contexts/ContactsContext";

function App() {
  return (
    <ContactContextProvider>
      <Routes />
    </ContactContextProvider>
  );
}

export default App;
