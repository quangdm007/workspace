"use client";

import { Loading } from "@/components/Loading";
import dynamic from "next/dynamic";

const Lkt = dynamic(
  () => import("@/features/nganh-lkt").then((mod) => mod.Lkt),
  {
    loading: () => <Loading />,
  }
);

const Page = () => {
  return <Lkt />;
};

export default Page;
