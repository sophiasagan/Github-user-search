import React, { useState, useEffect } from "react";
import mockUser from "./mockData.js/mockUser";
import mockRepos from "./mockData.js/mockRepos";
import mockFollowers from "./mockData.js/mockFollowers";
import axios from "axios";
import { MdLocalDining } from "react-icons/md";

const rootUrl = "https://api.github.com";

const GithubContext = React.createContext();

// access to provider and consumer - e.g. GithubContext.Provider

const GithubProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState(mockUser);
  const [repos, setRepos] = useState(mockRepos);
  const [followers, setFollowers] = useState(mockFollowers);
  // request loading
  const [requests, setRequests] = useState(0)
  cosnt [loading, setIsLoading] = useState(false)
  // error
  useEffect(() => )

  return (
    <GithubContext.Provider value={{githubUser, repos, followers}}>{children}</GithubContext.Provider>
  );
};

export { GithubProvider, GithubContext };
