import React, {ReactNode} from 'react';
import {NextSeo} from 'next-seo'

type PageProps = {
  children: ReactNode;
  title: string;
  description: string;
  path: string;
}

export function Page({children, path,title, description}: PageProps) {
  const url = `http://localhost:3000${path}`
  return (
    <>
      <NextSeo 
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url, title
        }}
      />
      {children}
    </>
  );
}