"use server";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import z from "zod";

//Kích hoạt server function
export const loginAction = async (prevState, formData) => {
  const schema = z.object({
    name: z.string({ error: "Tên bắt buộc phải nhập" }),
    email: z
      .string({ error: "Email bắt buộc phải nhập" })
      .pipe(z.email("Email không đúng định dạng")),
  });
  const email = formData.get("email");
  const password = formData.get("password");
  try {
    const data = await schema.parseAsync({ email, password });
    //Call api
    await new Promise((resolve) => setTimeout(resolve, 2000));
    //Chuyển hướng
    //   return redirect("/");
    return {
      message: "Login success",
      success: true,
    };
  } catch (error) {
    return {
      success: false,
      message: "Validate failed",
      error: Object.fromEntries(
        error.issues.map(({ path, message }) => [path[0], message]),
      ),
    };
  }
};

export const likeAction = async () => {
  console.log("Like");
  const cookieStore = await cookies();
  cookieStore.set("like", 1, {
    httpOnly: true,
  });
};
