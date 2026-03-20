"use client";

import { Loading } from "@/components/Loading";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";

const DangkyTc = dynamic(
  () => import("@/features/dang-ky-thanh-cong").then((mod) => mod.DangkyTc),
  {
    loading: () => <Loading />,
  }
);

const Page = () => {
  return (
    <>
      <NextSeo
        title="Đăng ký học từ xa Đại học Thái Nguyên"
        description="Đăng ký học Đại học từ xa Đại học Thái Nguyên, tiết kiệm chi phí và thời gian"
      />
      <DangkyTc />
    </>
  );
};

export default Page;
