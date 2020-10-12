const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name:{ //회원이름
    type:String,
    maxlength:50
  },
  email:{ //이메일
    type:String,
    trim:true, //공백 제거
    unique:1 //중복 이메일 불가능하게
  },
  password:{
    type:String,
    minlength:5 //최소 길이
  },
  lastname:{
    type:String,
    maxlength:50
  },
  role:{
    type:Number //회원, 관리자 등 권한을 숫자로 설정
    default:0
  },
  image:String,
  token:{
    type:String
  },
  tokenExp:{ //토큰의 유효기간
    type:Number
  }

})
const User = mongoose.model('User',userSchema)

module.exports = {User}
