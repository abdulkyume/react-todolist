export default interface useri {
  username: String;
  email: String;
  password: String;
  todoList: {
    title: String;
    description: String;
    time: Date;
    complete_status: boolean;
    repeat_status: boolean;
  }[];
}
