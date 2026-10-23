/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly GITHUB_OWNER?: string;
  readonly GITHUB_TOKEN?: string;
  readonly REPOSITORIES?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
