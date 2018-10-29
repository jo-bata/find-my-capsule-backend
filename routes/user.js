const router = require('express').Router();
const conn = require('../config/mysql');

// 친구 목록 조회하기
router.get('/:userId/follow', function(req, res) {
  
});

// 친구 추가하기
router.post('/:userId/follow', function(req, res) {
  
});

// 유저 받은 메세지함 조회하기
router.get('/:userId/recieve', function(req, res) {
  const sql = 'SELECT * FROM message WHERE reciever_uid = ? AND found = 1';
  conn.query(sql, [req.params.userId], function(err, results, fields) {
    if(err) throw err;
  }, function(results) {
    const data = results;
    const sql = 'SELECT * FROM user WHERE uid = ?';
    conn.query(sql, [], function(err, results, fields) {
      if(err) throw err;
    }, function(results) {
      for(let i = 0; i < data.length; i++) {
        delete data[i].reciever_uid;
        data[i].sender_name = results;
      }
      res.send(data);
    });
  });
});

// 유저 보낸 메세지함 조회하기
router.get('/:userId/send', function(req, res) {
  
});

// 친구에게 메세지 보내기
router.post('/:userId/message', function(req, res) {
  
});

// push 알림 발생시 미수신 메세지 정보 가져오기
router.get('/:userId/message', function(req, res) {
  
});

// 유저 단일 메세지 조회하기
router.get('/:userId/message/:messageId', function(req, res) {
  
});

module.exports = router;