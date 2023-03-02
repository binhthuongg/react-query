import { AxiosError } from "axios";
import { useState } from "react";
import { useQuery } from "react-query";
import { PostModel } from "../../models/post.model";
import { getPostsService } from "services/post.services";

function Posts() {
  const [posts, setPosts] = useState<PostModel[]>([]);
  // Queries
  const { data, isLoading, error } = useQuery("todos", getPostsService, {
    // refetchInterval: 2000 // gọi lại api mỗi 2s
    retry: 0, // số lần gọi lại api nếu bị lỗi
    onError: (error: AxiosError) => error,
  });
  console.log("error", error);
  if (error) {
    return <>{error?.message}</>;
  }

  if (isLoading) {
    return <>Đang tải...</>;
  }
  if (!data) {
    return <>Không có dữ liệu</>;
  }
  // useEffect(() => {
  //   getPostsService().then((data) => {
  //     setPosts(data);
  //   });
  // }, []);

  return (
    <div>
      <ul className="posts">
        {data.map((post) => (
          <li key={post.id}>
            <span className="id">{post.id}</span>
            <span>: </span>
            <span className="title">{post.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Posts;
