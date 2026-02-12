import { auth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth";

export const { POST, GET } = toNextJsHandler(auth);
