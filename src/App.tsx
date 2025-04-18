import Header from "./components/Header";
import PaymentForm from "./components/PaymentForm";
import PaymentIntro from "./components/PaymentIntro";
import PlanNotice from "./components/PlanNotice";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex justify-center items-start p-4">
        <div className="w-full max-w-md bg-white p-6 rounded-md shadow-md">
          <Header />
          <PaymentIntro />
          <PaymentForm />
          <PlanNotice />
        </div>
      </div>
    </>
  );
}

export default App;
