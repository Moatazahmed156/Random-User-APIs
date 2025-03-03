import { FcCalendar } from "react-icons/fc";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

function Card({ name, age, email, phone, country, image }) {
  return (
    <div className="bg-[white] w-[450px] p-4 flex gap-8 rounded-xl h-[170px]">
      <img src={image} alt="image" className="rounded-[50%] size-16" />
      <div className="content text-gray-600 flex flex-col gap-1">
        <p className="text-xl text-black font-bold">{name}</p>
        <div className="flex gap-1 items-center">
          <FcCalendar />
          <p>{age}</p>
        </div>
        <div className="flex gap-1 items-center">
          <IoMdMail />
          <p>{email}</p>
        </div>
        <div className="flex gap-1 items-center">
          <FaPhoneAlt />
          <p>{phone}</p>
        </div>
        <div className="flex gap-1 items-center">
          <TbWorld />
          <p>{country}</p>
        </div>
      </div>
    </div>
  );
}
export default Card;
