import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const AllData = ({ data }) => {
  const [allData, setAllData] = useState([]);

  console.log(data);
  const { category_id } = data;
  console.log(data);
  let id;
  for (const datas of data) {
    id = datas.id;
  }

  useEffect(() => {
    fetch("https://learning-server-side-sooty.vercel.app/checkout/01")
      .then((res) => res.json())
      .then((data) => setAllData(data));
  }, []);

  const handleButton = (data) => {
    setAllData(data);
  };

  return (
    <div>
      {}
      {
        <Link
          to={`/category/01/checkout`}
          onClick={handleButton}
          className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">
          Get Premium Access
        </Link>
      }
    </div>
  );
};

export default AllData;
