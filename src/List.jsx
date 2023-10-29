import Item from "./Item";

const List = ({ items, handletoggle }) => {
  return (
    <div className="List">
      {items.map((item) => (
        <Item key={item} item={item} handletoggle={handletoggle} />
      ))}
    </div>
  );
};

export default List;
