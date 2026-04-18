"use server";

import { revalidatePath, revalidateTag } from "next/cache";

export const createPost = async (prevState, formData) => {
  const title = formData.get("title");
  if (!title) {
    return {
      message: "Title is required",
    };
  }
  const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_API}/posts`, {
    method: "POST",
    body: JSON.stringify({ title }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    return {
      message: "Server error",
    };
  }
  //   revalidatePath("/posts");
  revalidateTag("posts:list", {
    expire: 0, //Xóa ngay lập tức
  });

  // revalidateTag("posts:list", "max");

  // revalidatePath("/posts");

  return {
    message: "Create post success",
  };
};

export const deletePost = async (id) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API}/posts/${id}`,
    {
      method: "DELETE",
    },
  );
  if (!response.ok) {
    return {
      message: "Server error",
    };
  }
  revalidateTag("posts:list", {
    expire: 0,
  });
  return {
    message: "Delete success",
  };
};

export const updatePost = async (formData) => {
  const title = formData.get("title");
  const id = formData.get("id");
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API}/posts/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    },
  );
  if (!response.ok) {
    return {
      success: false,
    };
  }
  revalidateTag("posts:list", {
    expire: 0,
  });
  return {
    success: true,
  };
};
