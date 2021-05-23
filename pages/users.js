import Link from "next/link";
import { useState } from "react";


export default function Users() {
  const [users, setUsers] = useState([
    { id: 1, name: "Vasia" },
    { id: 2, name: "Petia" },
  ]);
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              <Link href={`./users/${user.id}`}>
                <a>{user.name}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
