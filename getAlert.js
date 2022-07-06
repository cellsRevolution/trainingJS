transactions = [];
const superagent = require('superagent');
function getAlert(startTime) {
  setTimeout(() => {
    endTime = Math.floor(Date.now() / 1000);
    superagent
      .get(
        `https://api.whale-alert.io/v1/transactions?api_key=OO5TFgDg7j9vo0mAbRG95CgDUHSAP6JV&min_value=500000&start=${startTime}&end=${endTime}`
      )
      .then((req, res) => {
        transactions.push(req.body);
        getAlert(endTime);
      });
  }, 60000);
}
getAlert(Math.floor(Date.now() / 1000));
module.exports = transactions;
