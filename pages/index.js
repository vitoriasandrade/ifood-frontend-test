import Head from "next/head";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  background: #000;
`;

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Home</title>
      </Head>
    </Container>
  );
}
