import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Post {
    title: string;
    content: string;
}
export interface backendInterface {
    deletePost(title: string): Promise<void>;
    getPost(title: string): Promise<Post>;
    getPosts(): Promise<Array<Post>>;
    post(title: string, content: string): Promise<void>;
}
