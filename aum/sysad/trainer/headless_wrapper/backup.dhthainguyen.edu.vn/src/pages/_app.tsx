import { ModalProvider } from "@/components/ModalContext";
import Layout from "@/layouts";
import "@/styles/globals.css";
import "@/styles/tableContent.css";
import theme from "@/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { NextPage } from "next";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import type { ReactElement, ReactNode } from "react";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  // eslint-disable-next-line no-unused-vars
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page: any) => page);

  return (
    <>
      <DefaultSeo
        title="Đại học Thái Nguyên hệ đào tạo từ xa"
        description="Đại học Thái Nguyên hệ đào tạo từ xa tuyển sinh 2023"
      />
      <ChakraProvider theme={theme}>
        <ModalProvider>
          <Layout>{getLayout(<Component {...pageProps} />)}</Layout>
        </ModalProvider>
      </ChakraProvider>
    </>
  );
};

export default App;
