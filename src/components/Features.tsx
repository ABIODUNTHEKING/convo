import React from "react";
import Button from "./Button";
import Image from "next/image";
import community from "/public/Community.jpeg.jpg";

function Features() {
  return (
    <section className="py-20 my-10 px-10 md:px-20 bg-gray-5">
      <div className="grid  md:grid-cols-2 items-center place-content-center mb-10 gap-8">
        <Image
          src={community}
          alt="community"
          className="bg-white rounded-2xl md:w-3/4 mx-auto"
        />
        <div>
          <h2 className="text-3.5xl md:text-6xl text-blue-1 font-bold mb-5">
            Accuracy
          </h2>
          <p className="w:3/5 lg:w-1/3 font-bold text-gray-2 text-2xl">
            Precision in
          </p>
          <p className="w:3/5 lg:w-1/3 mb-5 leading-loose font-bold text-gray-2 text-2xl">
            Every answer
          </p>
          <Button href="" text="Read More" bgColor="black" />
        </div>
      </div>

      <div className="grid  md:grid-cols-2 items-center place-content-center gap-8">
        <div className=" order-2 md:order-1">
          <h2 className="text-3.5xl md:text-6xl text-blue-1 font-bold mb-5">
            Community Support
          </h2>
          <p className="w:3/5 lg:w-1/3 mb-5 leading-loose">
            Think of Conco as your project's personal assistant. Need info? Just
            ask! From whitepaper insights to general inquiries, Convo handles it
            all with ease
          </p>
          <Button href="" text="Read More" bgColor="black" />
        </div>
        <Image
          src={community}
          alt="community"
          className="bg-white rounded-2xl md:w-3/4 mx-auto order-1 md:order-2"
        />
      </div>
    </section>
  );
}

export default Features;
