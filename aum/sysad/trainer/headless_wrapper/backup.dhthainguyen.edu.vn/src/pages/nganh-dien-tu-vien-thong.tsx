"use client";

import { Loading } from "@/components/Loading";
import dynamic from "next/dynamic";
import { NextSeo } from "next-seo";

const Dtvt = dynamic(
  () => import("@/features/nganh-dtvt").then((mod) => mod.Dtvt),
  {
    loading: () => <Loading />,
  }
);

const Page = () => {
  return (
    <>
      <NextSeo
        title="Ngành công nghệ thông tin - Đại học Thái Nguyên"
        description="Ngành công nghệ thông tin - Đại học Thái Nguyên, thông tin ngành công nghệ thông tin Đại học Thái nguyên"
      />
      <Dtvt />
    </>
  );
};

export default Page;
