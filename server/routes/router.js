import express from 'express';
import { registrateaccount, registeredaccount, deleteaccount} from '../controllers/BookMark.js'
import thirdparty from "../controllers/Thirdparty"
import SignUp from '../controllers/SignUp'
import SignIn from '../controllers/SignIn'
const router = express.Router();

// (매개변수1: bookmark 주소로 요청 발생 시, 매개변수2: bookmark controllers 실행)

router.post('/signup', SignUp);

router.post('/signin', SignIn);

router.post('/thirdparty', thirdparty);

// 북마크 서비스 계정 등록
router.post('/bookmark', registrateaccount)
// 북마크 등록된 서비스 계정 읽기
router.get('/bookmark', registeredaccount)
// 북마크 등록된 서비스 계정 삭제하기
router.delete('/bookmark/:regi_id', deleteaccount)

export default router;