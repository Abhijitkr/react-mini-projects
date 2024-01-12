export default function Users({ users, handleClick }) {
  return (
    <div className="user-container">
      <ul>
        {users &&
          users.map((user, index) => (
            <li key={index} onClick={handleClick}>
              {user}
            </li>
          ))}
      </ul>
    </div>
  );
}
