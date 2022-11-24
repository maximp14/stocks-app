export interface User {
  id?: number;
  username: string;
  password: string;
}

export interface UserState {
  currentUser: User | null;
  authenticated: boolean;
  isFetching: boolean;
  message: Message | null;
}

export interface Message {
  severity: "error" | "warning" | "info" | "success" | undefined;
  text: string;
}
