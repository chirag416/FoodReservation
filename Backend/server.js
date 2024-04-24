import app from "./app.js";
// import cors from "cors";

const port = process.env.PORT || 4000

app.listen(process.env.PORT, () => {
  console.log(`Server Running On Port ${port}`);
});