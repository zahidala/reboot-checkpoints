"use client";

import { useFetchAllBahrainObjects } from "@/api/endpoints";
import Link from "next/link";
import { use, useMemo } from "react";

export default function ObjectQuestions({ params }: { params: Promise<{ key: string }> }) {
  const { key } = use(params);

  const objectQuestionKey = key;

  const { data, isLoading, error } = useFetchAllBahrainObjects();

   const objectQuestions = useMemo(() => {
    if (!data) return null;
    return data?.children?.["bh-module"]?.children?.["piscine-rust"]?.children?.[key]?.children;
  }, [data, key]);


  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

 
  return (
  <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-2xl font-bold mb-8">Questions for {key}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
        {objectQuestions &&
          Object.entries(objectQuestions).map(([key, value]: [string, any]) => (
            <Link
              key={key}
              href={`/object-questions/${objectQuestionKey}/question/${key}`}
              className="bg-white rounded-lg shadow p-6 flex flex-col items-start border border-gray-200 hover:bg-gray-100 transition"
            >
              <span className="text-lg text-black font-semibold mb-2">{key}</span>
              <span className="text-gray-700">{value.name}</span>
              <span className="text-sm text-gray-500 mt-1 capitalize">{value.type}</span>
            </Link>
          ))}
      </div>
    </div>
  );
}