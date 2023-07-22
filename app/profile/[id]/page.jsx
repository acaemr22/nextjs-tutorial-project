"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Profile from "@components/Profile";
import { useRouter } from "next/navigation";
import { useParams, useSearchParams } from "next/navigation";

const UserProfile = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [posts, setPosts] = useState([]);
  const { id } = useParams();
  const name = useSearchParams().get("name");
  console.log(useSearchParams());
  const fetchPosts = async () => {
    const response = await fetch(`/api/users/${id}/posts`);
    const data = await response.json();

    setPosts(data);
  };

  useEffect(() => {
    if (id) fetchPosts();
  }, [session]);

  const handleEdit = (post) => {
    router.push(`/update-prompt?id=${post._id}`);
  };

  const handleDelete = async (post) => {
    const hasConfirmed = confirm(
      "Are you sure you want to delete this prompt?"
    );

    if (hasConfirmed) {
      try {
        await fetch(`/api/prompt/${post._id.toString()}`, {
          method: "DELETE",
        });

        const filteredPosts = posts.filter((p) => p._id !== post._id);

        setPosts(filteredPosts);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Profile
      name={name ? name + "'s" : ""}
      desc={`Welcome to ${name ? name + "'s" : ""} profile page. Explore ${
        name ? name + "'s" : ""
      } exceptional prompts and be inspired by the power of their imagination.`}
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default UserProfile;
