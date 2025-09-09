import { Github } from "@/lib/github";

export default async function Browse() {
  const github = new Github();
  await github.initialize();
  return <main>{github.render()}</main>;
}
