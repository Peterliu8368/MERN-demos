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
        {users.map(({ id, name, username, email, address }, i) => (
          <tr key={id}>
            <td>{i + 1}</td>
            <td>{name}</td>
            <td>{username}</td>
            <td>{email}</td>
            <td></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UsersTable;
