import { Schema } from "effect";

export class User extends Schema.Class<User>("@event-app-httpapi-repro/User")({
  id: Schema.String,
  email: Schema.String,
}) {}
