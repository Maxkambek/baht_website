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

const Prarobotka4 = () => {
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
        <div className="f500 seriy s30 mt-3">
          Sizning otangiz / yoki otangizni o'rnini egallagan boshqa yaqin
          odamingiz:
        </div>
        <div className="list_item f500 seriy s28 mt-3 pl50">
          <img src="icon_cor.png" alt="" />
          <div>nogiron</div>
        </div>
        <div className="list_item f500 seriy s28 mt-2 pl50">
          <img src="icon_cor.png" alt="" />
          <div>yoki qari</div>
        </div>
        <div className="list_item f500 seriy s28 mt-2 pl50">
          <img src="icon_cor.png" alt="" />
          <div>
            yoki o'zini ko'pincha yomon, o'ta g'alati va xunuk tarzda tutadigan
          </div>
        </div>
        <div className="list_item f500 seriy s28 mt-2 pl50">
          <img src="icon_cor.png" alt="" />
          <div>yoki biron-bir nuqsoni bo'lgan</div>
        </div>
        <div className="list_item f500 seriy s28 mt-2 pl50">
          <img src="icon_cor.png" alt="" />
          <div>yoki o'ta kambag'al</div>
        </div>
        <div className="list_item f500 seriy s28 mt-2 pl50">
          <img src="icon_cor.png" alt="" />
          <div>yoki piyonista</div>
        </div>
        <div className="list_item f500 seriy s28 mt-2 pl50">
          <img src="icon_cor.png" alt="" />
          <div>yoki giyohvand moddalar iste'mol qiladigan</div>
        </div>
        <div className="list_item f500 seriy s28 mt-2 pl50">
          <img src="icon_cor.png" alt="" />
          <div>yoki qamoqda o'tirib chiqqan</div>
        </div>
        <div className="list_item f500 seriy s28 mt-2 pl50">
          <img src="icon_cor.png" alt="" />
          <div>
            ya'ni siz undan nafaqat uyaladigan, balki qattiq uyaladigan inson
            bo'lganmi?
          </div>
        </div>
        <div className="f500 ta seriy s28 mt-3">
          Hozirda biz siz bilan siz 16 yoshga to'lguningizga qadar
          “Uyalishingizga to'g'ri kelgan yaqin erkagingiz” obrazini ko'rib katta
          bo'lganingiz – sizning kelajak taqdiringizga qanday ta'sir qilgani
          haqida gaplashamiz.
        </div>
        <div className="list_item f500 s24 mt-5">
          <div>{"A."}</div>
          <div>
            Mazkur birinchi bandda doimiy ravishda izza bo'lish hisi
            salomatligingizga qanday ta'sir ko'rsatishini eslatib o'tmoqchi
            edik.
          </div>
        </div>
        <div className="list_item f500 s24 pl50">
          <img src="/img/2.png" alt="" />
          <div>
            <span className="toq_fil f600">
              Vegetativ asab tizimining parasimpatik bo'limi
            </span>{" "}
            bilan bog'liq bo'lgan: bezovtalik, qo'rquv va hayajondan farqli
            ravishda, izza bo'lish odam normal holatga qaytguniga qadar
            birmuncha uzoq davom etgani sababli, u vegetativ asab tizimining
            simpatik bo'limiga, ya'ni gormonlarga ta'sir o'tkazadi. Ha, izza
            bo'lish hisi “tez paydo bo'ladi, ammo organizmda, ya'ni ichimizda
            sekin so'nadi”.
          </div>
        </div>
        <div className="list_item f500 s24 pl50">
          <img src="/img/3.png" alt="" />
          <div>
            Surunkali izza bo'lish holatida kortizol gormonlarining organizm
            ichiga chiqarilishi ter ajratuvchi bezlarning anomal faollashuviga
            (ya'ni qattiq terlashga) olib keladi.
          </div>
        </div>
        <div className="list_item f500 s24 pl50">
          <img src="/img/3.png" alt="" />
          <div>
            Shuningdek, klinik psixologiya sohasidagi tadqiqotlar shuni
            ko'rsatdiki, ortiqcha vazn bo'lganda, terining issiqlikni boshqarish
            funktsiyasi ishdan chiqadi va anomal ravishda ishlayotgan gormonlar
            teri yog'ining ko'payishiga sabab bo'ladi.
          </div>
        </div>
        <div className="list_item f500 s24">
          <img src="/img/1.png" alt="" />
          <div>
            <span className="color_main f600">
              {" "}
              Yuqorida aytib o'tilgan faktorlarni hisobga olgan holda
            </span>{" "}
            shuni aytish mumkin-ki, surunkali izza bo'lish – ya'ni doimo yoki
            ko'pincha otangizdan uyalishingiz sababli:
          </div>
        </div>
        <div className="list_item f500 s24 pl50">
          <img src="icon_cor.png" alt="" />
          <div>
            siz yoki haddan tashqari ko'p terlaysiz – ayniqsa
            asabiylashganingizda (qo'ltiq, oyoq, har qayeringiz bo'lishi mumkin)
            va shundayligingizdan o'zingiz uyalasiz.
          </div>
        </div>
        <div className="list_item f500 s24 pl50">
          <img src="icon_cor.png" alt="" />
          <div>
            yoki siz tez-tez ortiqcha vazn olasiz. Chunki Ong osti darajasida
            siz (otangiz tufayli) baxt va sevgiga munosib emasligingiz bilan
            bog'liq qo'rquvlaringizni tasdiqlaydigan tashqi ko'rinishingizni
            shakllantiryaptgan bo'lasiz.
          </div>
        </div>
        <div className="list_item f500 s24">
          <div>{"B. "}</div>
          <div>
            <span className="kok f600">
              {" "}
              Otangiz “aynan siz istagan ota” bo'lmagani uchun {""}
            </span>{" "}
            siz o'zingizni baxtli oila qurishga va orzuyingizdagi yigitga ega
            bo'lishga noloyiq deb hisoblagansiz / yoki hisoblaysiz va shu bois
            yigitlar / erkaklar bilan bo'lgan munosabatlarda siz o'zingizga
            ishonmaysiz.
          </div>
        </div>
        <div className="list_item f500 s24 pl50">
          <img src="img/1.png" alt="" />
          <div>
            Ya'ni o'zingizni ularni oldida juda past ko'rasiz: yalinib, egilib,
            bukilib muomala qilasiz va hatto ularning ruhiy zo'ravonligiga ham
            rozi bo'lasiz.
          </div>
        </div>
        <div className="list_item f500 s24 pl50">
          <img src="img/3.png" alt="" />
          <div>Yoki o'zingizni ulardan olib qochasiz.</div>
        </div>
        <div className="list_item f500 s24 pl50">
          <img src="img/3.png" alt="" />
          <div>
            Yoki bo'lmasa, o'zingizga bo'lgan ishonchsizlikni haddan tashqari
            o'ziga ishongan ayol niqobi ostida yashirishga urinasiz.
          </div>
        </div>
        <div className="list_item f500 s24">
          <div>{"C. "}</div>
          <div>
            Siz ongli ravishda ertaklardagi shahzoda / yoki yaxshi va hurmatga
            sazovor turmush o'rtoq bilan yashashni orzu qilasiz, ammo Ong osti
            darajasida o'zingizga suyukli va baxtli bo'lishni ta'qiqlaysiz.
          </div>
        </div>
        <div className="list_item f500 s24 pl50">
          <img src="img/3.png" alt="" />
          <div>
            <span className="color_main f600">Shu sababli</span> siz hayotda
            xamma narsani kamrog'ini va yomonrog'ini tanlaysiz.
          </div>
        </div>
        <div className="list_item f500 s24 pl">
          <img src="img/2.png" alt="" />
          <div>
            <span className="kok f600">Ya'ni shu bois ham siz</span> oilasidan
            ajrashgan, kambag'al yoki sizdan yoshi ancha katta yoki yomon nom
            orttirgan, yoki biron-bir katta nuqsoni bor erkakka turmushga
            chiqqansiz yoki shunday hayotiy stsenariyga rozisiz. tanlaysiz.
          </div>
        </div>
        <div className="list_item f500 s24 pl50">
          <img src="img/1.png" alt="" />
          <div>
            <span className="color_main f600">Chunki Ong osti darajasida</span>{" "}
            va, hattoki, ongli ravishda ham “Men mana bunday..... otaning
            qiziman. Hol buki – men bari-bir zo'r erga / o'zimcha o'ylarimda
            orzu qilgan baxtga munosib emasman. Mundoqroq er / mundoqroq hayot /
            mundoqroq hayot tarzi ham menga bo'laveradi”, deb hisoblaysiz.
          </div>
        </div>
        <div className="list_item f500 s24">
          <div>{"D. "}</div>
          <div>
            <span className="seriy f600">
              Siz otangizdan or qilganingiz bois{" "}
            </span>{" "}
            hayotingizga shunday turmush o'rtoqni / yoki erkakni / yoki yigitni
            jalb qilgansizki, siz undan turli-hil sabablarga ko'ra qattiq or
            qilasiz / yoki or qilib yashagansiz yoki juda bo'lmaganda siz undan
            ko'pincha uyalasiz.
          </div>
        </div>
        <div className="list_item f500 s24 ab">
          <div>
            <span className="seriy f600 s28">Qo'shimcha izoh: </span> Agar sizda
            o'g'lingiz / o'g'illaringiz bor bo'lsa, ular ham siz istagandek
            insonlar bo'lmagan bo'lishlari mumkin va, ehtimol, ular ham sizni
            ko'p uyaltirgan / yoki uyaltirib kelayotgan bo'lishi mumkin.
          </div>
        </div>
        <div className="list_item f500 s24 pl">
          <img src="img/1.png" alt="" />
          <div>
            <span className="color_main f600">Chunki sizning Ong ostingda</span>{" "}
            – Menga yaqin bo'lgan erkagimdan:
          </div>
        </div>
        <div className="pl50 s24 mt-2">
          • yoki uning tashqi ko'rinishidagi nuqsonidan,
        </div>
        <div className="pl50 s24 mt-2">
          • yoki uning yurish-turishidan / gap-so'zidan,
        </div>
        <div className="pl50 s24 mt-2">
          • yoki uning hatti-harakati va g'alati qiliqlaridan,
        </div>
        <div className="pl50 s24 mt-2">• yoki uning jismoniy kasalidan,</div>
        <div className="pl50 s24 mt-2">• yoki ruhiy nosog'lomligidan,</div>
        <div className="pl50 s24 mt-2">
          • yoki ish joyidan / yoki ishsizligidan
        </div>{" "}
        <div className="pl50 s24 mt-2">
          • yoki boshqa bir nomukammalligidan (har hil holatlar bo'lishi mumkin)
          nimasidandir bo'lsa ham uyalishim kerak – degan negativ dastur
          o'zining ishini qilayotgan bo'ladi.
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
          <div className="list_item f500  s24 mt-3 pl">
            <img src="img/2.png" alt="" />
            <div>Siz nogiron</div>
          </div>
          <div className="list_item f500  s24 mt-2 pl50">
            <img src="icon_cor.png" alt="" />
            <div>yoki qari</div>
          </div>
          <div className="list_item f500  s24 mt-2 pl50">
            <img src="icon_cor.png" alt="" />
            <div>
              yoki o'zini ko'pincha yomon, o'ta g'alati va xunuk tarzda
              tutadigan
            </div>
          </div>
          <div className="list_item f500  s24 mt-2 pl50">
            <img src="icon_cor.png" alt="" />
            <div>yoki biron-bir nuqsoni bo'lgan</div>
          </div>
          <div className="list_item f500  s24 mt-2 pl50">
            <img src="icon_cor.png" alt="" />
            <div>yoki o'ta kambag'al</div>
          </div>
          <div className="list_item f500  s24 mt-2 pl50">
            <img src="icon_cor.png" alt="" />
            <div>yoki piyonista</div>
          </div>
          <div className="list_item f500  s24 mt-2 pl50">
            <img src="icon_cor.png" alt="" />
            <div>yoki giyohvand moddalar iste'mol qiladigan</div>
          </div>
          <div className="list_item f500  s24 mt-2 pl50">
            <img src="icon_cor.png" alt="" />
            <div>yoki qamoqda o'tirib chiqqan</div>
          </div>
          <div className="list_item f500  s24 mt-2 pl50">
            <img src="icon_cor.png" alt="" />
            <div>
              ya'ni siz undan nafaqat uyaladigan, balki qattiq uyaladigan inson
              bo'lganingiz uchun sizni kechiraman.
            </div>
          </div>
          <div className="list_item f500 s24">
            <img src="icon_cor.png" alt="" />
            <div>
              Bugun men nima uchun ortiqcha vazn orttirishimni yoki
              asabiylashganimda qattiq terlashimni sabablarini tushunib yetdim.
            </div>
          </div>
          <div className="list_item f500 s24">
            <img src="icon_cor.png" alt="" />
            <div>
              Dada, siz “aynan men istagan ota” bo'lmaganingiz uchun men o'zimni
              baxtli oila qurishga va orzuyimdagi yigitga / erga ega bo'lishga
              noloyiq deb hisoblaganman / yoki hali ham hisoblayman va shu bois
              yigitlar / erkaklar bilan bo'lgan munosabatlarda men o'zimga
              ishonmaydigan (samootsenkasi past) qiz bo'lib ulg'ayganim uchun
              sizni kechiraman.
            </div>
          </div>
          <div className="list_item f500 s24 pl50">
            <img src="img/3.png" alt="" />
            <div>
              Men o'zimni ularning oldida juda past ko'rishim uchun: yalinib,
              egilib, bukilib muomala qilishim uchun va hatto ularning ruhiy
              zo'ravonligiga ham rozi bo'lib yashaganim uchun o'zimni bugun
              kechiraman.
            </div>
          </div>
          <div className="list_item f500 s24 pl50">
            <img src="img/3.png" alt="" />
            <div>
              Yoki o'zimni ulardan olib qochishim uchun o'zimni kechiraman.
            </div>
          </div>
          <div className="list_item f500 s24 pl50">
            <img src="img/3.png" alt="" />
            <div>
              Yoki bo'lmasa, o'zimga bo'lgan ishonchsizlikni haddan tashqari
              o'ziga ishongan ayol niqobi ostida yashirishga urinib kelayotganim
              uchun o'zimni kechiraman.
            </div>
          </div>
          <div className="list_item f500 s24">
            <img src="icon_cor.png" alt="" />
            <div>
              Dada, bugun men nima uchun ongli ravishda ertakdagi shahzodani
              orzu qilishim / yoki chiroyli-go'zal / yoki osoyishta hayotni orzu
              qilsam ham, Ong osti darajasida esa o'zimga o'zim shu baxtni
              ta'qiqlashimni va shu kunga qadar hayotda kamrog'ini va
              yomonrog'ini tanlab kelayotganimning sabablarini angladim.
            </div>
          </div>
          <div className="list_item f500 s24 pl50">
            <img src="img/1.png" alt="" />
            <div>
              Chunki mening bolaligimda, dada, sizdan (mana shu sababga ko'ra
              ....... ) uyalganim menda noloyiqlik hisini tug'dirgan ekan.
            </div>
          </div>
          <div className="list_item f500 s24">
            <img src="icon_cor.png" alt="" />
            <div>
              Bugun men bolaligimda otamdan uyalganim sababli kelajak hayotimga
              ham men or qiladigan/ meni uyaltirgan yoki haligacha meni
              uyaltiradigan erkakni / yigitni / qaynonani / so'ngra esa
              o'g'il(lar)ni jalb qilganimni tushunib yetyapman.
            </div>
          </div>
          <div className="list_item f500 s24 pl50">
            <img src="img/1.png" alt="" />
            <div>
              Chunki men sizdan uyalib yashaganman-ku axir, dada. Va ular
              sizning timsolingizni aks ettirayotgan yangi personajlar bo'lgan
              ekan, xolos.
            </div>
          </div>
          <div className="list_item f500 s24">
            <img src="icon_cor.png" alt="" />
            <div>
              Dada, men yosh va go'zal bo'la turib, oilasi bilan ajrashgan /
              omadsiz / yoshi mendan ancha katta / yomon nom orttirgan / yoki
              uni sevmasam ham har qanday odamga turmushga chiqishga rozi
              bo'lgan / ya'ni meni nomukammal insonga turmushga chiqishimga
              undagan / yoki undayotgan timsolingizni kechiraman va qolgan butun
              umrimga bloklayman.
            </div>
          </div>
          <div className="list_item f500 s24">
            <img src="icon_cor.png" alt="" />
            <div>
              Dada, men sizning timsolingiz bog'liq bo'lgan o'ylarimga va abadiy
              baxtga noloyiqlik bilan bog'liq bo'lgan qo'rquvlarimga hozir va
              shu yerda to'siq qo'yaman.
            </div>
          </div>
          <div className="mt-5 toq_fil f700 s36 ta">
            Endi esa pozitiv ustanovkalarni yozishga o'tamiz.
          </div>
          <div className="mt-5 color_main f600 s30 ta ab">
            Yodingizda bo'lsa ushbu pozitiv ustanovkalarni siz 3 martadan 5
            marotabagacha yozishingiz kerak bo'ladi.
          </div>
          <div className="list_item f500 s24">
            <img src="icon_cor.png" alt="" />
            <div>
              Bundan buyon mening siz bilan bo'lgan munosabatlarim – erkak zoti
              bilan bo'lgan munosabatlarimning davomi emas.
            </div>
          </div>
          <div className="list_item f500 s24">
            <img src="icon_cor.png" alt="" />
            <div>
              Men boshqa hech-qaysi bir erkakning yonida o'zimni juda past
              ko'rmayman. Men biron-bir erkakka / yoki erimga / yoki yigitimga
              xuddi aybdordek yalinib, egilib, bukilib muomala qilishimning
              hojati ham qolmayapti.
            </div>
          </div>
          <div className="list_item f500 s24 pl50">
            <img src="img/1.png" alt="" />
            <div>
              Chunki hayotimdagi hamma voqealar faqat va faqat mening foydamga
              hal bo'lishni boshlayapti.
            </div>
          </div>
          <div className="list_item f500 s24">
            <img src="icon_cor.png" alt="" />
            <div>
              Bugundan boshlab men o'zimning qadimni shu darajada tik tutib,
              o'zimni o'zim hurmat qilishni boshlayapmanki, bundan o'zimni faqat
              baxtli his qilayapman va mening yon-atrofdagilarimga bu
              yoqayaptganini ko'ryapman.
            </div>
          </div>
          <div className="list_item f500 s24">
            <img src="icon_cor.png" alt="" />
            <div>
              Bugundan boshlab men o'zimni yaxshi yigitlardan / yoki menga mos
              erkaklardan olib qochishni to'xtatyapman. Chunki men o'zim orzu
              qilgan yaxshi yigitga / erkakka turmushga chiqishga loyiqman va
              tanlash huquqiga egaman.
            </div>
          </div>
          <div className="list_item f500 s24">
            <img src="icon_cor.png" alt="" />
            <div>
              Bugundan boshlab men o'zimga bo'lgan ishonchsizlikni haddan
              tashqari o'ziga ishongan ayol niqobi ostida yashirishga urinishni
              to'xtatyapman va hayotimdagi barcha insonlar bilan chiroyli va
              sog'lom munosabatlar o'rnatishni boshlayapman.
            </div>
          </div>
          <div className="list_item f500 s24">
            <img src="icon_cor.png" alt="" />
            <div>
              Bugundan boshlab men o'z turmush o'rtog'imdan / yigitimdan /
              qaynonamdan / yoki o'g'illarimdan ortiq or qilmayman / uyalmayman
              ham.
            </div>
          </div>
          <div className="list_item f500 s24 pl50">
            <img src="img/1.png" alt="" />
            <div>
              Chunki shu bugungi yozayotgan prorabotkalarimdan keyin u(lar)ning
              (ismini va kimligini aniq yozib keting.........) barcha nuqsonlari
              yorug'lik tezligida yo'q bo'lib ketayaptganini hamda, har-bir
              gapi, har-bir xatti-harakati, yurish-turishi, menga qilayotgan
              muomalasi va hatto pul bilan bog'liq ishlari ham bekamu-ko'st
              bo'lib borayotganining guvohi bo'lyapman.
            </div>
          </div>
          <div className="list_item f500 s24">
            <img src="icon_cor.png" alt="" />
            <div>
              Men yaqin insonimning yangi obrazida mening yangi ijobiy umidlarim
              va yangi ko'rsatmalarim o'z aksini topayotganini ko'ryapman.
            </div>
          </div>
          <div className="list_item f500 s24">
            <img src="icon_cor.png" alt="" />
            <div>Men endi hayotda kamrog'ini va yomonrog'ini tanlamayman.</div>
          </div>
          <div className="list_item f500 s24 pl50">
            <img src="img/1.png" alt="" />
            <div>Chunki men ko'prog'iga va yaxshirog'iga loyiqman.</div>
          </div>
          <div className="list_item f500 s24 pl50">
            <img src="img/1.png" alt="" />
            <div>
              Negaki men har kuni o'z aqliy rivojlanishim ustida ishlashni
              boshlayapman, ko'p kitob o'qishni, yangi bilimlarga ega bo'lishni
              va shu olayotgan yangi bilimlarim mening o'z kuchimga, aqlimga, va
              hayotda o'zim hamma narsaga erisha olishimga bo'lgan ishonchimni
              mustahkamlayapti.
            </div>
          </div>
          <div className="list_item f500 s24">
            <img src="icon_cor.png" alt="" />
            <div>
              Men o'zimga chiroyli, osoyishta va o'zimdan hamda yaqin
              insonlarimdan faxrlanadigan hayotda yashashimga ijozat beryapman
              va o'zimga ruxsat bergan narsalarim hayotimda amalga
              oshayaptganini ko'rib, Ollohim o'zingga ming bora shukr deyapman.
            </div>
          </div>
          <div className="list_item f500 s24">
            <img src="icon_cor.png" alt="" />
            <div>
              Ollohga shukr, men uyat hisi tufayli orttirgan ortiqcha vaznimdan
              yorug'lik tezligida halos bo'lyapman.
            </div>
          </div>
          <div className="list_item f500 s24 pl50">
            <img src="img/1.png" alt="" />
            <div>
              Ha, bugundan boshlab va doimo mening tanam va figuram shu darajada
              tez fursatda ideal ko'rinishga ega bo'lib boryapti-ki, yozayotgan
              prorabotkalarim shunday tez va ijobiy tarzda ta'sir qiladi deb
              o'ylamagan ham ekanman.
            </div>
          </div>
          <div className="list_item f500 s24">
            <img src="icon_cor.png" alt="" />
            <div>
              Ollohga shukr men bundan buyon boshqa haddan tashqari ko'p
              terlamaydigan bo'layapman.
            </div>
          </div>
          <div className="list_item f500 s24 pl50">
            <img src="img/1.png" alt="" />
            <div>
              Ha, bugundan boshlab mening ter ajratuvchi bezlarim shu qadar
              bekamu-ko'st ishlayaptiki, men terlaganimda, tanamdan ter xidi
              emas, balki vanilь va qulupnay hidi taralyaptganini ko'rib, sezib,
              o'zim xayron qolyapman.
            </div>
          </div>
          <div className="list_item f500 s24">
            <img src="icon_cor.png" alt="" />
            <div>
              Hozir va shu yerda men o'zimga baxtli va suyukli bo'lishga loyiq
              ekanimni aytaman.
            </div>
          </div>
          <div className="list_item f500 s24">
            <img src="icon_cor.png" alt="" />
            <div>
              Ha, men o'zimga risoladagidek yigitni / orzuyimdagi erkakni
              uchratishga va u bilan to'kin-sochinlikda uzoq va baxtli hayot
              kechirishga ijozat beraman.
            </div>
          </div>
          <div className="list_item f500 s24">
            <img src="icon_cor.png" alt="" />
            <div>Ha, Yaratganning o'zi menga madadkor bo'lyapti.</div>
          </div>
          <div className="list_item f500 s24">
            <img src="icon_cor.png" alt="" />
            <div>
              <span className="color_main f600">
                {" "}
                Agar siz turmushda yashayaptgan bo'lsangiz, quyidagilarni yozing{" "}
              </span>{" "}
              – Ha, men o'zimga ideal er bilan yashashga ijozat beraman, chunki
              turmush o'rtog'im mening yangi umidlarimga va yangi
              ustanovkalarimga mos kela boshladi.
            </div>
          </div>
          <div className="list_item f500 s24">
            <img src="icon_cor.png" alt="" />
            <div>
              Biz shu qadar baxtlimizki, kun sayin turmush o'rtog'im yaxshi
              tarafga o'zgarayotganini ko'rib ko'zim quvnayapti.
            </div>
          </div>
          <div className="list_item f500 s24">
            <img src="icon_cor.png" alt="" />
            <div>
              Baxtli rafiqa va o'z farzandlarini boridek qabul qiladigan ajoyib
              ona bo'lishimda menga Yaratganning o'zi madadkor bo'lmoqda. Omin.
            </div>
          </div>
          <div className="list_item f500 s24">
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
        {/*  */}
      </div>
    </div>
  );
};

export default Prarobotka4;
