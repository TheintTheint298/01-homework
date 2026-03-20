import { lazy, Suspense, useState } from "react";

const LazyCard = lazy(() => import("./LazyCard"));

function LazyMainPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
      <h1>Lazy Main Page</h1>
      <p>No Lazy Card code in first loading</p>
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          style={{
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "#295bef",
            color: "#fff",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          View Card
        </button>
      ) : (
        <>
          <button
            onClick={() => setIsOpen(false)}
            style={{
              padding: "10px 20px",
              borderRadius: "5px",
              border: "none",
              backgroundColor: "#ef2323",
              color: "#fff",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Hide Card
          </button>
          <Suspense
            fallback={
              <div
                style={{
                  marginTop: "20px",
                  fontStyle: "italic",
                  color: "gray",
                }}
              >
                Loading Card...
              </div>
            }
          >
            <LazyCard />
          </Suspense>
        </>
      )}
    </div>
  );
}
export default LazyMainPage;
