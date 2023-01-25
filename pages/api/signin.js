import nc from "next-connect";
import { getUser } from '../../controller/user'
const handler = nc();
handler.post(getUser);
export default handler;