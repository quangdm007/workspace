"use client";

import { Loading } from "@/components/Loading";
import dynamic from "next/dynamic";

const Tcnh = dynamic(
  () => import("@/features/nganh-tcnh").then((mod) => mod.Tcnh),
  {
    loading: () => <Loading />,
  }
);

const Page = () => {
  return <Tcnh />;
};

export default Page;
