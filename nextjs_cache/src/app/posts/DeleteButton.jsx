"use client";

import { use } from "react";
import { deletePost } from "../_actions/post.action";
import { AppContext } from "../_components/AppProvider";

export default function DeleteButton({ postId }) {
  const { message } = use(AppContext);
  console.log(message);
  return (
    <button
      className="px-2 py-1 bg-red-600 text-white"
      onClick={() => deletePost(postId)}
    >
      Xóa
    </button>
  );
}
