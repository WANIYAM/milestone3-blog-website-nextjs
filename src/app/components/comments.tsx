"use client";

import { useState } from "react";

const Comments: React.FC = () => {
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState<string>("");

  // Handle adding a comment
  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  // Handle deleting a comment
  const handleDeleteComment = (index: number) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
  };

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold">Comments</h2>

      <ul className="mt-4 space-y-2">
        {comments.map((comment, index) => (
          <li
            key={index}
            className="p-2 border rounded-md bg-gray-100 dark:bg-gray-800 flex justify-between items-center"
          >
            <span>{comment}</span>
            <button
              onClick={() => handleDeleteComment(index)}
              className="text-red-500 hover:underline"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      <textarea
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Add your comment here"
        className="w-full mt-4 p-2 border rounded-md focus:outline-primary focus:ring-2 focus:ring-primary dark:bg-gray-900"
        rows={3}
      />
      <button
        onClick={handleAddComment}
        className="mt-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark"
      >
        Add Comment
      </button>
    </div>
  );
};

export default Comments;
