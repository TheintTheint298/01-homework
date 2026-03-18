import { useMemo, useState } from "react";

export default function FilterItems() {
  const [search, setSearch] = useState("");
  const [isDark, setIsDark] = useState(false);

  const fruits = [
    "apple",
    "orange",
    "banana",
    "mango",
    "avocado",
    "pineapple",
    "watermelon",
    "durian",
    "grape",
    "strawberry",
    "kiwi",
  ];

  //   const filteredFruits = fruits.filter((fruit) => {
  //     console.log("Filtering ...");
  //     return fruit.includes(search.toLowerCase());
  //   });

  const filteredFruits = useMemo(() => {
    console.log("Filtering..");
    return fruits.filter((fruit) => fruit.includes(search.toLowerCase()));
  }, [search]);

  return (
    <div
      style={{
        padding: "20px",
        background: isDark ? "#333" : "#fff",
        color: isDark ? "#fff" : "#000",
      }}
    >
      <input
        type="text"
        placeholder="Search fruit..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={() => setIsDark(!isDark)} style={{ marginLeft: "10px" }}>
        Toggle {isDark ? "Light" : "Dark"} Mode
      </button>

      <ul>
        {filteredFruits.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}
