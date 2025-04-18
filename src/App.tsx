import Header from "./components/Header";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex justify-center items-start p-4">
        <div className="w-full max-w-md bg-white p-6 rounded-md shadow-md">
          <Header />
        </div>
      </div>
    </>
  );
}

export default App;
