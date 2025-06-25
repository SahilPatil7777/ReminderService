const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/serverConfig");

const cron = require("node-cron");
// const { sendBasicEmail } = require("./services/email-service");

const setupAndStartServer = () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
    // sendBasicEmail(
    //   "support@admin.com",
    //   "sahilpatil.work7777@gmail.com",
    //   "Congratulations! You're Selected for the Software Tester Position",
    //   "Hey how are you doing? I hope you are having a great day!"
    // );

    // cron job
    // cron.schedule("*/30 * * * *", () => {
    //   console.log("🕒 Cron job running every 30 minutes");
    // });
  });
};

setupAndStartServer();
