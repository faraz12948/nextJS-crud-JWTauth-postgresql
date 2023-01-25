import nc from "next-connect";
import { postEmployee } from '../../controller/employee'
const handler = nc();
handler.post(postEmployee);
export default handler;