const express = require('express');

const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api.flightService.com', apiRoutes);

app.listen(ServerConfig.PORT, () => {
    console.log(`Server Running on PORT : ${ServerConfig.PORT}`);
});