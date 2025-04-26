"use client";
import Link from "next/link";
import { join } from "path";
import { useEffect, useState } from "react";
import { getRepositories } from "@/lib/github";

const Repositories = () => {
  const [state, setState] = useState<RepositoriesState>({ repositories: [] });

  const effectOnInitialize = () => {
    setupRepositories();
  };

  const setupRepositories = async () => {
    const repositories = await getRepositories({ owner: "ensia96" });
    setState((state) => ({ ...state, repositories }));
  };

  useEffect(effectOnInitialize, []);

  return (
    <main>
      {state.repositories.map((repository) => (
        <Link
          key={repository.id}
          {...{
            href: {
              pathname: join("repositories", "contents"),
              query: { repository: repository.name, path: "" },
            },
          }}
        >
          <article {...{ children: repository.name }} />
        </Link>
      ))}
    </main>
  );
};

interface Repository {
  id: number;
  name: string;
}

interface RepositoriesState {
  repositories: Repository[];
}

export default Repositories;
