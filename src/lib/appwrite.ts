import { Client, Databases, Query } from "appwrite";

// Appwrite configuration
const client = new Client();
client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('67e5d88a00274aea117b');

const databases = new Databases(client);

// Constants for your Appwrite database and collections
const DATABASE_ID = 'your_database_id';
const POSTS_COLLECTION_ID = 'your_posts_collection_id';
const AUTHORS_COLLECTION_ID = 'your_authors_collection_id';

// Type definitions for blog post and author
interface Author {
    $id: string;
    name: string;
    avatar: string;
    bio: string;
}

interface BlogPost {
    $id: string;
    slug: string;
    title: string;
    content: string;
    category: string;
    date: string;
    readingTime: string;
    coverImage: string;
    authorId: string;
    author?: Author;
}

// Fetch a single post by slug
export const getPostBySlug = async (slug: string): Promise<BlogPost | null> => {
    try {
        const postResponse = await databases.listDocuments(
            DATABASE_ID, 
            POSTS_COLLECTION_ID,
            [Query.equal('slug', slug)]
        );

        if (postResponse.documents.length === 0) return null;

        const post = postResponse.documents[0] as BlogPost;

        // Fetch author details
        const authorResponse = await databases.getDocument(
            DATABASE_ID, 
            AUTHORS_COLLECTION_ID, 
            post.authorId
        );

        post.author = {
            $id: authorResponse.$id,
            name: authorResponse.name,
            avatar: authorResponse.avatar,
            bio: authorResponse.bio
        };

        return post;
    } catch (error) {
        console.error('Error fetching post:', error);
        return null;
    }
};

// Fetch related posts
export const getRelatedPosts = async (postId: string, limit: number = 3): Promise<BlogPost[]> => {
    try {
        const currentPost = await databases.getDocument(
            DATABASE_ID, 
            POSTS_COLLECTION_ID, 
            postId
        );

        const relatedPostsResponse = await databases.listDocuments(
            DATABASE_ID, 
            POSTS_COLLECTION_ID,
            [
                Query.equal('category', currentPost.category),
                Query.notEqual('$id', postId),
                Query.limit(limit)
            ]
        );

        const relatedPosts = await Promise.all(
            relatedPostsResponse.documents.map(async (post) => {
                const authorResponse = await databases.getDocument(
                    DATABASE_ID, 
                    AUTHORS_COLLECTION_ID, 
                    post.authorId
                );

                return {
                    ...post,
                    author: {
                        $id: authorResponse.$id,
                        name: authorResponse.name,
                        avatar: authorResponse.avatar,
                        bio: authorResponse.bio
                    }
                };
            })
        );

        return relatedPosts as BlogPost[];
    } catch (error) {
        console.error('Error fetching related posts:', error);
        return [];
    }
};

export { client, databases };