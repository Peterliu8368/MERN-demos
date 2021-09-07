const Address = ({ address: { street, suite, city, zipcode } }) => (
  <span>
    {suite} {street}, {city} {zipcode}
  </span>
);

export default Address;
