export interface ICommonTodosResponse {
  data: ICommonTodo[];
}

export interface ICommonTodo {
  userId: number;
  id: number;
  title: string | null;
  completed: boolean;
}

export interface ICommonPostsResponse {
  data: ICommonPost[];
}

export interface ICommonPost {
  userId: number;
  id: number;
  title: string | null;
  body: string;
}
