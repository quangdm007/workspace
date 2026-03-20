"use client";

import { Loading } from "@/components/Loading";
import dynamic from "next/dynamic";

const Tmdt = dynamic(
  () => import("@/features/nganh-tmdt").then((mod) => mod.Tmdt),
  {
    loading: () => <Loading />,
  }
);

const Page = () => {
  return <Tmdt />;
};

export default Page;
