import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const RepoDetails = ({ repo }) => {
  const formatCreatedAt = (createdAt) => {
    const formattedDate = new Date(createdAt).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    return formattedDate;
  };
  return (
    <Card className="mt-6 w-96">
      <CardHeader color="blue-gray" className="relative h-56">
        <img src={repo.owner.avatar_url} alt="github-profile" />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {repo.name}
        </Typography>
        <Typography variant="small" color="gray" className="font-normal">
          {repo.description || "No Description"}
        </Typography>
        <Typography variant="small" color="gray" className="font-normal">
          By {repo.owner.login}
        </Typography>
        <Typography variant="small" color="gray" className="font-normal">
          Created on {formatCreatedAt(repo.created_at)}
        </Typography>
        <Typography variant="small" color="gray" className="font-normal">
          Forks: {repo.forks_count}
        </Typography>
        <Typography variant="small" color="gray" className="font-normal">
          Stars: {repo.watchers}
        </Typography>
        <Typography variant="small" color="gray" className="font-normal">
          Open issues: {repo.open_issues}
        </Typography>
        <Typography variant="small" color="gray" className="font-normal">
          Language: {repo.language}
        </Typography>
        <Typography variant="small" color="gray" className="font-normal">
          Visibility: {repo.visibility}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Link to={repo.html_url} target="_blank" rel="noopener noreferrer">
          <Button>Repo Link </Button>
        </Link>
        <Link to="/repolist">
          <Button className="ml-6">Back </Button>
        </Link>
        <Link to="/">
          <Button className="ml-6">Home </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default RepoDetails;
