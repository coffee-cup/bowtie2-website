import * as React from "react";
import { DefaultSeo, NextSeo, NextSeoProps } from "next-seo";
import Head from "next/head";
import { DefaultSeoProps } from "next-seo";

export interface Props extends NextSeoProps {
  title?: string;
  description?: string;
  image?: string;
}

const title = "Bowtie";
export const url = "https://bowtie.cards";
const description = "Score Keeping iOS App for card games";
const iosAppId = "1544635020";
const image = "https://bowtie.cards/og.png";

const config: DefaultSeoProps = {
  title,
  description,
  openGraph: {
    type: "website",
    url,
    site_name: title,
    images: [{ url: image }],
  },
  twitter: {
    handle: "@jakerunzer",
    cardType: "app",
  },
};

export const SEO: React.FC<Props> = ({ image, ...props }) => {
  const title = props.title ?? config.title;
  const description = props.description || config.description;

  return (
    <>
      <DefaultSeo {...config} />

      <NextSeo
        {...props}
        {...(image == null
          ? {}
          : {
              openGraph: {
                images: [{ url: image }],
              },
            })}
      />

      <Head>
        <title>{title}</title>

        <meta name="description" content={description} />

        <meta
          name="twitter:app:name:iphone"
          content="Bowtie: Score Keeping App"
        />
        <meta name="twitter:app:id:iphone" content={iosAppId} />
      </Head>
    </>
  );
};
