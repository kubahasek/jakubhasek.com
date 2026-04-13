import { H3, serve } from "h3-v2";
import productionServer from "./dist/server/server.js";

const port = Number(process.env.PORT ?? 3000);
const hostname = process.env.HOSTNAME ?? "0.0.0.0";

const app = new H3();
app.mount("/", productionServer.fetch);

serve(app, {
  hostname,
  port,
});
