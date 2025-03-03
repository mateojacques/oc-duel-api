// Model
export interface User {
    id: string;
    name: string;
    email: string;
    password: string;
    username: string;
    avatar_url: string | null;
    cover_url: string | null;
    instagram_url: string | null;
    deviantart_url: string | null;
    twitter_url: string | null;
    personal_website_url: string | null;
    created_at: string;
    updated_at: string;
}

// Controller
export interface IGetUserById {
  params: { userId: string };
}

export interface ICreateUserBody {
    name: string;
    email: string;
    password: string;
    username: string;
    avatar_url?: string;
    cover_url?: string;
    instagram_url?: string;
    deviantart_url?: string;
    twitter_url?: string;
    personal_website_url?: string;
}

export interface ICreateUser {
    body: ICreateUserBody
}
