'use client'
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Profile from '@components/profile';

const MyProfile = () => {
    const {data: session} = useSession();
    const [posts, setposts] = useState([]);

    const router = useRouter();
    useEffect(() => {
        const fetchposts = async () => {
          const response = await fetch(`/api/users/${session?.user.id}/posts`);
          const data = await response.json();
    
          setposts(data);
        }
    
        if(session?.user.id) fetchposts();
    }, [])
    

    const handleEdit = (post) => {
        router.push(`/update-prompt/${post._id}`);
    }

    const handleDelete = async (post) => {
        try {
            await fetch(`/api/prompt/${post._id.toString()}`, {
                method: 'DELETE',
            });

            const filteredPosts = posts.filter((p) => p._id !== post._id)

            setposts(filteredPosts)
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <Profile 
        name = "My"
        desc = "Welcome to your personalized profile page. Share your exceptional prompts and inspire others with the power of your imagination"
        data = {posts}
        handleEdit = {handleEdit}
        handleDelete = {handleDelete}
    />
  )
}

export default MyProfile