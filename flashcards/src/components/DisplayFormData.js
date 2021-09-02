const DisplayFormData = (props) => {
  return (
    <div>
      <h4>Form Data</h4>
      <p>Category: {props.category}</p>
      <p>Front: {props.front}</p>
      <p>Back: {props.back}</p>
    </div>
  );
};

export default DisplayFormData;
