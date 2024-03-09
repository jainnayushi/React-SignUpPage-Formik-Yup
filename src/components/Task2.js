import React, { useEffect, useState, Suspense } from "react";
// import Posts from "./Posts";
import Loading from "./Loading";
import CustomPagination from "./CustomPagination";
import "../Styles/Task2.css";
const Posts = React.lazy(() => import("./Posts"));

const Task2 = () => {
  const [posts, setPosts] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("https://picsum.photos/v2/list");
      const data = await res.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  // Getting current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFisrtPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFisrtPost, indexOfLastPost);

  // Change page
  const changePage = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="container1">
        <h1>My Posts</h1>
        <Suspense fallback={<Loading />}>
          <CustomPagination
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            changePage={changePage}
          />
          <Posts posts={currentPosts} />
        </Suspense>
      </div>
    </>
  );
};

export default Task2;
