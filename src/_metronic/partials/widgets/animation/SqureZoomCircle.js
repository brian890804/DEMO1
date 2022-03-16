import React, { useCallback, useState } from "react";
import { animated, useSprings } from "react-spring";
import styled, { ThemeProvider } from "styled-components";
import {
  Box,
  Container,
  Heading,
  Typography,
  Flex,
  Grid,
  theme
} from "./ui";
import "./ui/molecules/global-styles/global.css";
import colorScheme from "./ui/color-schema";

const GridContainer = styled(Grid)`
  justify-content: center;
`;
GridContainer.defaultProps = {
  // gridTemplateColumns: "repeat(5, minmax(200px, 1fr))",
  gridTemplateColumns: "repeat(auto-fit, 120px)",
  gridGap: 1
};

const AnimatedItem = styled(animated(Flex))`
  cursor: pointer;
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
  const [isHidden, setIsHidden] = useState(false);

  const [springs, api] = useSprings(colorScheme.length, (index) => ({
    ...colorScheme[index],
    opacity: 1,
    borderRadius: "10%"
  }));

  const handleOnClick = useCallback(() => {
    setIsHidden(!isHidden);

    api.start((index) =>
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
      <Box bg="bg100" minHeight="100vh" py={1}>
        <Container>
          <Heading textAlign="center">
            React Spring Example - useSprings
          </Heading>
          <Typography textAlign="center" pb={2}>
            Click on the button to trigger animation
          </Typography>
          <Box>
            <GridContainer pt={1}>
              <>
                {springs.map((props, i) => (
                  <AnimatedItem style={props}>{props.name}</AnimatedItem>
                ))}
              </>
            </GridContainer>
            <Flex justifyContent="center">
              <Box
                as="button"
                onClick={handleOnClick}
                mt={3}
                width={200}
                height={48}
                fontSize={24}
              >
                Click
                {isHidden ? "Unhide" : "Hide"}
              </Box>
            </Flex>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
