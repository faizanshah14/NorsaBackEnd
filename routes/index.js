const authRouter = require('./auth');
const clientsRouter = require('./clients');
module.exports = function (app) {
  app.use('/api/auth', authRouter);
  app.use('/api/clients', clientsRouter);
};
