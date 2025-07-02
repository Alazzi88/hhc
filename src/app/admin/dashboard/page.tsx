'use client';
import { useState, useEffect } from "react";

type Post = {
  id: string;
  title: string;
  content: string;
  imageUrl?: string;
  username: string;
  createdAt: string;
};

export default function AdminDashboard() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchPosts = async () => {
    const res = await fetch('/api/posts');
    const data = await res.json();
    setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    let imageBase64 = "";
    if (image) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        imageBase64 = reader.result as string;
        await fetch('/api/posts', {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title, content, image: imageBase64, username: "admin" //اسم الإدمن هنا ثابت
          }),
        });
        setTitle('');
        setContent('');
        setImage(null);
        setLoading(false);
        fetchPosts();
      };
      reader.readAsDataURL(image);
    } else {
      await fetch('/api/posts', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title, content, image: "", username: "admin"
        }),
      });
      setTitle('');
      setContent('');
      setImage(null);
      setLoading(false);
      fetchPosts();
    }
  };

  const handleDelete = async (id: string) => {
    await fetch('/api/posts', {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    fetchPosts();
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="mb-4 font-bold text-xl text-center">لوحة تحكم المشاركات</h2>

      <form onSubmit={handleAdd} className="mb-6 border p-4 rounded-lg bg-white">
        <input value={title} onChange={e => setTitle(e.target.value)} placeholder="العنوان"
          className="mb-2 w-full p-2 border rounded" required />
        <textarea value={content} onChange={e => setContent(e.target.value)} placeholder="نص المشاركة"
          className="mb-2 w-full p-2 border rounded" required />
        <input type="file" accept="image/*" onChange={e => setImage(e.target.files?.[0] || null)}
          className="mb-2 w-full" />
        <button disabled={loading}
          className="bg-green-600 text-white px-4 py-2 rounded w-full">{loading ? "يتم الإرسال..." : "إضافة"}</button>
      </form>

      <div>
        {posts.length === 0 && <div className="text-gray-400 text-center">لا توجد مشاركات</div>}
        {posts.map(post => (
          <div key={post.id} className="border rounded p-3 mb-3 flex items-center bg-white">
            {post.imageUrl &&
              <img src={post.imageUrl} className="w-20 h-20 rounded object-cover mr-4" alt="" />
            }
            <div className="flex-1">
              <h3 className="font-semibold">{post.title}</h3>
              <p className="text-sm">{post.content}</p>
              <span className="text-xs text-gray-500">بواسطة {post.username} - {post.createdAt}</span>
            </div>
            <button
              onClick={() => handleDelete(post.id)}
              className="ml-3 text-red-500 hover:underline"
            >حذف</button>
          </div>
        ))}
      </div>
    </div>
  );
}
