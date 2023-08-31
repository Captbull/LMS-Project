import React from "react";
import Header from "./Components/Header";
import YouTube from "react-youtube";
import Taiyeheader from "./Components/Taiyeheader";

const Hausa = () => {
  const videoId = "KY-T159CcTo"; // Update this with the relevant Hausa video ID
  const opts = {
    height: "600", // Adjust the height as needed
    width: "100%", // Adjusted for mobile responsiveness
  };

  return (
    <div>
    <Taiyeheader/>
      <div className="content-container p-4">
        <YouTube videoId={videoId} opts={opts} className="mx-auto mb-6" />
        <h2 className="text-2xl font-semibold mb-2 text-[#08538C]">Hausa Culture and Language</h2>
        <p className="text-[#08538C]">
          Fannin Hausa sun nufi dukkanin 'yan Hausa da yawa, sun fi lokacin da suke yin zababu akan fasaha da tsarin rayuwa a birnin Kasar Hausa, wadanda ke Najeriya.
          Fannin Hausa na dukkanin wannan sun ce za a yi saboda irin lokaci da suke dawo goma akan hira da kuma wasan kwaikwayo, wasan damuwa, tallafa, doka, da suke rayuwa irin na yau da kullum.
        </p>

        <h2 className="text-2xl font-semibold mb-2 text-[#08538C]">Magana da Karamar Hoto</h2>
        <ul className="list-disc ml-6 text-[#08538C]">
          <li>Larabci: Fannin Hausa sun nufi su kasance da hoton a harshen Larabci don yin fassara a cikin harshen Hausa.</li>
          <li>Yan uwansa: A fannin Hausa, mazaunin Hausa suke fara rubutawa don koyawa irin abubuwan da suka dauke da shi.</li>
          <li>Mu'awiyar Marigayi: Mu'awiyar marigayi shine mutumin da ya sa a wannan zamani ya taimaka wa 'yan Hausa a cikin suna da yawa da kuma a birnin su.</li>
          <li>Hanyar Hoto: Fannin Hausa za su iya raba hoton hoto da kuma hanyar hoto.</li>
          <li>Magana da Fasaha: Fannin Hausa sun nufi su sanya hotuna game da maganganu da kuma fasaha.</li>
          <li>Rayuwa da Kwayar Rayuwa: A fannin Hausa, 'yan Hausa suke so su koyi maku da kwayar rayuwa game da hira da kuma damuwa.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-2 text-[#08538C]">Ma'ana da Ka'idoji</h2>
        <p className="text-[#08538C]">
          Don fannin Hausa, za a iya fitar da magana Hausa don yin kalar kai daga hoton Hausa da kuma sunan sunan Hausa. Za a iya fitar da kalar kai a cikin harsuna, kuma za a iya su shirya game da sunaye da wasu ma'ana masu fassara, da kuma su taimaka a yin aiki tare da su hira da sauran kayayyakin rana na cikin fannin Hausa.</p>
        
        <h2 className="text-2xl font-semibold mb-2 text-[#08538C]">Bayani</h2>
        <p className="text-[#08538C]">
          A cikin bayani ne, idan kana so ka fitar da fannin Hausa, zaka iya kira harshen Hausa don yin fassara ta harshe, ka bari sosai ma'ana masu fassara, kuma ka ajiye shirinmu don samun abubuwan da suka dauka a fannin Hausa.
          A cikin sababbin bayanai masu amfani a Najeriya, zaka iya kira cikakken sunan harshen Hausa da kuma nau'ikan kuɗi da suka dauka a cikin fannin Hausa.</p>

        <div className="text-center mt-6">
          <a
            href="https://ha.wikipedia.org/wiki/Koyon_Cikin_Wikipedia"
            target="_blank"
            rel="noopener noreferrer"
          className="bg-purple-500 hover:bg-[#08538C] text-white font-semibold py-2 px-4 rounded inline-block"
          >
            Koyon Cikin Wikipedia
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hausa;
