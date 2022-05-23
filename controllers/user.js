const User = require('../models').User;

module.exports = {
  async list(req, res) {
   const get_user =  await User.findAll({});
   

  },
};