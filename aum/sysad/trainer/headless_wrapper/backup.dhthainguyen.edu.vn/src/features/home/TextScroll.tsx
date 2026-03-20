"use client";

import { TextScroll } from "@/components/TextScroll";
import { useEffect, useState } from "react";

export const TextScrollHomePage = () => {
  const [list, setList] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getLichKg = async () => {
      try {
        const res = await fetch("/api/data-lichKg");
        const data = await res.json();
        const list: string[] = data?.list || [];
        list?.length > 0 && setList(list);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };

    getLichKg();
  }, []);

  return <TextScroll list={list} isLoading={isLoading} />;
};
