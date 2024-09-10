import React, { useEffect, useState } from "react";
import { useGetUserQuery } from "@/redux/api/category-api";
import BasicCard from "../card/Card";

const Hero = () => {
  const { data, isLoading, isSuccess } = useGetUserQuery();

  console.log(data);

  let cards = data?.map((item, idx) => (
    <div key={idx}>
      <BasicCard
        user={item}
        id={item.id}
        fname={item.fname}
        lname={item.lname}
        job={item.job}
        gender={item.gender}
        bio={item.bio}
      />
    </div>
  ));

  return (
    <div className="wrapper">
      <h2 className="text-center text-3xl py-4">User</h2>
      {isLoading && (
        <div className="wrapper mx-auto p-4">
          <div className="sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {new Array(20).fill().map((irem, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-md p-6 animate-pulse"
              >
                <div className="h-6 bg-gray-300 rounded w-1/2 mb-4"></div>{" "}
                <div className="h-4 bg-gray-300 rounded w-1/3 mb-2"></div>{" "}
                <div className="h-4 bg-gray-300 rounded w-1/4 mb-4"></div>{" "}
                <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>{" "}
                <div className="h-4 bg-gray-300 rounded w-5/6 mb-2"></div>{" "}
                <div className="h-4 bg-gray-300 rounded w-3/4 mb-4"></div>{" "}
                <div className="mt-4 flex space-x-4">
                  <div className="h-8 bg-gray-300 rounded w-16"></div>{" "}
                  <div className="h-8 bg-gray-300 rounded w-16"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="cards-container p-2 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {cards}
      </div>
    </div>
  );
};

export default Hero;
