import { useEffect, useState } from "react";

export default function MultiApi() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [products, setProducts] = useState([]);
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch("https://dummyjson.com/users").then((res) => res.json()),
      fetch("https://dummyjson.com/posts").then((res) => res.json()),
      fetch("https://dummyjson.com/products").then((res) => res.json()),
      fetch("https://dummyjson.com/quotes").then((res) => res.json()),
    ])
      .then(([usersData, postsData, productsData, quotesData]) => {
        setUsers(usersData.users);
        setPosts(postsData.posts);
        setProducts(productsData.products);
        setQuotes(quotesData.quotes);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading data...</p>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Multi API Data</h1>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.firstName} {user.lastName}
          </li>
        ))}
      </ul>

      <h2>Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>

      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>

      <h2>Quotes</h2>
      <ul>
        {quotes.map((quote) => (
          <li key={quote.id}>
            "{quote.quote}" - {quote.author}
          </li>
        ))}
      </ul>
    </div>
  );
}
