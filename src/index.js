const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/serverConfig");
const apiRoutes = require("./routes/index");

// const { sendBasicEmail } = require("./services/email-service");
const jobs = require("./utils/job");

const setupAndStartServer = () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/api", apiRoutes);

  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);

    jobs();
    // sendBasicEmail(
    //   "support@admin.com",
    //   "sahilpatil.work7777@gmail.com",
    //   "Congratulations! You're Selected for the Software Tester Position",
    //   "Hey how are you doing? I hope you are having a great day!"
    // );
  });
};

setupAndStartServer();
