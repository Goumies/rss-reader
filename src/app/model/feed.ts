export interface FeedPayload {
    feed : Feed;
    items : FeedItems[];
    status: string;
}

export interface Feed {
    author: string;
    description: string;
    image: string;
    link: string;
    title: string;
    url: string;
}

export interface FeedItems {
    title: string;
    author: string;
    categories: string[];
    thumbnail: string;
    description: string;
    pubDate: string;
}
