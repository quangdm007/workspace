"use client";

import { Loading } from "@/components/Loading";
import dynamic from "next/dynamic";

const Qtkd = dynamic(
  () => import("@/features/nganh-qtkd").then((mod) => mod.Qtkd),
  {
    loading: () => <Loading />,
  }
);

const Page = () => {
  return <Qtkd />;
};

export default Page;
