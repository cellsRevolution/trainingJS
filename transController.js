const transactions = require('./getAlert');
exports.getTrans = (req, res) => {
  res.status(200).json({
    status: 'success',
    transactions,
  });
};
