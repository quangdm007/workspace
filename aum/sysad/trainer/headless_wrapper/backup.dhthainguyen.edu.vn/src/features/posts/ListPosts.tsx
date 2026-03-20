"use client";

import { CardBlogVert } from "@/components/CardBlogVert";
import { Loading } from "@/components/Loading";
import { LayoutBottom } from "@/layouts/layoutPosts/LayoutBottom";
import { clean } from "@/lib/sanitizeHtml";
import { Box, Grid, HStack, Heading, VStack } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const StyledPaginate = styled(ReactPaginate)`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0 5rem;

  li a {
    border-radius: 7px;
    padding: 0.1rem 1rem;
    border: gray 1px solid;
    cursor: pointer;
    margin-right: 4px;
    margin-left: 4px;
  }
  li.previous a,
  li.next a,
  li.break a {
    border-color: transparent;
  }
  li.active a {
    background-color: #0366d6;
    border-color: transparent;
    color: white;
    min-width: 32px;
  }
  li.disabled a {
    color: grey;
  }
  li.disable,
  li.disabled a {
    cursor: default;
  }
`;

export const ListPosts = ({
  handleRouter,
}: {
  // eslint-disable-next-line no-unused-vars
  handleRouter?: ({ selected }: { selected: number }) => void;
}) => {
  const searchParams = useSearchParams();
  const page = searchParams.get("page") || "1";

  const [posts, setPosts] = useState<any[]>([]);
  const [totalPosts, setTotalPosts] = useState("0");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getPosts = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`/api/posts/?type=news&page=${page}`, {
          next: { revalidate: 3 },
        });

        const data: { posts: any[]; totalPosts: string } = await res.json();
        const { posts, totalPosts } = data;
        posts?.length && setPosts(posts);
        totalPosts && setTotalPosts(totalPosts);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };

    getPosts();
  }, [page]);

  const len = Math.ceil(Number(totalPosts) / 10) || 1;

  return (
    <LayoutBottom sticky="120px">
      <Box>
        <Heading
          size={"lg"}
          pb={"20px"}
          textAlign={{ base: "center", lg: "start" }}
        >
          Tin tức
        </Heading>
        {!isLoading && (
          <VStack spacing={"16px"}>
            {posts?.map((post: any, index: number) => (
              <CardBlogVert
                key={index}
                title={post?.title?.rendered}
                desc={clean(post.excerpt.rendered)}
                tag="tin tức"
                image={post?.featured_image || ""}
                path={`/${post?.slug}`}
              />
            ))}
            {posts?.length === 0 && (
              <Grid placeItems={"center"} height={"40vh"}>
                Dữ liệu đang được chúng tôi cập nhập
              </Grid>
            )}
          </VStack>
        )}

        {isLoading && <Loading />}
      </Box>

      <HStack pt={"32px"} justify={"center"}>
        <StyledPaginate
          previousLabel="<"
          nextLabel=">"
          pageCount={Math.round(len / 3)}
          onPageChange={handleRouter}
          pageRangeDisplayed={0}
        />
      </HStack>
    </LayoutBottom>
  );
};
