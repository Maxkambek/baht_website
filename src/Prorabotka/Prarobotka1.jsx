import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Prarobotka1 = () => {
  const nav = useNavigate();
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
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
            hayotingizga qanday ta'sir o'tkazganini kuchli tahlil va
            prorabotkalar asosida ishlab chiqyapmiz.
          </div>
          <div className="color_main f600 s30 ta mt-5">
            Va bizning eng birinchi savolimiz quyidagicha:
          </div>
          <div className="s28 ta mt-5">
            Nima deb o'ylaysiz, siz otangiz uchun kutilgan farzand bo'lganmisiz
            – Sizning tug'ilishingizni u qanchalik kutgan va aynan qiz bo'lib
            tug'ilishini u qanchalik xohlagan?
          </div>
          <div className="f700 s28 ta mt-5">Demak, ushbu darsda</div>
          <div className="s30 ta seriy f700 mt-2 mb-2">
            siz otangiz uchun istalmagan farzand bo'lganingiz / yoki qiz bola
            bo'lib tug'ilganingiz / yoki otangiz tarafidan tan olinmaganingiz
          </div>
          <div className="s28 ta fil">
            – sizning kelajak taqdiringizga qanday ta'sir qilgani borasida
            batafsil tushuncha olasiz.
          </div>
          <div className="f700 s28 ta mt-5">
            Eng birinchi navbatda hozirda sizga
          </div>
          <div className="f700 s30 ta kok">
            «O'g'il bola yoki istalmagan qiz farzand kompleksi»{" "}
          </div>
          <div className="f700 s28 ta ">
            haqida batafsil tushuncha beriladi.{" "}
          </div>
          <div className="f600 s28 ta mt-5">
            Shundan so'ng darslik bo'yicha bir nechta javob variantlari taqdim
            qilinadi.{" "}
          </div>

          <div className="tort">
            <div className="f600 s28 ta mt-5">Demak:</div>
            <div className="f700 s30 ta kok">
              «O'g'il bola yoki istalmagan qiz farzand kompleksi»
            </div>
            <div className="f600 s28 ta">haqida o'qib chiqamiz.</div>

            <div className="s24 mt-4 f500">
              <span className="f600 fil s28 pl">Barchamizga ma'lum-ki,</span>{" "}
              erkaklar tarixan jamiyatda yetakchi ahamiyat kasb etib, ularning
              har biri o‘zini avlodini davomchisi bo‘ladigan o‘g‘ilni dunyoga
              keltirishga qodir bo‘lgan haqiqiy erkak ekanligi bilan maqtanishni
              yaxshi ko‘radi. Bundan tashqari, bizga ko‘pincha ayollarning
              “peshonasi sho‘r” bo‘ladi va shu bois o‘g‘il farzand tuqqan
              yaxshiroq degan “oilaviy va ijtimoiy afsonalar” ham ta'sir
              ko‘rsatadi.
            </div>
            <div className="s24 mt-4 f500 ">
              <span className="f600 color_main s28 pl">Lekin eng muhimi</span>–
              agar ayol bolaligida otasining mehriga to‘ymagan bo‘lsa, turmush
              o‘rtog‘ining timsolida bunga erishish uchun u nima qilib bo‘lsa
              ham o‘g‘il farzand dunyoga keltirishga harakat qiladi.
            </div>
            <div className="list_item pl">
              <img src="/img/1.png" alt="" />
              <div className="f500  s24">
                Ko‘pchilik o‘g‘il farzand tug‘ilishi uchun hattoki qon va turli
                xil kalendarlar asosida hisoblatadi, parhezlar tutadi. Yoki
                ayollar oxirigacha abort qildirishni istaydiyu, lekin oxirida
                baribir qiz farzandni dunyoga keltirishadi.
              </div>
            </div>
            <div className="s24 mt-4 f500 ">
              <span className="f600 fil s28 pl">Tushunib yetganingizdek, </span>{" "}
              – “O‘g‘il bola yoki istalmagan qiz farzand” kompleksining
              ildizlari qiz farzand onaning bachadoni ichida shakllangan
              jarayondan boshlab, to tug‘ilgan vaqtigacha bo‘lgan sahnalarga
              qadaladi. Ya'ni, u tug‘ilgan va nafas ola boshlagan ilk sanalarda
              ota va ona uni bu dunyoda quvonch bilan kutib olmaydi. Ular
              qizchasiga “Bu dunyoga xush kelibsan, mitti malikam” demaydi,
              aksincha, axborot almashinuv biomaydonidagi efirda ota va ona unga
              qizning jinsi bilan bog‘liq afsus va achinishlarini yetkazadi.
              Bolaning ko‘ngli naqadar kuchli o‘kinch bilan to‘lib toshishini
              tasavvur qilyapsizmi?
            </div>
            <div className="s24 mt-4 f500 ">
              <span className="f600 color_main s28 pl">
                Ong osti darajasida qizcha
              </span>{" "}
              o‘zining ota-onaga kerak emasligi to‘g‘risidagi fikr bilan dunyoga
              keladi. Bunday farzand jismonan tirik qola olishi qiyinligi bois –
              hayotdan mahrum bo‘lish, ya'ni, o‘limdan qo‘rqish hisi uni Ong
              osti darajasida umri davomida ta'qib qiladi. Bunday qiz farzandlar
              deyarli tug‘ilishidan boshlab tez-tez kasal bo‘lishadi.
            </div>
            <div className="s24 mt-4 f500 ">
              <span className="f600 yashil s28 pl">
                Klinik psixologiya va tibbiyot nuqtai nazaridan,
              </span>{" "}
              Klinik psixologiya va tibbiyot nuqtai nazaridan, X (iks) xromosoma
              uzun yelkasi mikroduplikatsiyalarini diagnostika qilish imkoniyati
              paydo bo‘lgach («Array CGH 3, 18—22» kabi yuqori yechimli to‘liq
              genom texnologiyalarining rivojlanishi tufayli), qiz ona
              bachadonida bo‘lgan paytda onasining qattiq stress holatini his
              qilib o‘sgan bo‘lsa (xususan, bolaning jinsi tufayli) bunday
              xollarda qizda ko‘pincha Xq28, shu jumladan, MECP2 genini ¼
              qismini qamrab oladigan duplikatsiyalar uchraydi.
            </div>
            <div className="s24 mt-4 f500 ">
              <span className="f600 fil s28 pl">
                Ma'lumki, MECP2 genidagi o‘zgarishlar bilan bir nechta
                nevrologik kasallik bog‘liq bo‘lib,
              </span>{" "}
              ularning natijasida tegishli oqsil moddalar yetishmovchiligi yoki
              anomal tuzilma emas, balki aksincha ushbu moddalarning judayam
              ko‘p miqdorda ishlab chiqarilishi kuzatiladi.
            </div>

            <div className="list_item pl">
              <img src="/img/1.png" alt="" />
              <div className="f500  s24">
                <span className="f600 toq_fil s28 ">
                  Bunday kasalliklar belgilari sirasiga, ko‘pincha,
                </span>{" "}
                nutq buzilishi, tana o‘sish sur'atining pastligi, birinchi
                qadamlarni qo‘yishdagi, ya'ni yurishdagi qiyinchiliklar va
                hattoki bosh o‘lchamining kichikroq bo‘lishi kabilar kiradi.
                Asoratlar (1/10.000 bo‘lgan hollarda) tug‘ma skolioz va uyquning
                buzilishida ifoda bo‘lishi mumkin.
              </div>
            </div>
            <div className="list_item pl">
              <img src="/img/3.png" alt="" />
              <div className="f500  s24">
                <span className="f600 kok s28 ">
                  Agar qiz/ ayol organizmning aksariyat to‘qimalaridagi
                  duplikatsiyali X xromosoma faol bo‘lmasa,
                </span>{" "}
                ko‘p holatlarda ayol mazkur genning tashuvchisiga aylanib, 50 %
                holatda onasidan X xromosoma uzun yelkasining duplikatsiyasini
                meros qilib olgan o‘g‘il farzand ko‘rishi mumkin. Ya'ni ayol
                besoqolbozlikka moyilligi bo‘lgan o‘g‘il farzandni dunyoga
                keltirishi mumkin.
              </div>
            </div>

            <div className="list_item s24 mt-4 f500 ">
              <div>
                {" "}
                <span className="f600 color_main s28 pl">
                  Ayrim holatlarda
                </span>{" "}
                (1/15.000) tashuvchi ayollarda xavotirli tushkunlik
                ko‘rinishidagi ruhiy og‘ishlar ham kuzatilishi mumkin.
              </div>
            </div>

            <div className="list_item s24 mt-4 f500 ">
              <div>
                {" "}
                <span className="f600 color_main s28 pl">Shuningdek</span>{" "}
                orttirilgan yoki nasl-nasabdan o‘tgan mutatsiyaga uchragan /
                yoki qisman mutatsiyaga uchragan MECP2 geni yoki X xromosomali
                qizlarda buyrak usti bezlari qobig‘ining tug‘ma disfunktsiyasi
                aniqlanishi mumkin.
              </div>
            </div>

            <div className="list_item pl">
              <img src="/img/1.png" alt="" />
              <div className="f500  s24">
                <span className="f600 kok s28 ">Bundan tashqari,</span> ular,
                ko‘pincha, immunitet yetishmasligidan ham azob chekib, bu o‘z
                navbatida yuqori nafas olish yo‘llarining infeksiyalariga olib
                keladi. Bunga qo‘shimcha ravishda shuni aytish mumkin-ki, bunday
                qizlar ichak peristal'tikasining buzilishi natijasida,
                ko‘pincha, qabziyatdan ham azob chekadilar. 0-2 yosh atrofida
                ularda ichak psevdoobstruktsiyasi belgilari kuzatilishi mumkin
                bo‘lib, o‘tkir xuruj paytida ba'zan qayt qilish yoki qorindagi
                kuchli og‘riq bilan kechishi mumkin.
              </div>
            </div>

            <div className="list_item pl">
              <img src="/img/3.png" alt="" />
              <div className="f500  s24">
                <span className="f600 kok s28 ">Kamdan-kam holatlarda</span>{" "}
                (1/15.0000) ayollarda jinsiy organlarining anomaliyalari, yurak
                nuqsonlari (yurak poroki), qo‘l kaftlari yoki tovonlarning
                kichik bo‘lishi, ko‘zlar anomaliyalari, yoki eshitish
                qobiliyatining sustligi kuzatiladi.
              </div>
            </div>

            <div className="list_item pl50">
              <img src="/img/3.png" alt="" />
              <div className="f500 s24">
                Ya'ni, bu orqali bola Ong osti darajasida ota-onasini ularning
                xohish-istaklariga zid ravishda bo‘lsa ham o‘zini yaxshi
                ko‘rishda majburlaydi. Axir ota-ona kasal bolaga ko‘proq diqqat
                ajratishi va ko‘proq yaxshi ko‘rishga majbur bo‘ladi-ku.
              </div>
            </div>

            <div className="s24 mt-4 f500 ">
              <span className="f600 fil s28 pl">
                To‘g‘ri, mazkur Ong osti dasturi
              </span>{" "}
              qiz bolani tom ma'noda baxtsiz qilib qo‘yishi mumkin. Negaki uning
              eng katta istagi – ota-ona tomonidan sevilishdir.
            </div>

            <div className="list_item pl">
              <img src="/img/1.png" alt="" />
              <div className="f500  s24">
                Bu mehr-muhabbatga erishish yo‘lida jajji qizaloq ota-onasi
                undan nimani xohlayotgan bo‘lsa, shuni qilishga tayyor va o‘z
                xulq-atvori bilan go‘yoki: “Men yaxshiman, men qo‘limdan
                kelgancha harakat qilyapman, buning evaziga meni yaxshi
                ko‘ringlar”, deyayotgandek katta bo‘ladi. Ya'ni, qizaloq erta
                bolalikdanoq Ong osti darajasida ota-onasining istaklarini
                ko‘zidan o‘qishga, va ularga mos kelishga intilayotgandek o‘zini
                tutadi.
              </div>
            </div>

            <div className="s24 mt-4 f500 ">
              <span className="f600 color_main s28 pl">
                “Noto‘g‘ri jins”li qizcha
              </span>{" "}
              o‘zini umr bo‘yi aybdor his qiladi. Turfa xil ko‘rinishdagi
              aybdorlik hisi uni umr davomida ta'qib qilishi mumkin. U yoki
              o‘zini doimo aybdor deb his qiladigan vaziyatlar bilan to‘qnash
              keladi, yoki umuman aybsiz bo‘lsa ham uni ayblashadigan vaziyatga
              tushadi.
            </div>
            <div className="list_item pl">
              <img src="/img/1.png" alt="" />
              <div className="f500  s24">
                <span className="f600 kok s28 pl">Bundan tashqari,</span> bunday
                qizlar ko‘pincha bekamu-ko‘stlikka intilishadi. Umr bo‘yi ular
                dunyodagi barchaga yashashga haqli ekanini isbotlashga
                urinishadi. Qiz farzand ota-ona kutgan o‘g‘il farzanddan
                hech-qayeri kam emasligi va hattoki undan ham yaxshiroq ekanini
                isbotlashga urinadi. Ya'ni hayot doim tirik qolish uchun kurash
                ostida o‘tadi.
              </div>
            </div>

            <div className="list_item ab s24 mt-4 f500 ">
              <div>
                {" "}
                <span className="f600 color_main s28 pl">
                  Hattoki ona bo‘lgach,
                </span>{" "}
                u o‘zini haqiqiy onadek tutolmaydi. Aksariyat holatlarda u
                o‘zini erkaklardek qattiqqo‘llik bilan tutishi farzandlarining
                kelajakdagi taqdiriga ham salbiy ta'sir ko‘rsatadi. Bunday
                ayollarning deyarli barcha qiz farzandlari shaxsiy hayotda
                baxtsiz bo‘ladi (chunki o‘z turmush o‘rtog‘i va qaynonasining
                timsolida ular shafqatsiz ona va kuchsiz otani uchratadi),
                o‘g‘illari esa ko‘pincha irodasiz “erkaklar” bo‘lib yetishadi.
              </div>
            </div>
          </div>

          <div className="f600 s28 ta mt-5">
            Demak, otangizning jinsingizga nisbatan bo'lgan munosabati sizning
            Ong ostingizga va kelajak taqdiringizga qanday ta'sir qilgan?
          </div>
          <div className="f600 s28 ta mt-5 red">
            Keling sizga to'g'ri keladigan javob variantlarni qidirib ko'ramiz.
          </div>
          <div className="f600 s28 ta mt-5 seriy">
            O'ylab ko'ring qaysi bir javob / yoki javoblar aynan sizning
            hayotingizga mos kelyapti
          </div>

          <div className="list_item mt-5">
            <div className="s30 f700 me-lg-4 me-0 ta">A.</div>
            <div className="">
              <div className="s28 ">
                <span className="s30 kok f600">
                  Siz bolaligingizda tez-tez kasal bo‘lgansiz,
                </span>{" "}
                chunki – agar ko‘proq kasal bo‘lsam, otamning, hech bo‘lmasa,
                bilvosita mehrini qozonaman, deb o‘ylagansiz. Axir bu orqali siz
                dadangizning rahmini keltirib, tug‘ilganingizda sizga berilmay
                qolib ketgan mehrni undan chiqarib olishingiz mumkin bo‘lgan.
              </div>
            </div>
          </div>
          <div className="list_item pl">
            <img src="/img/1.png" alt="" />
            <div className="f500  s24">
              <span className=" kok f600">Negaki </span> butun dunyo bo‘ylab
              o‘tkazilgan ko‘plab tadqiqotlar shuni ko‘rsatdiki, bola hayotining
              3-7 kunlarida uning qalbi va organizmi o‘ta sezgir va u mehrga
              juda tashna bo‘lib, bu dunyoda uni qanday kutib olganlarini bilib
              turadi.
            </div>
          </div>

          <div className="list_item mt-5">
            <div className="s30 f700 me-lg-4 me-0 ta">B.</div>
            <div className="">
              <div className="s28 ">
                <span className="s30 seriy f600">
                  Agar siz opangiz yoki opalaringiz kabi qiz bola bo‘lib
                  tug‘ilgan bo‘lsangizu,
                </span>{" "}
                ammo otangiz o‘g‘il farzand kutib, yana qiz tug‘ilganidan
                afsusda ekanini yashirib ham o‘tirmagan bo‘lsa, kelajakda u
                sizni qiz bola, deb tan olmagan va Ong osti darajasida sizga
                o‘g‘il boladek munosabat qilgan bo‘lishi – ehtimoldan xoli emas.
              </div>
              <div className="list_item pl50">
                <img src="/img/3.png" alt="" />
                <div className="f500  s24">
                  Tabiiyki, siz Ong osti darajasida ota-onangizning mehrini
                  qozonish uchun o'zingizni o'g'il bolalardek tutgansiz. Odamlar
                  – Biram shu qizingiz sho'x-ey, deb ko'p gapirishgan bo'lishi
                  ajab emas.
                </div>
              </div>
            </div>
          </div>

          <div className="list_item pl">
            <img src="/img/1.png" alt="" />
            <div className="f500  s24">
              <span className=" kok f600">
                Ehtimol, ular ongli yoki o‘zi anglamagan tarzda{" "}
              </span>
              erkakcha ismning sinonimi yoki majozi bo'lgan ism qo'ygan
              bo'lishlari ham mumkin, masalan: O'g'il(oy), Tursin(oy), Umid(a),
              Yorqin(oy), Said(a), Shoir(a), Shod(iya), Sohib(a), Rahim(a),
              Nodir(a), Nazir(a), Naim(a), Kamol(a), Komil(a), Shaxzod(a),
              Shaxrizod(a), Shaxri(xon) yoki Shaxri(niso), Qadr(iya), Bekzod(a),
              Sabr(iya), Aziz(a), Laziz(a), Muslim(a), Muhsin(a), Dilshod(a),
              Xurshid(a), Sarvar(a), Matlyub(a), Mohir(a), Qunduz(hon),
              Sharif(a), Iymon(a), Salim(a), Samir(a), Karim(a), Solih(a),
              Shahzod(a), Kumush, Saodat, Mohidil, Inobat, Ijobat, Adolat,
              «Robim» so'zidan olingan Robiya, «Farz» so'zidan olingan Fariza
              yoki Farzona va shunga o'xshash ismlar.
            </div>
          </div>

          <div className="list_item mt-5">
            <div className="s30 f700 me-lg-4 me-0 ta">C.</div>
            <div className="">
              <div className="s28 ">
                Ismingiz qanday bo'lishidan qat'iy nazar,{" "}
                <span className="s30 toq_fil f600">
                  siz bolaligingizdan ko'pincha o'zingizni o'g'il-bolalardek his
                  qilgansiz
                </span>
                {"  "}
                va sizda yilma-yil (o'zingiz buni sezmagan holda) otangizning
                umidlariga to'liq moslashish jarayoni, ya'ni erkaklashish
                jarayoni – mas'uliyatli, ishbilarmon va hamma muammoni hal qila
                oladigan inson bo'lish jarayoni ro'y bergan.
              </div>
            </div>
          </div>
          <div className="list_item pl">
            <img src="/img/2.png" alt="" />
            <div className="f500  s24">
              Kichkinaligidan bo'yniga katta mas'uliyat yuklangan qizning /
              ayolning hayotida, tabiiy ravishda, oldiga qo'ygan maqsadiga
              erishish, pul topish yoki xizmat pog'onasidan ko'tarilish –
              birinchi o'rinda turadi. Bunday ayollar ko'pincha erkaklarga xos
              bo'lgan xislatlar talab qilinadigan ishlar bilan shug'ullanishadi
              va hatto rahbar ham bo'lishadi. Yoki juda bo'lmaganda uyda o'tirib
              ham, onlayn savdo qilib ham, pul topa olishadi.
            </div>
          </div>
          <div className="list_item pl50">
            <img src="/img/3.png" alt="" />
            <div className="f500  s24">
              <span className="color_main">
                Ya'ni 30 yoshda ham, 40 va 50 yoshda ham
              </span>{" "}
              Ong osti darajasida siz hali ham ota-onangizga o'g'il bola
              ekaningizni isbotlashni davom etayaptgan bo'lasiz.
            </div>
          </div>
          <div className="list_item pl">
            <img src="/img/1.png" alt="" />
            <div className="f500  s24">
              Bu degani siz hayotingizga kam pul topadigan yoki umuman pul
              topmaydigan erkakni jalb qilgan bo'lishingizni ehtimoli juda
              katta.
            </div>
          </div>
          <div className="list_item pl50">
            <img src="/img/3.png" alt="" />
            <div className="f500  s24">
              Chunki sizning Ong ostingiz uchun SIZ erkaksiz va tabiiy ravishda
              unga “oilada ikkinchi erkak” kerak emas. Biroq siz buni anglamagan
              holda boy, kuchli va muvaffaqiyatli erkak haqida orzu qilaverasiz.
            </div>
          </div>
          <div className="list_item pl">
            <img src="/img/2.png" alt="" />
            <div className="f500  s24">
              Ya'ni, agarda siz yaxshi pul topadigan erkakni / yigitni / yoki
              boy oilaning o'g'lini uchratib, unga turmushga chiqsangiz ham, siz
              bari-bir uni kuchsiz va kam pul topadigan qilib qo'yasiz. Shuning
              uchun ham sizning eringiz – Bor o'zing pul topaqol – deb aytadi.
            </div>
          </div>
          <div className="list_item pl50">
            <img src="/img/3.png" alt="" />
            <div className="f500  s24">
              Negaki sizning Ong ostingizda “Men erkak bo'lishim kerak” degan
              majburiy dastur o'tirgan bo'lib, o'zining ishini qilayotgan
              hisoblanadi. Va sizga eringizdan ko'p pul topishingiz aslida juda
              ham yoqadi. Chunki siz o'sha payt o'zingizni qudratingizni –
              otangiz istagan o'g'il ekanligingizni his qilasiz.
            </div>
          </div>

          <div className="list_item mt-5">
            <div className="s30 f700 me-lg-4 me-0 ta">D.</div>
            <div className="">
              <div className="s24">
                <span className="toq_fil f600">
                  Agar otangiz siz tug'ilganingizdan keyin yoki onangiz sizga
                  homiladorlik paytida sizlarni tashlab ketgan bo'lsa
                </span>{" "}
                va onangiz umr bo'yi sizga to'g'ridan-to'g'ri yoki bilvosita
                tarzda:
              </div>
            </div>
          </div>
          <div className="list_item pl">
            <img src="/img/1.png" alt="" />
            <div className="f500  s24">
              “Mana, sen tug'ilganingdan keyin / yoki senga ikkiqatligimda otang
              meni tashlab ketdi. Balki u o'g'il farzand istagandir, o'rniga esa
              sen tug'ilding” yoki “Men senga ikkiqat bo'lganimdan keyin, otang
              seni tan olishni istamasdan mendan yuz o'girib ketgan”, deb aytib
              kelgan bo'lsa (ya'ni u o'zining nomukammalligini tan olmasdan,
              barcha aybni otangizning va qisman sizning zimmangizga yuklagan
              bo'lsa) siz, tabiiyki, shu dunyoga kelganingiz uchun bilvosita
              tarzda aybdorlik hisi bilan katta bo'lgansiz.
            </div>
          </div>
          <div className="list_item pl50">
            <img src="/img/3.png" alt="" />
            <div className="f500  s24">
              Kelajakda, katta ehtimol bilan, siz “baxtsiz” onangizni eng yaqin
              o'rtog'iga – ya'ni, uning psixologik sherigiga aylanib, dadangizni
              o'rnini bosgansiz.
            </div>
          </div>
          <div className="list_item pl">
            <img src="/img/1.png" alt="" />
            <div className="f500  s24">
              Bu degani siz hayotingizga kam pul topadigan yoki umuman pul
              topmaydigan erkakni jalb qilgan bo'lishingizni ehtimoli juda
              katta.
            </div>
          </div>
          <div className="list_item pl50">
            <img src="/img/3.png" alt="" />
            <div className="f500  s24">
              Kelajakda, katta ehtimol bilan, siz “baxtsiz” onangizni eng yaqin
              o'rtog'iga – ya'ni, uning psixologik sherigiga aylanib, dadangizni
              o'rnini bosgansiz.
            </div>
          </div>
          <div className="list_item pl">
            <img src="/img/1.png" alt="" />
            <div className="f500  s24">
              <span className="toq_fil">
                Lekin, bu yerda eng asosiy kalit shundaki,
              </span>{" "}
              siz ko'pincha / yoki har doim kutilmagan vaqtda kutilmagan joyda
              yomonotliq bo'lib chiqasiz va aybsiz aybdor bo'lib qolganingizdan
              ko'nglingiz ko'p ranjiydi. Sizga bu adolatsizliklarga qarshi
              kurashasiz. Xuddi dunyoga kelyaptganingizda kurashgandek
              kurashasiz va aybingiz nimaligini tushuna olmasdan azob chekasiz.
            </div>
          </div>
          <div className="list_item pl50">
            <img src="/img/3.png" alt="" />
            <div className="f500  s24">
              <span className="f600 toq_fil">Chunki</span> otangiz ham, onangiz
              ham o'zlarining qilgan xato ishlarini sizning zimmangizga
              yuklashgan va siz shu dunyoga kelganingiz uchun aybdor ham bo'lib
              chiqqansiz – negiz qayerdaligini tushunyaptgandirsiz?!
            </div>
          </div>
          <div className="list_item pl50">
            <img src="/img/3.png" alt="" />
            <div className="f500  s24">
              <span className="f600 toq_fil">
                Psixologiyada bu “Beayb parvardigor” kompleksi deyiladi
              </span>{" "}
              va ushbu kompleks bola dunyoga kelayotgan paytda otasi tarafidan
              tan olinmaslik bilan bog'liq ruhiy travmaga taqaladi.
            </div>
          </div>
          <div className="list_item pl">
            <img src="/img/1.png" alt="" />
            <div className="f500  s24">
              Keyinchalik esa siz yoki umuman turmushga chiqmasdan qari qiz
              bo'lib o'tib ketgansiz / yoki hozirda turmush qurishni istasangiz
              ham, chiqa olmayapsiz, chunki hayotingizdagi sevgan yigitlaringiz
              / yoki erkaklaringiz xuddi otangiz kabi siz uchun kurashishni
              istamaydi, ota-onasi ham sizni umuman tan olishni xohlamaydi;
            </div>
          </div>
          <div className="list_item pl">
            <img src="/img/1.png" alt="" />
            <div className="f500  s24">
              Yoki turmush qursangiz ham katta ehtimol bilan siz ko'p vaqt
              o'tmasdan ajrashib, onangizning yoniga qaytgansiz. Chunki siz uni
              tashlab ketganingiz uchun o'zingizni aybdor deb his qilgansiz.
            </div>
          </div>
          <div className="list_item pl50">
            <img src="/img/3.png" alt="" />
            <div className="f500  s24">
              Ya'ni u holda ham, bu holda ham sizni har-doyimdagidek:{" "}
              <span className="f600 toq_fil">
                Aybdorlik, Burch va Erkak sevgisiga noloyiqlik
              </span>{" "}
              hislari boshqaradi.
            </div>
          </div>

          <div className="list_item mt-5">
            <div className="s30 f700 me-lg-4 me-0 ta">E.</div>
            <div className="">
              <div className="s24 f500">
                <span className="seriy f600">
                  Siz hayotingizga mas'uliyatsiz erkaklarni jalb qilasiz
                </span>{" "}
                va ular hayotingizning eng mushkul davrlarida mas'uliyatni o‘z
                zimmasiga olishni istamaydi. Chunki tug‘ilish / dunyoga kelish –
                odam uchun eng og‘ir jarayondir. Dunyoga kelish chog‘ida
                qalbingiz otangizning mehri va qo‘llab-quvvatlashini his
                qilmagani bois, tabiiyki, Ong osti darajasida siz erkaklardan
                xuddi shuni kutasiz.
              </div>
            </div>
          </div>
          <div className="list_item pl">
            <img src="/img/3.png" alt="" />
            <div className="f500  s24">
              <span className="seriy f600">
                {" "}
                Ya'ni o‘zingiz anglamagan tarzda sizga yaqin bo‘lgan erkakka,
                siz taxminan mana bunday signal yuborasiz
              </span>{" "}
              – “Men sizdan yomonlik kutyapman, chunki meni hayotimdagi ilk
              erkak – meni otam ham o‘zini xuddi shunday yomon tutgan. U o‘z
              spermatozoidlarining ishi uchun mas'uliyatni o‘z zimmasiga olishni
              ISTAMAGAN va hamma narsada onamni ayblagan.
            </div>
          </div>
          <div className="list_item pl50">
            <img src="/img/3.png" alt="" />
            <div className="f500  s24">
              Shu bois men sizdan ham xuddi shuni kutaman: siz men uchun, ya'ni
              mening hayotim uchun, munosabatlarimiz uchun mas'uliyatni o‘z
              zimmangizga olishni istamasdan, hamma narsada meni o‘zimni
              ayblashingizni kutaman”.
            </div>
          </div>
          <div className="list_item">
            <img src="/img/3.png" alt="" />

            <div className="f500  s24">
              Sizning erkagingiz{" "}
              <span className="color_main f600">
                Ong osti ma'lumotlar almashinuv tizimida
              </span>{" "}
              sizdan bu signalni olgach, sizning 3-D real hayotingizda tabiiy
              ravishda sizning Ong osti ko‘rsatmangizni bajaradi, xolos.
            </div>
          </div>

          <div className="list_item mt-5">
            <div className="s30 f700 me-lg-4 me-0 ta">F.</div>
            <div className="s24 f500">
              <span className="toq_fil f600">
                Siz turli sabablarga ko‘ra sizni o‘z o‘g‘liga munosib ko‘rmagan
                qaynona va qaynotani
              </span>{" "}
              hayotingizga jalb qilgansiz. Axir otangiz, oiladagi 1-chi shaxs
              bo‘la turib, sizni bu dunyoga kelish uchun nomunosib deb bilgan,
              shunday emasmi?! Xuddi shu kabi sevgan insoningizning oilasidagi
              avtoritar odamlar ham otangizning sizga avvalboshdan ko‘rsatgan
              munosabatini ko‘zgu qilib aks ettirgan, xolos.
            </div>
          </div>
          <div className="list_item pl">
            <img src="/img/3.png" alt="" />
            <div className="f500 s24">
              <span className="toq_fil f600">Bunga qo‘shimcha ravishda,</span>{" "}
              yigitingiz / sevgan insoningizning ota-onasi bir qarashdayoq
              sizning kuchli qiz ekaningizni sezib, kelajakda ularga
              bo’ysunmasligingiz natijasida ular o‘z o‘g‘lini nazorat qilish
              imkoniyatidan ayrilishini anglab yetishi mumkin.
            </div>
          </div>
          <div className="list_item pl50">
            <img src="/img/3.png" alt="" />
            <div className="f500  s24">
              Shu bois ular “onasining erkatoyi” bo‘lgan o‘g‘illariga siz
              munosib emasligingiz va “toychoqlariga” yaxshi g‘amxo‘rlik qila
              olmasligingiz bahonasida sizni kelin qilmaslik uchun to‘sqinlik
              qilgan bo‘lishlari ham mumkin.
            </div>
          </div>

          <div className="list_item mt-5">
            <div className="s30 f700 me-lg-4 me-0 ta">G.</div>
            <div className="">
              <div className="s24 f500">
                <span className="kok f600">
                  Siz sevgan yigitlar / yoki erkaklar / yoki eringiz (va hatto
                  otangiz ham)
                </span>{" "}
                har doim sizni qayta tarbiyalashga / sindirishga / yoki
                o'zgartirishga intilishganlari bilan to’qnashasiz. Chunki ular
                sizning kuchli irodangizdan hamda erkaklarga xos mantiqiy
                fikrlashingizdan cho'chiydilar.
              </div>
            </div>
          </div>
          <div className="list_item pl">
            <img src="/img/3.png" alt="" />
            <div className="f500 s24">
              Axir, ularning o'zida bunday xislatlar yo'q-ku. Ular hattoki
              sizning qaror qabul qilishingizga xam hasad bilan qarashadi.
            </div>
          </div>
          <div className="list_item pl50">
            <img src="/img/1.png" alt="" />
            <div className="f500  s24">
              Ya'ni siz ulardan kuchli va aqlli ekaningizni, energetikangiz
              ularnikidan kuchliroq ekanini his qilish ularga yoqmaydi.
            </div>
          </div>
          <div className="list_item pl">
            <img src="/img/3.png" alt="" />
            <div className="f500 s24">
              Biroq buni tan olmaslik va bildirmaslik uchun otangiz / yoki
              yigitingiz / yoki eringiz / yoki sizga yaqin bo'lgan boshqa erkak
              sizni ruhan sindirishga / yoki juda bo'lmaganda din orqali sizni
              itoatkor ayol qilishga va hatto o'z xohishingizga qarshi hijobga
              tiqishga uringan holatlar ham bo'lgan bo'lishi mumkin.
            </div>
          </div>
          <div className="list_item mt-5">
            <div className="s30 f700 me-lg-4 me-0 ta">H.</div>
            <div className="">
              <div className="s24 f500">
                <span className="yashil f600">
                  Siz o‘zingizni ko‘p izlaysiz
                </span>{" "}
                (o‘zingizdan doimiy ravishda ko‘nglingiz to‘lmasligining belgisi
                sifatida) katta ehtimol bilan, erkakcha kasbni tanlagansiz yoki
                tanlashni istaysiz.
              </div>

              <div className="s28 yashil mt-2">Masalan:</div>

              <div className="list_item mt-2 pl">
                <img src="/icon_cor.png" alt="" />
                <div className="f500 s24">advokat,</div>
              </div>
              <div className="list_item mt-2 pl">
                <img src="/icon_cor.png" alt="" />
                <div className="f500 s24">yurist, </div>
              </div>
              <div className="list_item mt-2 pl">
                <img src="/icon_cor.png" alt="" />
                <div className="f500 s24">ichki ishlar organlari xodimi, </div>
              </div>
              <div className="list_item mt-2 pl">
                <img src="/icon_cor.png" alt="" />
                <div className="f500 s24">rejissyor, </div>
              </div>
              <div className="list_item mt-2 pl">
                <img src="/icon_cor.png" alt="" />
                <div className="f500 s24">jurnalist, </div>
              </div>
              <div className="list_item mt-2 pl">
                <img src="/icon_cor.png" alt="" />
                <div className="f500 s24">tashkilotchi,</div>
              </div>
              <div className="list_item mt-2 pl">
                <img src="/icon_cor.png" alt="" />
                <div className="f500 s24">menejer,</div>
              </div>
              <div className="list_item mt-2 pl">
                <img src="/icon_cor.png" alt="" />
                <div className="f500 s24">ishbilarmon ayol, </div>
              </div>
              <div className="list_item mt-2 pl">
                <img src="/icon_cor.png" alt="" />
                <div className="f500 s24">sport murabbiyisi va</div>
              </div>
              <div className="list_item mt-2 pl">
                <img src="/icon_cor.png" alt="" />
                <div className="f500 s24">
                  huquq muhofazachisi (ehtimol, siz ayollar huquqlarini muhofaza
                  qilish bo‘yicha tashkilotiga ham a'zo bo‘lib ulgurgansiz yoki
                  ayollarga yordam berish imkoniyati bor bo‘lgan ishda
                  ishlaysiz),{" "}
                  <span className="f600">
                    ya'niki boshqaruv bilan bog‘liq kasblar.
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="list_item pl">
            <img src="/img/3.png" alt="" />
            <div className="f500  s24">
              <span className="yashil f600">
                Siz, hattoki, o‘qituvchi yoki maktab psixologi kasbini
              </span>{" "}
              ham tanlagan bo‘lishingiz mumkin (chunki bu kasblar ham boshqaruv,
              ya'ni bolalar ustidan boshqaruvni amalga oshirish imkoniyatini
              beradi).
            </div>
          </div>
          <div className="list_item pl">
            <img src="/img/3.png" alt="" />
            <div className="f500  s24">
              <span className="toq_fil f600">
                Yoki shifokor bo‘lib ishlaysiz
              </span>{" "}
              (negaki, o‘zgalar hayoti uchun mas'uliyatni o‘z zimmangizga
              olasiz, ya'ni bu ham erkaklarga xos xislat).
            </div>
          </div>
          <div className="list_item pl">
            <img src="/img/3.png" alt="" />
            <div className="f500  s24">
              <span className="red f600">Yoki eng yomon holatda</span>{" "}
              (ruhiyatingiz faoliyatining anomal natijasi sifatida) – siz
              sehr-jodu olamining biron-bir vakiliga aylangansiz
              (issiq-sovuqchi, o‘qiydigan ayol, gadalka, ekstrasens va x.k.);
              chunki bu hunarlar ko‘zbo‘yamachilik va o‘zini-o‘zi ishontirish
              bilan bog‘liq bo‘lishiga qaramay, ular ham odamlar ustidan nazorat
              o‘rnatish imkonini beradi.
            </div>
          </div>
          <div className="list_item mt-5">
            <div className="s30 f700 me-lg-4 me-0 ta">I.</div>
            <div className="">
              <div className="s24 f600">
                Siz hayotingizga{" "}
                <span className="color_main f600">
                  “O‘g‘il bola va istalmagan qiz farzand kompleksi”ga ega
                  bo‘lgan kundoshni
                </span>{" "}
                ya'ni xuddi o‘zingizga o‘xshagan rafiqasi bor turmush o‘rtoq /
                yoki erkaklarni jalb qilyapsiz yoki qilgansiz. Chunki bu holatda
                ham siz o‘zingiz uchun aziz bo‘lgan insonni sevgisi uchun
                kurashyapsiz.
              </div>
            </div>
          </div>
          <div className="list_item mt-5">
            <div className="s30 f700 me-lg-4 me-0 ta">J.</div>
            <div className="">
              <div className="s28 ">
                <span className="s30 toq_fil f600">
                  Otangiz sizni qiz farzand sifatida rad etganiga nisbatan
                  bo‘lgan sizdagi Ong osti darajasidagi xafalik bois,
                </span>{" "}
                siz o‘zingiz anglamagan holda erkaklardan nafratlanasiz. Siz
                yoki ularni o‘z hayotingizdan itarib chiqarish uchun o‘nlab
                sabablar o‘ylab topasiz yoki turli sabablarga ko‘ra siz bilan
                bo‘la olmaydigan erkakni jalb qilgansiz.
              </div>
              <div className="list_item pl">
                <img src="/img/1.png" alt="" />
                <div className="f500  s24">
                  Ya'ni, bu yerda “Men hayotimga meni sevadigan erkakni kirita
                  olmayman va kiritishim kerak emas”, degan to‘siq
                  ko‘rinishidagi Ong osti dasturi ishlaydi.
                </div>
              </div>
            </div>
          </div>
          <div className="list_item mt-5">
            <div className="s30 f700 me-lg-4 me-0 ta">K.</div>
            <div className="">
              <div className="s28 ">
                <span className="s30 toq_fil f600">
                  Siz eskort (zamonaviy fohishalik) xizmatida ham ishlashingiz
                  mumkin.
                </span>{" "}
                Chunki bu hayotiy stsenariyda siz har safar erkaklarga nisbatan
                bo‘lgan nafratingizga ishonch hosil qilib, shu bilan bir vaqtda,
                erkaklar siz bilan jiddiy munosabat o‘rnatishdan cho‘chiydigan
                ayol bo‘lib qolaverasiz.
              </div>
              <div className="list_item pl">
                <img src="/img/1.png" alt="" />
                <div className="f500  s24">
                  Ya'ni bunda yana o‘sha “Qabul qilmaslik va rad etilish” modeli
                  ishga tushgan bo‘ladi.
                </div>
              </div>
            </div>
          </div>

          <div className="list_item mt-5">
            <div className="s30 f700 me-lg-4 me-0 ta">L.</div>
            <div className="">
              <div className="s24 f500">
                <span className="s28 fil f600">
                  Agar sizning gen to'plamingizda “o'zgargan XQ 28 geni” bo'lsa
                </span>{" "}
                (bu haqida darsimizning boshida batafsil aytib o'tilgan) u holda
                sizda jinsiy deviatsiya rivojlanib, siz bir vaqtning o'zida
                ikkita erkak bilan jinsiy aloqaga kirishish istagi bilan
                yashashingiz ham mumkin / yoki aksincha shunday fantaziyalari
                bor erni hayotingizga jalb qilgan bo'lishingiz mumkin.
              </div>
            </div>
          </div>
          <div className="list_item pl">
            <img src="/img/1.png" alt="" />
            <div className="f500  s24">
              Chunki Ong osti darajasida siz o'zingizga o'xshagan, ya'ni XQ-28
              gen tashuvchisini hayotingizga jalb qilgan bo'lasiz. Bunday
              erkaklar esa har doim geylar bo'ladilar. Va aytgancha, ular
              ko'pincha geyligini tan olishdan qo'rqib, juda qattiq dinga
              berilib ketgan holatlar ham bo'ladi. Ya'ni ular o'zlaridan
              taqvodorlarni yasab olgan insonlar ham bo'lishlari mumkin.
            </div>
          </div>
          <div className="list_item pl">
            <img src="/img/2.png" alt="" />
            <div className="f500  s24">
              <span className="f600 toq_fil">
                Biroq gen mutatsiyasi bilan bog'liq ushbu illatlari xuruj qilgan
                paytda
              </span>{" "}
              bunday turdagi erkaklar dinni – Ollohning aytgan gaplarini chetga
              surib qo'yib:
            </div>
          </div>
          <div className="list_item pl">
            <img src="/img/3.png" alt="" />
            <div className="f500  s24">
              yoki beto'xtov ayol almashtirishadi / yoki o'zini aldash va
              tinchlantirish maqsadida nikohlab 3-4ta va hatto 10ta xotin olib
              tashlashadi *** (ya'ni, ular bu ishni – xotin almashtirishni –
              geyligi borasidagi qo'rquvidan qutilish hamda erkakligini o'ziga
              qayta-qayta isbotlash uchun qilishadi, shuning uchun ham ularning
              tug'dirib tashlagan bolalari ular uchun ayollar kutgan darajada
              katta ahamiyatga ega bo'lmaydi);
            </div>
          </div>
          <div className="list_item pl">
            <img src="/img/3.png" alt="" />
            <div className="f500  s24">
              yoki o'z ayolidan nafratlangan holda ichkilikka berilib ketishadi;
            </div>
          </div>
          <div className="list_item pl">
            <img src="/img/3.png" alt="" />
            <div className="f500  s24">
              yoki aynan o'zining ayoli bilan jinsiy aloqa qilishni umuman
              istamay qolishadi, chunki xotin eridan har doim u haqiqiy erkak
              bo'lishini talab qiladi va er vazifasini bajarishini kutadi. Ya'ni
              erkak bu holda ayolidan jinsiy aloqa qilmaslik orqali o'ch oladi;
            </div>
          </div>
          <div className="list_item pl">
            <img src="/img/3.png" alt="" />
            <div className="f500  s24">
              yoki berkitib bari-bir boshqa erkaklar bilan aloqa qilishadi;
            </div>
          </div>
          <div className="list_item pl">
            <img src="/img/3.png" alt="" />
            <div className="f500  s24">
              yoki juda bo'lmaganda gey-porno-filьmlar ko'rib, o'zlarini
              tinchlantirishadi;
            </div>
          </div>
          <div className="list_item pl">
            <img src="/img/3.png" alt="" />
            <div className="f500  s24">
              va hattoki shunday holatlar ham bor-ki, ular o'zining ayoliga /
              yoki ko'chada pullik fohishalarga / yoki jazmanlariga (strapon
              taqib) erkak rolida bo'lishni ham taklif qilishadi;
            </div>
          </div>
          <div className="list_item pl">
            <img src="/img/3.png" alt="" />
            <div className="f500  s24">
              yoki eng yomon holda – bexosdan jinoyat sodir etib, qamalib
              ketishadi...
            </div>
          </div>
          <div className="list_item ms-3 ta">
            <div className="f500  s24 pl">
              <span className="color_main f600">
                Aytgancha, shu bois ham sizda ko'pincha
              </span>{" "}
              geylar yoki besoqolbozligini qattiq berkitadigan begona yigit /
              erkaklar bilan yaxshi do'stona aloqalar ham bo'lishi mumkin va
              ba'zi-bir holatlarda bunday aloqalar ishqiy munosabatlarga ham
              o'tib ketishi mumkin. Va ular, albatta, sizga: “Sen meni hech kim
              tushuna olmaydigan darajada tushunasan” – deb aytishadi. <br />Chunki
              ular sizda ham ularda mavjud bo'lgan o'sha gen-mutatsiyasi
              borligini energetik tarzda his qilishadi, faqat o'zlari buni
              yaxshi tushunishmaydi.
            </div>
          </div>

          <div className="list_item mt-5">
            <div className="s30 f700 me-lg-4 me-0 ta">M.</div>
            <div className="">
              <div className="s24 f500">
                <span className="s24 fil f600">
                  Agar siz Xq28 uchastkasining 50% dan ortiq maydonini egallab
                  oladigan gen duplikatsiyasining tashuvchisi bo'lsangiz,
                </span>{" "}
                yoki bu narsa sizga onangizdan o'tgan bo'lsa (bunaqasi ham
                uchrab turadi – ushbu gen onadan bolaga nasl-nasab orqali
                o'tishi mumkin, ya'ni onadan qizga, otadan o'g'ilga), katta
                ehtimol bilan, siz o'z hayotingizga xuddi shu gen tashuvchisini,
                yashirin turdagi besoqolboz erkakni (bundan avvalgi javob
                variantida ular haqida batafsil tushuncha beri o'tildi), yoki
                o'zining asl xususiyatlarini, ya'ni besoqolbozligini
                usta-omonlik bilan yashiradigan haqiqiy geyni jalb qilgansiz.
              </div>
            </div>
          </div>
          <div className="list_item pl">
            <img src="/img/1.png" alt="" />
            <div className="f500  s24">
              Bu holda sizning Ong ostingiz o'g'il farzand bo'lgan homilaga
              to'siq qo'ygan bo'lishi mumkin. Ya'ni, siz aksariyat holatlarda
              qiz farzand tug'asiz. Y-xromosomali spermatozoidlar esa, ya'ni
              o'g'il bola spermatozoidlari:
            </div>
          </div>
          <div className="list_item pl">
            <img src="/img/3.png" alt="" />
            <div className="f500  s24">
              yoki sizning tuxumdondagi folekulalaringizdan chiqqan
              hujayralaringiz bilan bog'lanmaydi,
            </div>
          </div>
          <div className="list_item pl">
            <img src="/img/3.png" alt="" />
            <div className="f500  s24">
              yoki sizda bachadondan tashqaridagi homiladorlik yuz beradi,
            </div>
          </div>
          <div className="list_item pl">
            <img src="/img/3.png" alt="" />
            <div className="f500  s24">
              yoki bola tushish / yoki o'g'lingiz tug'ilayotgan paytda o'lish
              holati bo'lgan bo'lishi ham mumkin.
            </div>
          </div>
          <div className="list_item pl">
            <img src="/img/1.png" alt="" />
            <div className="f500  s24">
              Biroq sizning eringiz (yana o'sha-o'sha o'zini erkakligini his
              qilish maqsadida, axir u ich-ichidan hezalak-sifatligini yaxshi
              biladi-ku) sizdan ko'proq o'g'il tug'ib berishingizni kutadi yoki
              talab ham qiladi. Unga siz tug'ib beradigan uning zurriyotining
              hayoti, joni, sog'lom bo'lib tug'ilishi qadrli emas, balki aynan
              bolaning jinsi muhimroqdir.
            </div>
          </div>
          <div className="list_item pl50">
            <img src="/img/1.png" alt="" />
            <div className="f500  s24">
              <span className="f600 seriy">
                Chunki har bir yashirin turdagi besoqolboz erkak
              </span>{" "}
              qalbining tubida ich-ichidan ayollarni yomon ko'radi. Qo'yib
              bersangiz ular – hamma ayollarni ezib, yanchib, yo'q qilib
              tashlash kerak – deb o'ylashadi va shuning uchun ham ular
              tug'ilgan qiz farzandlarini maksimal darajada payqamaslikga,
              ularni qadrlamaslikga harakat qilishadi va o'g'il kutib yashashadi
              yoki oilada bir-amallab tug'ilib qolgan o'g'il farzandning
              mavqesini aytib bo'lmaydigan darajada yuqoriga ko'tarishga
              urinishadi.
            </div>
          </div>
          <div className="list_item ">
            <img src="/img/2.png" alt="" />
            <div className="f500  s24">
              <span className="f600 seriy">
                Agar siz turli kalendarlar asosida yoki qonidan hisoblatib,
              </span>{" "}
              yokigin kuchli ugroza holatiga qaramay homilani saqlash bo'limida
              9 oy davomida yotib, yoki EKO qildirib, ya'ni barcha omillarga
              qarshi borgan holda o'g'il farzand tuqqan taqdiringizda ham
              sizning o'g'lingiz kuchsiz va qizlarga xos xislatlar bilan / yoki
              yashirin yoki hatto faol besoqolboz bo'lib / yoki xunasa bo'lib /
              yoki juda bo'lmaganda olati juda kichkina o'g'il bo'lib,
              tug'ilishining ehtimoli bir necha barobar ko'p bo'ladi.
            </div>
          </div>
          <div className="list_item pl50">
            <img src="/img/2.png" alt="" />
            <div className="f500  s24">
              Agarda siz eringizga (Ong osti darajangizda esa otangizga) yoqish
              va uni o'g'il tug'ib berish bilan ushlab qolish maqsadida juda ham
              qattiq o'g'il xohlab, ya'ni ikkiqat bo'lganingizda, shunisi aniq
              o'g'il bo'ladi, deb tuqqan bo'lsangiz, ko'pincha 3-chi yoki 4-chi
              homilangizdagi qizingiz (bir-hil paytda 1-chi, 2-chi homila ham
              ham bo'lishi mumkin) gen mutatsiyasi sababli, ya'ni nasl-nasab
              tizimda kuchli o'zgarish sodir bo'lganligi tufayli jiddiy kasallik
              bilan tug'ilgan bo'lishi mumkin.
            </div>
          </div>
          <div className="list_item ">
            <img src="/img/1.png" alt="" />
            <div className="f500  s24">
              <span className="f600 seriy">
                Ya'ni uning xromosomalar to'plamida
              </span>{" "}
              normal ayollarnikidek ikkita iks (XX) emas, balki 3ta va hatto 5ta
              (XXX - XXXXX) iks-xromosomalar bog'lanmasi bo'lib / yoki aksincha
              ikkinchi xromosoma o'rniga xech qanday xromosoma bo'lmasdan (XO),
              ushbu anomaliyalar shunga olib keladiki, qiz bola:
            </div>
          </div>

          <div className="list_item pl">
            <img src="/icon_cor.png" alt="" />
            <div className="f500 s24">
              yoki gapira olmaydigan bo'lib (eshitish qobiliyati bo'lsa ham o'zi
              gapira olmaydigan bo'lib);
            </div>
          </div>
          <div className="list_item pl">
            <img src="/icon_cor.png" alt="" />
            <div className="f500 s24">yoki umuman kar-soqov bo'lib;</div>
          </div>
          <div className="list_item pl">
            <img src="/icon_cor.png" alt="" />
            <div className="f500 s24">
              yoki ko'zida / ko'rish qobiliyatida katta nuqson bilan;
            </div>
          </div>
          <div className="list_item pl">
            <img src="/icon_cor.png" alt="" />
            <div className="f500 s24">yoki umuman ko'r bo'lib,</div>
          </div>
          <div className="list_item pl">
            <img src="/icon_cor.png" alt="" />
            <div className="f500 s24">
              yoki badanida katta hajmdagi xol/ yoki ko'plab mayda xollar / yoki
              nor / yoki anomal dog' bilan
            </div>
          </div>
          <div className="ta f500 color_main s28">
            tug'ilgan bo'lishi mumkin.
          </div>
          <div className="ta f500 color_main s30 mt-5">
            Yoki bu nasl mutatsiyasi bilan bog'liq kasalliklar keyinchalik:
          </div>
          <div className="list_item pl">
            <img src="/icon_cor.png" alt="" />
            <div className="f500 s24">
              qiz bolaning bachadonida katta muammolar paydo bo'lganida
              (bachadoni rivojlanmasdan “detskaya matka” holatida qolib
              ketganida, yoki u umuman bachadonsiz tug'ilgan bo'lishi ham
              mumkin);
            </div>
          </div>
          <div className="list_item pl">
            <img src="/icon_cor.png" alt="" />
            <div className="f500 s24">
              yoki qizlik pardasi yo'q bo'lib chiqqanida,
            </div>
          </div>
          <div className="list_item pl">
            <img src="/icon_cor.png" alt="" />
            <div className="f500 s24">
              yoki ko'kragi juda kichkina bo'lganida,
            </div>
          </div>
          <div className="list_item pl">
            <img src="/icon_cor.png" alt="" />
            <div className="f500 s24">
              yoki vazni haddan tashqari ortib borishni boshlaganida,
            </div>
          </div>
          <div className="list_item pl">
            <img src="/icon_cor.png" alt="" />
            <div className="f500 s24">
              yoki aqli zaiflashishni boshlaganida,
            </div>
          </div>
          <div className="list_item pl">
            <img src="/icon_cor.png" alt="" />
            <div className="f500 s24">yoki tili chuchukligida,</div>
          </div>
          <div className="list_item pl">
            <img src="/icon_cor.png" alt="" />
            <div className="f500 s24">yoki duduqlanib gapirishida,</div>
          </div>
          <div className="list_item pl">
            <img src="/icon_cor.png" alt="" />
            <div className="f500 s24">
              yoki bo'yi haddan tashqari baland (180 sm.dan ortiq), yoki haddan
              tashqari past bo'lib chiqqanda (150 sm.dan past bo'lib qolib
              ketganda){" "}
            </div>
          </div>
          <div className="ta f500 color_main s28 mt-2">bilinishi mumkin.</div>
          <div className="mt-5 s28 ta">
            Ha, sizning tug'ilgan bechora qizingiz aslida eringizni va hatto
            sizning o'zingizni ham qizlarga, ya'ni ayol zotiga bo'lgan
            nafratingizni – Qiz kerak emas, chunki men / yoki biz erimiz
            ikkalamiz qiz zotini yomon ko'ramiz – degan destruktiv Ong osti
            dasturingizni aks ettirgan qurbon bo'lgan, xolos. Va siz albatta qiz
            farzandingizning kasallik va nuqsonlarini Ollohning amriga to'nkab,
            o'zlaringizni aybingizni tan olishni istamasangiz kerak.{" "}
          </div>
          <div className="list_item ta f400 seriy s28 pl50">
            Demak, bizning variant javoblarimiz tugadi va biz siz bilan
            prorabotkalarimizni yozishga o'tamiz.
          </div>
          <div
            onClick={() => nav("/what-pro")}
            className="prorabotka_what tort f600 color_main s36 mt-5 ta"
          >
            PRORABOTKA – BU NIMA?
          </div>
        </div>

        <div className="prorabotka_box">
          <div className="list_item ">
            <img src="/icon_cor.png" alt="" />
            <div className="s24 f500">Salom, dada. </div>
          </div>
          <div className="list_item ">
            <img src="/icon_cor.png" alt="" />
            <div className="s24 f500">
              Bilasizmi, bu satrlarni yozish men uchun juda og'ir, lekin sizga
              baribir aytishim kerak: men siz uchun istalmagan farzand
              bo'lganimga sizni kechirishga harakat qilaman.{" "}
            </div>
          </div>
          <div className="list_item ">
            <img src="/icon_cor.png" alt="" />
            <div className="s24 f500">
              Dada, siz meni Ollohning bergan ne'mati sifatida rad etganingiz va
              Ong osti darajamda o'rnashib qolgan nohaqlik bois, men o'zim
              anglamagan holda nima uchun erkaklardan nafratlanib yashaganimni
              bugun tushunib yetdim.
            </div>
          </div>
          <div className="list_item ">
            <img src="/icon_cor.png" alt="" />
            <div className="s24 f500">
              Men nima uchun ularni o'z hayotimdan itarib chiqarish uchun o'nlab
              sabablar o'ylab topishimni ham tushundim.
            </div>
          </div>
          <div className="list_item ">
            <img src="/icon_cor.png" alt="" />
            <div className="s24 f500">
              Meni rad etganingiz bois hayotimda tez-tez mendan yuz o'girib
              ketadigan irodasiz yigitlar / erkaklarga duch kelishimning
              sabablarini bugun anglashni boshlayapman.
            </div>
          </div>
          <div className="list_item pl50">
            <img src="img/1.png" alt="" />
            <div className="s24 f500">
              Chunki siz meni tug'ilgan chog'imda qiz bola bo'lib dunyoga
              kelganim uchun rad etishni istagansiz-ku.
            </div>
          </div>
          <div className="list_item pl50">
            <img src="img/1.png" alt="" />
            <div className="s24 f500">
              Biroq men shu uchun ham sizni kechiraman, dada, va Ongimda bugun
              tan olinmaslik programmasini butkul bloklayman.
            </div>
          </div>
          <div className="list_item ">
            <img src="/icon_cor.png" alt="" />
            <div className="s24 f500">
              Onamni o'g'il emas qiz farzand dunyoga keltirgani uchun o'zini
              aybdor his qilishga majburlaganingiz va shu bois men ham o'z
              hayotimga hamma narsada meni ayblaydigan yigit / turmush o'rtoq /
              erkaklarni jalb qilganim uchun sizni kechiraman.
            </div>
          </div>
          <div className="list_item ">
            <img src="/icon_cor.png" alt="" />
            <div className="s24 f500">
              O'zini erkak deb his qilishi uchun o'g'il farzand ko'rishi muhim,
              deb o'ylagan irodasiz erkak timsolingizni men bugun kechirgan
              holda qo'yib yuborishga harakat qilaman, dada.
            </div>
          </div>
          <div className="list_item pl50">
            <img src="img/1.png" alt="" />
            <div className="s24 f500">
              Axir aynan mana shu sabab men hayotimga men orqali o'z mavqesini
              belgilab olishni istaydigan yigitlarni / erkaklarni / turmush
              o'rtoqni jalb qilgan ekanman.
            </div>
          </div>
          <div className="list_item ">
            <img src="/icon_cor.png" alt="" />
            <div className="s24 f500">
              Hozir va shu yerda men qiz tug'ilganda, uni qadrlamaydigan
              jamiyatimizni ham kechirishni istar edim.
            </div>
          </div>
          <div className="list_item pl50">
            <img src="img/1.png" alt="" />
            <div className="s24 f500">
              Zero, Olloh qiz farzandni ham xuddi o'g'ildek suyib yaratadi va
              o'g'il bola qiz boladan ustun, deb yozilgan satrlar hech-qayerda
              yo'qdir.
            </div>
          </div>
          <div className="list_item ">
            <img src="/icon_cor.png" alt="" />
            <div className="s24 f500">
              Dada, men sizni bolaligimda tez-tez kasal bo'lganim uchun
              kechiraman.
            </div>
          </div>
          <div className="list_item pl50">
            <img src="img/1.png" alt="" />
            <div className="s24 f500">
              Chunki men ko'proq kasal bo'lsam, siz meni ko'proq yaxshi
              ko'rishni boshlaysiz – deb o'ylar ekanman.
            </div>
          </div>
          <div className="list_item ">
            <img src="/icon_cor.png" alt="" />
            <div className="s24 f500">
              Dada, sizning umidlaringizga moslashish uchun (hamda o'zimdan ayol
              darajasida doimiy ravishda ko'nglim to'lmasligining belgisi
              sifatida) men o'zimni erkakdek his qilib kelganim uchun va
              erkaklarga xos bo'lgan xislatlar talab qilinadigan ish bilan
              shug'ullanib, o'zimni qiynab kelganim uchun sizni kechiraman.
            </div>
          </div>
          <div className="list_item pl50">
            <img src="img/1.png" alt="" />
            <div className="s24 f500">
              <span className="color_main f600">
                Ya'ni 30 yoshda ham, 40 va 50 yoshda ham{" "}
              </span>{" "}
              Ong osti darajasida men hali ham ota-onamga o'g'il bola ekanimni
              isbotlashni davom etayotganimni tushunib yetyapman.
            </div>
          </div>
          <div className="list_item pl50">
            <img src="img/1.png" alt="" />
            <div className="s24 f500">
              Men irodali va muvaffaqiyatli erkagim bo'lishini istar edim, biroq
              mening Ong ostimda otamga yoqishim uchun men erkakshoda / kuchli
              va matonatli bo'lishim kerak deb yozilgan dastur “oilada o'sha sen
              orzu qilgan erkak sensan va tabiiy ravishda senga xotin rolini
              bosaidan er kerak” deb aytar ekan va shuning uchun ham men asosan
              xotin-chalish yigit va erkaklarni hayotimga jalb qilar ekanman.
            </div>
          </div>
          <div className="list_item pl">
            <img src="/img/2.png" alt="" />
            <div className="s24 f500">
              <span className="seriy f600">
                Agar otangiz siz tug'ilganingizdan keyin yoki onangiz sizga
                homiladorlik paytida sizlarni tashlab ketgan bo'lsa{" "}
              </span>
              va onangiz umr bo'yi sizga to'g'ridan-to'g'ri yoki bilvosita
              tarzda shu haqida gapirgan bo'lsa, quyidagilarni yozing:
            </div>
          </div>
          <div className="list_item ">
            <img src="/icon_cor.png" alt="" />
            <div className="s24 f500">
              Bilasizmi, dada, men umr bo'yi onamdan - “Mana, sen
              tug'ilganingdan keyin / yoki senga ikkiqatligimda otang meni
              tashlab ketdi. Balki u o'g'il farzand istagandir, o'rniga esa sen
              tug'ilding” yoki “Men senga ikkiqat bo'lganimdan keyin, otang seni
              tan olishni istamasdan mendan yuz o'girib ketgan”, degan gaplarini
              eshitib kelganman.
            </div>
          </div>
          <div className="list_item pl50">
            <img src="img/1.png" alt="" />
            <div className="s24 f500">
              Ya'ni onam o'zining nomukammalligini tan olmasdan, barcha aybni
              sizning va qisman mening zimmamizga yuklaganligi tufayli, men shu
              dunyoga kelganim uchun bevosita yoki bilvosita tarzda aybdorlik
              hisi bilan katta bo'lganman.
            </div>
          </div>
          <div className="list_item pl50">
            <img src="img/1.png" alt="" />
            <div className="s24 f500">
              Kelajakda, men “baxtsiz” onamning eng yaqin o'rtog'iga – ya'ni,
              uning psixologik sherigiga aylanib, sizning o'rningizni bosishimga
              to'g'ri kelgan.
            </div>
          </div>
          <div className="list_item ">
            <img src="/icon_cor.png" alt="" />
            <div className="s24 f500">
              <span className="f600 fil">
                Bugun men eng asosiy kalitni topdim,
              </span>{" "}
              men nima uchun ko'pincha / yoki har doim kutilmagan vaqtda
              kutilmagan joyda yomonotliq bo'lib chiqishim va aybsiz aybdor
              bo'lib qolishimning sabablarini.
            </div>
          </div>
          <div className="list_item pl50">
            <img src="img/3.png" alt="" />
            <div className="s24 f500">
              Men bu adolatsizliklarga qarshi kurashar edim.
            </div>
          </div>
          <div className="list_item pl50">
            <img src="img/3.png" alt="" />
            <div className="s24 f500">
              Xuddi dunyoga kelyaptganimda kurashgandek kurashar edim va aybim
              nimaligini tushuna olmasdan azob chekar edim.
            </div>
          </div>
          <div className="list_item pl50">
            <img src="img/3.png" alt="" />
            <div className="s24 f500">
              Chunki siz ham, dada, onam ham o'zlaringiz qilgan xato
              ishlaringizni yoki tanlovingizni (qo'shilish, lazzat olish va meni
              dunyoga keltirish – bu siz ikkalangizning tanlovingiz bo'lgan-ku
              axir, to'g'rimi?!) oxir-oqibat mening zimmamga yuklagansiz va men
              shu dunyoga kelganim uchun aybdor ham bo'lib chiqqanman.
            </div>
          </div>
          <div className="list_item pl50">
            <img src="img/1.png" alt="" />
            <div className="s24 f500">
              Psixologiyada bu “Beayb parvardigor” kompleksi deyilishini va
              ushbu kompleks bola dunyoga kelayotgan paytda otasi tarafidan tan
              olinmaslik bilan bog'liq ruhiy travmaga taqalishini bugun tushunib
              yetdim.
            </div>
          </div>
          <div className="list_item">
            <img src="icon_cor.png" alt="" />
            <div className="s24 f500">
              <span className="f600 color_main">
                Va eng asosiysi men nima uchun hali ham turmushga chiqa
                olmayaptganimning{" "}
              </span>
              yoki turmushim hech o'xshamayaptganining sababini tushunib yetdim.
            </div>
          </div>
          <div className="list_item pl50">
            <img src="img/1.png" alt="" />
            <div className="s24 f500">
              Chunki hayotimdagi sevgan yigitlarim / yoki erkaklarim xuddi siz
              kabi, dada, men uchun kurashishni, meni tan olishni istashmaydi.
            </div>
          </div>
          <div className="list_item pl50">
            <img src="img/3.png" alt="" />
            <div className="s24 f500">
              Ya'ni, ular mening Ong ostimda sizning timsolingizni aks
              ettirishar ekan.
            </div>
          </div>
          <div className="list_item">
            <img src="icon_cor.png" alt="" />
            <div className="s24 f500">
              <span className="f600 color_main">Yoki turmush qursam ham</span>{" "}
              men ko'p vaqt o'tmasdan ajrashib, yolg'iz onamning yoniga qaytib
              keldim. Chunki men uni tashlab ketganim uchun o'zimni aybdor deb
              his qilganman.
            </div>
          </div>
          <div className="list_item pl50">
            <img src="img/1.png" alt="" />
            <div className="s24 f500">
              Ya'ni meni har-doyimdagidek: Aybdorlik, Burch va Erkak sevgisiga
              noloyiqlik hisi boshqarar ekan.
            </div>
          </div>
          <div className="list_item">
            <img src="icon_cor.png" alt="" />
            <div className="s24 f500">
              Dada, bugun men nima uchun hayotimga mas'uliyatsiz erkaklarni jalb
              qilishimni va ular hayotimning eng mushkul davrlarida mas'uliyatni
              o'z zimmasiga olishni istamasligini sababini ham angladim.
            </div>
          </div>
          <div className="list_item pl50">
            <img src="img/1.png" alt="" />
            <div className="s24 f500">
              Chunki tug'ilish / dunyoga kelish – odam uchun eng og'ir
              jarayondir. Dunyoga kelish chog'ida qalbim sizning mehringiz va
              qo'llab-quvvatlashingizni his qilmagani bois, tabiiyki, Ong osti
              darajasida men erkaklardan xuddi shuni kutar ekanman.
            </div>
          </div>
          <div className="list_item pl50">
            <img src="img/3.png" alt="" />
            <div className="s24 f500">
              Ya'ni o'zim anglamagan tarzda men yaqin bo'lgan erkagimga taxminan
              mana bunday signal yuborar ekanman – “Men sizdan yomonlik
              kutyapman, chunki meni hayotimdagi ilk erkak – meni otam ham
              o'zini xuddi shunday yomon tutgan. U o'z spermatozoidlarining ishi
              uchun mas'uliyatni o'z zimmasiga olishni ISTAMAGAN va hamma
              narsada onamni ayblagan.
            </div>
          </div>
          <div className="list_item pl50">
            <img src="img/1.png" alt="" />
            <div className="s24 f500">
              Shu bois men sizdan ham xuddi shuni kutaman: siz men uchun, ya'ni
              mening hayotim uchun, munosabatlarimiz uchun mas'uliyatni o'z
              zimmangizga olishni istamasdan, hamma narsada meni o'zimni
              ayblashingizni kutaman” – degan signalni.
            </div>
          </div>
          <div className="list_item pl50">
            <img src="img/3.png" alt="" />
            <div className="s24 f500">
              Va mening erkagim Ong osti ma'lumotlar almashinuv tizimida mendan
              bu signalni olgach, mening 3-D real hayotimda tabiiy ravishda
              mening Ong osti ko'rsatmalarimni bajargan ekan, xolos.
            </div>
          </div>
          <div className="list_item">
            <img src="icon_cor.png" alt="" />
            <div className="s24 f500">
              Bugun men turli sabablarga ko'ra meni o'z o'g'liga munosib
              ko'rmagan qaynona va qaynotani nima uchun hayotimga jalb
              qilganimni tushunib yetyapman.
            </div>
          </div>
          <div className="list_item pl50">
            <img src="img/1.png" alt="" />
            <div className="s24 f500">
              Axir siz, dada, oilamizdagi 1-chi shaxs bo'la turib, meni bu
              dunyoga kelishimni nomunosib deb bilgansiz?! Xuddi shu kabi sevgan
              insonimning oilasidagi avtoritar odamlar ham sizning menga
              avvalboshdan ko'rsatgan munosabatingizni ko'zgu qilib aks ettirgan
              ekan, xolos.
            </div>
          </div>
          <div className="list_item">
            <img src="icon_cor.png" alt="" />
            <div className="s24 f500">
              <span className="f600 seriy">
                Bugun nima uchun siz yoki meni sevgan yigitlar / erim / yoki
                menga yaqin bo'lgan boshqa erkak{" "}
              </span>
              har doim meni qayta tarbiyalashni / sindirishni / yoki
              o'zgartirishni istashingizni angladim.
            </div>
          </div>
          <div className="list_item pl50">
            <img src="img/1.png" alt="" />
            <div className="s24 f500">
              Chunki siz ham / ular ham mening o'g'il bolaga / erkaklarga xos
              kuchli irodamdan cho'chir ekansizlar. Ya'ni men sizdan kuchli va
              aqlli ekanimni his qilish sizga yoqmas ekan.
            </div>
          </div>{" "}
          <div className="list_item pl50">
            <img src="img/1.png" alt="" />
            <div className="s24 f500">
              Biroq buni tan olmaslik va bildirmaslik uchun siz / yoki yigitim /
              yoki erim / yoki menga yaqin bo'lgan boshqa erkak meni ruhan
              sindirishga / yoki juda bo'lmaganda din orqali meni itoatkor ayol
              qilishga yoki hijobga tiqishga uringan ekansiz.
            </div>
          </div>
          <div className="list_item">
            <img src="icon_cor.png" alt="" />
            <div className="s24 f500">
              Bugun men nima uchun hayotimga{" "}
              <span className="fil f600">
                “O'g'il bola va istalmagan qiz farzand kompleksi”ga ega bo'lgan
                kundoshni,{" "}
              </span>
              ya'ni 1-chi rafiqasi xuddi o'zimga o'xshagan turmush o'rtoqni /
              yoki erkaklarni jalb qilganimni tushunib yetdim.
            </div>
          </div>
          <div className="list_item pl50">
            <img src="img/1.png" alt="" />
            <div className="s24 f500">
              Chunki bu holatda ham men o'zim uchun aziz bo'lgan insonning
              sevgisi uchun kurashib kelayotgan ekanman. Ya'ni otam bilan
              bo'lgan ilk munosabatlarimni davom ettirayotgan ekanman.
            </div>
          </div>
          <div className="list_item">
            <img src="icon_cor.png" alt="" />
            <div className="s24 f500">
              Dada, men siz uchun istalmagan / kutilmagan / yoki tan olinmagan
              farzand bo'lganim uchun{" "}
              <span className="kok f600">
                ruhiyatim faoliyatining anomal natijasi sifatida{" "}
              </span>
              men sehr-jodu olamining vakiliga aylanib qolganim uchun sizni
              kechiraman, dada.
            </div>
          </div>
          <div className="list_item pl50">
            <img src="img/1.png" alt="" />
            <div className="s24 f500">
              Chunki bu hunar menga odamlar ustidan nazorat o'rnatish imkonini
              berishini va men kimgadir kerakligimni / tan olinganimni his etish
              uchun yordam berayotganini bugun tushunib yetdim.
            </div>
          </div>
          <div className="list_item pl50">
            <img src="img/1.png" alt="" />
            <div className="s24 f500">
              Lekin bu kasb aslida ko'zbo'yamachilik hamda o'zimni o'zim yo'q
              narsalarga ishontirib, ruhiyatimni buzilishiga va o'zimning
              hayotimni o'zim eplay ololmasligimga olib keldi.
            </div>
          </div>
          <div className="list_item pl50">
            <img src="img/1.png" alt="" />
            <div className="s24 f500">
              Men faqat kimlargadir nimalarnidir o'qib yoki qilib berganimda /
              yoki fol ochganimda, ya'ni o'zgalarni ham o'zimning o'ylab topgan
              fantaziyalarim, yoki taxminlarim, yoki qo'rquvlarimga
              ishontirganimda, men o'zimni donoligimni va bu hayotda bejiz
              tug'ilmaganimni his qilishimni bugun tushunib yetdim.
            </div>
          </div>
          <div className="list_item">
            <img src="icon_cor.png" alt="" />
            <div className="s24 f500">
              Bugun men nima uchun eskort (ya'ni, zamonaviy fohishalik)
              xizmatida ham ishlashimni sabablaridan birini tushunib yetdim.
            </div>
          </div>
          <div className="list_item pl50">
            <img src="img/1.png" alt="" />
            <div className="s24 f500">
              Chunki bu hayotiy stsenariyda men har safar erkaklarga nisbatan
              bo'lgan nafratimga ishonch hosil qilib, shu bilan bir vaqtda,
              erkaklar men bilan jiddiy munosabat o'rnatishdan cho'chiydigan
              ayol bo'lib qolaverar ekanman.
            </div>
          </div>
          <div className="list_item pl50">
            <img src="img/3.png" alt="" />
            <div className="s24 f500">
              Ya'ni bunda Ong ostimda yana o'sha{" "}
              <span className="seriy">“Qabul qilinmaslik va rad etilish”</span>{" "}
              modeli ishga tushib o'zining ishini qilayotgan ekan.
            </div>
          </div>
          <div className="list_item">
            <img src="icon_cor.png" alt="" />
            <div className="s24 f500">
              Bugun men nima uchun bir vaqtning o'zida ikkita erkak bilan jinsiy
              aloqaga kirish istagi bilan yashashimni / yoki shunday istak bilan
              yashaydigan erkakni / yoki ayollardan nafratlanadigan ashaddiy
              (yashirin turdagi) geyni hayotimga jalb qilganimni tushunib
              yetyapman.
            </div>
          </div>
          <div className="list_item pl50">
            <img src="img/1.png" alt="" />
            <div className="s24 f500">
              Chunki Ong osti darajasida men o'zimga o'xshagan gen to'plamiga
              ega bo'lgan hamda qisman otamni obrazini aks ettiruvchi yigit va /
              erkaklarni tortar ekanman.
            </div>
          </div>
          <div className="list_item">
            <img src="icon_cor.png" alt="" />
            <div className="s24 f500">
              Bugun mening Ong ostim{" "}
              <span className="kok">
                nima uchun o'g'il farzandga homilador bo'lishimga to'siq
                qo'yganining
              </span>{" "}
              sabablaridan birini ham bildim.
            </div>
          </div>
          <div className="ta color_main f600 s24">Ya'ni, nima uchun men:</div>
          <div className="list_item pl50">
            <img src="img/3.png" alt="" />
            <div className="s24 f500">
              aksariyat holatlarda qiz farzand ko'rishimni;
            </div>
          </div>
          <div className="list_item pl50">
            <img src="img/3.png" alt="" />
            <div className="s24 f500">
              yoki mening tuxum-hujayralarim o'g'il spermatozoidlari bilan bilan
              bog'lanmasligini;
            </div>
          </div>
          <div className="list_item pl50">
            <img src="img/3.png" alt="" />
            <div className="s24 f500">
              yoki menda bachadondan tashqaridagi homiladorlik yuz berishini;
            </div>
          </div>
          <div className="list_item pl50">
            <img src="img/3.png" alt="" />
            <div className="s24 f500">
              yoki bola tushish / yoki o'g'lim tug'ilayotganda o'lish holati yuz
              berganini sabablarini anglashni boshlayapman.
            </div>
          </div>
          <div className="list_item pl50">
            <img src="img/1.png" alt="" />
            <div className="s24 f500">
              Chunki Ong osti darajasida men o'zimga o'xshagan gen to'plamiga
              ega bo'lgan erkakni hayotimga jalb qilgan ekanman. Garchi men
              o'g'il bolaga o'xshagan bo'lsam-da, tabiiy ravishda u hezalaklarga
              o'xshagan er bo'lib chiqdi.
            </div>
          </div>
          <div className="list_item pl50">
            <img src="img/1.png" alt="" />
            <div className="s24 f500">
              Shuning uchun ham mening Ong ostim shunday murakkab mexanizmlarni
              o'ylab topar ekan. Chunki erimga o'xshagan hezalak-sifat erkakni
              dunyoga keltirishimdan yoki shunday o'g'illar sonini
              ko'paytirishimdan meni asrar ekan.
            </div>
          </div>
          <div className="list_item">
            <img src="icon_cor.png" alt="" />
            <div className="s24 f500">
              <span className="kok f600">
                Aynan hozir va bugun kechirim va anglashlarimga yakun yasar
                ekanman,{" "}
              </span>
              men o'zimni taqdirimni va hayot yo'limni yaxshilash uchun hamda
              sizning gunohlaringizni yengillashtirish uchun sizni kechiryapman,
              dada, va sizga bo'lgan alam-achchig'imni butunlay qo'yib
              yuboryapman.
            </div>
          </div>
          <div className="list_item">
            <img src="icon_cor.png" alt="" />
            <div className="s24 f500">
              Mening o'tmishim o'tmishda qolib ketyapti va mening hayotim
              endilikda butunlay yangitdan boshlanyapti. Olloh menga shu
              imkoniyatni berganiga ming bor shukr deyman.
            </div>
          </div>
          <div className="ta toq_fil mt-5 f600 s36">
            Endi esa pozitiv ustanovkalarni yozishga o'tamiz.
          </div>
          <div className="s28 ta mt-3 f500 color_main">
            Yodingizda bo'lsin – ushbu pozitiv ustanovkalarni Ichidan ham siz
            o’zingizga tegishli gaplarni topib,{" "}
            <span className="f600">3 martadan 5 marotabagacha</span> yozishingiz
            kerak bo'ladi.
          </div>
          <div className="list_item">
            <img src="icon_cor.png" alt="" />
            <div className="s24 f500">
              Hozir va shu yerda o'zimga -{" "}
              <span className="f600 color_main">Men bekamu-ko'st qizman!</span>{" "}
              – deyman va bundan buyon hech kimning oldida borligim, oilamda /
              turmushimda va, umuman, shu hayotda borligim uchun o'zimni
              oqlashga majbur emasman.
            </div>
          </div>
          <div className="list_item">
            <img src="icon_cor.png" alt="" />
            <div className="s24 f500">
              Men qiz bola bo'lib tug'ilgan ekanman, demak, Ong ostimda va
              Ollohda men aynan ayol kishi tanasida baxtli inson bo'lishim uchun
              mo'ljallangan muayyan reja bor.
            </div>
          </div>
          <div className="list_item">
            <img src="icon_cor.png" alt="" />
            <div className="s24 f500">
              Hozir va shu yerda men otamning nomukammal va ahmoq erkak
              sifatidagi timsoliga to'siq qo'yar ekanman uning ushbu obrazi
              mening kelajak hayotimdagi hech-qaysi bir erkakda boshqa hech
              qachon qaytarilmasligi haqida tashqi dunyoga signal yuboraman.
            </div>
          </div>
          <div className="list_item">
            <img src="icon_cor.png" alt="" />
            <div className="s24 f500">
              Mening tug'ilgan qizim nechinchi farzand bo'lishidan qat'iy nazar,
              uni dunyoga kelishini xursandchilik va bayram bilan kutib olaman
              deb o'zimga o'zim va'da beraman.
            </div>
          </div>
          <div className="list_item pl50">
            <img src="img/1.png" alt="" />
            <div className="s24 f500">
              Kutilmagan qiz farzandlarimdan esa erim ikkalamiz kechirim
              so'rashga tayyormiz. Chunki qiz(lar)imning ruhiyati bizni
              kechirishi bilan, ularning kelajak taqdiri ham albatta faqat
              yaxshi – ijobiy tarafga o'zgaradi. Zero Olloh kechirim ortida
              Uning eng katta iltifoti turgani haqida aytadi.
            </div>
          </div>
          <div className="list_item">
            <img src="icon_cor.png" alt="" />
            <div className="s24 f500">
              Bundan buyon men tug'ilishim bilan bog'liq bo'lgan barcha
              kasalliklardan butkul ozodman{" "}
              <span className="seriy f600">
                (qaysi kasalliklaringizdan qutilayotganingizni shu yerda yozib
                keting ______________________){" "}
              </span>
              va mening barcha genlarim / barcha a'zolarim endi bekamu-ko'st
              holatda ishlashni boshlayaptganini guvohi bo'lyapman.
            </div>
          </div>
          <div className="list_item">
            <img src="icon_cor.png" alt="" />
            <div className="s24 f500">
              Ha, men miyamga qanday ishlanma bersam, u shu ishlanmaga asosan
              ish olib borishini anglab yetyapman.
            </div>
          </div>
          <div className="list_item">
            <img src="icon_cor.png" alt="" />
            <div className="s24 f500">
              Ollohga shukr, men kun sayin o'zimni ajoyib his qilib bormoqdaman.
            </div>
          </div>
          <div className="list_item">
            <img src="icon_cor.png" alt="" />
            <div className="s24 f500">
              Aynan bugun va hozir men aybdorlik tuyg'usidan butkul qutilyapman.
              Va bundan buyog'iga meni qachondir ayblagan barcha odamlardan
              kechirim so'zlarini eshitishni boshlayapman.
            </div>
          </div>
          <div className="list_item">
            <img src="icon_cor.png" alt="" />
            <div className="s24 f500">
              Men hammaning ko'zida oqlanyapman. Va eng asosiysi aybdor bo'lib
              qolishim mumkin bo'lgan barcha voqealarning kirib kelishini
              bugundan boshlab, qolgan butun umrim davomiga butkul bloklayapman.
            </div>
          </div>
          <div className="list_item">
            <img src="icon_cor.png" alt="" />
            <div className="s24 f500">
              Erkak zoti meni sevib qolishi / menga mehr ulashishi – bu men
              uchun oddiy holatga aylanib boryaptganini ko'rib, o'zim ham hayron
              qolyapman.
            </div>
          </div>
          <div className="list_item">
            <img src="icon_cor.png" alt="" />
            <div className="s24 f500">
              Aynan bugun va hozirda, otamni kechirgan holda, men hayotimdagi{" "}
              <span className="seriy f600">
                “Qabul qilinmaslik va rad etilish” modeliga blok qo'yyapman.
              </span>
            </div>
          </div>
          <div className="list_item pl50">
            <img src="img/1.png" alt="" />
            <div className="s24 f500">
              Meni qabul qilmaydigan va meni rad etadigan erkaklar boshqa meni
              hayotimga hech-qachon kirib kelmasligini tushunib, Ollohga shu
              uchun tashakkur bildiryapman.
            </div>
          </div>
          <div className="list_item pl50">
            <img src="img/1.png" alt="" />
            <div className="s24 f500">
              Ha, mening hayotimga meni qabul qilmaydigan yoki meni rad etib,
              tashlab ketishi mumkin bo'lgan erkaklar / yigitlar kirib kelishi
              butkul to'xtadi.
            </div>
          </div>
          <div className="list_item">
            <img src="icon_cor.png" alt="" />
            <div className="s24 f500">
              Bundan tashqari men Ongimda va Ong ostimda o'zini yashirin gey
              kabi tutadigan erkaklar kirib kelishiga to'siq qo'yaman.
            </div>
          </div>
          <div className="list_item">
            <img src="icon_cor.png" alt="" />
            <div className="s24 f500">
              Bugundan boshlab men idrokimning va Ong ostimning kuchi yordamida
              hayotimga ortiq “O'g'il bola va istalmagan qiz farzand
              kompleksi”ga ega bo'lgan kundoshni, ya'ni xuddi o'zimga o'xshagan
              rafiqasi bor turmush o'rtoq / yoki erkaklarni jalb qilishni butkul
              to'xtatyapman.
            </div>
          </div>
          <div className="list_item pl50">
            <img src="img/1.png" alt="" />
            <div className="s24 f500">
              Chunki men otamning menga bo'lgan munosabatiga miyamda to'siq
              yaratdim va men uchun aziz bo'lgan insonni sevgisi uchun kurashish
              modeli o'z-o'zidan bloklanyapti.
            </div>
          </div>
          <div className="list_item">
            <img src="icon_cor.png" alt="" />
            <div className="s24 f500">
              Men ortiqcha hech qaysi erkakning sevgisi uchun kurashmayman.
            </div>
          </div>
          <div className="list_item">
            <img src="icon_cor.png" alt="" />
            <div className="s24 f500">
              Bundan buyon men hech bir erkakning ortidan quvmayman va unga
              yopishib olmayman. Men o'zim uchun muammo va qiyinchiliklarni
              ortiq yaratmayman.
            </div>
          </div>
          <div className="list_item">
            <img src="icon_cor.png" alt="" />
            <div className="s24 f500">
              Shu sabab bugun, hozir va qolgan butun umrim davomiga{" "}
              <span className="seriy f600">
                {" "}
                “Men hayotimga meni sevadigan erkakni kirita olmayman va
                kiritishim kerak emas”,
              </span>{" "}
              degan ustanovkani Ongimda va Ong ostimda BUTUNLAY bloklayman va
              ortiq meni seva olmaydigan / yoki men bilan birga bo'la olmaydigan
              erkaklarni boshqa taqdir yo'limda uchratmayman ham.
            </div>
          </div>
          <div className="list_item">
            <img src="icon_cor.png" alt="" />
            <div className="s24 f500">
              Hozir va shu yerda men o'z ongimda “Erkak kishini qabul qilmaslik
              va rad etish hamda u tarafidan rad etilish” modeliga butkul to'siq
              qo'yaman.
            </div>
          </div>
          <div className="list_item">
            <img src="icon_cor.png" alt="" />
            <div className="s24 f500">
              Men o'zimning qadrimni biladigan ayolga / qizga aylanyapman.
            </div>
          </div>
          <div className="list_item">
            <img src="icon_cor.png" alt="" />
            <div className="s24 f500">
              Qaysidir yigit / erkak o'zini axloqsiz, lattachaynar yoki
              “xotinlardek” tutishini ko'rishim bilan yoki munosabatlarda u meni
              yetarli darajada hurmat qilmayaptganini, mening ishlarim va hissiy
              kechinmalarim bilan qiziqmayaptganini guvoh bo'lishim bilanoq, men
              bu munosabatlarga darhol chek qo'yaman va kim bo'lishidan qat'iy
              nazar o'zimni qadrsizlantirishga yo'l qo'ymayman.
            </div>
          </div>
          <div className="list_item pl50">
            <img src="img/1.png" alt="" />
            <div className="s24 f500">
              Men bu odamga u menga nomunosib ekanini ochiq aytaman.
            </div>
          </div>
          <div className="list_item pl50">
            <img src="img/1.png" alt="" />
            <div className="s24 f500">
              Negaki men eng ajoyib, irodali, qat'iy, meni sevadigan va menga
              sodiq bo'lgan, u uchun men bilan bog'liq hamma narsa kerak va
              muhim deb biladigan erkakka munosibman.
            </div>
          </div>
          <div className="list_item">
            <img src="icon_cor.png" alt="" />
            <div className="s24 f500">
              Bundan buyon va doimo meni hayotimda faqat irodali, bosiq va menga
              vafodor, men bilan birga bo'la oladigan va men bilan birga
              bo'lishni istaydigan, men uchun kurashadigan getero-erkak
              borligini / yoki kirib kelyaptganini ko'ryapman.
            </div>
          </div>
          <div className="list_item pl50">
            <img src="img/1.png" alt="" />
            <div className="s24 f500">
              Ya'ni turmush o'rtog'im ham, farzandlarim ham aynan mana shunday
              insonlar bo'lishyapti.
            </div>
          </div>
          <div className="list_item">
            <img src="icon_cor.png" alt="" />
            <div className="s24 f500">
              Men haqiqiy kuchli va irodali erkakka munosibman.
            </div>
          </div>
          <div className="list_item">
            <img src="icon_cor.png" alt="" />
            <div className="s24 f500">
              Bugundan boshlab men o'zimga normal va dovyurak inson bilan
              yashashga ijozat beraman.
            </div>
          </div>
          <div className="list_item pl50">
            <img src="img/1.png" alt="" />
            <div className="s24 f500">
              Chunki bundan buyon men turmush o'rtog'imga u o'zini dovyurak,
              qat'iyatli va haqiqiy erkaklardek tutishi kerak, degan signalni
              yuboryapman.
            </div>
          </div>
          <div className="list_item">
            <img src="icon_cor.png" alt="" />
            <div className="s24 f500">
              Men omadli ravishda menga mos keladigan erkakni uchratishga va
              unga omadli ravishda turmushga chiqishga o'zimga o'zim ruxsat
              beraman.
            </div>
          </div>
          <div className="list_item pl50">
            <img src="img/1.png" alt="" />
            <div className="s24 f500">
              Chunki bugundan boshlab hayotimdagi men tanlagan erkak, otamning
              aksi holini ko'rsatgan holda, men uchun oxirigacha kurashishni
              istayaptganini, ota-onasi ham men bajonidil qabul qilishni
              xohlayaptganini ko'ryapman.
            </div>
          </div>
          <div className="list_item">
            <img src="icon_cor.png" alt="" />
            <div className="s24 f500">
              Bugundan boshlab Aybdorlik, Doimiy burch va Erkak sevgisiga
              noloyiqlik hislari meni butkul tark etganini ko'rishni, his
              qilishni boshlayapman va bu uchun Ollohga rahmat deyapman.
            </div>
          </div>
          <div className="list_item">
            <img src="icon_cor.png" alt="" />
            <div className="s24 f500">
              Bugundan boshlab otam ham / yoki meni sevgan yigitim / erim / yoki
              menga yaqin bo'lgan boshqa erkak meni qayta tarbiyalashni /
              sindirishni / yoki o'zgartirishni istashni butkul
              to'xtatyaptganini ko'ryapman.
            </div>
          </div>
          <div className="list_item pl50">
            <img src="img/1.png" alt="" />
            <div className="s24 f500">
              Men ulardan kuchli va aqlli ekanimni his qilish otamga ham, sevgan
              erkagimga ham juda ham yoqyapti. Men kuchli bo'lsam ham, ularning
              hurmatini joyiga qo'yib qo'yyapman.
            </div>
          </div>
          <div className="list_item pl50">
            <img src="img/1.png" alt="" />
            <div className="s24 f500">
              Ular men bilan faxrlanganlarini va diniy ta'lim hamda kiyim kiyish
              huquqini mening o'zimga qo'yib berishganlarining guvohi
              bo'lyapman.
            </div>
          </div>
          <div className="list_item">
            <img src="icon_cor.png" alt="" />
            <div className="s24 f500">
              Mening hayotim men o'zim istagandek kechishni boshlayapti. Chunki
              mening ichimda bugun butunlay yangi inson tug'ildi.
            </div>
          </div>
          <div className="list_item">
            <img src="icon_cor.png" alt="" />
            <div className="s24 f500">
              Hozir men hayotimga omad energiyasini chorlayapman va sevgilim
              bilan bekamu-ko'st sevgi munosabatlarini jalb qilyaptganimni
              ko'rib, o'zim hayron qolyapman.
            </div>
          </div>
          <div className="list_item">
            <img src="icon_cor.png" alt="" />
            <div className="s24 f500">
              Men kim bo'lib ishlashimdan qat'iy nazar, bugundan boshlab mening
              ishim menga faqat zavq olib kelyapti va men o'zimni baxtiyor his
              qilgan holda, halol yo'llar bilan, ko'p pul ishlab topishni
              boshlayapman.
            </div>
          </div>
          <div className="list_item">
            <img src="icon_cor.png" alt="" />
            <div className="s24 f500">
              <span className="yashil f600"> Mening topayotgan pullarim</span>{" "}
              chiqimlarimni 10 marotaba ko'proq qoplayapti.
            </div>
          </div>
          <div className="list_item">
            <img src="icon_cor.png" alt="" />
            <div className="s24 f500">
              Bugundan boshlab men fohishalik bilan shug'ullanishni butkul
              to'xtatyapman.
            </div>
          </div>
          <div className="list_item">
            <img src="icon_cor.png" alt="" />
            <div className="s24 f500">
              Olloh menga halol yo'l bilan katta pul topish uslublarini ko'rsata
              boshlayaptganiga ming bora shukr deyapman.
            </div>
          </div>
          <div className="list_item">
            <img src="icon_cor.png" alt="" />
            <div className="s24 f500">
              Bugundan boshlab men yolg'on hayotda yashashni: o'zimni va
              odamlarni aldashni bas qilyapman. Sehr-jodu, folga ishonish –
              ruhiyatning buzilishi (o'zini-o'zi yolg'on gipnoz qilish) bilan
              bog'liq og'ir kasallik ekanini tushunyapman.
            </div>
          </div>
          <div className="list_item">
            <img src="icon_cor.png" alt="" />
            <div className="s24 f500">
              Ollohga shukr, mening ruhiyatim sog'lomlashib boryapti. Ha, men
              normal hayotga qaytyapman hamda o'zimga mos chiroyli, halol ish
              bilan shug'ullanishni boshlayapman va mening yangi ishim menga
              chinakam baxt va boylik olib kelyapti.
            </div>
          </div>
          <div className="list_item">
            <img src="icon_cor.png" alt="" />
            <div className="s24 f500">
              Ollohga shukr, mening jinsiy hayotim ham yaxshilanib boryapti va
              men to'shakda yengil tarzda o'zimning suygan erim bilan lazzat
              olishni boshlayapman.
            </div>
          </div>
          <div className="list_item">
            <img src="icon_cor.png" alt="" />
            <div className="s24 f500">
              Unda ham / menda ham no-normal tarzda seks bilan shug'ullanish
              istagi butunlay yo'q bo'lib ketyaptganini guvohi bo'lyapman.
            </div>
          </div>
          <div className="list_item">
            <img src="icon_cor.png" alt="" />
            <div className="s24 f500">
              Bugun men o'zimga sog'lom farzandlarni dunyoga keltirishga / yoki
              ega bo'lishga ijozat beraman va ularni jinsidan qat'iy nazar
              ularni juda ham qattiq yaxshi ko'rishga o'zimga va'da beraman.
            </div>
          </div>
          <div className="list_item">
            <img src="icon_cor.png" alt="" />
            <div className="s24 f500">
              Ha, aynan hozir mening miyamda yangi neyron to'qimalari ishlab
              chiqilyapti va ular mening yangi umidlarimga mos ravishda ishlay
              boshlayapti.
            </div>
          </div>
          <div className="list_item">
            <img src="icon_cor.png" alt="" />
            <div className="s24 f500">
              <span className="color_main f600">
                {" "}
                Endi mening hayotimda faqatgina men o'zim o'ylagan
              </span>{" "}
              va tashqi dunyoga aks ettirayotgan narsalar yuz berishini aniq
              bilaman.
            </div>
          </div>
          <div className="list_item">
            <img src="icon_cor.png" alt="" />
            <div className="s24 f500">
              Ha, men Ongim va Ong ostimga muhabbat va boylik energiyasini
              chorlayapman.
            </div>
          </div>
          <div className="list_item">
            <img src="icon_cor.png" alt="" />
            <div className="s24 f500">
              Muhabbat energiyasi meni hayotimning har bir jabhasiga, hamda
              organizmimning har bir to'qimasiga erkin oqib kiryaptganini va men
              sog'lom hamda baxtli insonga aylanib boryaptganimni ko'rib,
              bugunda yozayotgan prorabotkalarimning natijalari shunchalik tez
              vaqt oralig'ida shunday zo'r natijalarni beryaptganiga o'zim ham
              hayron qolyapman.
            </div>
          </div>
          <div className="list_item">
            <img src="icon_cor.png" alt="" />
            <div className="s24 f500">
              Bundan buyon va har doim Men o'zimga baxtli qiz, suyukli rafiqa,
              sog'lom farzandlarning onasi va omadli boyvachcha ayol bo'lishimga
              100% ijozat beraman.
            </div>
          </div>
          <div className="list_item">
            <img src="icon_cor.png" alt="" />
            <div className="s24 f500">
              Ollohning o'zi doimiy ravishda menga baxt, zo'r ish va omad
              yo'llarini ochyapti va men Baxtli Ayolga aylanyapman. Omin.
            </div>
          </div>
          {/*  */}
          {/*  */}
          {/*  */}
        </div>

        {/* umumiy */}
        <div className="umumiy">
          <div className=" seriy s28 mt-5 ta seriy">
            Hammasini yozib bo'lganingizdan keyin, barcha qog'ozlarni rasmga
            olib, (ism-familiyangizni va darsingizni nomerini tepasiga yozib){" "}
            <br />
            <span className="f600">
              “UY VAZIFA” degan tugmani bosgan holda{" "}
            </span>
            <br />
            (gallereyangizdan belgilab) hamma qog'ozlaringizni ketma-ketlikda
            yuklaysiz.
          </div>
          <div className="tort seriy s30 ta mt-5 f600">
            FAQ: Darsliklar bo'yicha beriladigan savollarga tayyor javoblar
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
                1. Uy vazifa necha varoqni tashkil etish kerak?
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <div className="toq_fil s24 mt-4 f500">
                  <span className="toq_fil s28 pl me-4">1.</span> Uy
                  vazifalaringizning varaqlar soni eng kamida 4-5 varoqdan
                  boshlanishi kerak. Istasangiz 30 varoqqacha ham biriktirsangiz
                  bo'ladi. Bu yerda eng asosiy shart – ichingiz bo'shagunga
                  qadar siz beto'xtov yozishingiz kerak.
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
                2. Keyingi dars menga qachon beriladi?
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <div className="toq_fil s24 mt-4 f500">
                  <span className="toq_fil s28 pl me-4">2.</span> Uy vazifani
                  yuklab bo'lganingizdan so'ng sizga keyingi darsingiz avtomatik
                  ravishda ochiladi.
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
                3. Uy vazifamni kim va nechi kunda tekshiradi?
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <div className="toq_fil s24 mt-4 f500">
                  <span className="toq_fil s28 pl me-4">3.</span> Sizning uy
                  vazifangiz yetuk klinik psixologlarimiz tomonidan 3 kun
                  davomida tekshirilib, baholanadi va siz bahoyingizni shaxsiy
                  kabinetga kirganingizda darsingizni tagida ko'rsangiz bo'ladi.
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
                4. Uy vazifalarni vaqtida bajara olmasam nima bo'ladi?
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <div className="toq_fil s24 mt-4 f500">
                  <span className="toq_fil s28 pl me-4">4.</span> Agarda siz uy
                  vazifalarni o'z vaqtida bajarmasangiz, kursdan qolib
                  ketishingiz mumkin va bunday holda yana qaytadan pul to'lab
                  o'qishingizga to'g'ri keladi. Agarda uy vazifani
                  bajarayotganda sizda jiddiy va zarur savolingiz / yoki
                  iltimosingiz paydo bo'lsa, siz psixologlarimizga Telegram
                  messendjeri orqali murojaat etsangiz bo'ladi:{" "}
                  <span className="f600 kok">@bahtwoman_psixolog</span>
                </div>
                <div className="toq_fil s24 mt-4 f500 ms-4">
                  Yodingizda bo'lsinkim, har bitta darsni bajarishga sizga
                  uzog'i bilan 2-3 kun vaqt beriladi.
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
                5. Prorabotkalarni yozayotganimda sog'lig'im yomonlashsa-chi?
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <div className="toq_fil s24 mt-4 f500">
                  <span className="toq_fil s28 pl me-4">5.</span> Agarda
                  prorabotkalarni yozgan paytingizda bezovtalik his qilsangiz,
                  yoki ruhiyatingiz ezilganligi sababli mazangiz qochib,
                  sog'ligingiz yomonlashganini sezsangiz (biling – bu normal
                  holat), demak, bunday holda siz bizning 10 yil davomida
                  yaratilgan mo''jizaviy{" "}
                  <span className="f600 color_main">
                    Sog'liq trenajorimizni
                  </span>{" "}
                  eshitishingiz mumkin.
                  <div className="toq_fil s24 mt-4 f500">
                    Ushbu trenajyor 936 megagertsli binaural ritmlar va 1 500ga
                    yaqin juda kuchli shifobaxsh Ong osti tasdiqlarini o'z
                    ichiga olgan bo'lib, o'zining ulkan samarasini bizning
                    kurslarimizni bitirgan yuzlab ayollarda ko'rsatgan.
                  </div>
                  <div className="toq_fil s24 mt-4 f500">
                    Ushbu meditatsiyani har kuni ertalab va kechqurun
                    eshitsangiz, sizning barcha kasalliklaringiz o'z-o'zidan
                    yo'q bo'lib ketayotganini, hamda mental sog'lig'ingiz
                    yaxshilanib, ko'tarinki ruhda hayot kechiryaptganingizni
                    guvohi bo'lasiz.
                  </div>
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <div className="ta f600 kok s30 mt-5">
            Sizga ushbu darsimiz yoqdimi?
          </div>
          <div className="ta f600 kok s30 mt-1">
            Iltimos, quyida keltirilgan baholash shkalasi bo'yicha baholang!
          </div>
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
            Shaxsiy kabinetga qaytish
          </div>
        </div>
      </div>
    </>
  );
};

export default Prarobotka1;
