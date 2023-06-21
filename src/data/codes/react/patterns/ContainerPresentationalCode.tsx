export const ContainerComponentCode = `
function PokemonsContainerComponent() {
    const [data, setData] = useState<PokemonsType | null>(null);
  
    useEffect(() => {
      getPokemonsData()
        .then((pokemons) => setData(pokemons))
        .catch(console.error);
    }, []);
  
    if (!data) return null;
   
    return <Pokemons pokemons={data} />;
}
`;

export const PokemonsCode = `
function Pokemons({ pokemons }: { pokemons: PokemonsType }) {
    return (
        <div className="grid grid-cols-10 items-center justify-center">
        {pokemons.map((pokemon: PokemonType, index: number) => (
            <Pokemon key={index} name={pokemon.name} sprite={pokemon.sprite} />
        ))}
        </div>
    );
}
`;

export const PokemonCode = `
function Pokemon({ name, sprite }: { name: string; sprite?: string }) {
    return (
      <div className="flex flex-col items-center justify-center">
        <img src={sprite} alt={name}></img>
        <p>{name}</p>
      </div>
    );
  }
`;
