"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getRepositoryContents } from "@/lib/github";
import { Markdown } from "@/lib/markdown";

const markdown = new Markdown();

const RepositoryContentsRaw = () => {
  const [state, setState] = useState<RepositoryContentsRawState>({
    repositoryContentsRaw: "",
  });
  const searchParams = useSearchParams();
  const path = searchParams.get("path") ?? "";
  const repository = searchParams.get("repository") ?? "";

  const effectOnInitialize = () => {
    setupRepositoryContentsRaw(path, repository);
  };

  const setupRepositoryContentsRaw = async (
    path: string,
    repository: string,
  ) => {
    const repositoryContents = await getRepositoryContents({
      owner: "ensia96",
      path,
      repository,
    });
    setState((state) => ({
      ...state,
      repositoryContentsRaw: new TextDecoder("utf-8").decode(
        Uint8Array.from(
          Array.from(atob(repositoryContents.content)).map((character) =>
            character.charCodeAt(0),
          ),
        ),
      ),
    }));
  };

  useEffect(effectOnInitialize, [path, repository]);

  return (
    <main>
      <article
        {...{
          dangerouslySetInnerHTML: {
            __html: markdown.parse(state.repositoryContentsRaw),
          },
        }}
      />
    </main>
  );
};

interface RepositoryContentsRawState {
  repositoryContentsRaw: string;
}

export default RepositoryContentsRaw;
