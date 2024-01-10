import React, { useState, useEffect } from 'react';

const Newposts = () => {
    const [newPost, setNewPost] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch(
                    "https://newsapi.org/v2/everything?q=general&apiKey=167504db12f948438ccfdba8b685b07e"
                );

                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }

                const postData = await response.json();
                const limitedData = postData.articles.slice(10, 20); // Limit to the first 10 articles
                setNewPost(limitedData);
                console.log(limitedData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchNews();
    }, []);

    return (
        <>
        <p className='my-10'>New posts</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mx-40 my-20 rounded shadow-md">
            {newPost.map((article, index) => (
                <div key={index} className="flex p-4 border border-gray-300 rounded-md">
                    <div className="image-container mr-4 w-">
                        {article.urlToImage && <img src={article.urlToImage} alt={`Image for ${article.title}`} className="w-full h-32 object-cover rounded-md" />}
                    </div>
                    <div className="text-container">
                        <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                        <p className="text-gray-600">{article.description}</p>
                        <div className="author-info mt-2">
                            <h3 className="text-sm font-semibold">{article.author}</h3>
                            <p className="text-xs text-gray-500">{article.publishedAt}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        </>
    );
}

export default Newposts;
