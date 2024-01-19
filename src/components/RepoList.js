import { Button, IconButton } from "@material-tailwind/react";
import React, { useState } from "react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import {
  List,
  ListItem,
  ListItemPrefix,
  Avatar,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const RepoList = ({ repos, onSelectRepo }) => {
  const reposPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const lastRepoIndex = currentPage * reposPerPage;
  const firstRepoIndex = lastRepoIndex - reposPerPage;
  const currRepos = repos.slice(firstRepoIndex, lastRepoIndex);

  const getItemProps = (index) => ({
    variant: currentPage === index ? "filled" : "text",
    color: "gray",
    onClick: () => setCurrentPage(index),
  });

  const next = () => {
    if (currentPage < Math.ceil(repos.length / reposPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <div>
      {currRepos.map((repo) => (
        <List key={repo.id}>
          <Link to="/repodetails" onClick={() => onSelectRepo(repo)}>
            <ListItem>
              <ListItemPrefix>
                <Avatar
                  variant="circular"
                  alt="candice"
                  src={repo.owner.avatar_url}
                />
              </ListItemPrefix>

              <div>
                <Typography variant="h6" color="blue-gray">
                  {repo.name}
                </Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal"
                >
                  {repo.description}
                </Typography>
              </div>
            </ListItem>
          </Link>
        </List>
      ))}
      {repos.length > reposPerPage && (
        <div className="flex items-center gap-4">
          <Button
            variant="text"
            className="flex items-center gap-2"
            onClick={prev}
            disabled={currentPage === 1}
          >
            <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
          </Button>
          <div className="flex items-center gap-2">
            {Array.from(
              { length: Math.ceil(repos.length / reposPerPage) },
              (_, index) => (
                <IconButton key={index + 1} {...getItemProps(index + 1)}>
                  {index + 1}
                </IconButton>
              )
            )}
          </div>
          <Button
            variant="text"
            className="flex items-center gap-2"
            onClick={next}
            disabled={currentPage === Math.ceil(repos.length / reposPerPage)}
          >
            Next
            <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default RepoList;
