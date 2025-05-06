export default function Page() {
  return (
    // <div className="flex flex-col items-center h-screen bg-gray-100">
    //   <div className="rounded-full overflow-hidden w-32 h-32 my-20">
    //     <img src="/kst.jpg" alt="Profile Image" className="object-cover w-full h-full" />
    //   </div>
    //   <table className="border-separate border-spacing-5">
    //     <tbody>
    //       <tr>
    //         <td className="w-1/4">Nimi</td>
    //         <td className="block ms-[20px]">Kyaw Swar Thant</td>
    //       </tr>
    //       <tr>
    //         <td className="w-1/4">Ika</td>
    //         <td className="block ms-[20px]">23</td>
    //       </tr>
    //       <tr>
    //         <td className="w-1/4">Korttit</td>
    //         <td className="block ms-[20px] mt-1">
    //           <ul>
    //             <li className="inline-block me-5">
    //               <div className="flex items-center gap-2">
    //                 <span className="material-symbols-outlined">check</span>
    //                 <label htmlFor="bAjokortti">B ajokortti</label>
    //               </div>
    //             </li>
    //             <li className="inline-block me-5">
    //               <div className="flex items-center gap-2">
    //                 <span className="material-symbols-outlined">check</span>
    //                 <label htmlFor="tyoturvallisuuskortti">Työturvallisuuskortti</label>
    //               </div>
    //             </li>
    //             <li className="inline-block">
    //               <div className="flex items-center gap-2">
    //                 <span className="material-symbols-outlined">check</span>
    //                 <label htmlFor="ensiapukortti">Ensiapukortti</label>
    //               </div>
    //             </li>
    //           </ul>
    //         </td>
    //       </tr>
    //     </tbody>
    //   </table>
    // </div>
    <div className="max-w-4xl mx-auto p-6">
      {/* Profiiliotsikko */}
      <div className="bg-white shadow-xl rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6">
        <img
          src="kst.jpg"
          alt="Kyaw Swar Thant"
          className="w-32 h-32 rounded-full object-cover border-4 border-green-500"
        />
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl font-semibold text-gray-800">Kyaw Swar Thant</h1>
          <p className="text-green-600">Kiinteistönhoitaja | Tornio, Suomi</p>
          <p className="mt-2 text-gray-600 text-sm">
            Opiskelen tällä hetkellä kiinteistönhoitajaksi Ammattiopisto Lappiassa. Olen luotettava, opin nopeasti uusia taitoja ja huolehdin kiinteistöjen siisteydestä ja turvallisuudesta.
          </p>
        </div>
      </div>

      {/* Taidot */}
      <div className="mt-8 bg-green-50 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Taidot</h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-1">
          <li>Ajanhallinta</li>
          <li>Ryhmätyö</li>
          <li>Perustason kiinteistönhuoltotehtävät</li>
          <li>Vastuullisuus ja järjestyksen ylläpito</li>
        </ul>
      </div>

      {/* Työkokemus / käytännön tehtävät */}
      <div className="mt-8 bg-white shadow rounded-2xl p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Osaaminen</h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-1">
          <li>Sisäalueiden huolto (esim. WC-vuodot, lamppujen vaihto)</li>
          <li>Vesihanojen ja viemärien korjaus</li>
          <li>Lumityöt ja hiekoitus</li>
          <li>Nurmikon hoito (ruohonleikkurin käyttö)</li>
          <li>Roskien lajittelu ja kierrätys</li>
        </ul>
      </div>

      {/* Koulutus */}
      <div className="mt-8 bg-white shadow rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Koulutus</h3>
        <p className="text-gray-700">📘 Kiinteistönhoitajan perustutkinto<br />Ammattiopisto Lappia, Tornio (2024 - edelleen)</p>
      </div>

      {/* Kortit ja kielitaito */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-green-100 p-4 rounded-xl">
          <h4 className="font-medium text-gray-700 mb-2">Kortit</h4>
          <ul className="text-gray-700 list-disc pl-4 text-sm space-y-1">
            <li>Työturvallisuuskortti</li>
            <li>B-ajokortti</li>
            <li>Ensiapukortti</li>
            <li>Tulityökortti</li>
          </ul>
        </div>
        <div className="bg-green-100 p-4 rounded-xl">
          <h4 className="font-medium text-gray-700 mb-2">Kielitaito</h4>
          <p className="text-sm text-gray-700">🇫🇮 Suomi<br />🇬🇧 Englanti</p>
        </div>
      </div>
    </div>
  );
}