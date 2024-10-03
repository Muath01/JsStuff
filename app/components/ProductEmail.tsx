import React from "react";
import {
  Html,
  Head,
  Preview,
  Tailwind,
  Body,
  Text,
  Section,
  Button,
  Container,
} from "@react-email/components";

function ProductEmail({ link }: { link: string }) {
  return (
    <Html>
      <Head />
      <Preview>Your Product is here...</Preview>
      <Tailwind>
        <Body className="bg-white font-sans border-2">
          <Container style={container}>
            <Text className="text-2xl font-semibold">Hi Friend</Text>
            <Text className="text-sm text-gray-600">
              Thank you for your business
            </Text>
            <Section className="w-full flex justify-center mt-7">
              <Button
                href={link}
                className="text-white bg-red-500 rounded-lg px-10 py-4 cursor-pointer"
              >
                Click to Download
              </Button>
            </Section>
            <Text className="text-lg">
              Best, <br /> ReserverIt Team
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

export default ProductEmail;
