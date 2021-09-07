const Loading = ({ loading }) => {
  if (!loading) {
    return null;
  }

  return (
    <img
      src="https://i.gifer.com/ZZ5H.gif"
      alt="Loading"
      height="40px"
      width="40px"
      style={{ marginTop: "2rem", marginBottom: "2rem" }}
    />
  );
};

export default Loading;
