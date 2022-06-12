import Login from "../components/Login";
import { useMoralis } from "react-moralis";

export default function Home() {
  const { isAuthenticated, logout } = useMoralis();
  return (
    <div>
      {isAuthenticated ? (
        <p>
          You are logged in
          <br />
          <button onClick={logout}>Sign out</button>
        </p>
      ) : (
        <Login />
      )}
    </div>
  );
}
