import * as Yup from "yup";
export const loginSchema = Yup.object().shape({
    userName: Yup.string().required("نام کاربری الزامی می باشد"),
    password:Yup.string().required("رمز عبور الزامی می باشد")
  });