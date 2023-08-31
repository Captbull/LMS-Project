import React from "react";
import YouTube from "react-youtube";
import Taiyeheader from "./Components/Taiyeheader";

const Igbo = () => {
  const videoId = "Bnakxm3QdQg";
  const opts = {
    height: "600", // Adjust the height as needed
    width: "100%",  // Adjusted for mobile responsiveness
  };

  return (
    <div>
    <Taiyeheader/>
      <div className="content-container p-4">
      <YouTube
          videoId={videoId}
          opts={opts}
          className="mx-auto mb-6"
        />
        <h2 className="text-2xl font-semibold mb-2 text-[#08538C]">Igbo Culture and Language</h2>
        <p className="text-[#08538C]">
          Ìgbá Ìgbó jẹ́ ọ̀pọ̀lọpọ̀ ẹ̀sọ́dọ́mọ́ Igbó tí àwọn ọmọ Igbó ní orílẹ̀-ède Nàìjírìá. Ìgbá yìí ní àṣán tí ń ṣe pọ̀ jú ọ̀kan-lára wa nínú àṣán ilẹ̀-ède Nàìjírìá, àṣòrò-orin, iṣẹ́ ọlóógbó, ẹ̀wù àti àwọn ìròyìn tí o tí ń gbẹ́ẹ́sẹ̀ ní ìwọ̀n.
        </p>

        <h2 className="text-2xl font-semibold mb-2 text-[#08538C]">Ọ̀rọ̀ na-akwụkwọ Igbo</h2>
        <ul className="list-disc ml-6 text-[#08538C]">
          <li>Ède: Ìgbá Ìgbó jẹ́ òwèrẹ̀ tí àwọn Igbó ń gba láti fi sọ́nà Igbó.</li>
          <li>Ògwé: Ní ìgbá Ìgbó, ògwé wáá fi ohun tí ó tọ̀òrọ̀ tọ́ báyìí.</li>
          <li>Ọmọdịnaya: Ọmọdịnaya ní òwọ́ àti iranlọ́wọ́ tí àwọn Igbó ń sọ́ nípọ̀ àwa àti ìlú wa.</li>
          <li>Ìgbá Ọ̀fọ̀: Ìgbá Ìgbó yóò pèsè láti ọ́tú òfọ̀ àti ìṣẹ́ ọ̀fọ̀.</li>
          <li>Ìjọ́ àti Ìrìjọ́: Ìgbá Ìgbó jẹ́ ọ̀pọ̀lọpọ̀ nípa ìjọ́ àti ìrìjọ́ nípa àṣán ilẹ̀-ède Nàìjírìá.</li>
          <li>Ọ̀rọ́ na-agbasa Igbo: Tí àwọn Igbó yóò máa kọ́ọ́kan lé ọ̀rọ́ na-agbasa nípa ède àti ìròyìn.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-2 text-[#08538C]">Ìṣéjú àti Ìpínlẹ̀</h2>
        <p className="text-[#08538C]">
          Fun ọ̀pọ̀ àṣán Igbó, o jẹ́ ká fi ọ̀rọ̀ Igbó gba sí ohun tí o ń tẹ̀lẹ̀ láti ìwé àti àwọn òwèrẹ̀ Igbó. O le tẹ̀lẹ̀ nípa ẹ̀kọ́ àti ìbẹ̀rẹ̀, ká o fi ìròyìn Igbó ṣe àti àwọn iranlọ́wọ́ pẹlu àpẹẹrẹ àti àwọn ohun tó tóbi jú ọ̀kan-lára.</p>
        
        <h2 className="text-2xl font-semibold mb-2 text-[#08538C]">Ìdájọ́ tó kọ́</h2>
        <p className="text-[#08538C]">
          Ní ìdájọ́ tó kọ́, ti o ba ti wá lóye ìwà àti àṣán Igbó, yóò sọ èdè Igbó láti gbẹ̀yìn ìlànà wọn, fi àwọn ìṣẹ́jú tuntun rí, àti fi àwọn ìpínlẹ̀ ọkàn tó wà láti gbé pé o ti kàn lé àṣán Igbó.
          Ní ìpè àṣán ilẹ̀-ède Nàìjírìá, o le tẹ̀lẹ̀ nípa àwọn ẹ̀tọ́ Igbó àti àpẹẹrẹ̀ àwọn ìtọ́jú tó wà.
        </p>

        <div className="text-center mt-6">
          <a
            href="https://ig.wikipedia.org/wiki/Akw%C3%BBkw%C3%BB_%C3%80z%E1%BB%8D"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#08538C] hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded inline-block"
          >
            Akwụkwọ Igbo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Igbo;

