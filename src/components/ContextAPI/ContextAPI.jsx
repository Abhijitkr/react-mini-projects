import "./style.css";
import { Login } from "./contextComponents/Login";
import { Profile } from "./contextComponents/Profile";
import { UserContextProvider } from "./context/UserContextProvider";

function ContextAPI() {
  return (
    <UserContextProvider class="context-container">
      <h1>React Concept of Context API</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default ContextAPI;
