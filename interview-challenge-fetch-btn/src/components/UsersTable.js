const UsersTable = ({ users }) => {
  if (!users) {
    return null;
  }

  return users.map((user) => <p key={user.id}>{user.name}</p>);
};

export default UsersTable;
