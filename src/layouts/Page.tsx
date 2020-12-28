import React from "react";
import { Footer } from "../components/Footer";
import { Nav } from "../components/Nav";
import { Props as SEOProps, SEO } from "../components/SEO";

export interface Props {
  seo?: SEOProps;
}

export const Page: React.FC<Props> = props => {
  return (
    <>
      <SEO {...props.seo} />

      <div className="flex flex-col min-h-screen max-w-6xl w-full px-4 mx-auto">
        <Nav />

        <main className="flex-grow max-w-6xl w-full mx-auto pb-12">
          {props.children}
        </main>

        <Footer />
      </div>
    </>
  );
};
