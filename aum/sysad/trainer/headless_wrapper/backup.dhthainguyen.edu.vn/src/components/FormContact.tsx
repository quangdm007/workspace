"use client";

import { Box, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Loading } from "./Loading";

const comonForm = ({ id, href }: { id: string; href: string }) => {
  const generateMatch = ({ utm, value }: { utm: string; value?: string }) => {
    const valueCur = value || "=([^;]+)";
    const matchers = document.cookie.match(new RegExp(utm + valueCur));
    return matchers ? matchers : [];
  };

  let r =
    window.document.referrer != ""
      ? window.document.referrer
      : window.location.origin;
  const regex = /(https?:\/\/.*?)\//g;
  const furl = regex.exec(r);
  r = furl ? furl[0] : r;
  const f = document.createElement("iframe");
  const url_string = new URLSearchParams(window.location.search);
  // eslint-disable-next-line no-unused-vars
  let utm_source, utm_campaign, utm_medium, utm_content, utm_term;
  if (
    (!url_string.has("utm_source") || url_string.get("utm_source") == "") &&
    generateMatch({ utm: "utm_source" }) != null
  ) {
    r += "&" + generateMatch({ utm: "utm_source" })[0];
  } else {
    r +=
      url_string.get("utm_source") != null
        ? "&utm_source=" + url_string.get("utm_source")
        : "";
  }
  if (
    (!url_string.has("utm_campaign") || url_string.get("utm_campaign") == "") &&
    generateMatch({ utm: "utm_campaign" }) != null
  ) {
    r += "&" + generateMatch({ utm: "utm_campaign" })[0];
  } else {
    r +=
      url_string.get("utm_campaign") != null
        ? "&utm_campaign=" + url_string.get("utm_campaign")
        : "";
  }
  if (
    (!url_string.has("utm_medium") || url_string.get("utm_medium") == "") &&
    generateMatch({ utm: "utm_medium" }) != null
  ) {
    r += "&" + generateMatch({ utm: "utm_medium" })[0];
  } else {
    r +=
      url_string.get("utm_medium") != null
        ? "&utm_medium=" + url_string.get("utm_medium")
        : "";
  }
  if (
    (!url_string.has("utm_content") || url_string.get("utm_content") == "") &&
    generateMatch({ utm: "utm_content" }) != null
  ) {
    r += "&" + generateMatch({ utm: "utm_content" })[0];
  } else {
    r +=
      url_string.get("utm_content") != null
        ? "&utm_content=" + url_string.get("utm_content")
        : "";
  }
  if (
    (!url_string.has("utm_term") || url_string.get("utm_term") == "") &&
    generateMatch({ utm: "utm_term" }) != null
  ) {
    r += "&" + generateMatch({ utm: "utm_term" })[0];
  } else {
    r +=
      url_string.get("utm_term") != null
        ? "&utm_term=" + url_string.get("utm_term")
        : "";
  }
  if (
    (!url_string.has("utm_user") || url_string.get("utm_user") == "") &&
    generateMatch({ utm: "utm_user" }) != null
  ) {
    r += "&" + generateMatch({ utm: "utm_user" })[0];
  } else {
    r +=
      url_string.get("utm_user") != null
        ? "&utm_user=" + url_string.get("utm_user")
        : "";
  }
  if (
    (!url_string.has("utm_account") || url_string.get("utm_account") == "") &&
    generateMatch({ utm: "utm_account" }) != null
  ) {
    r += "&" + generateMatch({ utm: "utm_account" })[0];
  } else {
    r +=
      url_string.get("utm_account") != null
        ? "&utm_account=" + url_string.get("utm_account")
        : "";
  }
  r += "&full_url=" + encodeURIComponent(window.location.href);
  r += "&full_url=" + encodeURIComponent(window.location.href);
  f.setAttribute("src", href + r);
  f.style.width = "100%";
  f.style.height = "380px";
  f.setAttribute("frameborder", "0");
  f.setAttribute("marginheight", "0");
  f.setAttribute("marginwidth", "0");
  const s = document.getElementById(id);

  if (!s?.hasChildNodes()) s?.appendChild(f);
};

export const FormPoup = ({
  title,
  id,
  href,
}: {
  title?: string;
  id?: string;
  href?: string;
}) => {
  useEffect(() => {
    id &&
      href &&
      comonForm({
        id,
        href,
      });
  }, [href, id]);

  return (
    <Box minH={"45vh"}>
      {title && (
        <Heading
          as={"h2"}
          size={{ base: "md", md: "lg" }}
          textAlign={"center"}
          color={"blue.700"}
          pb={"16px"}
        >
          {title}
        </Heading>
      )}

      <div id={id} />
    </Box>
  );
};

export const FormMain = ({ title }: { title?: string }) => {
  const [id, setId] = useState("getfly-optin-form-iframe-1695175881155");
  const [href, setHref] = useState(
    "https://aum.getflycrm.com/api/forms/viewform/?key=AxFWg9xmg9RGLjPsUiSwBCtbhyYTGWB3rBOtmMnxfQCEc9Draw&referrer="
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getForm = async () => {
      try {
        const res = await fetch(`/api/data-form/?type=form-main`);
        const data = await res.json();
        const id = data?.id || "";
        id && setId(id);
        const href = data?.href || "";
        href && setHref(href);

        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getForm();
  }, [id, href, isLoading]);

  useEffect(() => {
    comonForm({
      id,
      href,
    });
  }, [isLoading, id, href]);

  return (
    <>
      {title && (
        <Heading
          as={"h2"}
          size={{ base: "md", md: "lg" }}
          textAlign={"center"}
          color={"blue.700"}
          pb={"16px"}
        >
          {title}
        </Heading>
      )}
      {isLoading && <Loading he={"38vh"} />}
      {!isLoading && <div id={id} />}
    </>
  );
};
