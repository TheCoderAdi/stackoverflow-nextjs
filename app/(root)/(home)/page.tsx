import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilters from "@/components/home/HomeFilters";
import Filters from "@/components/shared/Filter";
import NoResult from "@/components/shared/NoResult";
import LocalSearchBar from "@/components/shared/search/LocalSearchBar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import Link from "next/link";
import React from "react";

const questions = [
  {
    _id: "1",
    title: "How to implement Redux in a React application?",
    tags: [
      { _id: "1", name: "React" },
      { _id: "2", name: "Redux" },
      { _id: "3", name: "JavaScript" },
    ],
    author: {
      _id: "1",
      name: "Jane Doe",
      picture: "https://example.com/jane.jpg",
    },
    upvotes: 15,
    views: 100,
    answers: [
      {
        _id: "1",
        author: { name: "John Smith" },
        content: "You can use the react-redux library...",
        createdAt: new Date(),
      },
      {
        _id: "2",
        author: { name: "Alice Johnson" },
        content: "I recommend reading the official documentation...",
        createdAt: new Date(),
      },
    ],
    createdAt: new Date("2024-01-01T10:00:00Z"),
  },
  {
    _id: "2",
    title: "What is the best way to manage state in a large application?",
    tags: [
      { _id: "4", name: "State Management" },
      { _id: "2", name: "Redux" },
      { _id: "5", name: "MobX" },
    ],
    author: {
      _id: "2",
      name: "John Smith",
      picture: "https://example.com/john.jpg",
    },
    upvotes: 25,
    views: 250,
    answers: [
      {
        _id: "1",
        author: { name: "Jane Doe" },
        content: "It depends on your application requirements...",
        createdAt: new Date(),
      },
      {
        _id: "2",
        author: { name: "Bob Lee" },
        content: "In my experience, Redux works best for large applications...",
        createdAt: new Date(),
      },
    ],
    createdAt: new Date("2024-02-15T12:00:00Z"),
  },
  {
    _id: "3",
    title: "How to optimize a React application for performance?",
    tags: [
      { _id: "1", name: "React" },
      { _id: "6", name: "Performance" },
      { _id: "7", name: "Optimization" },
    ],
    author: {
      _id: "3",
      name: "Alice Johnson",
      picture: "https://example.com/alice.jpg",
    },
    upvotes: 30,
    views: 300,
    answers: [
      {
        _id: "1",
        author: { name: "Jane Doe" },
        content: "Consider using React.memo and useCallback...",
        createdAt: new Date(),
      },
      {
        _id: "2",
        author: { name: "John Smith" },
        content: "Make sure to avoid unnecessary re-renders...",
        createdAt: new Date(),
      },
    ],
    createdAt: new Date("2024-03-10T14:30:00Z"),
  },
];

const Home = () => {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link href={"/ask-question"} className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Qustion
          </Button>
        </Link>
      </div>
      <div className="max:sm:flex-col mt-11 flex justify-between gap-5 sm:items-center">
        <LocalSearchBar
          iconPostion="left"
          route="/"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          otherClasses="flex-1"
        />
        <Filters
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>

      <HomeFilters />
      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="There's no question to show"
            description="Be the first to break the slience! 🚀 Ask a question and kickstart the
        discussion. Our query could be the next big thing othes learn from. Get
        invloved! 💡"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
};

export default Home;
