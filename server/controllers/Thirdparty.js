import  express from "express"
import  connection from "../utils/database"

const thirdparty = (req, res, next) => {
  const sns_id = req.body.response.id;
  const sns_email = req.body.response.email;

  connection.query(
    "INSERT INTO user_info (sns_id,sns_email) VALUES(?,?)",
    [sns_id, sns_email],
    function (err) {
      if (err) throw err;
      res.send("입력완료");
    }
  );
};

export default thirdparty;
