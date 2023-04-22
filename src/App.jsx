import { useState } from "react";
import Modal from "./components/Modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFeatures, setIsFeatures] = useState(false);
  const [isCompany, setIsCompany] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
    console.log("modal is open", isOpen);
  }
  function toggleFeatures() {
    setIsFeatures(!isFeatures);
  }
  function toggleCompany() {
    setIsCompany(!isCompany);
  }

  return (
    <>
      <nav className="bg-almost-white p-4">
        <div className="flex items-center">
          <h1 className="font-bold text-3xl text-almost-black">snap</h1>

          <div className="ml-auto">
            <a href="#" onClick={toggleModal}>
              <img src="src\assets\icon-menu.svg" />
            </a>
          </div>
        </div>
      </nav>

      <main className="bg-almost-white">
        <div className="">
          <img src="src\assets\image-hero-mobile.png" />

          <div className="mt-8 flex flex-col items-center justify-center">
            <h2 className="text-almost-black text-4xl font-bold">
              Make remote work
            </h2>
            <p className=" text-medium-gray text-center p-3 text-md ">
              Get your team in sync, no matter your location. Streamline
              processes, create team rituals and watch productivity soar.
            </p>
            <div className="p-6">
              <button className="py-2 px-4 rounded-lg bg-almost-black text-almost-white text-base font-bold">
                Learn more
              </button>
            </div>
            <div className="flex items-center  justify-between space-x-8 mt-4">
              <img src="src\assets\client-databiz.svg" className="w-16" />
              <img src="src\assets\client-audiophile.svg" className="w-16" />
              <img src="src\assets\client-meet.svg" className="w-16" />
              <img src="src\assets\client-maker.svg" className="w-16" />
            </div>
          </div>
        </div>
      </main>
      <Modal
        isOpen={isOpen}
        onClose={toggleModal}
        toggleFeatures={toggleFeatures}
        toggleCompany={toggleCompany}
      >
        <div className="flex flex-col mt-12 text-base text-medium-gray">
          <div
            className="flex items-center mt-8 space-x-4"
            onClick={toggleFeatures}
          >
            <a href="#" className="">
              Features
            </a>
            <img
              src={
                isFeatures
                  ? "src\\assets\\icon-arrow-down.svg"
                  : "src\\assets\\icon-arrow-up.svg"
              }
              className="h-2"
            />
          </div>

          <div className={isFeatures ? "hidden" : " block text-base p-4"}>
            <a href="#" className="flex items-center space-x-4 mt-6">
              <img src="src\assets\icon-todo.svg" className="h-5 w-5" />
              <p>Todo List</p>
            </a>

            <a href="#" className="flex items-center space-x-4 mt-6">
              <img src="src\assets\icon-calendar.svg" className="h-5 w-5" />
              <p>Calendar</p>
            </a>
            <a href="#" className="flex items-center space-x-4 mt-6">
              <img src="src\assets\icon-reminders.svg" className="h-5 w-5" />
              <p>Reminders</p>
            </a>
            <a href="#" className="flex items-center space-x-4 mt-6">
              <img src="src\assets\icon-planning.svg" className="h-5 w-5" />
              <p>Planning</p>
            </a>
          </div>

          <div
            className="flex items-center mt-8  space-x-4 "
            onClick={toggleCompany}
          >
            <a href="#">Company</a>
            <img
              src={
                isCompany
                  ? "src\\assets\\icon-arrow-down.svg"
                  : "src\\assets\\icon-arrow-up.svg"
              }
              className="h-2"
            />
          </div>
          <div
            className={isCompany ? "hidden" : " flex flex-col p-4 text-base"}
          >
            <a href="#" className="mt-6">
              History
            </a>
            <a href="#" className="mt-6">
              Our Team
            </a>
            <a href="#" className="mt-6">
              Blog
            </a>
          </div>

          <a href="#" className="mt-8 ">
            Careers
          </a>
          <a href="#" className="mt-8 ">
            About
          </a>
          <a href="#" className="mt-8 text-center ">
            Login
          </a>
          <button className="border-2 px-6 py-2 border-medium-gray rounded-lg mt-2">
            Register
          </button>
        </div>
      </Modal>
    </>
  );
}

export default App;
