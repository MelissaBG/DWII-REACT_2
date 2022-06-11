//Enunciado III: Crie um Component que irá
//renderizar apenas um filme. O nome do component pode ser FilmeCard.
//Nesse Component deve ser renderizado o emoji se o filme é ganhador de oscar.
export const filmes = [
  {
    nome: "O Senhor do Aneis: A Sociedade do Anel",
    lancamento: 2002,
    oscar: true,
    diretores: ["Peter Jackson"],
    generos: ["Fantasia", "Aventura"]
  },
  {
    nome: "Harry Potter e a Pedra Filosofal",
    lancamento: 2001,
    oscar: true,
    diretores: ["Chris Columbus"],
    generos: ["Fantasia"]
  },
  {
    nome: "Matrix",
    oscar: true,
    lancamento: 1999,
    diretores: ["Lana Wachowski", "Lilly Wachowski"],
    generos: ["Ação", "Ficção Cientifica"]
  },
  {
    nome: "Meninas Malvadas",
    oscar: false,
    lancamento: 2004,
    diretores: ["Mark Waters"],
    generos: ["Comédia"]
  }
];
function FilmeCard(props) { 
  const filme = props.filme;
  const nome = filme.nome;
  const oscar = filme.oscar;

  return (
    <div>
      <h3>{oscar && <span role ="img" </span>} {nome}</h3>
    </div>
  );
}

 function App() {
  return filmes.map((filme) => <FilmeCard filme ={filme} />);
}

