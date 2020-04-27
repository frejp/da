import React from "react";

import { AppWrapper, PageWrapper } from './styled';

interface Props {
    children: React.ReactNode
}
export const BaseLayout = (props: Props) => {
  return (
    <AppWrapper>
      <PageWrapper>{props.children}</PageWrapper>
    </AppWrapper>
  );
};
