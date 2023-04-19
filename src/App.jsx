import Random from "./components/Random";
import Tag from "./components/Tag"
export default function App() {
  return (
    <div className="background w-full h-full flex flex-col items-center ">
      <h1 className="text-center bg-white  mt-[40px] w-[90rem] p-3 rounded-md  uppercase text-3xl font-bold ">Random GIF</h1>
      <div className="flex flex-col">
        <Random />
        <Tag />
      </div>
    </div>
  );
}
