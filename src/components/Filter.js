import { Collapse, Radio, Select, Button, Modal, Form, Input } from "antd";
import { connect } from "react-redux";
import { getCategory, filterProducts } from "../redux/todo/actions";
import { useEffect, useState } from "react";
import AddProduct from "./AddProduct";
import SelectCategory from "./SelectCategory";

const Filter = ({ getCategoryAction, category, filterProductsAction }) => {
  useEffect(() => {
    getCategoryAction();
  }, [getCategoryAction]);

  const onChangeCategory = (type, e) => {
    const query =
      type === "sort" ? (e ? `?sort=${e}` : "") : `/category/${e.target.value}`;
    filterProductsAction({ filter: query });
  };

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  return (
    <>
      <div className="product row m-1">
        <div className="col-md-7 fs-5 fw-bold">Products List</div>
        <div className="col-md-2">
          <Button onClick={showModal}>Add Product</Button>
        </div>
        <div className="col-md-3 float-end">
          <Select
            name="select"
            placeholder="Select order"
            onChange={(e) => onChangeCategory("sort", e)}
            allowClear
          >
            <option value="asc">Sort by Asc</option>
            <option value="desc">Sort By Desc</option>
          </Select>
        </div>
        <SelectCategory category={category}/>
        <AddProduct
          setIsModalVisible={(value) => {
            setIsModalVisible(value);
          }}
          isModalVisible={isModalVisible}
        />
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  const { category } = state.todo;
  return {
    category,
  };
};
export default connect(mapStateToProps, {
  getCategoryAction: getCategory,
  filterProductsAction: filterProducts,
})(Filter);
