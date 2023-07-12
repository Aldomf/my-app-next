"use client";
import { useRouter } from "next/navigation";

function Users({ users }) {
  const router = useRouter();

  return (
    <ul className="list-group">
      {users.map((user) => (
        <li className="list-group-item d-flex justify-content-between align-items-center list-group-item-action" key={user.id} onClick={() => router.push(`/users/${user.id}`)}>
          <div>
            <p5>
              {user.id} {user.first_name} {user.last_name}
            </p5>
            <p>{user.email}</p>
          </div>
          <img style={{borderRadius: "50%"}} src={user.avatar} />
        </li>
      ))}
    </ul>
  );
}

export default Users;
