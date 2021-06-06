import app from "./src/server";
const port = 3000;

const appServer = app.listen(port, () =>
  console.log(`app running on port ${port}`)
);