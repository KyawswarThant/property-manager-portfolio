import Link from "next/link";
import Articles from "./articles/page";
import { articles } from "./data/articles";

export default function Kiinteistonhoitaja() {
  return (
    <>
      {/* <div className="grid grid-cols-2 gap-4 mx-5 mt-[90px]">
        <div className="">
          <img src="/lammonjakohuone.jpg" alt="lämmönjakohuone" className="object-fill w-200 h-150 rounded-md" />
        </div>
        <div className="">
          <h3 className="mb-8 ms-5 font-serif italic text-[#D3D3D3] text-[20px] text-center">
            Lämmitys Jarjestelmaa
          </h3>
          <p className="text-[18px] tracking-wide leading-9 text-[#D3D3D3]">
            Lämmonjakohuonessa kiinteistönhoitaja pitää tarkistaa paineita ja lämpötiloja.
            Kaukolämpö menoveden ja paluuveden paine pitää olla eri. Jos se on sama, se voi olla mudanerotin tukossa.
            Ja sitten lämmitys verkoston paine pitää olla oikein. Jos se on vähemmän, voi täyttää lisää lämmin vettä lämmin käyttö veden verkosta.
            Lämpimän veden lämpötila pitää olla 55 astetta ja 65 astetta valilla. Vanha kiinteistössä voi olla 50 astetta ja 65 astetta valilla.
            Säätöventtili pitää olla oikein säädetty, jos se ei ole samaa kuin merkkikilvessä, se pitää säätää oikein. Ja sitten pitää tarkistaa että onko se jotain lämmönsiirtimen sisäinen vuoto.<br />
          </p>
        </div>
      </div>
      <hr className="my-5"/>
      <div className="grid grid-cols-2 gap-4 mx-5 mb-5">
        <div className="">
          <h3 className="mb-8 ms-5 font-serif italic text-[#D3D3D3] text-[20px] text-center">
            WC-vuotto
          </h3>
          <p className="text-[18px] tracking-wide leading-9 text-[#D3D3D3]">
            WC-vuotto voi johtua useista syistä
          </p>
        </div>
        <div className="">
          <img src="/IDO59.png" alt="WC" className="object-fill w-200 h-150 rounded-md" />
        </div>
      </div>
      <hr className="my-5"/>
      <div className="grid grid-cols-2 gap-4 mx-5 mb-5">
        <div className="">
          <img src="/hana.webp" alt="WC" className="object-fill w-200 h-150 rounded-md" />
        </div>
        <div className="">
          <h3 className="mb-8 ms-5 font-serif italic text-[#D3D3D3] text-[20px] text-center">
            Hana huolto(säätöosan vaihto)
          </h3>
          <p className="text-[18px] tracking-wide leading-9 text-[#D3D3D3]">
            Kun hana vuotaa poresuuttimesta vivun ollessa suljettuna.<br />
            Sulje vedentulo hanalle.<br />
            Irrota käyttövipu ja suojakuppi.<br />
            Irrota säätöosan kiristysmutteri.<br />
            Vedä säätöosa pois.<br />
            Asenna uusi säätöosa paikalleen.<br />
            Kokoa hana.
          </p>
        </div>
      </div> */}
      <Articles items={articles} />
    </>
  );
}