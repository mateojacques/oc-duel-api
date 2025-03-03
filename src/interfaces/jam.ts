// Model
export interface Jam {
  id: string;
  creator_id: string;
  topic_id: number;
  description: string;
  title: string;
  image_url: string | null;
  thumbnail_url: string | null;
  entries_count: number;
  created_at: string;
  updated_at: string;
  start_date: string;
  end_date: string;
}

// Controller
export interface IGetJamById {
  params: { jamId: string };
}

export interface ICreateJamBody {
  creator_id: string;
  topic_id: number;
  description: string;
  title: string;
  start_date: string;
  end_date: string;
}

export interface ICreateJam {
  body: ICreateJamBody;
}
