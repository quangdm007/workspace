"use client";

import { Loading } from "@/components/Loading";
import dynamic from "next/dynamic";
import { NextSeo } from "next-seo";

const About = dynamic(
  () => import("@/features/about").then((mod) => mod.About),
  {
    loading: () => <Loading />,
  }
);

const Page = () => {
  return (
    <>
      <NextSeo
        title="Giới thiệu về Đại học Thái Nguyên"
        description="Trường Đại học Thái Nguyên (Thai Nguyen University of Agriculture and Forestry – TUAF) được thành lập năm 1969, hiện nay là một đơn vị thành viên của Đại học Thái Nguyên. Trải qua 52 năm xây dựng và phát triển, Trường Đại học Thái Nguyên trở thành một trung tâm đào tạo và chuyển giao khoa học – công nghệ hàng đầu Việt Nam"
      />
      <About />
    </>
  );
};

export default Page;
