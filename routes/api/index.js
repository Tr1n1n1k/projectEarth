const router = require("express").Router();
const calendarRoutes = require("./calendars");

// Book routes
router.use("/calendars", calendarRoutes);

module.exports = router;
