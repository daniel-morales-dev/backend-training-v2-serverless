import { handlerPath } from "../../libs/handlerResolver.lib";

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  description: "Hello world",
  events: [
    {
      httpApi: {
        method: "GET",
        path: "/health",
      },
    },
  ],
};
