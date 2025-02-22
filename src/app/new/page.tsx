"use client";
import { useState } from "react";

const New = () => {
  const [state, setState] = useState<NewState>({
    commitMessage: "",
    content: "",
  });

  const submit: React.ComponentProps<"form">["onSubmit"] = async (event) => {};

  const updateCommitMessage: React.ComponentProps<"input">["onChange"] = (
    event
  ) =>
    setState((state) => ({
      ...state,
      commitMessage: event.target.value,
    }));

  const updateContent: React.ComponentProps<"textarea">["onChange"] = (event) =>
    setState((state) => ({ ...state, content: event.target.value }));

  return (
    <form {...{ onSubmit: submit }}>
      <input
        {...{ onChange: updateCommitMessage, value: state.commitMessage }}
      />

      <textarea {...{ onChange: updateContent, value: state.content }} />
    </form>
  );
};

interface NewState {
  commitMessage: string;
  content: string;
}

export default New;
