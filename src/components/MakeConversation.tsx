import React from "react";
import Button from "./Button";

function MakeConversation() {
  return (
    <section className="text-center md:w-2/4 mx-auto py-20">
      <h2 className=" text-blue-1 font-bold  text-4xl mb-8 ">
        Make you conversation.
      </h2>
      <p className=" text-gray-2 text-xl md:text-2xl font-bold w-4/5 md:w-[62%]  text-center mx-auto mb-5">
        Go form disguised to easy stuff with Convo, the AI chatbot for your
        project
      </p>
      <div className="flex gap-5 mx-auto justify-center">
        <Button text="Get Started" href="" bgColor="black" />
        <Button text="Learn More" href="" bgColor="gray" />
      </div>
    </section>
  );
}

export default MakeConversation;
