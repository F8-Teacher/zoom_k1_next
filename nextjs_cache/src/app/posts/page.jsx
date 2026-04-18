import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import AddForm from "./AddForm";
import DeleteButton from "./DeleteButton";
import EditModal from "./EditModal";
import { getToken } from "../utils/utils";
export const metadata = {
  title: "Danh sách bài viết",
  description: "Danh sách bài viết hot nhất tại F8",
};
const getPosts = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_API}/posts`, {
    // cache: "no-cache",
    next: {
      tags: ["posts:list"],
      revalidate: 15,
    },
  });
  if (!response.ok) {
    throw new Error("Có lỗi khi lấy danh sách posts");
  }
  return response.json();
};
export default async function PostsPage() {
  console.log("posts page");
  const posts = await getPosts();
  await getToken();
  return (
    <div>
      <h1 className="text-3xl mb-3">Posts</h1>
      {posts.map((post) => (
        <div key={post.id} className="mb-3 border-b border-[#ccc] pb-3">
          <h2 className="text-md font-medium">{post.title}</h2>
          <div className="flex mt-3 gap-3">
            <EditModal postId={post.id} />
            <DeleteButton postId={post.id} />
          </div>
        </div>
      ))}
      <AddForm />
    </div>
  );
}

//READ (Cache)
// - List
// - Detail

//CREATE

//UPDATE

//DELETE

//Xóa cache:
// - relvalidatePath(duong-dan)
// - revalidateTag(tag)
// --> Chỉ sử dụng ở trên server action, route handler
