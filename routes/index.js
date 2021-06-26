const authRouter = require('./auth');
const clientsRouter = require('./clients');
const merchantsRouter = require('./merchants');
module.exports = function (app) {
  app.use('/api/auth', authRouter);
  app.use('/api/clients', clientsRouter);
  app.use('/api/merchants', merchantsRouter);
};
