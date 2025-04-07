"use client";
import { useState } from "react";
import { Markdown } from "@/lib/markdown";

const markdown = new Markdown();

const New = () => {
  const [state, setState] = useState<NewState>({
    commitMessage: "",
    content: "",
  });

  const submit: React.ComponentProps<"form">["onSubmit"] = async (event) => {};

  const updateCommitMessage: React.ComponentProps<"input">["onChange"] = (
    event,
  ) =>
    setState((state) => ({
      ...state,
      commitMessage: event.target.value,
    }));

  const updateContent: React.ComponentProps<"textarea">["onChange"] = (event) =>
    setState((state) => ({ ...state, content: event.target.value }));

  return (
    <form {...{ className: CLASS.FORM, onSubmit: submit }}>
      <label {...{ children: "commit message", className: CLASS.LABEL }} />

      <input
        {...{
          className: CLASS.INPUT,
          name: "commitMessage",
          onChange: updateCommitMessage,
          value: state.commitMessage,
        }}
      />

      <label {...{ children: "content", className: CLASS.LABEL }} />

      <textarea
        {...{
          className: CLASS.TEXTAREA,
          name: "content",
          onChange: updateContent,
          value: state.content,
        }}
      />

      <article
        {...{
          dangerouslySetInnerHTML: { __html: markdown.parse(state.content) },
        }}
      />
    </form>
  );
};

const CLASS = {
  FORM: "flex flex-col",
  INPUT: "",
  LABEL: "",
  TEXTAREA: "resize-none",
};

interface NewState {
  commitMessage: string;
  content: string;
}

export default New;
