import { Card } from "antd";
import { useEffect } from "react";
import { connect } from "react-redux";
import { productsDetails } from "../redux/todo/actions";
import { useParams } from "react-router";
import { Rating } from "react-simple-star-rating";

const ProductDetails = ({ productsDetailsAction, details }) => {
  const params = useParams();

  useEffect(() => {
    productsDetailsAction({ id: params.id });
  }, [productsDetailsAction]);
  const { Meta } = Card;

  return (
    <>
      <div className="text-center mx-auto col d-flex justify-content-center">
        <Card
          cover={
            <img
              width="50%"
              className="w-50 "
              alt="example"
              src={details.image}
            />
          }
        >
          <Meta title={details.title} description={details.description} />
          <p>{details.category}</p>
          <p>
            <Rating ratingValue={details?.rating?.rate} />
          </p>
        </Card>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  const { details } = state.todo;
  console.log(state);
  return {
    details,
  };
};
export default connect(mapStateToProps, {
  productsDetailsAction: productsDetails,
})(ProductDetails);
