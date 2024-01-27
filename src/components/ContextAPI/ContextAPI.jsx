import "./style.css";
import { Login } from "./contextComponents/Login";
import { Profile } from "./contextComponents/Profile";
import { UserContextProvider } from "./context/UserContextProvider";

function ContextAPI() {
  return (
    <UserContextProvider>
      <div className="context-container flex flex-col gap-5">
        <h1 className="text-2xl ">React Concept of Context API</h1>
        <Login />
        <Profile />
      </div>
    </UserContextProvider>
  );
}

export default ContextAPI;
