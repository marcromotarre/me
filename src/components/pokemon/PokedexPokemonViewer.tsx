export default function PokedexPokemonViewer({ style = {} }) {
  return (
    <div
      style={{
        width: "200px",
        height: "200px",
        ...style,
        backgroundColor: "#98CB98",
        border: "1px solid black",
      }}
    >
      <div
        className=""
        style={{
          position: "relative",
        }}
      ></div>
    </div>
  );
}
