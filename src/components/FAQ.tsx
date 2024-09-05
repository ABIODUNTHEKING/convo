"use client";

import { PlusIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

const questions = [
  {
    question: "Convo lighten the load how?",
    answer1:
      "Managing a growing community can be over-whelming. Our AI-powered chatbot handles inquiries, freeing you to focus on what's important",
  },
  {
    question: "Ever wondered how AI can enhance your community engagement?",
    answer1:
      "Convo isn't just a chatbot; It's a game changer for web3 projects.🚀 ",
    answer2: "Experience the future of community management.",
  },
  {
    question: "Curious about how Convo works behind the scenes?",
    answer1:
      "We analyze your project's whitepaper and every other information you provide to ensure every answer is precise and informed",
  },
  {
    question: "Why chose Convo?",
    answer1:
      "Because your community deserves the best. Accurate, instant answers at their fingertips.",
  },
];

function FAQ() {
  const [selected, setSelected] = useState(Array(questions.length).fill(false));

  const toggleFAQ = (index: number) => {
    setSelected((prevSelected) =>
      prevSelected.map((isSelected, i) =>
        i === index ? !isSelected : isSelected
      )
    );
  };
  return (
    <section className="my-20">
      <h2 className=" text-blue-1 font-bold  text-4xl mb-8 text-center">FAQ</h2>
      <div className=" bg-gray-3 rounded-2xl w-11/12 md:w-3/4 mx-auto p-6 ">
        {questions.map((ques, index) => (
          <div
            key={index}
            className="py-4 grid grid-cols-[20px_1fr] gap-4 border-b-2 border-gray-1/40 border-solid cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <PlusIcon
              className={` duration-100 transition-all w-6 ${
                selected[index] ? "rotate-45" : "rotate-0"
              }`}
            />

            <div>
              <h3 className="text-blue-1 font-bold md:text-lg ">{ques.question}</h3>
              {selected[index] ? (
                <>
                  <p className="text-gray-4">{ques.answer1}</p>
                  {ques.answer2 && (
                    <p className="text-gray-4">{ques.answer2}</p>
                  )}
                </>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
