const Actions = ({ moveRight, moveLeft }) => {
  return (
    <div className="Action">
      <button className="Button" onClick={moveRight}>
        &gt;
      </button>
      <button className="Button" onClick={moveLeft}>
        &lt;
      </button>
    </div>
  );
};

export default Actions;
