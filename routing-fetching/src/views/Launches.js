/* 
This is a "view" component because it renders the whole "launches" page.

A component that is NOT a view renders only part of a page.
*/

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Launches = (props) => {
  const [launches, setLaunches] = useState(null);

  // Empty array means run this only once on first load of component.
  useEffect(() => {
    axios
      .get("https://api.spacexdata.com/v5/launches")
      .then((resp) => {
        console.log(resp.data);
        setLaunches(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (launches === null) {
    return (
      <img
        src="https://i.chzbgr.com/full/9422388224/hBA4AC335/gif-elon-musk-dancing-forward-and-backward-on-stage-shanghai"
        alt="Horrible"
      />
    );
  }

  return (
    <div className="flex-col align-items-center text-center">
      {launches.map((launch) => {
        return (
          <div key={launch.id} className="w-25pct mb-md shadow rounded">
            <Link to={`/launches/${launch.id}`}>
              <h2>{launch.name}</h2>
            </Link>
            <p>Date: {launch.date_local}</p>
            <p>
              Has images?{" "}
              {launch.links.flickr.original.length > 0 ? "Yes" : "No"}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Launches;
