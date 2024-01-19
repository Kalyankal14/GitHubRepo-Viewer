import "./App.css";
import { Routes, Route } from "react-router-dom";
import Search from "./components/Search";
import RepoList from "./components/RepoList";
import RepoDetails from "./components/RepoDetails";
import { useState } from "react";
import Loading from "./components/Loading";
import Error from "./components/Error";

function App() {
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectRepo, setSelectRepo] = useState(null);
  const fetchDetails = async (username) => {
    setLoading(true);
    try {
      setRepos([]);
      const response = await fetch(
        `https://api.github.com/users/${username}/repos`
      );
      const data = await response.json();
      setSelectRepo("");
      setRepos(data);
      console.log(data);
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const onSelectRepo = (repo) => {
    setSelectRepo(repo);
  };
  return (
    <div className="flex justify-center	items-center">
      <Routes>
        <Route path="/" element={<Search onSearch={fetchDetails} />} />
        <Route
          path="repolist"
          element={<RepoList repos={repos} onSelectRepo={onSelectRepo} />}
        />
        <Route path="repodetails" element={<RepoDetails repo={selectRepo} />} />
      </Routes>
      {loading && <Loading />}
      {error && <Error />}
    </div>
  );
}

export default App;
