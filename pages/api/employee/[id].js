import nc from "next-connect";
import { getEmployeeById } from '../../../controller/employee'
const handler = nc();
handler.get(getEmployeeById);
export default handler;