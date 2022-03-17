import React, { useCallback, useState } from "react";
import { animated, useSprings } from "react-spring";
import styled, { ThemeProvider } from "styled-components";
import {
  Box,
  Container,
  Flex,
  Grid,
  theme
} from "./ui";
import { Button } from "react-bootstrap-v5";
import colorScheme from "./ui/color-schema";

const GridContainer = styled(Grid)`
  justify-content: center;
`;
GridContainer.defaultProps = {
  gridTemplateColumns: "repeat(auto-fit, 120px)",
  gridGap: 1
};

const AnimatedItem = styled(animated(Flex))`
  cursor: default;
`;
AnimatedItem.defaultProps = {
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  flexDirection: "column",
  width: "100%",
  height: 120,
  fontSize: 3,
  borderRadius: "10%"
};

export default function App() {
  const [isHidden, setIsHidden] = useState(true);
  const [springs, api] = useSprings(colorScheme.length, (index) => ({
    ...colorScheme[index],
    opacity: 1,
    borderRadius: "10%"
  }));

  const handleOnClick = useCallback(() => {
    setIsHidden(!isHidden);

    api.start((_) =>
      isHidden
        ? {
          opacity: 0.2,
          borderRadius: "100%"
        }
        : {
          opacity: 1,
          borderRadius: "10%"
        }
    );
  }, [api, isHidden]);

  return (
    <ThemeProvider theme={theme}>
      <Box py={1}>   {/*bg="bg100"*/}
        <Container>
          <Box>
            <GridContainer pt={1}>
              <>
                {springs.map((props, i) => (
                  <AnimatedItem style={props} key={i}>{props.name}</AnimatedItem>
                ))}
              </>
            </GridContainer>
            <Flex justifyContent="center" pt={1}>
              <Button type="outline" onClick={handleOnClick}variant='warning'>
              {isHidden ? "顯示" : "隱藏"}
              </Button>
            </Flex>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
