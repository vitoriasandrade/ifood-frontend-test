import { ListaItem } from "./ListaItem/ListaItem";

import { ListaContainer } from "./ListaPlaylist.styles";

import getPlaylists from "../../api/spotifyService";

import { useEffect } from "react";

const playlists = [
  {
    logo: "data:image/jpeg;base64,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",
    titulo: "Rock Nacional",
    seguidores: 15525,
    horas: "2h 46m",
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4cRUfay5JH9h6ktWmwcASehSs7uFz7UZFpFbFQGMVCV355p9xmrG-0KEtA5xLyx3ahx8&usqp=CAU",
    titulo: "Pagode",
    seguidores: 20587,
    horas: "3h 05m",
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxRSb88gjRjsZARe09ooa3juy4ZdBmrv4XWw&usqp=CAU",
    titulo: "Samba",
    seguidores: 25698,
    horas: "1h 35m",
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4cRUfay5JH9h6ktWmwcASehSs7uFz7UZFpFbFQGMVCV355p9xmrG-0KEtA5xLyx3ahx8&usqp=CAU",
    titulo: "Pagode",
    seguidores: 20587,
    horas: "3h 05m",
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxRSb88gjRjsZARe09ooa3juy4ZdBmrv4XWw&usqp=CAU",
    titulo: "Samba",
    seguidores: 25698,
    horas: "1h 35m",
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4cRUfay5JH9h6ktWmwcASehSs7uFz7UZFpFbFQGMVCV355p9xmrG-0KEtA5xLyx3ahx8&usqp=CAU",
    titulo: "Pagode",
    seguidores: 20587,
    horas: "3h 05m",
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxRSb88gjRjsZARe09ooa3juy4ZdBmrv4XWw&usqp=CAU",
    titulo: "Samba",
    seguidores: 25698,
    horas: "1h 35m",
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4cRUfay5JH9h6ktWmwcASehSs7uFz7UZFpFbFQGMVCV355p9xmrG-0KEtA5xLyx3ahx8&usqp=CAU",
    titulo: "Pagode",
    seguidores: 20587,
    horas: "3h 05m",
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxRSb88gjRjsZARe09ooa3juy4ZdBmrv4XWw&usqp=CAU",
    titulo: "Samba",
    seguidores: 25698,
    horas: "1h 35m",
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4cRUfay5JH9h6ktWmwcASehSs7uFz7UZFpFbFQGMVCV355p9xmrG-0KEtA5xLyx3ahx8&usqp=CAU",
    titulo: "Pagode",
    seguidores: 20587,
    horas: "3h 05m",
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxRSb88gjRjsZARe09ooa3juy4ZdBmrv4XWw&usqp=CAU",
    titulo: "Samba",
    seguidores: 25698,
    horas: "1h 35m",
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4cRUfay5JH9h6ktWmwcASehSs7uFz7UZFpFbFQGMVCV355p9xmrG-0KEtA5xLyx3ahx8&usqp=CAU",
    titulo: "Pagode",
    seguidores: 20587,
    horas: "3h 05m",
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxRSb88gjRjsZARe09ooa3juy4ZdBmrv4XWw&usqp=CAU",
    titulo: "Samba",
    seguidores: 25698,
    horas: "1h 35m",
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4cRUfay5JH9h6ktWmwcASehSs7uFz7UZFpFbFQGMVCV355p9xmrG-0KEtA5xLyx3ahx8&usqp=CAU",
    titulo: "Pagode",
    seguidores: 20587,
    horas: "3h 05m",
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxRSb88gjRjsZARe09ooa3juy4ZdBmrv4XWw&usqp=CAU",
    titulo: "Samba",
    seguidores: 25698,
    horas: "1h 35m",
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4cRUfay5JH9h6ktWmwcASehSs7uFz7UZFpFbFQGMVCV355p9xmrG-0KEtA5xLyx3ahx8&usqp=CAU",
    titulo: "Pagode",
    seguidores: 20587,
    horas: "3h 05m",
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxRSb88gjRjsZARe09ooa3juy4ZdBmrv4XWw&usqp=CAU",
    titulo: "Samba",
    seguidores: 25698,
    horas: "1h 35m",
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4cRUfay5JH9h6ktWmwcASehSs7uFz7UZFpFbFQGMVCV355p9xmrG-0KEtA5xLyx3ahx8&usqp=CAU",
    titulo: "Pagode",
    seguidores: 20587,
    horas: "3h 05m",
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxRSb88gjRjsZARe09ooa3juy4ZdBmrv4XWw&usqp=CAU",
    titulo: "Samba",
    seguidores: 25698,
    horas: "1h 35m",
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4cRUfay5JH9h6ktWmwcASehSs7uFz7UZFpFbFQGMVCV355p9xmrG-0KEtA5xLyx3ahx8&usqp=CAU",
    titulo: "Pagode",
    seguidores: 20587,
    horas: "3h 05m",
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxRSb88gjRjsZARe09ooa3juy4ZdBmrv4XWw&usqp=CAU",
    titulo: "Samba",
    seguidores: 25698,
    horas: "1h 35m",
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4cRUfay5JH9h6ktWmwcASehSs7uFz7UZFpFbFQGMVCV355p9xmrG-0KEtA5xLyx3ahx8&usqp=CAU",
    titulo: "Pagode",
    seguidores: 20587,
    horas: "3h 05m",
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxRSb88gjRjsZARe09ooa3juy4ZdBmrv4XWw&usqp=CAU",
    titulo: "Samba",
    seguidores: 25698,
    horas: "1h 35m",
  },
];

export function ListaPlaylists() {
  useEffect(() => {
    getPlaylists();
  }, []);

  return (
    <ListaContainer>
      {playlists.map((playlist) => {
        const { logo, titulo, seguidores, horas } = playlist;

        return (
          <ListaItem
            logo={logo}
            titulo={titulo}
            seguidores={seguidores}
            horas={horas}
          />
        );
      })}
    </ListaContainer>
  );
}
