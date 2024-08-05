import Image from "next/image";
import Link from "next/link";
import React from "react";
import RenderTag from "./RenderTag";

const hotQuestions = [
  { _id: "1", title: "How do i express as a custom server in NextJS?" },
  { _id: "2", title: "How do i express as a custom server in NextJS?" },
  { _id: "3", title: "How do i express as a custom server in NextJS?" },
  { _id: "4", title: "How do i express as a custom server in NextJS?" },
  { _id: "5", title: "How do i express as a custom server in NextJS?" },
];

const popularTags = [
  {
    _id: "1",
    name: "javascript",
    totalQuestions: 1000,
  },
  {
    _id: "2",
    name: "react",
    totalQuestions: 800,
  },
  {
    _id: "3",
    name: "nodejs",
    totalQuestions: 700,
  },
  {
    _id: "4",
    name: "express",
    totalQuestions: 600,
  },
  {
    _id: "5",
    name: "mongodb",
    totalQuestions: 500,
  },
  {
    _id: "6",
    name: "nextjs",
    totalQuestions: 400,
  },
  {
    _id: "7",
    name: "typescript",
    totalQuestions: 300,
  },
  {
    _id: "8",
    name: "css",
    totalQuestions: 200,
  },
  {
    _id: "9",
    name: "html",
    totalQuestions: 100,
  },
  {
    _id: "10",
    name: "python",
    totalQuestions: 5,
  },
];

const RightSideBar = () => {
  return (
    <section className="background-light900_dark200 light-border custom-scrollbar sticky right-0 top-0 h-screen w-[350px]  flex-col overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-lg:hidden">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map((question) => (
            <Link
              className="flex cursor-pointer items-center justify-between gap-7"
              href={`/question/${question._id}`}
              key={question._id}
            >
              <p className="body-medium text-dark500_light700">
                {question.title}
              </p>
              <Image
                src={"/assets/icons/chevron-right.svg"}
                alt="chevron-right"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map((tag) => (
            <RenderTag
              key={tag._id}
              _id={tag._id}
              name={tag.name}
              totalQuestions={tag.totalQuestions}
              showCount
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSideBar;
