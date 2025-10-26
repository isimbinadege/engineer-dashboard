import React, { useEffect, useState } from "react";

export default function GitHubCard({ username }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`https://api.github.com/users/${username}`);
        if (!res.ok) {
          throw new Error(`User not found: ${res.status}`);
        }
        const result = await res.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [username]);

  if (loading) {
    return <p className="text-center text-gray-600">Loading...</p>;
  }
  if (error) {
    return <p className="text-red-600 text-center">Error: {error}</p>;
  }
  return (
    <div className="p-4 rounded-lg shadow bg-white dark:bg-gray-800 text-gray-800 dark:text-white">
      <img
        src={data.avatar_url}
        alt={`${data.login} avatar`}
        className="w-24 h-24 rounded-full mx-auto"
      />
      <h2 className="text-xl font-semibold text-center mt-2">{data.login}</h2>
      <div className="flex justify-around mt-4">
        <p>Repositories {data.public_repos}</p>
        <p>Followers: {data.followers}</p>
        <p>Following: {data.following}</p>
      </div>
    </div>
  );
}
