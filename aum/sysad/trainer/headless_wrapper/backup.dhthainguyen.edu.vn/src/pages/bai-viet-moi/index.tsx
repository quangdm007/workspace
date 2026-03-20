import { LatestPost } from "@/features/latestPost";
import { NextSeo } from "next-seo";

const Page = () => {
  return (
    <>
      <NextSeo
        title="Tin tức và thông báo tuyển sinh - Đại học Thái Nguyên"
        description="Đại học Thái Nguyên tuyển sinh năm 2023 - tổng hợp các tin tức tuyển sinh mới nhất của Đại học Thái Nguyên"
      />
      <LatestPost />
    </>
  );
};

export default Page;
