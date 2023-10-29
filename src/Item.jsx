const Item = ({ item, handletoggle }) => {
  return (
    <div>
      <input
        type="checkbox"
        onChange={() => {
          handletoggle(item);
        }}
      />
      <label>{item}</label>
    </div>
  );
};

export default Item;
