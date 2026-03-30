import { useEffect, useState } from "react";

// HOC to add loading state
const withLoading = (WrappedComponent) => {
  return ({ isLoading, ...props }) => {
    if (isLoading) {
      return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <p>Loading...</p>
        </div>
      );
    }

    return <WrappedComponent {...props} />;
  };
};

function UserList({ users }) {
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {users.map((user) => (
        <li key={user.id} style={{ marginBottom: "10px" }}>
          {user.name}
        </li>
      ))}
    </ul>
  );
}

const ListWithLoading = withLoading(UserList);

export default function HOCUserList() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    // data fetching
    setTimeout(() => {
      setData([
        { id: 1, name: "Theint Theint" },
        { id: 2, name: "Htet Htet" },
        { id: 3, name: "Aye Aye" },
      ]);
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="App">
      <h1>User List</h1>
      <ListWithLoading isLoading={loading} users={data} />
    </div>
  );
}
