import { Button, Input } from "@material-tailwind/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Search = ({ onSearch }) => {
  const [text, setText] = useState("");
  return (
    <>
      <div className="flex flex-col gap-8 text-left">
        <h1 className="block font-sans text-4xl antialiased font-semibold leading-tight tracking-normal text-blue-gray-900">
          GitHub's Repo-Hub
        </h1>
        <div className="hidden items-center gap-x-2 lg:flex">
          <div className="relative flex w-full gap-2 md:w-max">
            <Input
              onChange={(e) => setText(e.target.value)}
              type="search"
              placeholder="GitHub Username"
              containerProps={{
                className: "min-w-[288px]",
              }}
              className=" !border-t-blue-gray-300 pl-9 placeholder:text-blue-gray-300 focus:!border-blue-gray-300"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <Link to="/repolist">
            <Button
              size="md"
              className="rounded-lg "
              onClick={() => onSearch(text)}
            >
              Search
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Search;
