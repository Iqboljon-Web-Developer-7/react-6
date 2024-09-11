import React, { useEffect, useState } from "react";
import {
  useGetLimitedUsersQuery,
  useGetUserQuery,
} from "@/redux/api/category-api";
import BasicCard from "../card/Card";
import AddUser from "../addUser/AddUser";
import { Button } from "antd";

const Hero = () => {
  const [page, setPage] = useState(1);
  let total = 0;
  const { data: allData } = useGetUserQuery();

  const { data, isLoading, isFetching } = useGetLimitedUsersQuery({
    limit: 8,
    page,
  });
  total = allData?.length;

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
    <>
      <div className="bg-[#00008833] backdrop-blur-sm sticky top-0">
        <div className="wrapper flex justify-between items-center">
          <AddUser />
          <h2 className="text-center text-3xl py-4 text-white">Users</h2>
        </div>
      </div>
      <div className="wrapper">
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
        <div className="mt-6 flex items-center justify-center gap-4">
          <Button
            disabled={page <= 1}
            onClick={() => setPage((p) => p - 1)}
            className=""
          >
            {isFetching ? "..." : "Prev"}
          </Button>
          <span>
            Page: {page} / {Math.ceil(total / 8)}
          </span>
          <Button
            disabled={total <= page * 8}
            onClick={() => setPage((p) => p + 1)}
            className=""
          >
            {isFetching ? "..." : "Next"}
          </Button>
        </div>
      </div>
    </>
  );
};

export default Hero;
