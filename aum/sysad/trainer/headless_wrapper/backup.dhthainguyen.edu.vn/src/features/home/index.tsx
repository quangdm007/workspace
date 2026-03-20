"use client";

import { BtnMes, BtnPhone } from "@/components/BtnCTA";
import { Loading } from "@/components/Loading";
import { useModal } from "@/components/ModalContext";
import { Box, VStack } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Banner = dynamic(() => import("./Banner").then((mod) => mod.Banner), {
  loading: () => <Loading />,
});
const TextScroll = dynamic(
  () => import("./TextScroll").then((mod) => mod.TextScrollHomePage),
  {
    loading: () => <Loading />,
  }
);
const Categorys = dynamic(
  () => import("./Categorys").then((mod) => mod.Categorys),
  {
    loading: () => <Loading />,
  }
);
const Benefit = dynamic(() => import("./Benefit").then((mod) => mod.Benefit), {
  loading: () => <Loading />,
});
const Notify = dynamic(() => import("./Notify").then((mod) => mod.Notify), {
  loading: () => <Loading />,
});
const Contact = dynamic(() => import("./Contact").then((mod) => mod.Contact), {
  loading: () => <Loading />,
});
const Counters = dynamic(
  () => import("./Counters").then((mod) => mod.Counters),
  {
    loading: () => <Loading />,
  }
);
const Event = dynamic(() => import("./Event").then((mod) => mod.Event), {
  loading: () => <Loading />,
});

const Review = dynamic(() => import("./Review").then((mod) => mod.Review), {
  loading: () => <Loading />,
});

const Support = dynamic(() => import("./Support").then((mod) => mod.Support), {
  loading: () => <Loading />,
});

export const Home = () => {
  const { isOpen, onOpen } = useModal();
  const [news, setNews] = useState<any[]>([]);
  const [notifis, setNotifis] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getPosts = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`/api/posts/?type=news&page=1`, {
          next: { revalidate: 3 },
        });

        const data: { posts: any[]; totalPosts: string } = await res.json();
        const { posts } = data;
        posts?.length && setNews([posts[0], posts[1], posts[2], posts[4]]);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };

    getPosts();
  }, []);

  useEffect(() => {
    const getPosts = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`/api/posts/?type=notifis&page=1`, {
          next: { revalidate: 3 },
        });

        const data: { posts: any[]; totalPosts: string } = await res.json();
        const { posts } = data;
        posts?.length && setNotifis([posts[0], posts[1], posts[2], posts[4]]);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };

    getPosts();
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isOpen && onOpen) onOpen();
    }, 6000);

    return () => window.clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Banner />
      <Box>
        <TextScroll />
      </Box>
      <Categorys />
      <Benefit />
      <Box py={"62px"}>
        <Notify />
      </Box>
      <Support />
      <Counters />
      <Review />
      <Contact />

      {isLoading && <Loading />}
      {!isLoading && <Event news={news} notifis={notifis} />}

      <Box
        pos={"fixed"}
        top={"50%"}
        right={"0"}
        transform={"translateY(-50%)"}
        className="CTA"
        zIndex={5}
      >
        <VStack>
          {/* <BtnEmail aria-label="Email" /> */}
          <BtnMes aria-label="messenter" />
          {/* <BtnZalo aria-label="zalo" /> */}
          <BtnPhone aria-label="phone" />
        </VStack>
      </Box>
    </>
  );
};
