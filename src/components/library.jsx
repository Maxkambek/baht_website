import {} from "react";
import { Link } from "react-router-dom";
import { getLanguage, getText } from "../locale";
import Footer from "./Footer";
import { LANGUANGE } from "../tools/constant";

const Library = () => {
  const changeLanguage = (e) => {
    localStorage.setItem(LANGUANGE, e.target.value);
    document.location.reload(true);
  };

  return (
    <>
      <div className="Library">
        <select className="select_2" onChange={changeLanguage} name="" id="">
          <option selected={getLanguage() === "ru"} value="ru">
            Узб
          </option>
          <option selected={getLanguage() === "uz"} value="uz">
            Uzb
          </option>
        </select>

        <div className="container">
          <div className="row">
            <div className="col-12 d-flex justify-content-center">
              <img className="lib_logo" src="/logo.png" alt="" />
            </div>
          </div>
          <div className="col-12">
            <div className="lib_name">
              «MY PSIXOLOG» <br /> {getText("lib_n_1")} <br />{" "}
              {getText("lib_n_2")}
            </div>
          </div>
          <div className="col-12 d-flex flex-column align-items-center">
            <div className="lib_h">{getText("lib_h_1")}</div>
            <div className="lib_h">{getText("lib_h_2")}</div>
            <div className="lib_h">{getText("lib_h_3")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />
            <div className="lib_h">{getText("lib_h_4")}</div>
            <div className="lib_h">{getText("lib_h_5")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />
            <div className="lib_h">{getText("lib_h_6")}</div>
            <div className="lib_h">{getText("lib_h_7")}</div>
            <div className="lib_h">{getText("lib_h_8")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_9")}</div>
            <div className="lib_h">{getText("lib_h_10")}</div>
            <div className="lib_h">{getText("lib_h_11")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_12")}</div>
            <div className="lib_h">{getText("lib_h_13")}</div>
            <div className="lib_h">{getText("lib_h_14")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_15")}</div>
            <div className="lib_h">{getText("lib_h_16")}</div>
            <div className="lib_h">{getText("lib_h_17")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_18")}</div>
            <div className="lib_h">{getText("lib_h_19")}</div>
            <div className="lib_h">{getText("lib_h_20")}</div>

            <img src="/lib_img.png" alt="" className="lib_img" />
            <div className="lib_h">{getText("lib_h_21")}</div>
            <div className="lib_h">{getText("lib_h_22")}</div>
            <div className="lib_h">{getText("lib_h_23")}</div>

            <img src="/lib_img.png" alt="" className="lib_img" />
            <div className="lib_h">{getText("lib_h_24")}</div>
            <div className="lib_h">{getText("lib_h_25")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />
            <div className="lib_h">{getText("lib_h_26")}</div>

            <div className="lib_h">{getText("lib_h_27")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_28")}</div>
            <div className="lib_h">{getText("lib_h_29")}</div>
            <div className="lib_h">{getText("lib_h_30")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_31")}</div>
            <div className="lib_h">{getText("lib_h_32")}</div>
            <div className="lib_h">{getText("lib_h_33")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_34")}</div>
            <div className="lib_h">{getText("lib_h_35")}</div>
            <div className="lib_h">{getText("lib_h_36")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_37")}</div>
            <div className="lib_h">{getText("lib_h_38")}</div>
            <div className="lib_h">{getText("lib_h_39")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_40")}</div>
            <div className="lib_h">{getText("lib_h_41")}</div>
            <div className="lib_h">{getText("lib_h_42")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_43")}</div>
            <div className="lib_h">{getText("lib_h_44")}</div>
            <div className="lib_h">{getText("lib_h_45")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_46")}</div>
            <div className="lib_h">{getText("lib_h_47")}</div>
            <div className="lib_h">{getText("lib_h_48")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_49")}</div>
            <div className="lib_h">{getText("lib_h_50")}</div>
            <div className="lib_h">{getText("lib_h_51")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_52")}</div>
            <div className="lib_h">{getText("lib_h_53")}</div>
            <div className="lib_h">{getText("lib_h_54")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_55")}</div>
            <div className="lib_h">{getText("lib_h_56")}</div>
            <div className="lib_h">{getText("lib_h_57")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_58")}</div>
            <div className="lib_h">{getText("lib_h_59")}</div>
            <div className="lib_h">{getText("lib_h_60")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_61")}</div>
            <div className="lib_h">{getText("lib_h_62")}</div>
            <div className="lib_h">{getText("lib_h_63")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_64")}</div>
            <div className="lib_h">{getText("lib_h_65")}</div>
            <div className="lib_h">{getText("lib_h_66")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_67")}</div>
            <div className="lib_h">{getText("lib_h_68")}</div>
            <div className="lib_h">{getText("lib_h_69")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_70")}</div>
            <div className="lib_h">{getText("lib_h_71")}</div>
            <div className="lib_h">{getText("lib_h_72")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_73")}</div>
            <div className="lib_h">{getText("lib_h_74")}</div>
            <div className="lib_h">{getText("lib_h_75")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_76")}</div>
            <div className="lib_h">{getText("lib_h_77")}</div>
            <div className="lib_h">{getText("lib_h_78")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_79")}</div>
            <div className="lib_h">{getText("lib_h_80")}</div>
            <div className="lib_h">{getText("lib_h_81")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_82")}</div>
            <div className="lib_h">{getText("lib_h_83")}</div>
            <div className="lib_h">{getText("lib_h_84")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />
            <div className="lib_h">{getText("lib_h_85")}</div>

            <div className="lib_h">{getText("lib_h_86")}</div>
            <div className="lib_h">{getText("lib_h_87")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_88")}</div>
            <div className="lib_h">{getText("lib_h_89")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_90")}</div>
            <div className="lib_h">{getText("lib_h_91")}</div>
            <div className="lib_h">{getText("lib_h_92")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_93")}</div>
            <div className="lib_h">{getText("lib_h_94")}</div>
            <div className="lib_h">{getText("lib_h_95")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_96")}</div>
            <div className="lib_h">{getText("lib_h_97")}</div>
            <div className="lib_h">{getText("lib_h_98")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_99")}</div>
            <div className="lib_h">{getText("lib_h_100")}</div>
            <div className="lib_h">{getText("lib_h_101")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_102")}</div>
            <div className="lib_h">{getText("lib_h_103")}</div>
            <div className="lib_h">{getText("lib_h_104")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_105")}</div>
            <div className="lib_h">{getText("lib_h_106")}</div>
            <div className="lib_h">{getText("lib_h_107")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_108")}</div>
            <div className="lib_h">{getText("lib_h_109")}</div>
            <div className="lib_h">{getText("lib_h_110")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_111")}</div>
            <div className="lib_h">{getText("lib_h_112")}</div>
            <div className="lib_h">{getText("lib_h_113")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_114")}</div>
            <div className="lib_h">{getText("lib_h_115")}</div>
            <div className="lib_h">{getText("lib_h_116")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_117")}</div>
            <div className="lib_h">{getText("lib_h_118")}</div>
            <div className="lib_h">{getText("lib_h_119")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_120")}</div>
            <div className="lib_h">{getText("lib_h_121")}</div>
            <div className="lib_h">{getText("lib_h_122")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_123")}</div>
            <div className="lib_h">{getText("lib_h_124")}</div>
            <div className="lib_h">{getText("lib_h_125")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_126")}</div>
            <div className="lib_h">{getText("lib_h_127")}</div>
            <div className="lib_h">{getText("lib_h_128")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_129")}</div>
            <div className="lib_h">{getText("lib_h_130")}</div>
            <div className="lib_h">{getText("lib_h_131")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_132")}</div>
            <div className="lib_h">{getText("lib_h_133")}</div>
            <div className="lib_h">{getText("lib_h_134")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_135")}</div>
            <div className="lib_h">{getText("lib_h_136")}</div>
            <div className="lib_h">{getText("lib_h_137")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_138")}</div>
            <div className="lib_h">{getText("lib_h_139")}</div>
            <div className="lib_h">{getText("lib_h_140")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_141")}</div>
            <div className="lib_h">{getText("lib_h_142")}</div>
            <div className="lib_h">{getText("lib_h_143")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_144")}</div>
            <div className="lib_h">{getText("lib_h_145")}</div>
            <div className="lib_h">{getText("lib_h_146")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_147")}</div>
            <div className="lib_h">{getText("lib_h_148")}</div>
            <div className="lib_h">{getText("lib_h_149")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_150")}</div>
            <div className="lib_h">{getText("lib_h_151")}</div>
            <div className="lib_h">{getText("lib_h_152")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_153")}</div>
            <div className="lib_h">{getText("lib_h_154")}</div>
            <div className="lib_h">{getText("lib_h_155")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_156")}</div>
            <div className="lib_h">{getText("lib_h_157")}</div>
            <div className="lib_h">{getText("lib_h_158")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_159")}</div>
            <div className="lib_h">{getText("lib_h_160")}</div>
            <div className="lib_h">{getText("lib_h_161")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_162")}</div>
            <div className="lib_h">{getText("lib_h_163")}</div>
            <div className="lib_h">{getText("lib_h_164")}</div>
            <div className="lib_h">{getText("lib_h_165")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_166")}</div>
            <div className="lib_h">{getText("lib_h_167")}</div>
            <div className="lib_h">{getText("lib_h_168")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_169")}</div>
            <div className="lib_h">{getText("lib_h_170")}</div>
            <div className="lib_h">{getText("lib_h_171")}</div>

            <div className="lib_h">{getText("lib_h_172")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_173")}</div>
            <div className="lib_h">{getText("lib_h_174")}</div>
            <div className="lib_h">{getText("lib_h_175")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_176")}</div>
            <div className="lib_h">{getText("lib_h_177")}</div>
            <div className="lib_h">{getText("lib_h_178")}</div>
            <div className="lib_h">{getText("lib_h_179")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_180")}</div>
            <div className="lib_h">{getText("lib_h_181")}</div>
            <div className="lib_h">{getText("lib_h_182")}</div>
            <div className="lib_h">{getText("lib_h_183")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_184")}</div>
            <div className="lib_h">{getText("lib_h_185")}</div>
            <div className="lib_h">{getText("lib_h_186")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_187")}</div>
            <div className="lib_h">{getText("lib_h_188")}</div>
            <div className="lib_h">{getText("lib_h_189")}</div>

            <div className="lib_h">{getText("lib_h_190")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_191")}</div>
            <div className="lib_h">{getText("lib_h_192")}</div>
            <div className="lib_h">{getText("lib_h_193")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />
            <div className="lib_h">{getText("lib_h_194")}</div>

            <div className="lib_h">{getText("lib_h_195")}</div>
            <div className="lib_h">{getText("lib_h_196")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_197")}</div>
            <div className="lib_h">{getText("lib_h_198")}</div>
            <div className="lib_h">{getText("lib_h_199")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_200")}</div>
            <div className="lib_h">{getText("lib_h_201")}</div>
            <div className="lib_h">{getText("lib_h_202")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_203")}</div>
            <div className="lib_h">{getText("lib_h_204")}</div>
            <div className="lib_h">{getText("lib_h_205")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_206")}</div>
            <div className="lib_h">{getText("lib_h_207")}</div>
            <div className="lib_h">{getText("lib_h_208")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_209")}</div>
            <div className="lib_h">{getText("lib_h_210")}</div>
            <div className="lib_h">{getText("lib_h_211")}</div>

            <div className="lib_h">{getText("lib_h_212")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />
            <div className="lib_h">{getText("lib_h_213")}</div>
            <div className="lib_h">{getText("lib_h_214")}</div>

            <div className="lib_h">{getText("lib_h_215")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />
            <div className="lib_h">{getText("lib_h_216")}</div>
            <div className="lib_h">{getText("lib_h_217")}</div>
            <div className="lib_h">{getText("lib_h_218")}</div>

            <div className="lib_h">{getText("lib_h_219")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />
            <div className="lib_h">{getText("lib_h_220")}</div>
            <div className="lib_h">{getText("lib_h_221")}</div>

            <div className="lib_h">{getText("lib_h_222")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />
            <div className="lib_h">{getText("lib_h_223")}</div>
            <div className="lib_h">{getText("lib_h_224")}</div>

            <div className="lib_h">{getText("lib_h_225")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />
            <div className="lib_h">{getText("lib_h_226")}</div>
            <div className="lib_h">{getText("lib_h_227")}</div>

            <div className="lib_h">{getText("lib_h_228")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_229")}</div>
            <div className="lib_h">{getText("lib_h_230")}</div>
            <div className="lib_h">{getText("lib_h_231")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_232")}</div>
            <div className="lib_h">{getText("lib_h_233")}</div>
            <div className="lib_h">{getText("lib_h_234")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_235")}</div>
            <div className="lib_h">{getText("lib_h_236")}</div>
            <div className="lib_h">{getText("lib_h_237")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_238")}</div>
            <div className="lib_h">{getText("lib_h_239")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />
            <div className="lib_h">{getText("lib_h_240")}</div>

            <div className="lib_h">{getText("lib_h_241")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_242")}</div>
            <div className="lib_h">{getText("lib_h_243")}</div>

            <div className="lib_h">{getText("lib_h_244")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />
            <div className="lib_h">{getText("lib_h_245")}</div>
            <div className="lib_h">{getText("lib_h_246")}</div>

            <div className="lib_h">{getText("lib_h_247")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />
            <div className="lib_h">{getText("lib_h_248")}</div>
            <div className="lib_h">{getText("lib_h_249")}</div>

            <div className="lib_h">{getText("lib_h_250")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />
            <div className="lib_h">{getText("lib_h_251")}</div>
            <div className="lib_h">{getText("lib_h_252")}</div>

            <div className="lib_h">{getText("lib_h_253")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />
            <div className="lib_h">{getText("lib_h_254")}</div>
            <div className="lib_h">{getText("lib_h_255")}</div>

            <div className="lib_h">{getText("lib_h_256")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />
            <div className="lib_h">{getText("lib_h_257")}</div>
            <div className="lib_h">{getText("lib_h_258")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_259")}</div>
            <div className="lib_h">{getText("lib_h_260")}</div>
            <div className="lib_h">{getText("lib_h_261")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_262")}</div>
            <div className="lib_h">{getText("lib_h_263")}</div>
            <div className="lib_h">{getText("lib_h_264")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_265")}</div>
            <div className="lib_h">{getText("lib_h_266")}</div>
            <div className="lib_h">{getText("lib_h_267")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_268")}</div>
            <div className="lib_h">{getText("lib_h_269")}</div>
            <div className="lib_h">{getText("lib_h_270")}</div>

            <div className="lib_h">{getText("lib_h_271")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />
            <div className="lib_h">{getText("lib_h_272")}</div>
            <div className="lib_h">{getText("lib_h_273")}</div>

            <div className="lib_h">{getText("lib_h_274")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />
            <div className="lib_h">{getText("lib_h_275")}</div>
            <div className="lib_h">{getText("lib_h_276")}</div>

            <div className="lib_h">{getText("lib_h_277")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />
            <div className="lib_h">{getText("lib_h_278")}</div>
            <div className="lib_h">{getText("lib_h_279")}</div>

            <div className="lib_h">{getText("lib_h_280")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />
            <div className="lib_h">{getText("lib_h_281")}</div>
            <div className="lib_h">{getText("lib_h_282")}</div>
            <div className="lib_h">{getText("lib_h_283")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_284")}</div>
            <div className="lib_h">{getText("lib_h_285")}</div>
            <div className="lib_h">{getText("lib_h_286")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_287")}</div>
            <div className="lib_h">{getText("lib_h_288")}</div>
            <div className="lib_h">{getText("lib_h_289")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_290")}</div>
            <div className="lib_h">{getText("lib_h_291")}</div>
            <div className="lib_h">{getText("lib_h_292")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />
            <div className="lib_h">{getText("lib_h_293")}</div>

            <div className="lib_h">{getText("lib_h_294")}</div>
            <div className="lib_h">{getText("lib_h_295")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />
            <div className="lib_h">{getText("lib_h_296")}</div>

            <div className="lib_h">{getText("lib_h_297")}</div>
            <div className="lib_h">{getText("lib_h_298")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />
            <div className="lib_h">{getText("lib_h_299")}</div>

            <div className="lib_h">{getText("lib_h_300")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />
            <div className="lib_h">{getText("lib_h_301")}</div>

            <div className="lib_h">{getText("lib_h_302")}</div>
            <div className="lib_h">{getText("lib_h_303")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />
            <div className="lib_h">{getText("lib_h_304")}</div>

            <div className="lib_h">{getText("lib_h_305")}</div>
            <div className="lib_h">{getText("lib_h_306")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_307")}</div>
            <div className="lib_h">{getText("lib_h_308")}</div>
            <div className="lib_h">{getText("lib_h_309")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_310")}</div>
            <div className="lib_h">{getText("lib_h_311")}</div>
            <div className="lib_h">{getText("lib_h_312")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_313")}</div>
            <div className="lib_h">{getText("lib_h_314")}</div>
            <div className="lib_h">{getText("lib_h_315")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_316")}</div>
            <div className="lib_h">{getText("lib_h_317")}</div>
            <div className="lib_h">{getText("lib_h_318")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_319")}</div>
            <div className="lib_h">{getText("lib_h_320")}</div>
            <div className="lib_h">{getText("lib_h_321")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_322")}</div>
            <div className="lib_h">{getText("lib_h_323")}</div>
            <div className="lib_h">{getText("lib_h_324")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_325")}</div>
            <div className="lib_h">{getText("lib_h_326")}</div>
            <div className="lib_h">{getText("lib_h_327")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_328")}</div>
            <div className="lib_h">{getText("lib_h_329")}</div>

            <div className="lib_h">{getText("lib_h_330")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />
            <div className="lib_h">{getText("lib_h_331")}</div>
            <div className="lib_h">{getText("lib_h_332")}</div>
            <div className="lib_h">{getText("lib_h_333")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_334")}</div>
            <div className="lib_h">{getText("lib_h_335")}</div>
            <div className="lib_h">{getText("lib_h_336")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_337")}</div>
            <div className="lib_h">{getText("lib_h_338")}</div>
            <div className="lib_h">{getText("lib_h_339")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_340")}</div>
            <div className="lib_h">{getText("lib_h_341")}</div>
            <div className="lib_h">{getText("lib_h_342")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_343")}</div>
            <div className="lib_h">{getText("lib_h_344")}</div>
            <div className="lib_h">{getText("lib_h_345")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_346")}</div>
            <div className="lib_h">{getText("lib_h_347")}</div>
            <div className="lib_h">{getText("lib_h_348")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_349")}</div>
            <div className="lib_h">{getText("lib_h_350")}</div>
            <div className="lib_h">{getText("lib_h_351")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_352")}</div>
            <div className="lib_h">{getText("lib_h_353")}</div>
            <div className="lib_h">{getText("lib_h_354")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_355")}</div>
            <div className="lib_h">{getText("lib_h_356")}</div>
            <div className="lib_h">{getText("lib_h_357")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_358")}</div>
            <div className="lib_h">{getText("lib_h_359")}</div>
            <div className="lib_h">{getText("lib_h_360")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_361")}</div>
            <div className="lib_h">{getText("lib_h_362")}</div>
            <div className="lib_h">{getText("lib_h_363")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_364")}</div>
            <div className="lib_h">{getText("lib_h_365")}</div>
            <div className="lib_h">{getText("lib_h_366")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_367")}</div>
            <div className="lib_h">{getText("lib_h_368")}</div>
            <div className="lib_h">{getText("lib_h_369")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_370")}</div>
            <div className="lib_h">{getText("lib_h_371")}</div>
            <div className="lib_h">{getText("lib_h_372")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_373")}</div>
            <div className="lib_h">{getText("lib_h_374")}</div>
            <div className="lib_h">{getText("lib_h_375")}</div>

            <div className="lib_h">{getText("lib_h_376")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />
            <div className="lib_h">{getText("lib_h_377")}</div>
            <div className="lib_h">{getText("lib_h_378")}</div>

            <div className="lib_h">{getText("lib_h_379")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />
            <div className="lib_h">{getText("lib_h_380")}</div>
            <div className="lib_h">{getText("lib_h_381")}</div>

            <div className="lib_h">{getText("lib_h_382")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />
            <div className="lib_h">{getText("lib_h_383")}</div>
            <div className="lib_h">{getText("lib_h_384")}</div>
            <div className="lib_h">{getText("lib_h_385")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_386")}</div>
            <div className="lib_h">{getText("lib_h_387")}</div>
            <div className="lib_h">{getText("lib_h_388")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_389")}</div>
            <div className="lib_h">{getText("lib_h_390")}</div>
            <div className="lib_h">{getText("lib_h_391")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_392")}</div>
            <div className="lib_h">{getText("lib_h_393")}</div>
            <div className="lib_h">{getText("lib_h_394")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_395")}</div>
            <div className="lib_h">{getText("lib_h_396")}</div>
            <div className="lib_h">{getText("lib_h_397")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_398")}</div>
            <div className="lib_h">{getText("lib_h_399")}</div>
            <div className="lib_h">{getText("lib_h_400")}</div>

            <div className="lib_h">{getText("lib_h_401")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />
            <div className="lib_h">{getText("lib_h_402")}</div>
            <div className="lib_h">{getText("lib_h_403")}</div>

            <div className="lib_h">{getText("lib_h_404")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_405")}</div>
            <div className="lib_h">{getText("lib_h_406")}</div>

            <div className="lib_h">{getText("lib_h_407")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_408")}</div>
            <div className="lib_h">{getText("lib_h_409")}</div>

            <div className="lib_h">{getText("lib_h_410")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_411")}</div>
            <div className="lib_h">{getText("lib_h_412")}</div>

            <div className="lib_h">{getText("lib_h_413")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_414")}</div>
            <div className="lib_h">{getText("lib_h_415")}</div>

            <div className="lib_h">{getText("lib_h_416")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_417")}</div>
            <div className="lib_h">{getText("lib_h_418")}</div>

            <div className="lib_h">{getText("lib_h_419")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_420")}</div>
            <div className="lib_h">{getText("lib_h_421")}</div>

            <div className="lib_h">{getText("lib_h_422")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_423")}</div>
            <div className="lib_h">{getText("lib_h_424")}</div>
            <div className="lib_h">{getText("lib_h_425")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_426")}</div>
            <div className="lib_h">{getText("lib_h_427")}</div>
            <div className="lib_h">{getText("lib_h_428")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_429")}</div>
            <div className="lib_h">{getText("lib_h_430")}</div>
            <div className="lib_h">{getText("lib_h_431")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_432")}</div>
            <div className="lib_h">{getText("lib_h_433")}</div>
            <div className="lib_h">{getText("lib_h_434")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_435")}</div>
            <div className="lib_h">{getText("lib_h_436")}</div>
            <div className="lib_h">{getText("lib_h_437")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_438")}</div>
            <div className="lib_h">{getText("lib_h_439")}</div>
            <div className="lib_h">{getText("lib_h_440")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_441")}</div>
            <div className="lib_h">{getText("lib_h_442")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />
            <div className="lib_h">{getText("lib_h_443")}</div>

            <div className="lib_h">{getText("lib_h_444")}</div>
            <div className="lib_h">{getText("lib_h_445")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />
            <div className="lib_h">{getText("lib_h_446")}</div>

            <div className="lib_h">{getText("lib_h_447")}</div>
            <div className="lib_h">{getText("lib_h_448")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />
            <div className="lib_h">{getText("lib_h_449")}</div>

            <div className="lib_h">{getText("lib_h_450")}</div>

            <div className="lib_h">{getText("lib_h_451")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />
            <div className="lib_h">{getText("lib_h_452")}</div>
            <div className="lib_h">{getText("lib_h_453")}</div>

            <div className="lib_h">{getText("lib_h_454")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_455")}</div>
            <div className="lib_h">{getText("lib_h_456")}</div>
            <div className="lib_h">{getText("lib_h_457")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_458")}</div>
            <div className="lib_h">{getText("lib_h_459")}</div>
            <div className="lib_h">{getText("lib_h_460")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_461")}</div>
            <div className="lib_h">{getText("lib_h_462")}</div>
            <div className="lib_h">{getText("lib_h_463")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_464")}</div>
            <div className="lib_h">{getText("lib_h_465")}</div>
            <div className="lib_h">{getText("lib_h_466")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_467")}</div>
            <div className="lib_h">{getText("lib_h_468")}</div>
            <div className="lib_h">{getText("lib_h_469")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_470")}</div>
            <div className="lib_h">{getText("lib_h_471")}</div>
            <div className="lib_h">{getText("lib_h_472")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_473")}</div>
            <div className="lib_h">{getText("lib_h_474")}</div>
            <div className="lib_h">{getText("lib_h_475")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_476")}</div>
            <div className="lib_h">{getText("lib_h_477")}</div>
            <div className="lib_h">{getText("lib_h_478")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_479")}</div>
            <div className="lib_h">{getText("lib_h_480")}</div>
            <div className="lib_h">{getText("lib_h_481")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_482")}</div>
            <div className="lib_h">{getText("lib_h_483")}</div>
            <div className="lib_h">{getText("lib_h_484")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />

            <div className="lib_h">{getText("lib_h_485")}</div>
            <div className="lib_h">{getText("lib_h_486")}</div>
            <div className="lib_h">{getText("lib_h_487")}</div>

            <div className="lib_h">{getText("lib_h_488")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />
            <div className="lib_h">{getText("lib_h_489")}</div>
            <div className="lib_h">{getText("lib_h_490")}</div>

            <div className="lib_h">{getText("lib_h_491")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />
            <div className="lib_h">{getText("lib_h_492")}</div>
            <div className="lib_h">{getText("lib_h_493")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />
            <div className="lib_h">{getText("lib_h_494")}</div>

            <div className="lib_h">{getText("lib_h_495")}</div>
            <div className="lib_h">{getText("lib_h_496")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />
            <div className="lib_h">{getText("lib_h_497")}</div>

            <div className="lib_h">{getText("lib_h_498")}</div>
            <div className="lib_h">{getText("lib_h_499")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />
            <div className="lib_h">{getText("lib_h_500")}</div>

            <div className="lib_h">{getText("lib_h_501")}</div>

            <div className="lib_h">{getText("lib_h_502")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />
            <div className="lib_h">{getText("lib_h_503")}</div>
            <div className="lib_h">{getText("lib_h_504")}</div>

            <div className="lib_h">{getText("lib_h_505")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />
            <div className="lib_h">{getText("lib_h_506")}</div>

            <div className="lib_h">{getText("lib_h_507")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />
            <div className="lib_h">{getText("lib_h_508")}</div>
            <img src="/lib_img.png" alt="" className="lib_img" />
          </div>

          <div className="col-12">
            <div className="lib_name_2">{getText("lib_n_3")}</div>
            <div className="lib_p">{getText("lib_n_4")}</div>

            <Link to="/" className="lib_l">
              <div>{getText("bosh")}</div>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Library;
