import nc from "next-connect";
import { createUser } from '../../controller/user'
const handler = nc();
handler.post(createUser);
export default handler;