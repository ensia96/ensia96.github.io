"use client";
import { useState } from "react";
import { createNewCommit } from "@/lib/test";
import { Markdown } from "@/lib/markdown";

const markdown = new Markdown();

const New = () => {
  const [state, setState] = useState<NewState>({
    commitMessage: "",
    content: "",
    owner: "",
    path: "",
    ref: "",
    repository: "",
    token: "",
  });

  const submit: React.ComponentProps<"form">["onSubmit"] = async (event) => {
    event.preventDefault();
    try {
      await createNewCommit({
        commitMessage: state.commitMessage,
        content: state.content,
        owner: state.owner,
        path: state.path,
        ref: state.ref,
        repo: state.repository,
        token: state.token,
      });
    } catch (error: unknown) {
      console.log("error :", error);
      alert("오류가 발생했습니다.");
    }
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
      [event.target.name]: event.target.value,
    }));

  return (
    <form {...{ className: CLASS.FORM, onSubmit: submit }}>
      {[
        { label: "token", name: "token" },
        { label: "owner", name: "owner" },
        { label: "repository", name: "repository" },
        { label: "reference", name: "ref" },
        { label: "path", name: "path" },
        { label: "commit message", name: "commitMessage" },
      ].map(({ label, name }) => (
        <div key={name}>
          <label {...{ children: label, className: CLASS.LABEL }} />

          <input
            {...{
              className: CLASS.INPUT,
              name,
              onChange: updateInput,
              value: state[name as keyof NewState],
            }}
          />
        </div>
      ))}

      <label {...{ children: "content", className: CLASS.LABEL }} />

      <textarea
        {...{
          className: CLASS.TEXTAREA,
          name: "content",
          onChange: updateTextarea,
          value: state.content,
        }}
      />

      <button {...{ className: CLASS.BUTTON, children: "제출" }} />

      <article
        {...{
          dangerouslySetInnerHTML: { __html: markdown.parse(state.content) },
        }}
      />
    </form>
  );
};

const CLASS = {
  BUTTON: "",
  FORM: "flex flex-col",
  INPUT: "",
  LABEL: "",
  TEXTAREA: "resize-none",
};

interface NewState {
  commitMessage: string;
  content: string;
  owner: string;
  path: string;
  ref: string;
  repository: string;
  token: string;
}

export default New;
