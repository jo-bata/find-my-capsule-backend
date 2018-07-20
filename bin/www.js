#!/usr/bin/env node
const app = require('../app');
const config = require('../config/express-config.json');

app.set('port', process.env.PORT || config.port);

const server = app.listen(app.get('port'), () => {
  console.log(`Express server listening on port ${server.address().port}`);
});
