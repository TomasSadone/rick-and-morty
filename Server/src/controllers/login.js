const users = require('../utils/login');
const login = (req, res) => {
  const { email, password } = req.query;
  const user = users.find(
    (user) => user.email === email && user.password === Number(password)
  );
  return user ? res.json({ access: true }) : res.json({ access: false });
};
module.exports = { login };
