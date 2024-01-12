import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

export function Login() {
    const { setUser } = useContext(UserContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({ username, password });
    }
    return (
        <form>
            <input type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="username" />
            {" "}
            <input type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password" />
            <button onClick={handleSubmit}>Submit</button>
        </form>
    )
}