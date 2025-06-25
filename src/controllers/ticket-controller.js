const TicketService = require("../services/email-service");

const create = async (req, res) => {
  try {
    const response = await TicketService.createNofication(req.body);
    return res.status(201).json({
      success: true,
      data: response,
      message: "Successfully registered an email reminder",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      data: {},
      message: "Not able to create a notification",
      err: error,
    });
  }
};

module.exports = {
  create,
}; 