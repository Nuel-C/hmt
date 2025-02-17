import { Pacifico } from "next/font/google";
import Menu from "./menu";

const pacifico = Pacifico({
    subsets: ['cyrillic'],
    weight: '400'
})

export default function Headder() {

  const open = () => {
    var element = document.getElementById("main");
    if (element) {  // Check if element is not null
        element.classList.remove("hidden");
    }
};

  return (
    <main>
      <div className="bg-black m-4 p-7 rounded-3xl mt-0 flex flex-row justify-between lg:px-12">
        <i className="fa-solid fa-bars text-white text-2xl" onClick={open}></i>
        <text className={`${pacifico.className} text-white`}>HMT</text>
        <i className="fa-solid fa-cart-shopping text-white"></i>
      </div>
      <div id="main" className="hidden">
        <Menu/>
      </div>
    </main>
  );
}
