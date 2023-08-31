import React from "react";
import YouTube from "react-youtube";
import Taiyeheader from "./Components/Taiyeheader";

const Yorubacomponent = () => {
  const videoId = "s1Gnnt6IqyE";
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
        <h2 className="text-2xl font-semibold mb-2">Ìwà Yorùbá</h2>
        <p className="text-[#08538C]">
          Ìwà Yorùbá jẹ́ ọ̀pọ̀lọpọ̀ aṣán Yorùbá tí àwọn ọmọ Yorùbá ní orílẹ̀-ède Nàìjíríà.
          Aṣán yìí ní aṣán tí ń ṣe pọ̀ jú ọ̀kan-lára wa nínú aṣán ilẹ̀-ède Nàìjíríà, ọ̀kọ̀, aṣòrò-orin, iṣẹ́ ọ̀pọ̀, ìṣéjú kan aṣán àti ẹ̀tọ́ ọ̀pọ̀ aṣán.
        </p>

        <h2 className="text-2xl font-semibold mb-2">Ọ̀rọ̀ àti Ọ̀rúkò</h2>
        <ul className="list-disc ml-6 text-[#08538C]">
          <li>Èdè: Ìwà Yorùbá ní òwèrẹ̀ tí àwọn Yorùbá ń gba láti fi sọ́nà Yorùbá.</li>
          <li>Ọlóọpọ̀: Ní ìwà Yorùbá, ọlóọpọ̀ wáá fi ohun tí ó tọ̀òrọ̀ tọ́ báyìí.</li>
          <li>Ọmọlùábí: Ọmọlùábí ní ọ́wọ́ àti iranlọ́wọ́ tí àwọn Yorùbá ń sọ́ nípọ̀ àwa àti ìlú wa.</li>
          <li>Olóríṣá: Ìwà Yorùbá yóò pèsè láti wá ìtọ́jú olóríṣá àti ìṣẹ́ ọlóríṣá.</li>
          <li>Àṣòjú àti Ìṣéjú: Ìwà Yorùbá jẹ́ ọ̀pọ̀lọpọ̀ lọ́wọ́ aṣòjú àti ìṣéjú nípa aṣán ilẹ̀-ède Nàìjíríà.</li>
          <li>Ọmọyọlúwàbí: Tí àwọn Yorùbá yóò máa kọ́ọ́kan lé ọmọyọlúwàbí nípa èdè àti ìròyìn.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-2">Ìṣéjú kan Yorùbá</h2>
        <p className="text-[#08538C]">
          Fun ọ̀pọ̀ aṣán Yorùbá, o jẹ́ ká fi ọ̀rọ̀ Yorùbá gba sí ohun tí o ń tẹ̀lẹ̀ láti ìwé àti àwọn òwèrẹ̀ Yorùbá. O le tẹ̀lẹ̀ nípa ẹ̀kọ́ àti ìbẹ̀rẹ̀, ká o fi ìròyìn Yorùbá ṣe àti àwọn iranlọ́wọ́ pẹlu àpẹẹrẹ àti àwọn ohun tó tóbi jú ọ̀kan-lára.
        </p>

        <h2 className="text-2xl font-semibold mb-2">Ìdájọ́ tó kọ́</h2>
        <p className="text-[#08538C]">
          Ní ìdájọ́ tó kọ́, ti o ba ti wá lóye ìwà àti aṣán Yorùbá, yóò sọ èdè Yorùbá láti gbẹ̀yìn ìlànà wọn, fi àwọn ìṣẹ́jú tuntun rí, àti fi àwọn ìpínlẹ̀ ọkàn tó wà láti gbé pé o ti kàn lé aṣán Yorùbá.
          Ní ìpè aṣán ilẹ̀-ède Nàìjíríà, o le tẹ̀lẹ̀ nípa àwọn ẹ̀tọ́ Yorùbá àti àpẹẹrẹ̀ àwọn ìtọ́jú tó wà.
        </p>

        <div className="text-center mt-6">
          <a
            href="https://yo.wikipedia.org/wiki/Oj%C3%BAew%C3%A9_%C3%80k%C3%B3k%C3%B2%C3%B2kan_W%C3%ADk%C3%ACp%C3%A9d%C3%AD%C3%A0"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#08538C] hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded inline-block"
          >
            Ìwé-Ìwọ́rọ̀ Yorùbá
          </a>
        </div>
      </div>
    </div>
  );
};

export default Yorubacomponent;
