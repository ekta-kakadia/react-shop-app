/* eslint-disable react-hooks/rules-of-hooks */
import { Button } from "antd";
import { connect } from "react-redux";
import { getProduct } from "../redux/todo/actions";
import { useEffect } from "react";
import Filter from "./Filter";
import { useHistory } from "react-router";

const Products = ({ getProductAction, todos }) => {
  const history = useHistory();

  useEffect(() => {
    getProductAction();
  }, []);

  const viewProduct = (todo) => {
    history.push(`/product/${todo.id}`);
  };

  return (
    <>
      <Filter />
      <div className="product m-1 mt-3">
        {todos.map((todo, i) => {
          return (
            <div className="row m-2 pb-4 border-bottom" id={i}>
              <div className="col-md-3">
                <img src={todo.image} height="100" />
              </div>
              <div className="col-md-4 pr-2 mt-4 text-center">{todo.title}</div>
              <div className="col-md-3 mt-4 text-center">Rs. {todo.price}</div>
              <div className="col-md-2 mt-4">
                <Button color="primary" className="float-end" outline>
                  Add To Cart
                </Button>
                <Button
                  color="primary"
                  className="float-end mt-2"
                  onClick={() => viewProduct(todo)}
                  outline
                >
                  View Product
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  const { todos } = state.todo;
  return {
    todos,
  };
};
export default connect(mapStateToProps, {
  getProductAction: getProduct,
})(Products);
