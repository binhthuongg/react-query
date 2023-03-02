import { PostModel } from "models/post.model";
import BaseAxios from "./base.axios";

export const getPostsService = (): Promise<PostModel[]> => {
  let url = `https://jsonplaceholder.typicode.com/posts`;
  return BaseAxios.get(url);
};
