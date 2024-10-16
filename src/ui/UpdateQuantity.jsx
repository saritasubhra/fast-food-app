import { useDispatch, useSelector } from "react-redux";
import {
  decreseItemQuantity,
  increseItemQuantity,
} from "../features/cart/cartSlice";

function UpdateQuantity({ id }) {
  const inCart = useSelector((store) => store.cart.cart);
  const curr = inCart.filter((item) => item.id === id);
  const currQuantity = curr[0]?.quantity;
  const dispatch = useDispatch();

  return (
    <span>
      <button
        className="btn-sm"
        onClick={() => dispatch(decreseItemQuantity(id))}
      >
        -
      </button>
      <span className="px-2">{currQuantity}</span>
      <button
        className="btn-sm"
        onClick={() => dispatch(increseItemQuantity(id))}
      >
        +
      </button>
    </span>
  );
}

export default UpdateQuantity;
