import { striped } from "./UsersTable.module.css";

const UsersTable = ({ users }) => {
  if (!users) {
    return null;
  }

  return (
    <table className={striped}>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, i) => (
          <tr key={user.id}>
            <td>{i + 1}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UsersTable;
