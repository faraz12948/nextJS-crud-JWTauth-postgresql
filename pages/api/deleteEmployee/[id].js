import nc from "next-connect";
import { deleteEmployee } from '../../../controller/employee'
const handler = nc();
handler.delete(deleteEmployee);
export default handler;