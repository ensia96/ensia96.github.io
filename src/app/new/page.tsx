"use client";

const New = () => {
  const submit: React.ComponentProps<"form">["onSubmit"] = async (event) => {};

  return <form {...{ onSubmit: submit }}></form>;
};

export default New;
