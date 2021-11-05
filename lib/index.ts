import { Logger } from "@daangamesdg/logger";

export * from "./fetch";
export * from "./types";
export * from "./hooks";

export const logger = new Logger({ name: "DH-Dashboard" });
