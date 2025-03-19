'use client';
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { users } from "@/data/data";
import Image from "next/image";

export default function Home() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [text, setText] = useState<string>("")
  const router = useRouter()

  const nextpage = (text : string) => {
    router.push(`/${text}`)
  }

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };
  return (
    <div className="border-2 border-solid">
      <Image src="/accessibility-svgrepo-com.svg" alt="Accessibility Icon" width={100} height={100} />
      <h1>{text ? text : "null"}</h1>
      <button onClick={toggleDropdown} className="hover:cursor-pointer">click open</button>
      {isOpen && (
        <div>
          <select defaultValue={0} onChange={(e) => setText(e.target.value)}>
            <option value="null">nothing</option>
            {users.map((index) => (
              <option key={index.id} value={index.name}>{index.name}</option>
            ))}
          </select>
          <button onClick={closeDropdown}>click close</button>
        </div>
      )}
      <div>
        <a href={`/${text}`}>next page 1</a>
        <button onClick={() => nextpage(text)}>next page 2</button>
      </div>
    </div>
  );
}
