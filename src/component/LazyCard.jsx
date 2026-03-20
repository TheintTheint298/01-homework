const LazyCard = () => {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '20px',
      marginTop: '20px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
    }}>
      <h2>Card</h2>
      <p>This is Lazy Load Component</p>
    </div>
  );
};

export default LazyCard;