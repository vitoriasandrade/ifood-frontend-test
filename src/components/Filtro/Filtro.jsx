import { useEffect, useState } from "react";

import getFiltros from "../../api/filtroService";
import { FiltroContainer, FiltroItem } from "./Filtro.styles";
import { Select } from "./Select/Select";
import { Input } from "./Input/Input";

export function Filtro() {
  const [filtros, setFiltros] = useState([]);

  useEffect(() => {
    getFiltros().then((response) => {
      console.log("terminou");
      setFiltros(response.data.filters);
    });
  }, []);

  useEffect(() => {
    console.log({ filtros });
  }, [filtros]);

  return (
    <FiltroContainer>
      {filtros.map((filtro) => {
        if (filtro.values !== undefined) {
          return (
            <FiltroItem key={filtro.id}>
              <Select name={filtro.name} values={filtro.values} />
            </FiltroItem>
          );
        }

        return (
          <FiltroItem key={filtro.id}>
            <Input id={filtro.id} />
          </FiltroItem>
        );
      })}
    </FiltroContainer>
  );
}
