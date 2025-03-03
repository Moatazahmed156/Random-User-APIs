import { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import { BsGenderFemale, BsGenderMale } from "react-icons/bs";
import { FaRandom } from "react-icons/fa";

function Main() {
  const [data, setData] = useState(null);
  const [rand, setRand] = useState(1);
  const [gender, setGender] = useState("");
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://randomuser.me/api?gender=${gender}`
        );
        setData(response.data.results[0]);
      } catch (error) {
        console.error("Fetching Error:", error);
      }
    }
    fetchData();
  }, [rand, gender]);

  function RandomPerson() {
    setGender("");
    setRand((prev) => prev + 1);
  }

  function RandomMale() {
    setGender("male");
    setRand((prev) => prev + 1);
  }

  function RandomFemale() {
    setGender("female");
    setRand((prev) => prev + 1);
  }
  if (!data)
    return (
      <div className="w-[450px] h-[170px] rounded-xl border border-blue-500 p-4">
        <div className="flex animate-pulse space-x-4">
          <div className="size-10 rounded-full bg-gray-200"></div>
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 rounded bg-gray-200"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2 h-2 rounded bg-gray-200"></div>
                <div className="col-span-1 h-2 rounded bg-gray-200"></div>
                <div className="col-span-1 h-2 rounded bg-gray-200"></div>
              </div>
              <div className="h-2 rounded bg-gray-200"></div>
              <div className="h-2 rounded bg-gray-200"></div>
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2 h-2 rounded bg-gray-200"></div>
                <div className="col-span-1 h-2 rounded bg-gray-200"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  return (
    <div className="flex justify-center">
      <div className="cards">
        <Card
          name={`${data.name.title}  ${data.name.first} ${data.name.last}`}
          age={`${data.dob.date
            .substring(0, 10)
            .split("-")
            .reverse()
            .join("/")} (${data.dob.age}years old)`}
          country={data.location.country}
          email={data.email}
          phone={data.phone}
          image={data.picture.thumbnail}
        />
      </div>
      <div className="buttons mx-4 flex gap-2 justify-center flex-col">
        <button
          className="bg-[#700608] text-white rounded-[50%] p-2"
          onClick={RandomPerson}
        >
          <FaRandom />
        </button>
        <button
          className="bg-[#700608] text-white rounded-[50%] p-2"
          onClick={RandomFemale}
        >
          <BsGenderFemale />
        </button>
        <button
          className="bg-[#700608] text-white rounded-[50%] p-2"
          onClick={RandomMale}
        >
          <BsGenderMale />
        </button>
      </div>
    </div>
  );
}

export default Main;
