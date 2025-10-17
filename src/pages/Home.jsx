import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard"; 
import SectionContainer from "../components/SectionContainer";

export default function Home() {
  const [eletronicos, setEletronicos] = useState([]);
  const [joias, setJoias] = useState([]);
  const [roupas, setRoupas] = useState([]);

  const API_URL = import.meta.env.VITE_API_URL; 

  useEffect(() => {

    fetch(`${API_URL}/electronics`)
        .then(res => res.json())
        .then(data => { setEletronicos(data) }) 
        .catch(err => console.error(err));

    fetch(`${API_URL}/jewelery`)
        .then(res => res.json())
        .then(data => { setJoias(data) }) 
        .catch(err => console.error(err));

    fetch(`${API_URL}/women's clothing`)
        .then(res => res.json())
        .then(data => { setRoupas(data) }) 
        .catch(err => console.error(err));

  }, [API_URL]);

  return (
    <div>
      <SectionContainer title="Eletrônicos">
        <>
        {eletronicos.map(produto => (
          <ProductCard
            key={produto.id}
            {...produto}
          />
        ))}
        </>
      </SectionContainer>

      <SectionContainer title="Joias">
        <>
        {joias.map(produto => (
          <ProductCard
            key={produto.id}
            {...produto}
          />
        ))}
        </>
      </SectionContainer>

      <SectionContainer title="Roupas Femininas">
        <>
        {roupas.map(produto => (
          <ProductCard
            key={produto.id}
            {...produto}
          />
        ))}
        </>
      </SectionContainer>
    </div>
  );
}