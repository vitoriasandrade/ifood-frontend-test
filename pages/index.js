import Head from "next/head";
import styled from "styled-components";

import { Filtro } from "../components/Filtro/Filtro";
import{ListaPlaylists} from "../components/ListaPlaylists/ListaPlaylists";

const Container = styled.div`
  display: grid;
  background: #000;
  
`;

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Home</title>
      </Head>

      <Filtro />
       <ListaPlaylists /> 
    </Container>
  );
}
