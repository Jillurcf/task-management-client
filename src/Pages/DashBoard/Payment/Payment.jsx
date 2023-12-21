import { loadStripe } from "@stripe/stripe-js";
import Sectiontitle from "../../../Component/SectionTitle/Sectiontitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";



// TODO add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
  return (
    <div>
      <Sectiontitle
        heading="Payment"
        subHeading="Please pay to attend contest"
      ></Sectiontitle>
      <div>
        <Elements stripe={stripePromise}>
         <CheckoutForm></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};export default Payment;
