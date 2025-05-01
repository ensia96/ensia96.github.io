"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getRepositoryContents } from "@/lib/github";

const RepositoryContents = () => {
  const [state, setState] = useState<RepositoryContentsState>({
    repositoryContents: [],
  });
  const searchParams = useSearchParams();
  const path = searchParams.get("path") ?? "";
  const repository = searchParams.get("repository") ?? "";

  const effectOnInitialize = () => {
    setupRepositoryContents(path, repository);
  };

  const setupRepositoryContents = async (path: string, repository: string) => {
    const repositoryContents = await getRepositoryContents({
      owner: "ensia96",
      path,
      repository,
    });
    setState((state) => ({ ...state, repositoryContents }));
  };

  useEffect(effectOnInitialize, [path, repository]);

  return (
    <main>
      {state.repositoryContents.map((repositoryContent) => (
        <Link
          key={repositoryContent.sha}
          {...{
            href: {
              pathname:
                repositoryContent.type === "file"
                  ? "/repositories/contents/raw"
                  : "/repositories/contents",
              query: { path: repositoryContent.path, repository },
            },
          }}
        >
          <article {...{ children: repositoryContent.name }} />
        </Link>
      ))}
    </main>
  );
};

interface RepositoryContent {
  content: string;
  name: string;
  path: string;
  sha: string;
  type: string;
}

interface RepositoryContentsState {
  repositoryContents: RepositoryContent[];
}

export default RepositoryContents;
