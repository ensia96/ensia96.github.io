"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getRepositoryContents, putRepositoryContents } from "@/lib/github";
import { markdown, prettier } from "@/lib";

const RepositoryContentsRaw = () => {
  const [state, setState] = useState<RepositoryContentsRawState>({
    message: "",
    repositoryContentsRaw: "",
    repositoryContentsSha: "",
    token: "",
  });
  const searchParams = useSearchParams();
  const path = searchParams.get("path") ?? "";
  const repository = searchParams.get("repository") ?? "";

  const effectOnInitialize = () => {
    setupRepositoryContentsRaw(path, repository);
  };

  const format: React.ComponentProps<"button">["onClick"] = async () => {
    const formatted = await prettier.format({
      content: state.repositoryContentsRaw,
      filepath: path,
    });
    setState((state) => ({ ...state, repositoryContentsRaw: formatted }));
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
          [...atob(repositoryContents.content)].map((character) =>
            character.charCodeAt(0),
          ),
        ),
      ),
      repositoryContentsSha: repositoryContents.sha,
    }));
  };

  const updateInput: React.ComponentProps<"input">["onChange"] = (event) =>
    setState((state) => ({
      ...state,
      [event.target.name]: event.target.value,
    }));

  const updateTextarea: React.ComponentProps<"textarea">["onChange"] = (
    event,
  ) =>
    setState((state) => ({
      ...state,
      repositoryContentsRaw: event.target.value,
    }));

  const submitRepositoryContentsRaw: React.ComponentProps<"form">["onSubmit"] =
    async (event) => {
      event.preventDefault();
      putRepositoryContents({
        content: state.repositoryContentsRaw,
        message: state.message,
        owner: "ensia96",
        path,
        repository,
        sha: state.repositoryContentsSha,
        token: state.token,
      });
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

      <form {...{ onSubmit: submitRepositoryContentsRaw }}>
        <input
          {...{
            name: "message",
            onChange: updateInput,
            placeholder: "message",
            value: state.message,
          }}
        />

        <input
          {...{
            name: "token",
            onChange: updateInput,
            placeholder: "token",
            value: state.token,
          }}
        />

        <textarea
          {...{ onChange: updateTextarea, value: state.repositoryContentsRaw }}
        />

        <button {...{ children: "format", onClick: format, type: "button" }} />

        <button {...{ children: "submit" }} />
      </form>
    </main>
  );
};

interface RepositoryContentsRawState {
  message: string;
  repositoryContentsRaw: string;
  repositoryContentsSha: string;
  token: string;
}

export default RepositoryContentsRaw;
