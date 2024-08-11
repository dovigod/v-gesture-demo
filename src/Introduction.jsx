import { Box, Text, Card, Flex } from "@radix-ui/themes";
import { useState } from "react";

export function Introduction() {
  const [show, setShow] = useState(true);

  return (
    show && (
      <Flex
        position="fixed"
        top="0px"
        left="0px"
        justify="center"
        align="center"
        width="100vw"
        height="100vh"
        style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
      >
        <Card size="5" variant="classic">
          <Text
            style={{
              fontSize: "24px",
              textAlign: "center",
              marginBottom: "30px",
              display: "block",
            }}
          >
            <b>Pinch</b> with <b>left</b> hand to Click!
          </Text>
          <Flex minWidth="400px" maxWidth="800px" width="10vw">
            <Box
              width="100%"
              height="200px"
              style={{
                backgroundColor: "white",
                border: "1px solid rgba(0,0,0,0.2)",
                borderRadius: "20px",
                position: "relative",
              }}
            >
              <img
                src="/hand.png"
                width="70px"
                height="70px"
                style={{
                  objectFit: "cover",
                  transformOrigin: "center center",
                  position: "absolute",
                  top: "calc(50% - 40px)",
                  left: "40px",
                  transform: "rotate(30deg)",
                  opacity: 0,
                }}
                className="hand-animation"
              />

              <div className="arrow">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <img
                src="/pinch.png"
                width="60px"
                height="60px"
                style={{
                  objectFit: "cover",
                  transformOrigin: "center center",
                  position: "absolute",
                  top: "calc(50% - 30px)",
                  opacity: 0,
                  right: "40px",
                }}
                className="pinch-animation"
              />

              <div className="button-animation">Button</div>

              <div className="hit">
                <div />
                <div />
                <div />
              </div>
            </Box>
          </Flex>

          <Flex justify="center">
            <button
              size="4"
              onClick={() => setShow(false)}
              is="vgesturable"
              vgesturable="true"
              style={{
                marginTop: "30px",
                backgroundColor: "#0084e6ff",
                padding: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "4px",
                color: "white",
                fontWeight: "bold",
                border: "none",
                width: "130px",
                cursor: "hover",
                fontSize: "16px",
              }}
            >
              Confirm
            </button>
          </Flex>
        </Card>
      </Flex>
    )
  );
}
