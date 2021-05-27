import { Container } from "./ListaItem.styles";

export function ListaItem(props) {
  return (
    <Container>
      <img src={props.logo} />
      <h4>{props.titulo}</h4>
      <p>{props.seguidores} SEGUIDORES</p>
      <p>{props.horas}</p>
    </Container>
  );
}
