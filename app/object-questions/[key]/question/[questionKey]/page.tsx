"use client";

import { useFetchAllBahrainObjects } from "@/api/endpoints";
import { use, useEffect, useMemo, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import Link from "next/link";

export default function ObjectQuestion({ params }: { params: Promise<{ key: string; questionKey: string; }> }) {
  const { key, questionKey } = use(params);

  const [markdown, setMarkdown] = useState<string>("");

  const { data, isLoading, error } = useFetchAllBahrainObjects();

  const question = useMemo(() => {
    if (!data) return null;
    return data?.children?.["bh-module"]?.children?.["piscine-rust"]?.children?.[key]?.children?.[questionKey];
  }, [data, key, questionKey]);

  useEffect(() => {
    if (!question) return;
    // Backup original URL
    // fetch(`https://corsproxy.io/?https://learn.reboot01.com/${question.attrs.subject}`)

    fetch(`https://raw.githubusercontent.com/01-edu/public/refs/heads/master/subjects/${question.name}/README.md`)
      .then((res) => res.text())
      .then(setMarkdown);
  }, [question]);


  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

 
  return (
    <div className="prose max-w-none p-4">
      <Link 
        href={`https://github.com/01-edu/rust-tests/blob/master/solutions/${question.name}`} 
        className="text-blue-500 hover:underline"
        target="_blank" 
        rel="noopener noreferrer"
      >
        Solution
      </Link>
      
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>{markdown}</ReactMarkdown>
    </div>
  );
}