import { api } from "./Api";

export const Register = async (data) => {
  try {
    const res = await api.post("/register", data);
    // console.log(data);
    return res;
  } catch (e) {
    // throw new Error(e.message);
    // console.log(e);
    return { error: true, msg: e.message };
  }
};
