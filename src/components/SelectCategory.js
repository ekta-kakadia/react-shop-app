import { connect } from "react-redux";
import { Collapse, Radio } from "antd";
import { filterProducts } from "../redux/todo/actions";

const SelectCategory = ({category, filterProductsAction}) => {
  const callback = (key) => {};

  const { Panel } = Collapse;

  const onChangeCategory = (type, e) => {
    const query =
      type === "sort" ? (e ? `?sort=${e}` : "") : `/category/${e.target.value}`;
    filterProductsAction({ filter: query });
  };
    return <>
            <Collapse
          className="m-2"
          style={{ width: "96%" }}
          defaultActiveKey={["1"]}
          onChange={callback}
        >
          <Panel header="Select Category">
            {category.map((cat, i) => {
              return (
                <>
                  <Radio.Group onChange={(e) => onChangeCategory("filter", e)}>
                    <Radio name="radio" value={cat}>
                      {cat}
                    </Radio>
                  </Radio.Group>
                </>
              );
            })}
          </Panel>
        </Collapse>
    </>
}
const mapStateToProps = () => {
    return {
    };
  };
  export default connect(mapStateToProps, {
    filterProductsAction: filterProducts,
  })(SelectCategory);
