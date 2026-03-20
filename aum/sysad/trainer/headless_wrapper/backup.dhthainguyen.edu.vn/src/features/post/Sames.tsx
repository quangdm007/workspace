"use client";

import { CardBlog } from "@/components/CardBlog";
import {
  Box,
  Button,
  Divider,
  GridItem,
  HStack,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";

export const SamePosts = ({ catId, id }: { catId?: string; id?: string }) => {
  const [samePosts, setSamePosts] = useState<any[]>([]);

  useEffect(() => {
    const getSamePosts = async () => {
      try {
        if (catId) {
          // Lấy danh sách các bài viết cùng thể loại
          const res = await fetch(`/api/same-posts/?catId=${catId}&id=${id}`, {
            next: { revalidate: 3 },
          });
          const data: { samePosts: any[] } = await res.json();
          const { samePosts } = data;
          if (samePosts?.length) setSamePosts(samePosts);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getSamePosts();
  }, [catId, id]);

  return (
    <>
      <Divider pt={"32px"} />
      <Box pt={"20px"}>
        <HStack justifyContent={"space-between"} pb={"16px"}>
          <Heading as={"h3"} size={"md"}>
            Có thể bạn quan tâm
          </Heading>
          <Button
            as={Link}
            href={"/tin-tuc"}
            variant={"link"}
            colorScheme="red"
          >
            Xem tất cả
          </Button>
        </HStack>

        <SimpleGrid columns={{ base: 1, md: 3, lg: 3 }} gap={"20px"}>
          {samePosts.map((postCat, index) => {
            if (index < 3)
              return (
                <GridItem key={index}>
                  <CardBlog
                    title={postCat?.title?.rendered}
                    desc=""
                    image={postCat?.featured_image || ""}
                    path={postCat.slug}
                  />
                </GridItem>
              );
          })}
        </SimpleGrid>
      </Box>
    </>
  );
};
