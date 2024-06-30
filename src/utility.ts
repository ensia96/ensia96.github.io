import { JoinUrl } from "./type";

export const joinUrl: JoinUrl = (...args: string[]): string => args.join("/");
