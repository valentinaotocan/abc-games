function GameCardSkeleton() {
  return (
    <div className="skeleton card">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/310px-Placeholder_view_vector.svg.png"
        alt="Image"
      />
      <div className="skeleton__text p-1">
        <h2 className="mb-1"></h2>
        <p></p>
      </div>
    </div>
  );
}
export default GameCardSkeleton;
