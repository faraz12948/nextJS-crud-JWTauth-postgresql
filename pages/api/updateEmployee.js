import nc from "next-connect";
import { putEmployee } from '../../controller/employee'
const handler = nc();
handler.post(putEmployee);
export default handler;