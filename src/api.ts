import { User } from "./domain";
import { Schema } from "effect";
import { HttpApiEndpoint, HttpApiGroup } from "effect/unstable/httpapi";

export const authGroup = HttpApiGroup.make("auth").add(
  HttpApiEndpoint.post("signIn", "/auth/sign-in", {
    payload: Schema.Struct({
      email: Schema.String,
      password: Schema.String,
    }),
    success: Schema.Struct({
      token: Schema.String,
      user: User,
    }),
  }),
);
