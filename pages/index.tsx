import React from "react";
import Link from "next/link";
import * as Mui from "@material-ui/core";

type Props = {};

const Index: React.VFC<Props> = (props) => {
  const content = (
    <Mui.Container>
      <Mui.Box>
        <Mui.Typography variant="h6">TOP</Mui.Typography>
      </Mui.Box>
      <Mui.Box>
        <Mui.List>
          <Mui.ListItem>
            <Mui.ListItemText>
              <Link href="./TestForm">
                <Mui.Link rel="noopener">test form</Mui.Link>
              </Link>
            </Mui.ListItemText>
          </Mui.ListItem>
          <Mui.ListItem>
            <Mui.ListItemText>
              <Link href="./Covid19">
                <Mui.Link rel="noopener">covid19 date</Mui.Link>
              </Link>
            </Mui.ListItemText>
          </Mui.ListItem>
        </Mui.List>
      </Mui.Box>
    </Mui.Container>
  );
  return content;
};

export default Index;
