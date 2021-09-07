// useParams hook is to get access to URL parameters, such as id's.
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

const Launch = (props) => {
  // The param names must match the names in the route URL.
  // { urlParam1, urlParam2 } = useParams()
  const { id } = useParams();
  const [launch, setLaunch] = useState(null);

  // Empty array means run this only once on first load of component.
  useEffect(() => {
    axios
      .get("https://api.spacexdata.com/v5/launches/" + id)
      .then((resp) => {
        console.log(resp.data);
        setLaunch(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  if (launch === null) {
    return "Loading";
  }

  return (
    <div className="flex-col align-items-center text-center">
      <h2>{launch.name}</h2>
      <h4>Date</h4>
      <p>{launch.date_local}</p>
      <h4>Details</h4>
      <p>{launch.details}</p>

      {launch.links.flickr.original.map((url, i) => {
        return (
          <img
            key={i}
            src={url}
            alt="launch"
            className="shadow-img rounded mb-md"
            width="50%"
          />
        );
      })}
    </div>
  );
};

export default Launch;
