"use client";

import { Loading } from "@/components/Loading";
import dynamic from "next/dynamic";

const Nnt = dynamic(
  () => import("@/features/nganh-nnt").then((mod) => mod.Nnt),
  {
    loading: () => <Loading />,
  }
);

const Page = () => {
  return <Nnt />;
};

export default Page;
