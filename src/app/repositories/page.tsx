"use client";
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
        <article key={repository.id} {...{ children: repository.name }} />
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
