import { Github } from "@/lib/github";

export async function generateStaticParams() {
  const github = new Github();
  await github.initialize();
  return github.paths;
}

export default async function Read({
  params,
}: {
  params: Promise<{ path: string[] }>;
}) {
  const param = await params;
  const github = new Github();
  return <main>{github.render({ path: param.path })}</main>;
}
