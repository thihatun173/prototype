const express = require('express');
const router = express.Router();
const meetingController = require('../controllers/meetingController');

// Route to schedule a new meeting
router.post('/', meetingController.scheduleMeeting);

module.exports = router;
