import {
  Radio,
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { getText2 } from "../locale";

const Prarobotka3 = () => {
  const nav = useNavigate();
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className="Pro1">
      <div className="pro_box">
        <div className="seriy f600 s36 ta">
          Assalomu aleykum bizning aziz ishtirokchimiz.
        </div>
        <div className="color_main f600 ta s36 mt-4">
          BahtWoman Baxt maktabining o'quv platformasiga <br /> Xush Kelibsiz.
        </div>
        <div className="f600 mt-5 s24 ta">
          Hozirda biz sizni otangiz bilan bo'lgan munosabatlaringiz sizning
          hayotingizga qanday ta'sir o'tkazganini kuchli tahlil va prorabotkalar
          asosida ishlab chiqyapmiz.
        </div>
        <div className="f600 seriy s36 mt-5 ta">
          Demak, savolni diqqat bilan o'qiymiz.
        </div>
        <div className="f500 ta s28 mt-3">
          Otangiz onangiz bilan ajrashgandan keyin yoki oyingizni o'limidan
          so'ng u boshqa ayolga uylanganmi? Yoki dadangiz siz va boshqa
          farzandlarini deb uylanmasdan o'tganmi?
        </div>
        <div className="f500 seriy ta s28 mt-5">
          Demak, siz 16 yoshga to'lguningizga qadar “Yolg'iz o'tgan ota” yoki
          aksincha “Boshqa ayolga uylangan, ya'ni bilvosita sizga xiyonat qilgan
          ota” psixologik modellarini guvohi bo'lganingiz – sizning kelajak
          taqdiringizga qanday ta'sir qilgan?
        </div>
        <div className="list_item">
          <img src="/img/3.png" alt="" />
          <div className="f500 s24 ">
            Hozir siz quyida keltirilgan 3ta muhim jihat to'g'risida o'ylab
            ko'rasiz, qaysi biri sizga tegishli ekanligini o'zingiz uchun
            bloknotingizda belgilaysiz.
          </div>
        </div>
        <div className="list_item">
          <img src="/img/3.png" alt="" />
          <div className="f500 s24 ">
            Undan keyin esa aynan sizga tegishli gapni prorabotkalarni ichidan
            topib, yozib chiqasiz.
          </div>
        </div>
        <div className="f600 seriy s36 mt-5 ta">Demak o'qishni boshlaymiz.</div>
        <div className="f500 s24 mt-5 ab">
          <span className="kok s28">{``}Birinchi jihat</span> – Agar sizning
          otangiz onangizning o'limidan so'ng / yoki u bilan ajrashib ketganidan
          keyin boshqa oila qurgan bo'lsa, demak siz:
        </div>
        <div className="list_item pl50">
          <img src="icon_cor.png" alt="" />
          <div className="f500 s24 ">ham yo'qotish,</div>
        </div>
        <div className="list_item pl50">
          <img src="icon_cor.png" alt="" />
          <div className="f500 s24 ">
            ham bevafolik / xiyonat modellarini boshingizdan kechirgansiz,
            to'g'rimi?!
          </div>
        </div>
        <div className="list_item">
          <img src="img/1.png" alt="" />
          <div className="f500 s24 ">
            Endi shoshmasdan o'ylab ko'ring - Siz hayotingizda eringizni / yoki
            yigitingizni / yoki qattiq sevgan jazmaningizni yo'qotish bilan,
            ya'ni u qandaydir sabablarga ko'ra o'z-o'zidan hayotingizdan chiqib
            ketishi bilan yoki uning bevafoligi bilan to'qnashmaganmisiz?
          </div>
        </div>
        <div className="list_item pl50">
          <img src="img/3.png" alt="" />
          <div className="f500 s24 ">
            Chunki sizning Ong ostingiz - Men o'zim uchun qadrdon bo'lgan erkak
            onamni va meni o'rnimizga boshqa ayolni tanlab, u bilan yangi oila
            qurdi. Demak, hayotimdagi qolgan yaqin erkaklarim bilan ham men
            xuddi shunday yo'qotish va sotqinlik modellarini boshimdan
            o'tkazishim mumkin! – degan qo'rquvni majburiy dastur sifatida
            miyangizga muhrlagan bo'lishi mumkin.
          </div>
        </div>
        <div className="list_item pl50">
          <img src="img/3.png" alt="" />
          <div className="f500 s24 ">
            Ha, bizning bolaligimizda ruhiyatimiz o'ta sezgir bo'ladi (chunki
            nerv tolalari endigina o'sib, shakllanayotgan vaqt hisoblanadi).
            Shuning uchun ham boshimizdan kechirgan kuchli ruhiy kechinmalarni
            va his-tuyg'ularni bizning Ong ostimiz har doim miyamizga muhrlab
            qoldiradi.
          </div>
        </div>
        <div className="f500 s24 mt-5 ab">
          <span className="kok s30 ab">{``}Ikkinchi jihat </span> - Siz hozirgi
          kunda bori ham, yo'g'i ham bilinmaydigan erkak bilan yashamayapsizmi
          yoki shunday yigit / jazman bilan uchrashmayapsizmi? Axir sizning
          dadangiz (boshqa ayolga uylanib ketganidan so'ng) hayotingzda bor
          bo'lib, to'liq siz bilan yashamagan, lekin butunlay yo'q bo'lib ham
          ketmagan – to'g'rimi?!
        </div>
        <div className="f500 s24 mt-3 ab">
          <span className="seriy f600">Taqqoslab ko'ring-chi,</span> qanchalik
          Ong ostingiz o'sha eslab qolgan modelni faqat boshqa personajlarda
          qaytaryapti?
        </div>

        <div className="s30 f600 ta color_main mt-5">Qo'shimcha izohlar:</div>
        <div className="list_item">
          <div className="s24 f500">{"a)"}</div>
          <div className="s24 f500">
            <span className="fil f600 s28">Agarda</span> sizning otangiz
            butunlay hayotingizdan yo'q bo'lib ketgan bo'lsa, demak siz 110ta
            savoldan iborat testimizning 2-chi savolga qaytib, barcha javoblarni
            qaytadan o'qib chiqishingiz kerak bo'ladi.{" "}
          </div>
        </div>
        <div className="list_item">
          <div className="s24 f500">{"b)"}</div>
          <div className="s24 f500">
            <span className="kok f600 s28">Agarda</span> siz onangizning
            o'limidan so'ng yoki ajrashish jarayonidan keyin otangiz bilan
            qolgan bo'lsangiz, demak sizning otangiz sizni tezroq turmushga
            uzatib yuborgan – yangi olgan xotini bilan sokin hayot kechirishi
            uchun siz xalaqit bermasligingiz uchun, to'g'rimi?!{" "}
          </div>
        </div>
        <div className="list_item pl50">
          <img src="/img/3.png" alt="" />
          <div className="f500  s24">
            Demak bundan chiqdi sizning kelajak hayotingizda ham sizning
            qaynonangiz (otangizni aks ettiruvchi hayotingizdagi keyingi
            avtoritetingiz) ham sizdan tez vaqt orasida qutilishni va sizni
            uyidan chiqazib yuborishni istagan bo'lishi mumkin.
          </div>
        </div>
        <div className="list_item">
          <div className="s24 f500">{"b)"}</div>
          <div className="s24 f500">
            <span className="color_main f600 s28">Agarda</span> otangiz
            onangizning o'limidan / yoki qandaydir mudhish hayotiy voqealardan
            so'ng sizni buvi-xolalaringizga berib yuborgan bo'lsa, demak sizning
            kelajak hayotingizda qaynonangiz / eringiz / yoki yigitingiz sizdan
            qutilish niyatida har-hil hiyla-nayranglar o'ylab topgan bo'lishi
            ehtimoldan holis emas.{" "}
          </div>
        </div>
        <div className="list_item pl50">
          <img src="/img/3.png" alt="" />
          <div className="f500  s24">
            Aslida esa otangizdan qolgan keraksizlik dasturi ishlayaptgan
            bo'ladi, xolos.
          </div>
        </div>
        <div className="f500 s24 mt-5 ab">
          <span className="kok s28">{``}Uchinchi jihat </span> – Agar otangiz
          onangiz bilan ajrashgandan so'ng / yoki uning o'limidan so'ng boshqa
          oila qurmagan bo'lsa yoki uzoq vaqtdan so'ng yangi oila qurgan bo'lsa,
          o'sha vaqt oralig'ida uni o'zi va barcha qarindoshlari ham sizga
          dadangizga nisbatan “majburiy” muhabbat hisini va uni oldidagi
          farzandlik burchingizni bajarmasangiz nima bo'lishini ta'kidlab, turli
          hil yurak-siqdi qo'rquvlarni va aybdorlik hisini singdirgan
          bo'lishining ehtimoli juda katta.
        </div>
        <div className="mt-3 f600 fil ta">
          Keling endi tahlil qilib ko'raylik.
        </div>
        <div className="mt-3 f500 s24 ab">
          Boshqa uylanmaslik / yoki uzoq vaqt bo'ydoq bo'lib yurish aslida
          dadangizning shaxsiy tanlovi va o'zi qabul qilgan qarori bo'lgan,
          to'g'rimi?! Uni hech kim – “Uzoq vaqt yolg'iz qolgin yoki butun umr
          yolg'iz o'tgin” – deb, zo'rlamagan.
        </div>
        <div className="list_item s24 f500 pl50">
          <img src="img/3.png" alt="" />
          <div>
            <span className="seriy f600 ">
              Biroq uning qarindoshlari (va balkim o'zi ham)
            </span>{" "}
            dadangiz o'zi qabul qilgan qarori uchun sizga “farzandlik burchi
            qo'shig'i ostida” aybdorlik tuyg'usini bilvosita singdirgani
            sababli, kelajakda siz o'zingizni o'qqa-cho'qqa urib, boringizni
            dadangizga berishga, uning ko'nglini olishga, uning aytganini
            o'ylamasdan ham bajarishga tayyor qiz bo'lib katta bo'lganingizni
            ehtimoli juda katta.{" "}
          </div>
        </div>
        <div className="list_item s24 f500">
          <img src="img/1.png" alt="" />
          <div>
            Agarda siz –{" "}
            <span className="color_main">
              “Ha, men xuddi shunday qiz bo'lib katta bo'lganman”
            </span>{" "}
            – desangiz, demak Ong osti dasturingizga asosan siz hayotingizga
            o'zingizdan va o'z ehtiyojlaringizdan voz kechib, asosan faqat uning
            ko'nglini olishingizni va boringizni faqat unga berishingizni, uning
            aytganini qilishingizni istaydigan yigitni/ yoki erni / yoki
            qaynonani / va hatto shunday o'g'ilni jalb qilgan bo'lishingiz
            mumkin.
          </div>
        </div>
        <div className="list_item s24 f500 pl50">
          <img src="img/3.png" alt="" />
          <div>
            Ya'ni u(lar) ham – qilayotgan barcha yaxshiligingizni hamda
            berayotgan barcha mehr-muhabbatingizni – bu sening burching deb,
            chunki men sening eringman, yigitingman-da / yoki men sizni
            qaynonangizman-da / yoki men sizni o'g'lingizman-da, qilishga
            majbursiz! – deb aytadilar.
          </div>
        </div>
        <div className="mt-5 ta seriy f500 s30 ab">
          Demak, bizning variant javoblarimiz tugadi va biz siz bilan
          prorabotkalarimizni yozishga o'tamiz.
        </div>
        <div
          onClick={() => nav("/what-pro")}
          className="prorabotka_what tort f600 color_main s36 mt-5 ta"
        >
          PRORABOTKA – BU NIMA?
        </div>
        <div className="tort mt-5">
          <div className=" f600 seriy s36 ta">Prorabotka:</div>

          <div className=" f600 seriy s24 mt-5 ta">
            Demak, hozirda bloknotingizni yangi varog'ini ochib, quyidagilarni
            ichidan FAQAT o'zingizga tegishli prorabotkani (ya'ni anglash,
            tushunish va kechirimlarni) topib, yozib chiqasiz.
          </div>
          <div className=" f600 color_main s28 mt-5 ta">
            Keyin esa pozitiv prorabotkalarga o'tamiz.
          </div>
          <div className="list_item s24 f500">
            <img src="/icon_cor.png" alt="" />
            <div>Salom, dada.</div>
          </div>

          <div className="list_item s24 f500">
            <img src="/icon_cor.png" alt="" />
            <div>
              Bugun men siz bilan onamning o'limidan so'ng / yoki onam bilan
              ajrashib ketganingizdan so'ng boshqa oila qurganingiz mening
              ruhiyatimga qanchalik qattiq ta'sir ko'rsatgani haqida
              gaplashmoqchi edim.{" "}
            </div>
          </div>

          <div className="list_item s24 pl f500">
            <img src="/img/1.png" alt="" />
            <div>Chunki o'sha payt men:</div>
          </div>
          <div className="list_item mt-1 s24 f500 pl50">
            <img src="/icon_cor.png" alt="" />
            <div>ham yo'qotish, </div>
          </div>
          <div className="list_item s24 mt-1 f500 pl50">
            <img src="/icon_cor.png" alt="" />
            <div>
              ham bevafolik – ya'ni xiyonat modelining guvohi bo'lganman.
            </div>
          </div>
          <div className="list_item s24 f500">
            <img src="icon_cor.png" alt="" />
            <div>
              Bugun o'ylab ko'rsam – O'sha voqea mening ruhiyatimga shunchalik
              qattiq ta'sir qilgan ekan-ki, mening Ong ostim kelajak hayotimda
              ham men erimni / yoki yigitimni / yoki qattiq sevgan jazmanimni
              yo'qotish bilan, ya'ni u qandaydir sabablarga ko'ra o'z-o'zidan
              hayotimdan chiqib ketishi bilan yoki uning bevafoligi / xiyonati
              bilan bog'liq hayotiy voqelarni jalb qilgan ekan.
            </div>
          </div>
          <div className="list_item s24 pl f500">
            <img src="/img/1.png" alt="" />
            <div>
              Ha, mening Ong ostim - Men o'zim uchun qadrdon bo'lgan erkak
              onamni va meni o'rnimizga boshqa ayolni tanlab, u bilan yangi oila
              qurdi. Demak, hayotimdagi qolgan yaqin erkaklarim bilan ham men
              xuddi shunday yo'qotish va sotqinlik modellarini boshimdan
              o'tkazishim mumkin! – degan qo'rquvni majburiy dastur sifatida
              miyamga muhrlaganini tushunib yetyapman.
            </div>
          </div>
          <div className="list_item s24 pl f500">
            <img src="/img/3.png" alt="" />
            <div>
              Axir, bizning bolaligimizda ruhiyatimiz o'ta sezgir bo'ladi-ku
              (chunki nerv tolalari endigina o'sib, shakllanayotgan vaqt
              hisoblanadi). Shuning uchun ham boshimizdan kechirgan kuchli ruhiy
              kechinmalarni va his-tuyg'ularni bizning Ong ostimiz har doim
              miyamizga muhrlab qoldirishini angladim.
            </div>
          </div>
          <div className="list_item s24 f500">
            <img src="icon_cor.png" alt="" />
            <div>
              Dada, men hozirgi kunda bori ham, yo'g'i ham bilinmaydigan erkak
              bilan yashayaptganimni yoki shunday yigit / jazman bilan
              uchrashayotganimni sabablarini tushunib yetyapman.
            </div>
          </div>
          <div className="list_item s24 pl f500">
            <img src="/img/1.png" alt="" />
            <div>
              Axir siz, dada, (boshqa ayolga uylanib ketganingizdan so'ng)
              hayotimda bor bo'lib, to'liq men bilan yashamagansiz, lekin
              butunlay yo'q bo'lib ham ketmagansiz-ku.
            </div>
          </div>
          <div className="list_item s24 pl f500">
            <img src="/img/3.png" alt="" />
            <div>
              Hozir taqqoslab ko'rsam, Ong ostim o'sha eslab qolgan hayotiy
              sahnani faqat boshqa personajlarda qaytarayottgan ekan
            </div>
          </div>
          <div className="list_item s24 f500">
            <img src="icon_cor.png" alt="" />
            <div>
              Dada, bugun men sizni onamning o'limidan so'ng / yoki ajrashish
              jarayonidan keyin men siz bilan qolganimdan keyin siz meni tezroq
              turmushga uzatib yuborganingiz uchun – yangi olgan xotiningiz
              bilan sokin hayot kechirishingiz uchun men xalaqit bermasligimni
              o'ylab, shu ishni qilganingiz uchun sizni kechiraman.
            </div>
          </div>
          <div className="list_item s24 pl f500">
            <img src="/img/1.png" alt="" />
            <div>
              Chunki bu shunga olib keldi-ki, mening kelajak hayotimda ham
              mening qaynonam (dada, sizni aks ettiruvchi hayotimdagi keyingi
              avtoritetim) ham / yoki o'zimning erim ham mendan tez vaqt orasida
              qutilishni va meni uyidan chiqazib yuborishni istadi.
            </div>
          </div>
          <div className="list_item s24 pl f500">
            <img src="/img/3.png" alt="" />
            <div>
              Aslida esa ular mening Ong ostimda o'tirgan dasturni – ya'ni “Sen
              menga / yoki bizga shirin hayot kechirishimizga xalaqit beryapsan”
              – degan dasturni va keraksizlik hisini boshqacha sahnalarda
              qaytarayotgan yangi personajlar bo'lgan ekan, xolos.
            </div>
          </div>
          <div className="list_item s24 f500">
            <img src="icon_cor.png" alt="" />
            <div>
              Dada, onamning o'limidan / yoki qandaydir mudhish hayotiy
              voqealardan so'ng (shu yerda o'sha voqeani to'liq yozib
              keting......) siz mendan qutilish niyatida meni buvi-xolalarimga
              berib yuborganingiz tufayli kelajak hayotimda ham mening qaynonam
              / yoki erim / yoki yigitim mendan qutilish niyatida har-hil
              hiyla-nayranglar o'ylab topib, mendan qutilishni istaganlarining
              sababini bugun tushunib yetyapman.
            </div>
          </div>
          <div className="list_item s24 pl f500">
            <img src="/img/3.png" alt="" />
            <div>
              Chunki ular, dada, aslida siz menga singdirgan keraksizlik
              dasturining yangi personajlari bo'lgan ekan, xolos.
            </div>
          </div>
          <div className="list_item s24 f500">
            <img src="icon_cor.png" alt="" />
            <div>
              Dada, siz onam bilan ajrashgandan so'ng / yoki uning o'limidan
              so'ng boshqa oila qurmagan chog'ingizda barcha qarindoshlaringiz
              (va bilvosita o'zingiz ham) menga sizga nisbatan “majburiy”
              muhabbat hisini hamda turli hil yurak-siqdi qo'rquvlarni va
              aybdorlik hisini singdirganlaringiz uchun hammangizni kechiraman.
            </div>
          </div>
          <div className="list_item s24 pl f500">
            <img src="/img/2.png" alt="" />
            <div>
              Boshqa uylanmaslik / yoki uzoq vaqt bo'ydoq bo'lib yurish aslida
              sizning shaxsiy tanlovingiz va o'zingiz qabul qilgan qaroringiz
              bo'lgan, to'g'rimi?! Sizni hech kim – “Uzoq vaqt yolg'iz qolgin
              yoki butun umr yolg'iz o'tgin” – deb, zo'rlamagan.
            </div>
          </div>
          <div className="list_item s24 pl f500">
            <img src="/img/1.png" alt="" />
            <div>
              Ha, dada, siz onamsiz qolganingiz uchun men aybdor emasman.
            </div>
          </div>
          <div className="list_item s24 pl f500">
            <img src="/img/1.png" alt="" />
            <div>Mening hech qanday aybim yo'q.</div>
          </div>
          <div className="list_item s24 pl50 f500">
            <img src="/img/3.png" alt="" />
            <div>
              Biroq mening Ong ostimga singdirilgan “farzandlik burchi qo'shig'i
              ostidagi” aybdorlik tuyg'usi kelajakda meni o'zimni o'qqa-cho'qqa
              urib, borimni, dada, sizga berishga, sizning ko'nglingizni
              olishga, sizning aytganingizni orqa-oldini o'ylamasdan ham 100%
              bajarishga tayyor qiz bo'lib katta bo'lganimni tushunib yetyapman.{" "}
            </div>
          </div>
          <div className="list_item s24 pl50 f500">
            <img src="/img/3.png" alt="" />
            <div>
              Ha, Ong osti dasturimga asosan men hayotimga o'zimdan va o'z
              ehtiyojlariman voz kechib, asosan faqat uning ko'nglini olishimni
              va borimni faqat unga berishimni, uning aytganini qilishimni
              istaydigan yigitni/ yoki erni / yoki qaynonani / va hatto shunday
              o'g'ilni jalb qilgan ekanimni bugun anglayapman.{" "}
            </div>
          </div>
          <div className="list_item s24 f500">
            <img src="/img/1.png" alt="" />
            <div>
              Ya'ni u(lar) ham – ular uchun qilayotgan barcha yaxshiligimni
              hamda berayotgan barcha mehr-muhabbatimni – bu sening burching
              deb, chunki men sening eringman, yigitingman-da / yoki men sizni
              qaynonangizman-da / yoki men sizni o'g'lingizman-da, qilishga
              majbursiz! – deb aytadilar.
            </div>
          </div>
          <div className="list_item s24 f500 pl50">
            <img src="/img/3.png" alt="" />
            <div>
              Va men ulardan xafa bo'lar ekanman. Aslida esa ular mening bolalik
              travmamni boshqacha sahnalarda aks ettirayotgan yangi personajlar
              hisoblanishar ekan, xolos.
            </div>
          </div>
          <div className="list_item s24 f500">
            <img src="icon_cor.png" alt="" />
            <div>
              Dada, bugun men sizni kechirgan holda, barcha qalb kechinmalarim
              va hafagarchiliklarim bilan xayirlashaman.
            </div>
          </div>
          <div className="list_item s24 f500">
            <img src="icon_cor.png" alt="" />
            <div>
              Bugundan boshlab men sizning sevgingiz uchun kurashishni
              to'xtatyapman.
            </div>
          </div>
          <div className="mt-5 toq_fil f700 s36 ta">
            Endi esa pozitiv ustanovkalarni yozishga o'tamiz.
          </div>
          <div className="mt-5 color_main f600 s30 ta ab">
            Yodingizda bo'lsa ushbu pozitiv ustanovkalarni siz 3 martadan 5
            marotabagacha yozishingiz kerak bo'ladi.
          </div>
          <div className="list_item s24 f500">
            <img src="icon_cor.png" alt="" />
            <div>
              Aynan bugun va hozir men shu yozayotgan prorabotkalarim yordamida
              ham yo'qotish, ham ham bevafolik – ya'ni xiyonat modellarini
              butkul bloklayman.
            </div>
          </div>
          <div className="list_item s24 f500">
            <img src="icon_cor.png" alt="" />
            <div>
              Bugundan boshlab mening sevgan erkagim o'z-o'zidan hayotimdan
              chiqib ketmaydi yoki uning bevafoligi / xiyonati bilan bog'liq
              hayotiy voqelar mening hayotimga ortiq boshqa kirib kelmaydi.
            </div>
          </div>
          <div className="list_item s24 f500">
            <img src="icon_cor.png" alt="" />
            <div>
              Bugundan boshlab men bori ham, yo'g'i ham bilinmaydigan erkak
              bilan yashashim / yoki shunday yigit / jazman bilan uchrashishim
              bilan bog'liq hayotiy stsenariyni butkul bloklayman.
            </div>
          </div>
          <div className="list_item s24 f500">
            <img src="icon_cor.png" alt="" />
            <div>
              Agar Olloh menga sinov uchun uni bergan bo'lsa, bugun mening
              sinovim yakunlanganini tushunib yetdim va men hayotimdagi ushbu
              erkakni (meni sevmaydigan, men bilan birga bo'la olmaydigan
              erkakni) yaxshilikcha qo'yib yuborishga tayyorman.
            </div>
          </div>
          <div className="list_item s24 f500 pl50">
            <img src="img/1.png" alt="" />
            <div>
              Chunki men to'la-to'kis va hayotimda har doim bor bo'la oladigan
              erkakka loyiqman.
            </div>
          </div>
          <div className="list_item s24 f500">
            <img src="icon_cor.png" alt="" />
            <div>
              Bugundan boshlab mening qaynonam / yoki erim / yoki yigitim mendan
              boshqa qutilishni istashmaydi.
            </div>
          </div>
          <div className="list_item s24 f500 pl50">
            <img src="img/1.png" alt="" />
            <div>
              Aksincha ular men bilan shirin hayot kechirishni xohlayotganlarini
              guvohi bo'lyapman. Men ularga kerakli ekanligimni his qilyapman.
            </div>
          </div>
          <div className="list_item s24 f500">
            <img src="icon_cor.png" alt="" />
            <div>
              Bugun men “majburiy” muhabbat hisi, turli hil yurak-siqdi
              qo'rquvlar hamda aybdorlik hisi bilan butkul xayirlashaman.
            </div>
          </div>
          <div className="list_item s24 f500">
            <img src="icon_cor.png" alt="" />
            <div>
              Bugundan boshlab men “farzandlik burchi qo'shig'i ostidagi” kuchli
              aybdorlik tuyg'usini miyamda butkul bloklaganim sababli mening
              erim / qaynonam / yigitim / yoki o'g'lim ham men ular uchun
              o'zimni o'qqa-cho'qqa urib, borimni ularga berib yuborishimni yoki
              ularning aytganini 100% bajarishimni talab qilishni
              to'xtatayotganlarini ko'ryapman.
            </div>
          </div>
          <div className="list_item s24 f500 pl50">
            <img src="img/1.png" alt="" />
            <div>
              Ha, men shu yozayotgan yangi Ong osti dasturimga asosan hayotimga
              yaqin insonlarim bilan sog'lom munosabatlarni jalb qilyapman.
            </div>
          </div>
          <div className="list_item s24 f500">
            <img src="icon_cor.png" alt="" />
            <div>
              Men umuman olganda ruhiyati sog'lom va meni hurmat qiladigan
              insonlarni jalb qilayapmman.
            </div>
          </div>
          <div className="list_item s24 f500">
            <img src="icon_cor.png" alt="" />
            <div>
              Bugundan boshlab mening erim / yigitim, qaynonam va hatto o'g'lim
              ham – men ular uchun qilayotgan barcha yaxshiligimni hamda
              berayotgan mehr-muhabbatimni qadrlashni o'rganayotganlarini va
              mening qadrimga yetib, chiroyli munosabatlar qurishayotganlarini
              guvohi bo'lyapman.
            </div>
          </div>
          <div className="list_item s24 f500">
            <img src="icon_cor.png" alt="" />
            <div>
              Agarda siz turmushda yashashingizni chidab bo'lmas azobga
              aylantirgan erkak bilan ajrashayotgan bo'lsangiz, quyidagilarni
              yozing: Men uchun turmushdan ajralish yengil o'tdi va Ollohga
              shukr mening qalbim kundan kunga shifo topyapti.
            </div>
          </div>
          <div className="list_item s24 f500">
            <img src="icon_cor.png" alt="" />
            <div>
              Bundan buyon men bolalikdagi jarohatlarimdan butunlay forig'
              ekanligimni uylab, kundan kunga ko'nglim shifo topayotgani uchun
              Ollohim senga ming bora shukr deyman.
            </div>
          </div>
          <div className="list_item s24 f500">
            <img src="icon_cor.png" alt="" />
            <div>
              Yaratganga shukrki, men o'z qadrimni yerga urmaydigan, o'zini
              hurmat qila oladigan qizga / ayolga aylanyapman.
            </div>
          </div>
          <div className="list_item s24 f500">
            <img src="icon_cor.png" alt="" />
            <div>
              Bugundan boshlab mening turmush o'rtog'im / yigitim / qaynonam
              meni jonidan aziz ko'rib, meni qanday bo'lsam, shunday qabul
              qilishni boshlayaptilar.
            </div>
          </div>
          <div className="list_item s24 pb-3 f500">
            <img src="icon_cor.png" alt="" />
            <div>
              Yaratganga shukrlar bo'lsinkim, men baxtli, muvaffaqiyatli va
              himoyalangan insonga aylanyapman. Omin.
            </div>
          </div>
          {/*  */}
        </div>
        <div className="umumiy">
          <div className=" seriy s28 mt-5 ta seriy">
            {getText2("pr1_341")} <br />
            <span className="f600">{getText2("pr1_342")} </span>
            <br />
            {getText2("pr1_343")} {getText2("pr1_344")}{" "}
          </div>
          <div className="tort seriy s30 ta mt-5 f600">
            {getText2("pr1_345")}
          </div>
          <Accordion
            className="mt-2"
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <div className=" my_acc seriy s30  f600 ">
                {getText2("pr1_346")}
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <div className="toq_fil s24 mt-4 f500">
                  {getText2("pr1_351")}
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
            className="mt-2"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <div className="my_acc seriy s30  f600 ">
                {getText2("pr1_347")}
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <div className="toq_fil s24 mt-4 f500">
                  {getText2("pr1_353")}
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            className="mt-2"
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <div className="my_acc seriy s30  f600 ">
                {getText2("pr1_348")}
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <div className="toq_fil s24 mt-4 f500">
                  {getText2("pr1_354")}
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel4"}
            className="mt-2"
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              {" "}
              <div className="my_acc seriy s30  f600 ">
                {getText2("pr1_349")}
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <div className="toq_fil s24 mt-4 f500">
                  {getText2("pr1_355")} {getText2("pr1_356")}
                  <span className="f600 kok">{getText2("pr1_357")}</span>
                </div>
                <div className="toq_fil s24 mt-4 f500 ms-4">
                  {getText2("pr1_352")}
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel5"}
            className="mt-2"
            onChange={handleChange("panel5")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <div className="my_acc seriy s30  f600 ">
                {getText2("pr1_350")}
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <div className="toq_fil s24 mt-4 f500">
                  {getText2("pr1_358")}{" "}
                  <span className="f600 color_main">{getText2("pr1_359")}</span>{" "}
                  {getText2("pr1_360")}
                  <div className="toq_fil s24 mt-4 f500">
                    {getText2("pr1_361")}
                  </div>
                  <div className="toq_fil s24 mt-4 f500">
                    {getText2("pr1_362")}
                  </div>
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <div className="ta f600 kok s30 mt-5">{getText2("pr1_364")}</div>
          <div className="ta f600 kok s30 mt-1">{getText2("pr1_iltimos")}</div>
          <div className="d-flex justify-content-center mt-2">
            <FormControl>
              <FormLabel id="demo-controlled-radio-buttons-group">
                <RadioGroup className="my_radio_group">
                  <FormControlLabel
                    value="1"
                    control={
                      <Radio
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                      />
                    }
                    label="1"
                  />
                  <FormControlLabel
                    value="2"
                    control={
                      <Radio
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                      />
                    }
                    label="2"
                  />
                  <FormControlLabel
                    value="3"
                    control={
                      <Radio
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                      />
                    }
                    label="3"
                  />
                  <FormControlLabel
                    value="4"
                    control={
                      <Radio
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                      />
                    }
                    label="4"
                  />
                  <FormControlLabel
                    value="5"
                    control={
                      <Radio
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                      />
                    }
                    label="5"
                  />
                </RadioGroup>
              </FormLabel>
            </FormControl>
          </div>
          <div
            onClick={() => nav("/dashboard")}
            className="prorabotka_what tort f600 color_main s36 mt-5 ta"
          >
            {getText2("pr1_365")}
          </div>
        </div>

        {/* {} */}
      </div>
    </div>
  );
};

export default Prarobotka3;
