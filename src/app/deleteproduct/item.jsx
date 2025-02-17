import { Pacifico } from "next/font/google";
import Image from "next/image";

export const pacifico = Pacifico({
    subsets: ['cyrillic'],
    weight: '400'
})

export default function Item({text, setItemToggle}) {

  return (
    <main className="m-2" onClick={setItemToggle}>
      <div>
        <Image
            src="/item.webp"
            width={500}
            height={500}
            style={{ width: '300px', height: '250px', borderRadius: '5px' }}
            alt="Picture of the author"
            priority
        />
      </div>
      <div className="flex flex-row justify-between text-xs pt-5">
       <text className={`text-${text}`}>
            HMF Green Tees
        </text>
        <text className="text-red-500">
            <i className="fa-solid fa-trash text-2xl"></i>
        </text>
      </div>
    </main>
  );
}
