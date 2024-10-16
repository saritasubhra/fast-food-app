import { useLoaderData } from "react-router-dom";
import { getPizza } from "../../services/apiMenu";
import PizzaItem from "./PizzaItem";

function PizzaMenu() {
  const pizzas = useLoaderData();
  console.log(pizzas);
  if (!pizzas.length) return;

  return (
    <ul className="divide-y divide-stone-300">
      {pizzas.map((pizza) => (
        <PizzaItem key={pizza.id} item={pizza} />
      ))}
    </ul>
  );
}

export async function loader() {
  const data = await getPizza("pizzas");
  return data;
}

export default PizzaMenu;
