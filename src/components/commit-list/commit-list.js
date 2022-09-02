import styles from "./commit-list.module.css";
import { useEffect, useState } from "react";
import { Octokit } from "@octokit/core";

import Commit from "../commit/commit";
import CountDown from "../count-down/count-down";

async function getCommits({ owner, repo, apiKey }) {
  try {
    const octokit = new Octokit({
      auth: apiKey,
    });

    const { data } = await octokit.request(
      `GET /repos/${owner}/${repo}/commits`,
      {
        owner: "OWNER",
        repo: "REPO",
      }
    );
    console.log(data[0]);
    return data;
  } catch (error) {
    console.error(error);
  }
}

export default function CommitList({ owner, repo, apiKey }) {
  const [commits, setCommits] = useState([]);

  useEffect(() => {
    console.log("useEffect commit List");
    getCommits({ owner, repo, apiKey }).then((data) => setCommits(data));
  }, [apiKey, owner, repo]);

  const refresh = () => {
    getCommits({ owner, repo, apiKey }).then((data) => setCommits(data));
  };

  return (
    <div>
      <button className={styles.button} onClick={refresh}>
        Refresh
      </button>
      <CountDown onCountEnd={refresh} />
      {commits.map(({ sha, commit, html_url }) => (
        <Commit
          key={sha}
          author={commit.author.name}
          date={commit.author.date}
          message={commit.message}
          url={html_url}
        />
      ))}
    </div>
  );
}