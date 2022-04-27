import React from "react";
import Link from "next/link";
import * as Mui from "@material-ui/core";

type Props = {};

const TestForm: React.VFC<Props> = (props) => {
  const content = (
    <Mui.Container>
      <Mui.Box mb={4}>
        <Link href="./">
          <Mui.Link rel="noopener">Back</Mui.Link>
        </Link>
      </Mui.Box>
      <Mui.Box>
        <Mui.Typography component="p" variant="subtitle1">
          Test Form
        </Mui.Typography>
        <form noValidate>
          <Mui.Grid container spacing={2}>
            <Mui.Grid item xs={12} sm={6}>
              <Mui.TextField
                autoComplete="000-0000"
                variant="outlined"
                fullWidth
                label="PostalCode"
              />
            </Mui.Grid>
          </Mui.Grid>
        </form>
      </Mui.Box>
    </Mui.Container>
  );
  return content;
};

export default TestForm;
