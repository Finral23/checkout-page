import Footer from "./components/Footer";
import Header from "./components/Header";
import OrderInfo from "./components/OrderInfo";
import PaymentForm from "./components/PaymentForm";
import PaymentIntro from "./components/PaymentIntro";
import PlanNotice from "./components/PlanNotice";

function App() {
  return (
    <>
      <div className="min-h-screen flex justify-center items-start ">
        <div className="w-full max-w-md p-3 rounded-md ">
          <Header />
          <PaymentIntro />
          <PaymentForm />
          <PlanNotice />
          <OrderInfo />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
