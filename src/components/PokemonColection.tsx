import React from "react";
import { PokemonDetail } from "../interface";
import PokemonList from "./PokemonList";
import "./pokemon.css";
import { Detail } from "../App";

interface Props {
  pokemons: PokemonDetail[];
  detail: Detail;
  setDetail: React.Dispatch<React.SetStateAction<Detail>>;
}

const PokemonColection: React.FC<Props> = (props) => {
  const { pokemons, detail, setDetail } = props;
  const selectPokemon = (id: number) => {
    if (!detail.isOpened) {
      setDetail({
        id: id,
        isOpened: true,
      });
    }
  };
  return (
    <>
      <section
        className={
          detail.isOpened
            ? "collection-container-active"
            : "collection-container"
        }>
        {detail.isOpened ? (
          <div className="overlay"></div>
        ) : (
          <div className=""></div>
        )}
        {pokemons.map((pokemon: PokemonDetail) => {
          return (
            <div
              className=""
              onClick={() => {
                selectPokemon(pokemon.id);
              }}
              key={pokemon.id}>
              <PokemonList
                key={pokemon.id}
                detail={detail}
                setDetail={setDetail}
                name={pokemon.name}
                id={pokemon.id}
                abilities={pokemon.abilities}
                image={pokemon.sprites.front_default}
              />
            </div>
          );
        })}
      </section>
    </>
  );
};

export default PokemonColection;
