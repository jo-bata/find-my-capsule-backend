const router = require('express').Router();
const conn = require('../config/mysql');

router.get('/login', function(req, res) {
  res.send('auth/login');
});

router.get('/logout', function(req, res) {
  req.logout();
  req.session.save(function() {
    res.redirect('/welcome');
  });
});

router.get('/register', function(req, res) {
  res.send('auth/register');
});

router.post('/register', function(req, res) {
  hasher({ password: req.body.password }, function(err, pass, salt, hash) {
    const user = {
      authId: req.body.username,
      username: req.body.username,
      password: hash,
      salt: salt,
      displayName: req.body.displayName,
      provider: 'local'
    };
    const sql = 'INSERT INTO users SET ?';
    conn.query(sql, user, function(err, results) {
      if(err) {
        console.log(err);
        res.status(500);
      } else {
        res.redirect('/welcome');
      }
    });
  });
});

module.exports = router;