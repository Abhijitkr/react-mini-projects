import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export function Profile() {
  const { user } = useContext(UserContext);
  if (!user) return <span>Invalild Username or Password!</span>;
  else return <span>Welcome {user.username}!</span>;
}
