const express = require('express');
const cors = require('cors');
const app = express();
const clientRoutes = require('./routes/clients');
const meetingRoutes = require('./routes/meetings');

app.use(cors());
app.use(express.json());

app.use('/api/clients', clientRoutes);
app.use('/api/meetings', meetingRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
