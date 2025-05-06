export default function Contact() {
  return (
    // <div className="flex flex-col items-center justify-center h-screen">
    //   <div className="bg-white rounded-lg p-6">
    //     <h1 className="text-4xl font-bold text-[#708090] mb-4">Yhteystiedot</h1>
    //     <p className="text-lg text-[#708090] mb-2">Puhelin: +358417406221</p>
    //     <p className="text-lg text-[#708090] mb-2">Sähköposti: kyawswar.thant25@gmail.com</p>
    //   </div>
    // </div>
    <div className="flex flex-col items-center min-h-screen mt-[200px]">
      <div className="bg-white rounded-lg p-6">
        <div className="mt-4 flex justify-center md:justify-start gap-4 text-sm">
          <a href="mailto:kyawswar.thant25@gmail.com" className="text-gray-500 hover:text-green-600 text-lg">📧 kyawswar.thant25@gmail.com</a>
          <a href="tel:+358417406221" className="text-gray-500 hover:text-green-600 text-lg">📞 +358 41 740 6221</a>
        </div>
        <p className="mt-2 text-gray-500 text-sm text-center">📍 Kauppakatu 35, 95400, Tornio</p>
      </div>
    </div>
  );
}