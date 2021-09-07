const DisplayError = ({ error }) => {
  if (!error) {
    return null;
  }

  const { message } = error;

  return <p style={{ color: "red" }}>{message}</p>;
};

export default DisplayError;
