import { useState } from "react";
import "./App.css";
import Header from "./components/header/header";
import ApiKeyFrom from "./components/api-key-form/api-key-form";
import CommitList from "./components/commit-list/commit-list";

const gitRepositroy = "https://github.com/Machiraju2025/git-commit";
const owner = "Machiraju2025";
const repo = "git-commit";

function App() {
  const [apiKey, setApiKey] = useState(() => {
    const key = localStorage.getItem("api-key");
    return key;
  });

  return (
    <>
      <Header url={gitRepositroy} />
      <main className="main">
        {apiKey ? (
          <CommitList owner={owner} repo={repo} apiKey={apiKey} />
        ) : (
          <ApiKeyFrom setApiKey={setApiKey} />
        )}
      </main>
    </>
  );
}

export default App;