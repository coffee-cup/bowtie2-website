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

      <div className="flex flex-col max-w-7xl w-full px-4 mx-auto">
        <div className="min-h-screen">
          <Nav />

          <main className="flex-grow max-w-4xl pb-12 w-full mx-auto">
            {props.children}
          </main>
        </div>

        <Footer />
      </div>
    </>
  );
};
