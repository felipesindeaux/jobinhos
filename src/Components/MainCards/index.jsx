import CardsServices from "../CardsServices";
import { Container } from "./styled";

const MainCards = () => {
  const services = [
    {
      title: "Publicidade",
      images: [
        "https://vinteconto.sfo2.cdn.digitaloceanspaces.com/listings/418420/09a3b7008f562804e64b7100799ce8cc.jpg",
      ],
      price: 20,
      desc: "Eu vou divulgar a sua empresa na minha página do Facebook com mais de 30 mil seguidores por 1 dia (Sem impulsionamento).",
      deliveryTime: "2 dias",
      tags: ["Publicidade", "Terror"],
      name: "Jeferson",
      userId: 1,
      id: 1,
    },
    {
      title: "Publicidade",
      images: [
        "https://vinteconto.sfo2.cdn.digitaloceanspaces.com/listings/418420/09a3b7008f562804e64b7100799ce8cc.jpg",
      ],
      price: 20,
      desc: "Eu vou divulgar a sua empresa na minha página do Facebook com mais de 30 mil seguidores por 1 dia (Sem impulsionamento).",
      deliveryTime: "2 dias",
      tags: ["Publicidade", "Terror"],
      name: "Jeferson",
      userId: 1,
      id: 1,
    },
    {
      title: "Publicidade",
      images: [
        "https://vinteconto.sfo2.cdn.digitaloceanspaces.com/listings/418420/09a3b7008f562804e64b7100799ce8cc.jpg",
      ],
      price: 20,
      desc: "Eu vou divulgar a sua empresa na minha página do Facebook com mais de 30 mil seguidores por 1 dia (Sem impulsionamento).",
      deliveryTime: "2 dias",
      tags: ["Publicidade", "Terror"],
      name: "Jeferson",
      userId: 1,
      id: 1,
    },
    {
      title: "Publicidade",
      images: [
        "https://vinteconto.sfo2.cdn.digitaloceanspaces.com/listings/418420/09a3b7008f562804e64b7100799ce8cc.jpg",
      ],
      price: 20,
      desc: "Eu vou divulgar a sua empresa na minha página do Facebook com mais de 30 mil seguidores por 1 dia (Sem impulsionamento).",
      deliveryTime: "2 dias",
      tags: ["Publicidade", "Terror"],
      name: "Jeferson",
      userId: 1,
      id: 1,
    },
    {
      title: "Publicidade",
      images: [
        "https://vinteconto.sfo2.cdn.digitaloceanspaces.com/listings/418420/09a3b7008f562804e64b7100799ce8cc.jpg",
      ],
      price: 20,
      desc: "Eu vou divulgar a sua empresa na minha página do Facebook com mais de 30 mil seguidores por 1 dia (Sem impulsionamento).",
      deliveryTime: "2 dias",
      tags: ["Publicidade", "Terror"],
      name: "Jeferson",
      userId: 1,
      id: 1,
    },
    {
      title: "Publicidade",
      images: [
        "https://vinteconto.sfo2.cdn.digitaloceanspaces.com/listings/418420/09a3b7008f562804e64b7100799ce8cc.jpg",
      ],
      price: 20,
      desc: "Eu vou divulgar a sua empresa na minha página do Facebook com mais de 30 mil seguidores por 1 dia (Sem impulsionamento).",
      deliveryTime: "2 dias",
      tags: ["Publicidade", "Terror"],
      name: "Jeferson",
      userId: 1,
      id: 1,
    },
    {
      title: "Publicidade",
      images: [
        "https://vinteconto.sfo2.cdn.digitaloceanspaces.com/listings/418420/09a3b7008f562804e64b7100799ce8cc.jpg",
      ],
      price: 20,
      desc: "Eu vou divulgar a sua empresa na minha página do Facebook com mais de 30 mil seguidores por 1 dia (Sem impulsionamento).",
      deliveryTime: "2 dias",
      tags: ["Publicidade", "Terror"],
      name: "Jeferson",
      userId: 1,
      id: 1,
    },
    {
      title: "Publicidade",
      images: [
        "https://vinteconto.sfo2.cdn.digitaloceanspaces.com/listings/418420/09a3b7008f562804e64b7100799ce8cc.jpg",
      ],
      price: 20,
      desc: "Eu vou divulgar a sua empresa na minha página do Facebook com mais de 30 mil seguidores por 1 dia (Sem impulsionamento).",
      deliveryTime: "2 dias",
      tags: ["Publicidade", "Terror"],
      name: "Jeferson",
      userId: 1,
      id: 1,
    },
  ];

  return (
    <Container>
      {services.map((item, index) => (
        <CardsServices
          key={index}
          images={item.images}
          name={item.name}
          title={item.title}
          price={item.price}
          desc={item.desc}
        />
      ))}
    </Container>
  );
};

export default MainCards;
