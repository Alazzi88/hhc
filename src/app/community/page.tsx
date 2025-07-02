'use client';
import { useEffect, useState } from "react";

type Post = {
  id: string;
  title: string;
  content: string;
  imageUrl?: string;
  username: string;
  createdAt: string;
};

export default function CommunityPosts() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch('/api/posts').then(res => res.json()).then(setPosts);
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="mb-4 font-bold text-xl text-center">المشاركات المجتمعية</h2>
      {posts.length === 0 && <div className="text-gray-400 text-center">لا توجد مشاركات بعد</div>}
      {posts.map(post => (
        <div key={post.id} className="border rounded p-3 mb-3 bg-white">
          {post.imageUrl &&
            <img src={post.imageUrl} className="w-full h-48 rounded object-cover mb-2" alt="" />
          }
          <h3 className="font-semibold">{post.title}</h3>
          <p className="text-sm mb-1">{post.content}</p>
          <span className="text-xs text-gray-500">بواسطة {post.username} - {post.createdAt}</span>
        </div>
      ))}
    </div>
  );
}
