export default function DishList({ dishes }) {
    return (
      <div>
        {dishes.map((dish) => (
          <div key={dish.id}>
            <h2>{dish.name}</h2>
            <p>{dish.description}</p>
            <p>{dish.price} ETB</p>
          </div>
        ))}
      </div>
    );
  }