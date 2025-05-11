import { CardItem } from "./article-items";

export const articles: CardItem[] = [
  {
    title: "Lämmitys Jarjestelmaa",
    description: "Lämmonjakohuonessa kiinteistönhoitaja pitää tarkistaa...",
    article: 
      `Lämmonjakohuonessa kiinteistönhoitaja pitää tarkistaa paineita ja lämpötiloja.
      Kaukolämpö menoveden ja paluuveden paine pitää olla eri. Jos se on sama, se voi olla mudanerotin tukossa.
      Ja sitten lämmitys verkoston paine pitää olla oikein. Jos se on vähemmän, voi täyttää lisää lämmin vettä lämmin käyttö veden verkosta.
      Lämpimän veden lämpötila pitää olla 55 astetta ja 65 astetta valilla. Vanha kiinteistössä voi olla 50 astetta ja 65 astetta valilla.
      Säätöventtili pitää olla oikein säädetty, jos se ei ole samaa kuin merkkikilvessä, se pitää säätää oikein. Ja sitten pitää tarkistaa että onko se jotain lämmönsiirtimen sisäinen vuoto.`,
    image: "/lammonjakohuone.jpg",
    buttonText: "lisää",
  },
  {
    title: "WC-vuotto",
    description: "WC-vuotto voi johtua useista syistä...",
    article: ``,
    image: "/IDO59.png",
    buttonText: "lisää",
  },
  {
    title: "Hana huolto(säätöosan vaihto)",
    description: "Kun hana vuotaa poresuuttimesta vivun ollessa suljettuna...",
    article: 
      `Kun hana vuotaa poresuuttimesta vivun ollessa suljettuna.\n
      Sulje vedentulo hanalle.\n
      Irrota käyttövipu ja suojakuppi.\n
      Irrota säätöosan kiristysmutteri.\n
      Vedä säätöosa pois.\n
      Asenna uusi säätöosa paikalleen.\n
      Kokoa hana.`,
    image: "/hana.webp",
    buttonText: "lisää",
  },
];