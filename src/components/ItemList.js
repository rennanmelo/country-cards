const ItemList = ({ children: value, label }) => {
  return (
    <span className="text-sm">
      <strong>{label}:</strong> {value}
    </span>
  );
};

export default ItemList;
