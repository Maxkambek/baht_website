import React, { useEffect } from "react";
import CheckIcon from "@mui/icons-material/Check";
import { ScrollToTop } from "../components";
import { useNavigate } from "react-router-dom";

const WhatPro = () => {
  const nav = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="ProWhat">
      <ScrollToTop />
      <div className="pro_box">
        <div className="f700 s36 kok ta">Проработка дегани – нима дегани?</div>
        <div className=" s24 f500 ab mt-5">
          <span className="color_main f600 s28">Проработка – бу </span> махсус
          психологик атамадир. Уни биринчи маротаба психологиянинг отаси бўлмиш
          Зигмунд Фрейд 1914 йилда ўзининг "Эслаш, такрорлаш, ва қайта англаш"
          мақоласида ишлатган ва кейинчалик у ўз издошларига психоанализ
          усуллари ҳақида маслаҳат берганда айнан шу услубни қўллаш кераклигини
          ҳар доим таъкидлаган.
        </div>
        <div className=" s24 f500 ab mt-3">
          Фрейд психоаналитик мижознинг муаммоларини аниқлаганидан ва
          кўрсатгандан сўнг, ишининг кейинги босқичи сифатида "проработка"
          атамасини киритди.
        </div>
        <div className="list_item">
          <img src="/img/3.png" alt="" />
          <div className="f500 s24">
            <span className="s28 kok f600">Фрейднинг таъкидлашича,</span>{" "}
            мижозларга уларнинг симптом, хулқ-атвор, реакцияси, муаммолардан
            қандай қилиб қочаётганларини ва тузалиш учун қандай қаршиликларни
            кўрсатаётганларини аниқлаш ва уларга тақдим этиш етарли эмас.
          </div>
        </div>
        <div className="list_item">
          <img src="/img/1.png" alt="" />
          <div className="f500 s24">
            <span className="s28 kok f600">
              Яъни, сиз бир нарсани тушунишингиз керак
            </span>{" "}
            - психолог муаммонинг номини топиб, уни мижозига айтгани билан
            муаммонинг ўзи бундан йўқолмайди, сувга тушган тошдек йўқ бўлиб
            кетмайди ва албатта ҳал этилмайди.
          </div>
        </div>
        <div className="list_item pl50">
          <img src="/img/3.png" alt="" />
          <div className="f500 s24">
            Муаммони проработка қилишни давом этиш керак, яъни ҳар ҳил тарафдан
            кўриб чиқиш, кучли таҳлил қилиш ва янги установкаларни сингдириш
            керак, гарчи бу руҳий муолажа ҳар жиҳатдан мижоз учун энг оғриқли
            муолажа бўлса ҳам.
          </div>
        </div>
        <div className="title pl50">
          <div className="f600 s30 seriy">
            Проработка – бу сизнинг ҳаёт сценарийингизни ўзгартиришни англатади.
          </div>
        </div>
        <div className="title pl50">
          <div className="f500 s24 seriy">
            Шунда таъқиқ ва оғриқ бўлган жойга рухсат, эркинлик ва бахт кириб
            келишини билдиради.
          </div>
        </div>
        <div className="list_item">
          <img src="/img/2.png" alt="" />
          <div className="f500 s24">
            <span className="s28 kok f600">Мисол учун,</span> сиз кўзгу олдида
            туриб ўзингизга 10 марта айтишингиз мумкин - "Мен қимматли ва
            аҳамиятлиман, мен янги ҳис-туйғуларимни ҳис қила оламан,
            муваффақиятга эришяпман ва ўзимни намоён қилиш ҳуқуқига эгаман. Мен
            дам оламан ва ўзимга ғамхўрлик қила оламан" – деб.
          </div>
        </div>
        <div className="list_item">
          <img src="/img/2.png" alt="" />
          <div className="f500 s24">
            <span className="s28 seriy f600">
              Аммо бу сизнинг ҳаётингизда ҳеч нарсани ўзгартирмайди,
            </span>{" "}
            сиз умрингиз давомида ушбу рухсатдан фойдаланишга тўсқинлик қилган
            муаммоларингизнинг илдизларини топиб, улар ҳақида ёзишни
            бошламагунингизча:
          </div>
        </div>
        <div className="list_item pl50 mt-1">
          <img src="icon_cor.png" alt="" />
          <div className="f500 s24">ўзингизни намоён қилиш,</div>
        </div>
        <div className="list_item pl50 mt-1">
          <img src="icon_cor.png" alt="" />
          <div className="f500 s24">муваффақиятга эришиш,</div>
        </div>
        <div className="list_item pl50 mt-1">
          <img src="icon_cor.png" alt="" />
          <div className="f500 s24">
            эркаклар ва фарзандларингиз билан соғлом муносабатларни ўрнатиш,
          </div>
        </div>
        <div className="list_item pl50 mt-1">
          <img src="icon_cor.png" alt="" />
          <div className="f500 s24">пул топиш, </div>
        </div>
        <div className="list_item pl50 mt-1">
          <img src="icon_cor.png" alt="" />
          <div className="f500 s24">ўзингизни танлаш</div>
        </div>
        <div className="list_item pl50 mt-1">
          <img src="icon_cor.png" alt="" />
          <div className="f500 s24">
            {" "}
            ва ўзингиз билан уйғунликда яшашни{" "}
            <span className="seriy f600 s28">ҳеч қачон ўргана олмайсиз.</span>
          </div>
        </div>
        <div className="list_item">
          <img src="/img/2.png" alt="" />
          <div className="f500 s24">
            Албатта Фрейд ва унинг кўплаб машҳур издошларини ҳамда улардан
            ташқари бизнинг ўқув платформамизни бош саҳифасида келтирилган
            <span className="f600 kok">
              {" "}
              “Қўлланилган адабиётларимиз”{" "}
            </span>{" "}
            бўлимидаги дунёда тан олинган 170та машҳур психолог ва
            психо-терапевтларнинг китоб ва меҳнатларини ўзбек менталитетига
            мослаштириш учун 15 йилдан ортиқ вақтимиз кетсада, биз сизга тақдим
            этган проработкаларимиз ягона, ноёб, ва 100% натижа беришига биз
            кафолат бера оламиз.
          </div>
        </div>
        <div className="title">
          <div className="s28 seriy f600">
            Нима учун овозли файл қилиб, ёки печат қилиб ёзиш орқали
            проработкани бажариш мумкин эмас?{" "}
          </div>
        </div>
        <div className="title">
          <div className="s28 kok f600">
            Нима учун фақат дафтарга ёзиш керак?
          </div>
        </div>{" "}
        <div className="list_item">
          <div className="f500 s24 ab">
            <span className="kok s28 f600"> Ёзиш – бу</span> негатив
            ҳис-туйғуларни енгиш, мақсадларга мослашиш ҳамда олдингизга қўйган
            мақсадларингизни шакллантиришнинг энг яхши усули ҳисобланади.
          </div>
        </div>
        <div className="list_item pl">
          <img src="/img/2.png" alt="" />
          <div className="f500 s24">
            Ёзма нутқ оғзаки нутққа қараганда анча юқори даражада ташкил
            этилган. Ёзишда миянинг таҳлил қиладиган бир неча котализаторлари
            иштирок этади.
          </div>
        </div>
        <div className="list_item pl">
          <img src="/img/1.png" alt="" />
          <div className="f500 s24">
            <span className="seriy f600">
              Яъни, бизнинг миямиз максимал даражада ишлашни бошлайди,{" "}
            </span>{" "}
            чунки айнан ёзиш пайтида унинг энг кадимдан шаклланган чуқур
            қатламлари (яъни, Онг остимиз билан бевосита боғлиқ қатламлари) ишга
            тушади.
          </div>
        </div>
        <div className="list_item pl">
          <img src="/img/3.png" alt="" />
          <div className="f500 s24">
            <span className="f-600 color_main">Бошқа томондан эса, </span>{" "}
            ёзаётган вақтимизда биз ўзимиз билан ёлғиз қоламиз. Бу эса ўз
            навбатида стресс даражасини пасайтиради. Фикр ва ҳис-туйғуларни
            ручкада ёзиш орқали қоғозда тасвирлаш, овозли хабарларни ёзиш ёки
            печат қилиш пайтида албатта пайдо бўладиган қўрқув ва хижолатни
            енгишга ёрдам беради.
          </div>
        </div>
        <div className="list_item">
          <img src="/img/3.png" alt="" />
          <div className="f500 s24">
            <span className="seriy f600">
              Нисбатан айтганда, ёзиш мантиқий фикрлашнинг энг зўр усули
              ҳисобланади.{" "}
            </span>
            Негаки бу фикрларингиз ва ҳис-туйғуларингизни тузилишини ифода
            этишингиз учун ва Онг остингизга янги установкаларни киритиш учун
            ёрдам берадиган энг самарали воситадир.
          </div>
        </div>
        <div className="list_item pl">
          <img src="/img/2.png" alt="" />
          <div className="f500 s24">
            АҚШдаги Стенфорд университети қошидаги{" "}
            <span className="f600 kok">Тадқиқот Марказида</span> ўтказилган
            психология соҳасидаги сўнги изланишлар шуни исботладики, психолог
            билан овозли мулоқот эмас, балки психолог берган вазифаларни қоғозда
            аниқ, тўғри ва батафсил ифодалаш барча негатив ҳис-туйғулар ва
            салбий ўйлардан ҳалос бўлишга ёрдам беради.
          </div>
        </div>
        <div className="title">
          <div className="s28 seriy f600">
            Проработка учта босқичдан иборат бўлиб, сиз уларни кетма-кет босиб
            ўтасиз.
          </div>
        </div>
        <div className="title">
          <div className="s28 f600">
            <span className="color_main"> Биринчи босқич</span> – бу англаш ва
            ўрганиш.
          </div>
        </div>
        <div className="list_item pl">
          <img src="/img/3.png" alt="" />
          <div className="f500 s24">
            Сиз ўзингизни ва ҳаёт тажрибангизни клиник психология билимлари
            асосида ўрганасиз.
          </div>
        </div>
        <div className="list_item pl">
          <img src="/img/3.png" alt="" />
          <div className="f500 s24">
            Сизга ҳар бир саволда таклиф қилинган вариантлардан келиб чиқиб, сиз{" "}
            <span className="fil f600 s28">
              {" "}
              Қачон, Қандай тарзда ва Нима учун
            </span>{" "}
            у ёки бу ҳаётий сценарий ёки Онг ости таъқиқи пайдо бўлганини англаб
            етасиз.
          </div>
        </div>
        <div className="list_item pl50">
          <div className="f500 s24 ab">
            <span className="f600 s28 seriy">
              Яъни, нима учун сизнинг ҳаётингизда бир хил сценарийлар
            </span>{" "}
            доимо такрорланишини ёки нима учун айнан шундай йигитни, эркакни,
            қайнонани, ажралишни, ёки турмушга чиқа олмаяптганингизни,
            адолатсизликни, дард ва турли-ҳил хафагарчиликларни жалб
            қилганингизни тушунасиз. Қандай вазият ва кимнинг қандай муносабати
            бунга олиб келганини англашни бошлайсиз.{" "}
          </div>
        </div>
        <div className="list_item pl50">
          <img src="/img/2.png" alt="" />
          <div className="f600 s24">
            <span className="color_main f600 s28">Ёдингизда турсин</span> –
            англашни ўзига сизда 1 соатдан 1 суткагача вақтингиз кетиши мумкин.
          </div>
        </div>
        <div className="list_item">
          <img src="/img/3.png" alt="" />
          <div className="f500 s24">
            Англаб етганингиздан сўнг,
            <span className="seriy f600">
              {" "}
              проработкаларни ичидан сизга тўғри келадиган вариантга тегишли
              гапларини топасиз.
            </span>{" "}
            Бошида ўша салбий кечинмаларингиз борасидаги проработкаларингизни
            ёзаётган пайтингизда эсингизга тушган барча воқеаларни қўшиб
            батафсил ёзишингиз керак бўлади.
          </div>
        </div>
        <div className="list_item pl50">
          <img src="/img/1.png" alt="" />
          <div className="f500 s24">
            Сиз (баён тариқасида) нафақат ҳаётингиз тарихидаги айнан содир
            бўлган фактларни ёзасиз, балки ўша пайтда ва ҳозир ҳам бошингиздан
            кечирган ҳис-туйғуларингизни ҳикоя каби ёзиб чиқишингиз керак
            бўлади. Нимани ҳис қилгансиз – ўша пайтда ва хатто ҳозир ҳам –
            ҳаммасини ёзиб чиқасиз.
          </div>
        </div>
        <div className="list_item">
          <img src="/img/3.png" alt="" />
          <div className="f600 s24 seriy">
            Яъни, сиз ўз ҳис-туйғуларингизни барига ташқарига чиқишга рухсат
            берасиз.
          </div>
        </div>
        <div className="list_item pl50">
          <img src="/img/2.png" alt="" />
          <div className="f500 s24">
            <span className="kok f600"> Шуни ҳам айтиб ўтиш лозимки,</span>{" "}
            ёзаётган пайтингизда сиз йиғлашингиз мумкин ёки ҳаммадан узоқлашишни
            исташингиз мумкин. Ёки сизнинг кўнглингиз айниши мумкин.
            Суякларингиз оғриши ёки шамоллаб қолишингиз мумкин. Ёки сурункали
            касалликларингиз хуруж қилиши мумкин.{" "}
            <span className="seriy f600">
              Билинг – буларнинг барчаси нормал ҳолат!
            </span>
          </div>
        </div>
        <div className="list_item pl50">
          <img src="/img/3.png" alt="" />
          <div className="f500 s24">
            Чунки сизнинг психикангиз{" "}
            <span className="seriy f600"> йиллар давомида </span> қалбингизда ва
            табиий равишда танангизда тўпланган барча ҳиссий юкдан ҳалос бўлар
            экан – бу у учун албатта шок холатидек қабул қилинади.
          </div>
        </div>
        <div className="list_item">
          <img src="/img/1.png" alt="" />
          <div className="f500 s24 ">
            Шунинг учун ҳам биз сиз учун ҳар бир саволнинг оҳирида бириктирилган
            махсус <br />{" "}
            <span className="color_main f600"> “Соғлиқ тренажёри”</span> ни
            ишлаб чиққанмиз. Йиллар давомида юзлаб аёллардан ташкил топган бир
            нечта гуруҳларда синалган ушбу шифобахш медитациямиз сизга жуда
            катта ёрдам беришига ишончимиз комил.
          </div>
        </div>
        <div className="list_item pl50">
          <img src="/img/3.png" alt="" />
          <div className="f500 s24 ">
            Ёдингизда бўлсинки, ушбу тренажёрдаги оригинал бинаурал ритмлар ва
            (махсус тезлаштирилган овозда пасайтириб ёзилган){" "}
            <span className="color_main f600">саблиминаллар</span> медитацияда
            сиз эшитган гапларни тўғридан-тўғри Онг остингизга олиб кириб,
            мўъжизавий ишни бажаради.
          </div>
        </div>
        <div className="title">
          <div className="f28 f700">
            <span className="color_main">Иккинчи босқич</span> <br /> – бу қайта
            фикрлаш ва ўзингизни ўзгартириш.
          </div>
        </div>
        <div className="list_item ab mt-5 pl">
          <div className="f600 s24">
            Ота-онангизга ва ҳаётингиздаги кўплаб персонажларга турли салбий
            ҳис-туйғуларни бошдан кечирганингиздан сўнг, сиз аста-секин
            тинчланасиз. Ҳа, бу учун ҳам албатта вақт керак бўлади. Кимгадир бир
            ой, кимгадир 2-3 ой.
          </div>
        </div>
        <div className="list_item ab pl">
          <div className="s24 f500">
            <span className="f600 seriy">
              Қачондир, бир кун келиб сиз ўтмишдаги оғриқли ҳолатни
              эслаганингизда,
            </span>{" "}
            сиз уни илгари сизни қийнаган оғриқли ҳис-туйғуларсиз, фақат
            ақлингиз билан эслаётганингизни сезишни бошлайсиз.
          </div>
        </div>
        <div className="list_item">
          <img src="img/2.png" alt="" />
          <div className="s24 f500">
            Яъни, сиз ана шу ўтмишда бўлиб ўтган воқеани ёдга олганингизда:
          </div>
        </div>
        <div className="list_item mt-2 pl50">
          <img src="icon_cor.png" alt="" />
          <div className="s24 f500">юрагингиз энди сиқилмайди,</div>
        </div>
        <div className="list_item mt-2 pl50">
          <img src="icon_cor.png" alt="" />
          <div className="s24 f500">томоғингизга тош қадалмайди, </div>
        </div>
        <div className="list_item mt-2 pl50">
          <img src="icon_cor.png" alt="" />
          <div className="s24 f500">бошингиз оғримайди, </div>
        </div>
        <div className="list_item mt-2 pl50">
          <img src="icon_cor.png" alt="" />
          <div className="s24 f500">ғазаб ёки нафрат туйғуси қийнамайди.</div>
        </div>
        <div className="list_item">
          <img src="img/2.png" alt="" />
          <div className="s24 seriy f600">
            Ҳа, аста-секин сиз албатта тинчланасиз. Ишонинг!
          </div>
        </div>
        <div className="list_item">
          <img src="img/3.png" alt="" />
          <div className="s24  f500">
            <span className="color_main f600"> Чунки сиз эндиликда</span>{" "}
            муаммоларингиз қаердалигини тушуниб, уларни қандай ҳал қилишни билиб
            олган етук инсон бўласиз. Сиз ўзингиздан янги шахсни
            яратаётганингиздан ва бошқача яшаш ҳуқуқига эга бўлаётганингиздан
            ўзингизни бахтиёр ҳис қилишни бошлайсиз.
          </div>
        </div>
        <div className="list_item">
          <img src="img/3.png" alt="" />
          <div className="s24  f500">
            Негаки сиз ўз муаммойингизни ҳал қилиб бўлганингизни ва ўз ҳаётингиз
            учун масъулиятни ўз зиммангизга олган катта инсонга айланганингизни
            тушунасиз.
          </div>
        </div>
        <div className="list_item ab pl">
          <div className="s24 f500 ta">
            <span className="f600  s28 kok">
              Проработкаларни барчасини ёзиб бўлганингиздан сўнг,
            </span>{" "}
            сиз ота-онангизни айблашни тўхтатасиз ва уларга сизни эзувчи, сизни
            манипуляция қилувчи ва ҳаётингизни барбод этувчи шахсларга эмас,
            балки ўзингизни туққан кичик ёшдаги фарзандларингизга қарагандек
            қарай бошлайсиз. Уларга фақат кечирим ва тушуниш билан ёрдам
            беришингиз мумкинлигини биласиз, холос.
          </div>
        </div>
        <div className="list_item">
          <img src="img/1.png" alt="" />
          <div className="s24  f500">
            <span className="color_main f600">Бундан ташқари,</span>{" "}
            атрофингиздаги барча одамлар сизга бўлган муносабатини қандай қилиб
            ижобий томонга тубдан ўзгараётганини кўриб, ўзингиз ҳайрон қоласиз.
          </div>
        </div>
        <div className="list_item">
          <img src="img/2.png" alt="" />
          <div className="s24 f600 seriy">
            Чунки ҳар бир янги проработка билан сиз ҳеч қандай
          </div>
        </div>
        <div className="list_item mt-2 pl50">
          <img src="icon_cor.png" alt="" />
          <div className="s24 f500 ">иссиқ-совуқ,</div>
        </div>
        <div className="list_item mt-2 pl50">
          <img src="icon_cor.png" alt="" />
          <div className="s24 f500 ">сеҳр-жоду, </div>
        </div>
        <div className="list_item mt-2 pl50">
          <img src="icon_cor.png" alt="" />
          <div className="s24 f500 ">на қора, на оқ магия, </div>
        </div>
        <div className="list_item mt-2 pl50">
          <img src="icon_cor.png" alt="" />
          <div className="s24 f500">на психологик пирамидалар, </div>
        </div>
        <div className="list_item mt-2 pl50">
          <img src="icon_cor.png" alt="" />
          <div className="s24 f500">на орзулар харитаси,</div>
        </div>
        <div className="list_item mt-2 pl50">
          <img src="icon_cor.png" alt="" />
          <div className="s24 f500">
            “ўзича психолог бўлиб қолган” мураббийларнинг иқрор ва рухсатнома
            хатлари,{" "}
          </div>
        </div>
        <div className="list_item mt-2 pl50">
          <img src="icon_cor.png" alt="" />
          <div className="s24 f500">
            ва ҳатто аллақандай "ментал психогенетика" соҳасидаги ихтиролар
            (яъни, биз буви-додаларимизни гуноҳи учун жавоб беришимиз ҳақидаги
            афсоналар), ва х.к.злар
          </div>
        </div>
        <div className="list_item mt-2 pl50">
          <div className="s24 f500">
            – <span className="seriy f600">мутлақо йўқ нарсалигига</span> –
            буларнинг ҳаммасини одамлар билимсизлигидан (клиник психология
            оламидаги билимлардан холис эканлигидан) ва албатта ночорлигидан
            ўйлаб чиққан фантазиялари эканлигига{" "}
            <span className="f600 seriy">100% амин бўласиз.</span>
          </div>
        </div>
        <div className="list_item pl">
          <img src="img/1.png" alt="" />
          <div className="s24 f500">
            Бизнинг жамики бор муаммоларимиз ва касалликларимизнинг барча
            калитлари{" "}
            <span className="kok f600">
              фақат ва фақат бизнинг Онг остимизда ва болалигимизда
            </span>{" "}
            эканлигига ишонч ҳосил қиласиз.
          </div>
        </div>
        <div className="list_item ab ">
          <div className="s24 f500 ta">
            Проработкаларни тўғри бажарганингиз учун{" "}
            <span className="seriy f600">
              ҳаётингизда мўъжизалар рўй бераётганини кўра бошлаганингизда,
            </span>{" "}
            Худо – бу ўзининг суйиб яратган бандаларига фақат ва фақат яхшиликни
            раво кўрадиган Муқаддас Зот эканлигини ҳам тушуниб етасиз.
          </div>
        </div>
        <div className="title mt-5">
          <div className="s28 f700">
            <span className="color_main">Ва охирги учинчи босқич</span> <br />–
            бу янги установкаларингизни амалга ошириш жараёни.
          </div>
        </div>
        <div className="list_item ab">
          <div className="s24 f500">
            Ва, айтганча,{" "}
            <span className="kok f600">бу энг қийин жараёндир.</span> Сиз
            ҳаётингиздаги катта янги ўзгаришларни қабул қилишни ўрганишингиз
            керак бўлади.
          </div>
        </div>
        <div className="list_item pl50 mt-2">
          <img src="icon_cor.png" alt="" />
          <div className="s24 f500">Ўзингизни кўрсатиш,</div>
        </div>
        <div className="list_item pl50 mt-2">
          <img src="icon_cor.png" alt="" />
          <div className="s24 f500">Ҳис-туйғуларингизни тўлиқ ифода этиш, </div>
        </div>
        <div className="list_item pl50 mt-2">
          <img src="icon_cor.png" alt="" />
          <div className="s24 f500">
            Бошқача, яъни ўзингиз истаган йўлни танлаш,{" "}
          </div>
        </div>
        <div className="list_item pl50 mt-2">
          <img src="icon_cor.png" alt="" />
          <div className="s24 f500">
            Одамлар билан бошқача муносабатда бўлиш,{" "}
          </div>
        </div>
        <div className="list_item pl50 mt-2">
          <img src="icon_cor.png" alt="" />
          <div className="s24 f500">Қадриятларингиз кўламини ўзгартириш, </div>
        </div>
        <div className="list_item pl50 mt-2">
          <img src="icon_cor.png" alt="" />
          <div className="s24 f500">Фарзандларингизни бошқача тарбиялаш </div>
        </div>
        <div className="list_item pl50 mt-3">
          <img src="icon_cor.png" alt="" />
          <div className="s24 f500">
            {" "}
            Ва илгари ўзингиздан воз кечган жойда энди ўзингизни танлаш{" "}
            <span className="seriy f600">
              учун албатта вақт ва шижоат керак бўлади.
            </span>{" "}
          </div>
        </div>
        <div className="list_item">
          <img src="img/2.png" alt="" />
          <div className="s24 f500">
            <span className="color_main f600 s28"> Ва энг муҳими, </span>{" "}
            бизнинг ўқув платформамиздаги проработкаларни бажарганингиздан сўнг
            ижобий ва хатто мўъжизавий натижаларга эришишни бошлаганингизда,
            бахтдан бошингизни йўқотмасдан, инсон бўлиб қолишга ҳаракат қилинг.
          </div>
        </div>
        <div className="list_item pl50">
          <img src="img/1.png" alt="" />
          <div className="s24 f500">
            Ҳаётий сценарийларни проработка қилиш – катта квартирада қилинадиган
            капитал таъмирлашга ўхшайди. Фақат бу квартира сизнинг шахсий
            ҳаётингиздир.
          </div>
        </div>
        <div className="title">
          <div className="s24 f600 seriy">
            {" "}
            Англаш, тушуниш ва ақлли ёндашув сизга ҳамроҳ бўлсин.
          </div>
        </div>
        <div className="asoschi mt-5 f600 color_main s20">
          Ҳурмат ила, BahtWoman Бахт мактаби асосчиси, <br />
          <span className=" mt-2 s24">Дилобар Исмаилова</span>
        </div>
        {/*  */}
        {/*  */}
      </div>
      <div
        onClick={() => nav("/prorabotka-1")}
        className="w-100 prorabotka_what tort f600 color_main s36 mt-5 ta"
      >
        Shaxsiy kabinetga qaytish
      </div>
    </div>
  );
};

export default WhatPro;
