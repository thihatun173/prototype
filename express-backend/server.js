const express = require('express');
const path = require('path');
const clientRoutes = require('./routes/clientRoutes');
const meetingRoutes = require('./routes/meetingRoutes');
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Client and Meeting Routes
app.use('/clients', clientRoutes);
app.use('/meetings', meetingRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
