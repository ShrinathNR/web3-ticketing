import Head from "next/head"
import Typed from 'react-typed';
import { useEffect } from "react";
import Image from "next/image";

export default function Items() {
  useEffect(() => {
    localStorage.setItem('active', '/')
  }, [])
  return (
    <div className="h-full">
      <Head>
        <title>
          0xticket | hackNight Hackathon
        </title>
      </Head>
      <div className="flex flex-col items-center justify-center">
        <div className="p-10 text-center text-4xl font-semibold text-white">
          {/* <Typed
            strings={["Welcome to 0xtickets", "Experience Tickets in a whole new way", "Get Your Tickets Now!!"]}
            typeSpeed={40}
            backSpeed={40}
            smartBackspace
            loop
          /> */}
          <div className="max-w-screen-xl px-4 py-4 mx-auto lg:items-center lg:flex">
            <div className="flex flex-col items-center justify-center max-w-xl mx-auto text-center gap-5">
              <h1 className="text-3xl font-extrabold sm:text-5xl">
                Welcome to 0xticket
              </h1>
              <strong className="text-3xl sm:text-5xl font-extrabold text-[#FA58B6] sm:block">
                Experience Tickets in a whole new way
              </strong>
            </div>
          </div>
        </div>
      </div >
    </div >
  )
}
