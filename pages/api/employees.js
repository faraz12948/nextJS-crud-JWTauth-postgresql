import nc from "next-connect";
import { getAllEmployee } from '../../controller/employee'
const handler = nc();
handler.get(getAllEmployee);
export default handler;