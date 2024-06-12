import * as Yup from "yup";
export const newSicknessSchema = Yup.object().shape({
  fname: Yup.string().required("نام الزامی می باشد"),
  lname: Yup.string().required("نام خانوادگی الزامی می باشد"),
  age: Yup.number("عدد وارد کنید")
    .required("وارد کردن سن الزامی بود")
    .positive("سن وارد شده باید عددی مثبت باشد")
    .integer("عدد اعشاری برای سن قابل قبول نیست"),
  doctor: Yup.string("متن وارد کنید").required("نام پزشک الزامی بوده"),
  sickness: Yup.string().required("نام بیماری الزامیمی باشد"),
});
