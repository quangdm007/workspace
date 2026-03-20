"use client";

import { Loading } from "@/components/Loading";
import dynamic from "next/dynamic";

const Nna = dynamic(
  () => import("@/features/nganh-nna").then((mod) => mod.Nna),
  {
    loading: () => <Loading />,
  }
);

const Page = () => {
  return <Nna />;
};

export default Page;
