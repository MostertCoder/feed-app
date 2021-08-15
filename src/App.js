import React, { useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import axios from "axios";

import LandingScreen from "./screens/LandingScreen";
import FeedScreen from "./screens/FeedScreen";

const App = () => {
  const history = useHistory();

  const [user, setUser] = useState({});
  const [tweets, setTweets] = useState([]);

  const [errorMessage, setErrorMessage] = useState("");

  const handleFetchUser = (name) => {
    console.log(name);

    axios
      .get("http://localhost:5000", {
        params: {
          name: name,
        },
      })
      .then((response) => {
        if (response.data.status === "success") {
          setUser({
            name: name,
            followsCount: response.data.followsCount,
          });

          setTweets([...response.data.feed]);

          history.push("/feed");
        } else {
          setErrorMessage(response.data.error);
        }
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage("Something went terribly wrong. Please try again!");
      });
  };

  return (
    <Switch>
      <Route path="/feed" exact>
        <FeedScreen user={user} tweets={tweets} />
      </Route>
      <Route path="*">
        <LandingScreen
          fetchUser={handleFetchUser}
          errorMessage={errorMessage}
        />
      </Route>
    </Switch>
  );
};

export default App;
