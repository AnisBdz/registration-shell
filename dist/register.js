"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

"undefined" != typeof document && function (e, t) {
  var n = e.createElement("style");
  if (e.getElementsByTagName("head")[0].appendChild(n), n.styleSheet) n.styleSheet.disabled || (n.styleSheet.cssText = t);else try {
    n.innerHTML = t;
  } catch (e) {
    n.innerText = t;
  }
}(document, ".term{font-family:courier,fixed,swiss,sans-serif;font-size:12px;color:#33d011;background:0 0}.termReverse{color:#111;background:#33d011}body{margin:0;padding:0}#terminal{display:inline-block;margin:0 auto;transition:all .5s ease-out 0s}#terminal>table{box-shadow:5px 5px 20px 0 rgba(0,0,0,.2)}#terminal>table>tbody>tr>td{border-radius:4px}#terminal .term,#terminal .termReverse{font-size:14px;font-family:monospace}#terminal .term{color:#E5E5E5}#terminal .termReverse{background:#fff}#dummy{z-index:-1;opacity:0}");
/*!@license Copyright 2013, Heinrich Goebl, License: MIT, see https://github.com/hgoebl/mobile-detect.js*/

!function (a, b) {
  a(function () {
    "use strict";

    function a(a, b) {
      return null != a && null != b && a.toLowerCase() === b.toLowerCase();
    }

    function c(a, b) {
      var c,
          d,
          e = a.length;
      if (!e || !b) return !1;

      for (c = b.toLowerCase(), d = 0; d < e; ++d) {
        if (c === a[d].toLowerCase()) return !0;
      }

      return !1;
    }

    function d(a) {
      for (var b in a) {
        i.call(a, b) && (a[b] = new RegExp(a[b], "i"));
      }
    }

    function e(a) {
      return (a || "").substr(0, 500);
    }

    function f(a, b) {
      this.ua = e(a), this._cache = {}, this.maxPhoneWidth = b || 600;
    }

    var g = {};
    g.mobileDetectRules = {
      phones: {
        iPhone: "\\biPhone\\b|\\biPod\\b",
        BlackBerry: "BlackBerry|\\bBB10\\b|rim[0-9]+",
        HTC: "HTC|HTC.*(Sensation|Evo|Vision|Explorer|6800|8100|8900|A7272|S510e|C110e|Legend|Desire|T8282)|APX515CKT|Qtek9090|APA9292KT|HD_mini|Sensation.*Z710e|PG86100|Z715e|Desire.*(A8181|HD)|ADR6200|ADR6400L|ADR6425|001HT|Inspire 4G|Android.*\\bEVO\\b|T-Mobile G1|Z520m|Android [0-9.]+; Pixel",
        Nexus: "Nexus One|Nexus S|Galaxy.*Nexus|Android.*Nexus.*Mobile|Nexus 4|Nexus 5|Nexus 6",
        Dell: "Dell[;]? (Streak|Aero|Venue|Venue Pro|Flash|Smoke|Mini 3iX)|XCD28|XCD35|\\b001DL\\b|\\b101DL\\b|\\bGS01\\b",
        Motorola: "Motorola|DROIDX|DROID BIONIC|\\bDroid\\b.*Build|Android.*Xoom|HRI39|MOT-|A1260|A1680|A555|A853|A855|A953|A955|A956|Motorola.*ELECTRIFY|Motorola.*i1|i867|i940|MB200|MB300|MB501|MB502|MB508|MB511|MB520|MB525|MB526|MB611|MB612|MB632|MB810|MB855|MB860|MB861|MB865|MB870|ME501|ME502|ME511|ME525|ME600|ME632|ME722|ME811|ME860|ME863|ME865|MT620|MT710|MT716|MT720|MT810|MT870|MT917|Motorola.*TITANIUM|WX435|WX445|XT300|XT301|XT311|XT316|XT317|XT319|XT320|XT390|XT502|XT530|XT531|XT532|XT535|XT603|XT610|XT611|XT615|XT681|XT701|XT702|XT711|XT720|XT800|XT806|XT860|XT862|XT875|XT882|XT883|XT894|XT901|XT907|XT909|XT910|XT912|XT928|XT926|XT915|XT919|XT925|XT1021|\\bMoto E\\b|XT1068|XT1092|XT1052",
        Samsung: "\\bSamsung\\b|SM-G950F|SM-G955F|SM-G9250|GT-19300|SGH-I337|BGT-S5230|GT-B2100|GT-B2700|GT-B2710|GT-B3210|GT-B3310|GT-B3410|GT-B3730|GT-B3740|GT-B5510|GT-B5512|GT-B5722|GT-B6520|GT-B7300|GT-B7320|GT-B7330|GT-B7350|GT-B7510|GT-B7722|GT-B7800|GT-C3010|GT-C3011|GT-C3060|GT-C3200|GT-C3212|GT-C3212I|GT-C3262|GT-C3222|GT-C3300|GT-C3300K|GT-C3303|GT-C3303K|GT-C3310|GT-C3322|GT-C3330|GT-C3350|GT-C3500|GT-C3510|GT-C3530|GT-C3630|GT-C3780|GT-C5010|GT-C5212|GT-C6620|GT-C6625|GT-C6712|GT-E1050|GT-E1070|GT-E1075|GT-E1080|GT-E1081|GT-E1085|GT-E1087|GT-E1100|GT-E1107|GT-E1110|GT-E1120|GT-E1125|GT-E1130|GT-E1160|GT-E1170|GT-E1175|GT-E1180|GT-E1182|GT-E1200|GT-E1210|GT-E1225|GT-E1230|GT-E1390|GT-E2100|GT-E2120|GT-E2121|GT-E2152|GT-E2220|GT-E2222|GT-E2230|GT-E2232|GT-E2250|GT-E2370|GT-E2550|GT-E2652|GT-E3210|GT-E3213|GT-I5500|GT-I5503|GT-I5700|GT-I5800|GT-I5801|GT-I6410|GT-I6420|GT-I7110|GT-I7410|GT-I7500|GT-I8000|GT-I8150|GT-I8160|GT-I8190|GT-I8320|GT-I8330|GT-I8350|GT-I8530|GT-I8700|GT-I8703|GT-I8910|GT-I9000|GT-I9001|GT-I9003|GT-I9010|GT-I9020|GT-I9023|GT-I9070|GT-I9082|GT-I9100|GT-I9103|GT-I9220|GT-I9250|GT-I9300|GT-I9305|GT-I9500|GT-I9505|GT-M3510|GT-M5650|GT-M7500|GT-M7600|GT-M7603|GT-M8800|GT-M8910|GT-N7000|GT-S3110|GT-S3310|GT-S3350|GT-S3353|GT-S3370|GT-S3650|GT-S3653|GT-S3770|GT-S3850|GT-S5210|GT-S5220|GT-S5229|GT-S5230|GT-S5233|GT-S5250|GT-S5253|GT-S5260|GT-S5263|GT-S5270|GT-S5300|GT-S5330|GT-S5350|GT-S5360|GT-S5363|GT-S5369|GT-S5380|GT-S5380D|GT-S5560|GT-S5570|GT-S5600|GT-S5603|GT-S5610|GT-S5620|GT-S5660|GT-S5670|GT-S5690|GT-S5750|GT-S5780|GT-S5830|GT-S5839|GT-S6102|GT-S6500|GT-S7070|GT-S7200|GT-S7220|GT-S7230|GT-S7233|GT-S7250|GT-S7500|GT-S7530|GT-S7550|GT-S7562|GT-S7710|GT-S8000|GT-S8003|GT-S8500|GT-S8530|GT-S8600|SCH-A310|SCH-A530|SCH-A570|SCH-A610|SCH-A630|SCH-A650|SCH-A790|SCH-A795|SCH-A850|SCH-A870|SCH-A890|SCH-A930|SCH-A950|SCH-A970|SCH-A990|SCH-I100|SCH-I110|SCH-I400|SCH-I405|SCH-I500|SCH-I510|SCH-I515|SCH-I600|SCH-I730|SCH-I760|SCH-I770|SCH-I830|SCH-I910|SCH-I920|SCH-I959|SCH-LC11|SCH-N150|SCH-N300|SCH-R100|SCH-R300|SCH-R351|SCH-R400|SCH-R410|SCH-T300|SCH-U310|SCH-U320|SCH-U350|SCH-U360|SCH-U365|SCH-U370|SCH-U380|SCH-U410|SCH-U430|SCH-U450|SCH-U460|SCH-U470|SCH-U490|SCH-U540|SCH-U550|SCH-U620|SCH-U640|SCH-U650|SCH-U660|SCH-U700|SCH-U740|SCH-U750|SCH-U810|SCH-U820|SCH-U900|SCH-U940|SCH-U960|SCS-26UC|SGH-A107|SGH-A117|SGH-A127|SGH-A137|SGH-A157|SGH-A167|SGH-A177|SGH-A187|SGH-A197|SGH-A227|SGH-A237|SGH-A257|SGH-A437|SGH-A517|SGH-A597|SGH-A637|SGH-A657|SGH-A667|SGH-A687|SGH-A697|SGH-A707|SGH-A717|SGH-A727|SGH-A737|SGH-A747|SGH-A767|SGH-A777|SGH-A797|SGH-A817|SGH-A827|SGH-A837|SGH-A847|SGH-A867|SGH-A877|SGH-A887|SGH-A897|SGH-A927|SGH-B100|SGH-B130|SGH-B200|SGH-B220|SGH-C100|SGH-C110|SGH-C120|SGH-C130|SGH-C140|SGH-C160|SGH-C170|SGH-C180|SGH-C200|SGH-C207|SGH-C210|SGH-C225|SGH-C230|SGH-C417|SGH-C450|SGH-D307|SGH-D347|SGH-D357|SGH-D407|SGH-D415|SGH-D780|SGH-D807|SGH-D980|SGH-E105|SGH-E200|SGH-E315|SGH-E316|SGH-E317|SGH-E335|SGH-E590|SGH-E635|SGH-E715|SGH-E890|SGH-F300|SGH-F480|SGH-I200|SGH-I300|SGH-I320|SGH-I550|SGH-I577|SGH-I600|SGH-I607|SGH-I617|SGH-I627|SGH-I637|SGH-I677|SGH-I700|SGH-I717|SGH-I727|SGH-i747M|SGH-I777|SGH-I780|SGH-I827|SGH-I847|SGH-I857|SGH-I896|SGH-I897|SGH-I900|SGH-I907|SGH-I917|SGH-I927|SGH-I937|SGH-I997|SGH-J150|SGH-J200|SGH-L170|SGH-L700|SGH-M110|SGH-M150|SGH-M200|SGH-N105|SGH-N500|SGH-N600|SGH-N620|SGH-N625|SGH-N700|SGH-N710|SGH-P107|SGH-P207|SGH-P300|SGH-P310|SGH-P520|SGH-P735|SGH-P777|SGH-Q105|SGH-R210|SGH-R220|SGH-R225|SGH-S105|SGH-S307|SGH-T109|SGH-T119|SGH-T139|SGH-T209|SGH-T219|SGH-T229|SGH-T239|SGH-T249|SGH-T259|SGH-T309|SGH-T319|SGH-T329|SGH-T339|SGH-T349|SGH-T359|SGH-T369|SGH-T379|SGH-T409|SGH-T429|SGH-T439|SGH-T459|SGH-T469|SGH-T479|SGH-T499|SGH-T509|SGH-T519|SGH-T539|SGH-T559|SGH-T589|SGH-T609|SGH-T619|SGH-T629|SGH-T639|SGH-T659|SGH-T669|SGH-T679|SGH-T709|SGH-T719|SGH-T729|SGH-T739|SGH-T746|SGH-T749|SGH-T759|SGH-T769|SGH-T809|SGH-T819|SGH-T839|SGH-T919|SGH-T929|SGH-T939|SGH-T959|SGH-T989|SGH-U100|SGH-U200|SGH-U800|SGH-V205|SGH-V206|SGH-X100|SGH-X105|SGH-X120|SGH-X140|SGH-X426|SGH-X427|SGH-X475|SGH-X495|SGH-X497|SGH-X507|SGH-X600|SGH-X610|SGH-X620|SGH-X630|SGH-X700|SGH-X820|SGH-X890|SGH-Z130|SGH-Z150|SGH-Z170|SGH-ZX10|SGH-ZX20|SHW-M110|SPH-A120|SPH-A400|SPH-A420|SPH-A460|SPH-A500|SPH-A560|SPH-A600|SPH-A620|SPH-A660|SPH-A700|SPH-A740|SPH-A760|SPH-A790|SPH-A800|SPH-A820|SPH-A840|SPH-A880|SPH-A900|SPH-A940|SPH-A960|SPH-D600|SPH-D700|SPH-D710|SPH-D720|SPH-I300|SPH-I325|SPH-I330|SPH-I350|SPH-I500|SPH-I600|SPH-I700|SPH-L700|SPH-M100|SPH-M220|SPH-M240|SPH-M300|SPH-M305|SPH-M320|SPH-M330|SPH-M350|SPH-M360|SPH-M370|SPH-M380|SPH-M510|SPH-M540|SPH-M550|SPH-M560|SPH-M570|SPH-M580|SPH-M610|SPH-M620|SPH-M630|SPH-M800|SPH-M810|SPH-M850|SPH-M900|SPH-M910|SPH-M920|SPH-M930|SPH-N100|SPH-N200|SPH-N240|SPH-N300|SPH-N400|SPH-Z400|SWC-E100|SCH-i909|GT-N7100|GT-N7105|SCH-I535|SM-N900A|SGH-I317|SGH-T999L|GT-S5360B|GT-I8262|GT-S6802|GT-S6312|GT-S6310|GT-S5312|GT-S5310|GT-I9105|GT-I8510|GT-S6790N|SM-G7105|SM-N9005|GT-S5301|GT-I9295|GT-I9195|SM-C101|GT-S7392|GT-S7560|GT-B7610|GT-I5510|GT-S7582|GT-S7530E|GT-I8750|SM-G9006V|SM-G9008V|SM-G9009D|SM-G900A|SM-G900D|SM-G900F|SM-G900H|SM-G900I|SM-G900J|SM-G900K|SM-G900L|SM-G900M|SM-G900P|SM-G900R4|SM-G900S|SM-G900T|SM-G900V|SM-G900W8|SHV-E160K|SCH-P709|SCH-P729|SM-T2558|GT-I9205|SM-G9350|SM-J120F|SM-G920F|SM-G920V|SM-G930F|SM-N910C|SM-A310F|GT-I9190|SM-J500FN|SM-G903F|SM-J330F",
        LG: "\\bLG\\b;|LG[- ]?(C800|C900|E400|E610|E900|E-900|F160|F180K|F180L|F180S|730|855|L160|LS740|LS840|LS970|LU6200|MS690|MS695|MS770|MS840|MS870|MS910|P500|P700|P705|VM696|AS680|AS695|AX840|C729|E970|GS505|272|C395|E739BK|E960|L55C|L75C|LS696|LS860|P769BK|P350|P500|P509|P870|UN272|US730|VS840|VS950|LN272|LN510|LS670|LS855|LW690|MN270|MN510|P509|P769|P930|UN200|UN270|UN510|UN610|US670|US740|US760|UX265|UX840|VN271|VN530|VS660|VS700|VS740|VS750|VS910|VS920|VS930|VX9200|VX11000|AX840A|LW770|P506|P925|P999|E612|D955|D802|MS323|M257)",
        Sony: "SonyST|SonyLT|SonyEricsson|SonyEricssonLT15iv|LT18i|E10i|LT28h|LT26w|SonyEricssonMT27i|C5303|C6902|C6903|C6906|C6943|D2533",
        Asus: "Asus.*Galaxy|PadFone.*Mobile",
        NokiaLumia: "Lumia [0-9]{3,4}",
        Micromax: "Micromax.*\\b(A210|A92|A88|A72|A111|A110Q|A115|A116|A110|A90S|A26|A51|A35|A54|A25|A27|A89|A68|A65|A57|A90)\\b",
        Palm: "PalmSource|Palm",
        Vertu: "Vertu|Vertu.*Ltd|Vertu.*Ascent|Vertu.*Ayxta|Vertu.*Constellation(F|Quest)?|Vertu.*Monika|Vertu.*Signature",
        Pantech: "PANTECH|IM-A850S|IM-A840S|IM-A830L|IM-A830K|IM-A830S|IM-A820L|IM-A810K|IM-A810S|IM-A800S|IM-T100K|IM-A725L|IM-A780L|IM-A775C|IM-A770K|IM-A760S|IM-A750K|IM-A740S|IM-A730S|IM-A720L|IM-A710K|IM-A690L|IM-A690S|IM-A650S|IM-A630K|IM-A600S|VEGA PTL21|PT003|P8010|ADR910L|P6030|P6020|P9070|P4100|P9060|P5000|CDM8992|TXT8045|ADR8995|IS11PT|P2030|P6010|P8000|PT002|IS06|CDM8999|P9050|PT001|TXT8040|P2020|P9020|P2000|P7040|P7000|C790",
        Fly: "IQ230|IQ444|IQ450|IQ440|IQ442|IQ441|IQ245|IQ256|IQ236|IQ255|IQ235|IQ245|IQ275|IQ240|IQ285|IQ280|IQ270|IQ260|IQ250",
        Wiko: "KITE 4G|HIGHWAY|GETAWAY|STAIRWAY|DARKSIDE|DARKFULL|DARKNIGHT|DARKMOON|SLIDE|WAX 4G|RAINBOW|BLOOM|SUNSET|GOA(?!nna)|LENNY|BARRY|IGGY|OZZY|CINK FIVE|CINK PEAX|CINK PEAX 2|CINK SLIM|CINK SLIM 2|CINK +|CINK KING|CINK PEAX|CINK SLIM|SUBLIM",
        iMobile: "i-mobile (IQ|i-STYLE|idea|ZAA|Hitz)",
        SimValley: "\\b(SP-80|XT-930|SX-340|XT-930|SX-310|SP-360|SP60|SPT-800|SP-120|SPT-800|SP-140|SPX-5|SPX-8|SP-100|SPX-8|SPX-12)\\b",
        Wolfgang: "AT-B24D|AT-AS50HD|AT-AS40W|AT-AS55HD|AT-AS45q2|AT-B26D|AT-AS50Q",
        Alcatel: "Alcatel",
        Nintendo: "Nintendo (3DS|Switch)",
        Amoi: "Amoi",
        INQ: "INQ",
        GenericPhone: "Tapatalk|PDA;|SAGEM|\\bmmp\\b|pocket|\\bpsp\\b|symbian|Smartphone|smartfon|treo|up.browser|up.link|vodafone|\\bwap\\b|nokia|Series40|Series60|S60|SonyEricsson|N900|MAUI.*WAP.*Browser"
      },
      tablets: {
        iPad: "iPad|iPad.*Mobile",
        NexusTablet: "Android.*Nexus[\\s]+(7|9|10)",
        GoogleTablet: "Android.*Pixel C",
        SamsungTablet: "SAMSUNG.*Tablet|Galaxy.*Tab|SC-01C|GT-P1000|GT-P1003|GT-P1010|GT-P3105|GT-P6210|GT-P6800|GT-P6810|GT-P7100|GT-P7300|GT-P7310|GT-P7500|GT-P7510|SCH-I800|SCH-I815|SCH-I905|SGH-I957|SGH-I987|SGH-T849|SGH-T859|SGH-T869|SPH-P100|GT-P3100|GT-P3108|GT-P3110|GT-P5100|GT-P5110|GT-P6200|GT-P7320|GT-P7511|GT-N8000|GT-P8510|SGH-I497|SPH-P500|SGH-T779|SCH-I705|SCH-I915|GT-N8013|GT-P3113|GT-P5113|GT-P8110|GT-N8010|GT-N8005|GT-N8020|GT-P1013|GT-P6201|GT-P7501|GT-N5100|GT-N5105|GT-N5110|SHV-E140K|SHV-E140L|SHV-E140S|SHV-E150S|SHV-E230K|SHV-E230L|SHV-E230S|SHW-M180K|SHW-M180L|SHW-M180S|SHW-M180W|SHW-M300W|SHW-M305W|SHW-M380K|SHW-M380S|SHW-M380W|SHW-M430W|SHW-M480K|SHW-M480S|SHW-M480W|SHW-M485W|SHW-M486W|SHW-M500W|GT-I9228|SCH-P739|SCH-I925|GT-I9200|GT-P5200|GT-P5210|GT-P5210X|SM-T311|SM-T310|SM-T310X|SM-T210|SM-T210R|SM-T211|SM-P600|SM-P601|SM-P605|SM-P900|SM-P901|SM-T217|SM-T217A|SM-T217S|SM-P6000|SM-T3100|SGH-I467|XE500|SM-T110|GT-P5220|GT-I9200X|GT-N5110X|GT-N5120|SM-P905|SM-T111|SM-T2105|SM-T315|SM-T320|SM-T320X|SM-T321|SM-T520|SM-T525|SM-T530NU|SM-T230NU|SM-T330NU|SM-T900|XE500T1C|SM-P605V|SM-P905V|SM-T337V|SM-T537V|SM-T707V|SM-T807V|SM-P600X|SM-P900X|SM-T210X|SM-T230|SM-T230X|SM-T325|GT-P7503|SM-T531|SM-T330|SM-T530|SM-T705|SM-T705C|SM-T535|SM-T331|SM-T800|SM-T700|SM-T537|SM-T807|SM-P907A|SM-T337A|SM-T537A|SM-T707A|SM-T807A|SM-T237|SM-T807P|SM-P607T|SM-T217T|SM-T337T|SM-T807T|SM-T116NQ|SM-T116BU|SM-P550|SM-T350|SM-T550|SM-T9000|SM-P9000|SM-T705Y|SM-T805|GT-P3113|SM-T710|SM-T810|SM-T815|SM-T360|SM-T533|SM-T113|SM-T335|SM-T715|SM-T560|SM-T670|SM-T677|SM-T377|SM-T567|SM-T357T|SM-T555|SM-T561|SM-T713|SM-T719|SM-T813|SM-T819|SM-T580|SM-T355Y?|SM-T280|SM-T817A|SM-T820|SM-W700|SM-P580|SM-T587|SM-P350|SM-P555M|SM-P355M|SM-T113NU|SM-T815Y|SM-T585|SM-T285|SM-T825|SM-W708|SM-T835",
        Kindle: "Kindle|Silk.*Accelerated|Android.*\\b(KFOT|KFTT|KFJWI|KFJWA|KFOTE|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|WFJWAE|KFSAWA|KFSAWI|KFASWI|KFARWI|KFFOWI|KFGIWI|KFMEWI)\\b|Android.*Silk/[0-9.]+ like Chrome/[0-9.]+ (?!Mobile)",
        SurfaceTablet: "Windows NT [0-9.]+; ARM;.*(Tablet|ARMBJS)",
        HPTablet: "HP Slate (7|8|10)|HP ElitePad 900|hp-tablet|EliteBook.*Touch|HP 8|Slate 21|HP SlateBook 10",
        AsusTablet: "^.*PadFone((?!Mobile).)*$|Transformer|TF101|TF101G|TF300T|TF300TG|TF300TL|TF700T|TF700KL|TF701T|TF810C|ME171|ME301T|ME302C|ME371MG|ME370T|ME372MG|ME172V|ME173X|ME400C|Slider SL101|\\bK00F\\b|\\bK00C\\b|\\bK00E\\b|\\bK00L\\b|TX201LA|ME176C|ME102A|\\bM80TA\\b|ME372CL|ME560CG|ME372CG|ME302KL| K010 | K011 | K017 | K01E |ME572C|ME103K|ME170C|ME171C|\\bME70C\\b|ME581C|ME581CL|ME8510C|ME181C|P01Y|PO1MA|P01Z|\\bP027\\b|\\bP024\\b|\\bP00C\\b",
        BlackBerryTablet: "PlayBook|RIM Tablet",
        HTCtablet: "HTC_Flyer_P512|HTC Flyer|HTC Jetstream|HTC-P715a|HTC EVO View 4G|PG41200|PG09410",
        MotorolaTablet: "xoom|sholest|MZ615|MZ605|MZ505|MZ601|MZ602|MZ603|MZ604|MZ606|MZ607|MZ608|MZ609|MZ615|MZ616|MZ617",
        NookTablet: "Android.*Nook|NookColor|nook browser|BNRV200|BNRV200A|BNTV250|BNTV250A|BNTV400|BNTV600|LogicPD Zoom2",
        AcerTablet: "Android.*; \\b(A100|A101|A110|A200|A210|A211|A500|A501|A510|A511|A700|A701|W500|W500P|W501|W501P|W510|W511|W700|G100|G100W|B1-A71|B1-710|B1-711|A1-810|A1-811|A1-830)\\b|W3-810|\\bA3-A10\\b|\\bA3-A11\\b|\\bA3-A20\\b|\\bA3-A30",
        ToshibaTablet: "Android.*(AT100|AT105|AT200|AT205|AT270|AT275|AT300|AT305|AT1S5|AT500|AT570|AT700|AT830)|TOSHIBA.*FOLIO",
        LGTablet: "\\bL-06C|LG-V909|LG-V900|LG-V700|LG-V510|LG-V500|LG-V410|LG-V400|LG-VK810\\b",
        FujitsuTablet: "Android.*\\b(F-01D|F-02F|F-05E|F-10D|M532|Q572)\\b",
        PrestigioTablet: "PMP3170B|PMP3270B|PMP3470B|PMP7170B|PMP3370B|PMP3570C|PMP5870C|PMP3670B|PMP5570C|PMP5770D|PMP3970B|PMP3870C|PMP5580C|PMP5880D|PMP5780D|PMP5588C|PMP7280C|PMP7280C3G|PMP7280|PMP7880D|PMP5597D|PMP5597|PMP7100D|PER3464|PER3274|PER3574|PER3884|PER5274|PER5474|PMP5097CPRO|PMP5097|PMP7380D|PMP5297C|PMP5297C_QUAD|PMP812E|PMP812E3G|PMP812F|PMP810E|PMP880TD|PMT3017|PMT3037|PMT3047|PMT3057|PMT7008|PMT5887|PMT5001|PMT5002",
        LenovoTablet: "Lenovo TAB|Idea(Tab|Pad)( A1|A10| K1|)|ThinkPad([ ]+)?Tablet|YT3-850M|YT3-X90L|YT3-X90F|YT3-X90X|Lenovo.*(S2109|S2110|S5000|S6000|K3011|A3000|A3500|A1000|A2107|A2109|A1107|A5500|A7600|B6000|B8000|B8080)(-|)(FL|F|HV|H|)|TB-X103F|TB-X304F|TB-X304L|TB-8703F|Tab2A7-10F|TB2-X30L",
        DellTablet: "Venue 11|Venue 8|Venue 7|Dell Streak 10|Dell Streak 7",
        YarvikTablet: "Android.*\\b(TAB210|TAB211|TAB224|TAB250|TAB260|TAB264|TAB310|TAB360|TAB364|TAB410|TAB411|TAB420|TAB424|TAB450|TAB460|TAB461|TAB464|TAB465|TAB467|TAB468|TAB07-100|TAB07-101|TAB07-150|TAB07-151|TAB07-152|TAB07-200|TAB07-201-3G|TAB07-210|TAB07-211|TAB07-212|TAB07-214|TAB07-220|TAB07-400|TAB07-485|TAB08-150|TAB08-200|TAB08-201-3G|TAB08-201-30|TAB09-100|TAB09-211|TAB09-410|TAB10-150|TAB10-201|TAB10-211|TAB10-400|TAB10-410|TAB13-201|TAB274EUK|TAB275EUK|TAB374EUK|TAB462EUK|TAB474EUK|TAB9-200)\\b",
        MedionTablet: "Android.*\\bOYO\\b|LIFE.*(P9212|P9514|P9516|S9512)|LIFETAB",
        ArnovaTablet: "97G4|AN10G2|AN7bG3|AN7fG3|AN8G3|AN8cG3|AN7G3|AN9G3|AN7dG3|AN7dG3ST|AN7dG3ChildPad|AN10bG3|AN10bG3DT|AN9G2",
        IntensoTablet: "INM8002KP|INM1010FP|INM805ND|Intenso Tab|TAB1004",
        IRUTablet: "M702pro",
        MegafonTablet: "MegaFon V9|\\bZTE V9\\b|Android.*\\bMT7A\\b",
        EbodaTablet: "E-Boda (Supreme|Impresspeed|Izzycomm|Essential)",
        AllViewTablet: "Allview.*(Viva|Alldro|City|Speed|All TV|Frenzy|Quasar|Shine|TX1|AX1|AX2)",
        ArchosTablet: "\\b(101G9|80G9|A101IT)\\b|Qilive 97R|Archos5|\\bARCHOS (70|79|80|90|97|101|FAMILYPAD|)(b|c|)(G10| Cobalt| TITANIUM(HD|)| Xenon| Neon|XSK| 2| XS 2| PLATINUM| CARBON|GAMEPAD)\\b",
        AinolTablet: "NOVO7|NOVO8|NOVO10|Novo7Aurora|Novo7Basic|NOVO7PALADIN|novo9-Spark",
        NokiaLumiaTablet: "Lumia 2520",
        SonyTablet: "Sony.*Tablet|Xperia Tablet|Sony Tablet S|SO-03E|SGPT12|SGPT13|SGPT114|SGPT121|SGPT122|SGPT123|SGPT111|SGPT112|SGPT113|SGPT131|SGPT132|SGPT133|SGPT211|SGPT212|SGPT213|SGP311|SGP312|SGP321|EBRD1101|EBRD1102|EBRD1201|SGP351|SGP341|SGP511|SGP512|SGP521|SGP541|SGP551|SGP621|SGP641|SGP612|SOT31|SGP771|SGP611|SGP612|SGP712",
        PhilipsTablet: "\\b(PI2010|PI3000|PI3100|PI3105|PI3110|PI3205|PI3210|PI3900|PI4010|PI7000|PI7100)\\b",
        CubeTablet: "Android.*(K8GT|U9GT|U10GT|U16GT|U17GT|U18GT|U19GT|U20GT|U23GT|U30GT)|CUBE U8GT",
        CobyTablet: "MID1042|MID1045|MID1125|MID1126|MID7012|MID7014|MID7015|MID7034|MID7035|MID7036|MID7042|MID7048|MID7127|MID8042|MID8048|MID8127|MID9042|MID9740|MID9742|MID7022|MID7010",
        MIDTablet: "M9701|M9000|M9100|M806|M1052|M806|T703|MID701|MID713|MID710|MID727|MID760|MID830|MID728|MID933|MID125|MID810|MID732|MID120|MID930|MID800|MID731|MID900|MID100|MID820|MID735|MID980|MID130|MID833|MID737|MID960|MID135|MID860|MID736|MID140|MID930|MID835|MID733|MID4X10",
        MSITablet: "MSI \\b(Primo 73K|Primo 73L|Primo 81L|Primo 77|Primo 93|Primo 75|Primo 76|Primo 73|Primo 81|Primo 91|Primo 90|Enjoy 71|Enjoy 7|Enjoy 10)\\b",
        SMiTTablet: "Android.*(\\bMID\\b|MID-560|MTV-T1200|MTV-PND531|MTV-P1101|MTV-PND530)",
        RockChipTablet: "Android.*(RK2818|RK2808A|RK2918|RK3066)|RK2738|RK2808A",
        FlyTablet: "IQ310|Fly Vision",
        bqTablet: "Android.*(bq)?.*(Elcano|Curie|Edison|Maxwell|Kepler|Pascal|Tesla|Hypatia|Platon|Newton|Livingstone|Cervantes|Avant|Aquaris ([E|M]10|M8))|Maxwell.*Lite|Maxwell.*Plus",
        HuaweiTablet: "MediaPad|MediaPad 7 Youth|IDEOS S7|S7-201c|S7-202u|S7-101|S7-103|S7-104|S7-105|S7-106|S7-201|S7-Slim|M2-A01L|BAH-L09|BAH-W09",
        NecTablet: "\\bN-06D|\\bN-08D",
        PantechTablet: "Pantech.*P4100",
        BronchoTablet: "Broncho.*(N701|N708|N802|a710)",
        VersusTablet: "TOUCHPAD.*[78910]|\\bTOUCHTAB\\b",
        ZyncTablet: "z1000|Z99 2G|z99|z930|z999|z990|z909|Z919|z900",
        PositivoTablet: "TB07STA|TB10STA|TB07FTA|TB10FTA",
        NabiTablet: "Android.*\\bNabi",
        KoboTablet: "Kobo Touch|\\bK080\\b|\\bVox\\b Build|\\bArc\\b Build",
        DanewTablet: "DSlide.*\\b(700|701R|702|703R|704|802|970|971|972|973|974|1010|1012)\\b",
        TexetTablet: "NaviPad|TB-772A|TM-7045|TM-7055|TM-9750|TM-7016|TM-7024|TM-7026|TM-7041|TM-7043|TM-7047|TM-8041|TM-9741|TM-9747|TM-9748|TM-9751|TM-7022|TM-7021|TM-7020|TM-7011|TM-7010|TM-7023|TM-7025|TM-7037W|TM-7038W|TM-7027W|TM-9720|TM-9725|TM-9737W|TM-1020|TM-9738W|TM-9740|TM-9743W|TB-807A|TB-771A|TB-727A|TB-725A|TB-719A|TB-823A|TB-805A|TB-723A|TB-715A|TB-707A|TB-705A|TB-709A|TB-711A|TB-890HD|TB-880HD|TB-790HD|TB-780HD|TB-770HD|TB-721HD|TB-710HD|TB-434HD|TB-860HD|TB-840HD|TB-760HD|TB-750HD|TB-740HD|TB-730HD|TB-722HD|TB-720HD|TB-700HD|TB-500HD|TB-470HD|TB-431HD|TB-430HD|TB-506|TB-504|TB-446|TB-436|TB-416|TB-146SE|TB-126SE",
        PlaystationTablet: "Playstation.*(Portable|Vita)",
        TrekstorTablet: "ST10416-1|VT10416-1|ST70408-1|ST702xx-1|ST702xx-2|ST80208|ST97216|ST70104-2|VT10416-2|ST10216-2A|SurfTab",
        PyleAudioTablet: "\\b(PTBL10CEU|PTBL10C|PTBL72BC|PTBL72BCEU|PTBL7CEU|PTBL7C|PTBL92BC|PTBL92BCEU|PTBL9CEU|PTBL9CUK|PTBL9C)\\b",
        AdvanTablet: "Android.* \\b(E3A|T3X|T5C|T5B|T3E|T3C|T3B|T1J|T1F|T2A|T1H|T1i|E1C|T1-E|T5-A|T4|E1-B|T2Ci|T1-B|T1-D|O1-A|E1-A|T1-A|T3A|T4i)\\b ",
        DanyTechTablet: "Genius Tab G3|Genius Tab S2|Genius Tab Q3|Genius Tab G4|Genius Tab Q4|Genius Tab G-II|Genius TAB GII|Genius TAB GIII|Genius Tab S1",
        GalapadTablet: "Android.*\\bG1\\b(?!\\))",
        MicromaxTablet: "Funbook|Micromax.*\\b(P250|P560|P360|P362|P600|P300|P350|P500|P275)\\b",
        KarbonnTablet: "Android.*\\b(A39|A37|A34|ST8|ST10|ST7|Smart Tab3|Smart Tab2)\\b",
        AllFineTablet: "Fine7 Genius|Fine7 Shine|Fine7 Air|Fine8 Style|Fine9 More|Fine10 Joy|Fine11 Wide",
        PROSCANTablet: "\\b(PEM63|PLT1023G|PLT1041|PLT1044|PLT1044G|PLT1091|PLT4311|PLT4311PL|PLT4315|PLT7030|PLT7033|PLT7033D|PLT7035|PLT7035D|PLT7044K|PLT7045K|PLT7045KB|PLT7071KG|PLT7072|PLT7223G|PLT7225G|PLT7777G|PLT7810K|PLT7849G|PLT7851G|PLT7852G|PLT8015|PLT8031|PLT8034|PLT8036|PLT8080K|PLT8082|PLT8088|PLT8223G|PLT8234G|PLT8235G|PLT8816K|PLT9011|PLT9045K|PLT9233G|PLT9735|PLT9760G|PLT9770G)\\b",
        YONESTablet: "BQ1078|BC1003|BC1077|RK9702|BC9730|BC9001|IT9001|BC7008|BC7010|BC708|BC728|BC7012|BC7030|BC7027|BC7026",
        ChangJiaTablet: "TPC7102|TPC7103|TPC7105|TPC7106|TPC7107|TPC7201|TPC7203|TPC7205|TPC7210|TPC7708|TPC7709|TPC7712|TPC7110|TPC8101|TPC8103|TPC8105|TPC8106|TPC8203|TPC8205|TPC8503|TPC9106|TPC9701|TPC97101|TPC97103|TPC97105|TPC97106|TPC97111|TPC97113|TPC97203|TPC97603|TPC97809|TPC97205|TPC10101|TPC10103|TPC10106|TPC10111|TPC10203|TPC10205|TPC10503",
        GUTablet: "TX-A1301|TX-M9002|Q702|kf026",
        PointOfViewTablet: "TAB-P506|TAB-navi-7-3G-M|TAB-P517|TAB-P-527|TAB-P701|TAB-P703|TAB-P721|TAB-P731N|TAB-P741|TAB-P825|TAB-P905|TAB-P925|TAB-PR945|TAB-PL1015|TAB-P1025|TAB-PI1045|TAB-P1325|TAB-PROTAB[0-9]+|TAB-PROTAB25|TAB-PROTAB26|TAB-PROTAB27|TAB-PROTAB26XL|TAB-PROTAB2-IPS9|TAB-PROTAB30-IPS9|TAB-PROTAB25XXL|TAB-PROTAB26-IPS10|TAB-PROTAB30-IPS10",
        OvermaxTablet: "OV-(SteelCore|NewBase|Basecore|Baseone|Exellen|Quattor|EduTab|Solution|ACTION|BasicTab|TeddyTab|MagicTab|Stream|TB-08|TB-09)|Qualcore 1027",
        HCLTablet: "HCL.*Tablet|Connect-3G-2.0|Connect-2G-2.0|ME Tablet U1|ME Tablet U2|ME Tablet G1|ME Tablet X1|ME Tablet Y2|ME Tablet Sync",
        DPSTablet: "DPS Dream 9|DPS Dual 7",
        VistureTablet: "V97 HD|i75 3G|Visture V4( HD)?|Visture V5( HD)?|Visture V10",
        CrestaTablet: "CTP(-)?810|CTP(-)?818|CTP(-)?828|CTP(-)?838|CTP(-)?888|CTP(-)?978|CTP(-)?980|CTP(-)?987|CTP(-)?988|CTP(-)?989",
        MediatekTablet: "\\bMT8125|MT8389|MT8135|MT8377\\b",
        ConcordeTablet: "Concorde([ ]+)?Tab|ConCorde ReadMan",
        GoCleverTablet: "GOCLEVER TAB|A7GOCLEVER|M1042|M7841|M742|R1042BK|R1041|TAB A975|TAB A7842|TAB A741|TAB A741L|TAB M723G|TAB M721|TAB A1021|TAB I921|TAB R721|TAB I720|TAB T76|TAB R70|TAB R76.2|TAB R106|TAB R83.2|TAB M813G|TAB I721|GCTA722|TAB I70|TAB I71|TAB S73|TAB R73|TAB R74|TAB R93|TAB R75|TAB R76.1|TAB A73|TAB A93|TAB A93.2|TAB T72|TAB R83|TAB R974|TAB R973|TAB A101|TAB A103|TAB A104|TAB A104.2|R105BK|M713G|A972BK|TAB A971|TAB R974.2|TAB R104|TAB R83.3|TAB A1042",
        ModecomTablet: "FreeTAB 9000|FreeTAB 7.4|FreeTAB 7004|FreeTAB 7800|FreeTAB 2096|FreeTAB 7.5|FreeTAB 1014|FreeTAB 1001 |FreeTAB 8001|FreeTAB 9706|FreeTAB 9702|FreeTAB 7003|FreeTAB 7002|FreeTAB 1002|FreeTAB 7801|FreeTAB 1331|FreeTAB 1004|FreeTAB 8002|FreeTAB 8014|FreeTAB 9704|FreeTAB 1003",
        VoninoTablet: "\\b(Argus[ _]?S|Diamond[ _]?79HD|Emerald[ _]?78E|Luna[ _]?70C|Onyx[ _]?S|Onyx[ _]?Z|Orin[ _]?HD|Orin[ _]?S|Otis[ _]?S|SpeedStar[ _]?S|Magnet[ _]?M9|Primus[ _]?94[ _]?3G|Primus[ _]?94HD|Primus[ _]?QS|Android.*\\bQ8\\b|Sirius[ _]?EVO[ _]?QS|Sirius[ _]?QS|Spirit[ _]?S)\\b",
        ECSTablet: "V07OT2|TM105A|S10OT1|TR10CS1",
        StorexTablet: "eZee[_']?(Tab|Go)[0-9]+|TabLC7|Looney Tunes Tab",
        VodafoneTablet: "SmartTab([ ]+)?[0-9]+|SmartTabII10|SmartTabII7|VF-1497",
        EssentielBTablet: "Smart[ ']?TAB[ ]+?[0-9]+|Family[ ']?TAB2",
        RossMoorTablet: "RM-790|RM-997|RMD-878G|RMD-974R|RMT-705A|RMT-701|RME-601|RMT-501|RMT-711",
        iMobileTablet: "i-mobile i-note",
        TolinoTablet: "tolino tab [0-9.]+|tolino shine",
        AudioSonicTablet: "\\bC-22Q|T7-QC|T-17B|T-17P\\b",
        AMPETablet: "Android.* A78 ",
        SkkTablet: "Android.* (SKYPAD|PHOENIX|CYCLOPS)",
        TecnoTablet: "TECNO P9|TECNO DP8D",
        JXDTablet: "Android.* \\b(F3000|A3300|JXD5000|JXD3000|JXD2000|JXD300B|JXD300|S5800|S7800|S602b|S5110b|S7300|S5300|S602|S603|S5100|S5110|S601|S7100a|P3000F|P3000s|P101|P200s|P1000m|P200m|P9100|P1000s|S6600b|S908|P1000|P300|S18|S6600|S9100)\\b",
        iJoyTablet: "Tablet (Spirit 7|Essentia|Galatea|Fusion|Onix 7|Landa|Titan|Scooby|Deox|Stella|Themis|Argon|Unique 7|Sygnus|Hexen|Finity 7|Cream|Cream X2|Jade|Neon 7|Neron 7|Kandy|Scape|Saphyr 7|Rebel|Biox|Rebel|Rebel 8GB|Myst|Draco 7|Myst|Tab7-004|Myst|Tadeo Jones|Tablet Boing|Arrow|Draco Dual Cam|Aurix|Mint|Amity|Revolution|Finity 9|Neon 9|T9w|Amity 4GB Dual Cam|Stone 4GB|Stone 8GB|Andromeda|Silken|X2|Andromeda II|Halley|Flame|Saphyr 9,7|Touch 8|Planet|Triton|Unique 10|Hexen 10|Memphis 4GB|Memphis 8GB|Onix 10)",
        FX2Tablet: "FX2 PAD7|FX2 PAD10",
        XoroTablet: "KidsPAD 701|PAD[ ]?712|PAD[ ]?714|PAD[ ]?716|PAD[ ]?717|PAD[ ]?718|PAD[ ]?720|PAD[ ]?721|PAD[ ]?722|PAD[ ]?790|PAD[ ]?792|PAD[ ]?900|PAD[ ]?9715D|PAD[ ]?9716DR|PAD[ ]?9718DR|PAD[ ]?9719QR|PAD[ ]?9720QR|TelePAD1030|Telepad1032|TelePAD730|TelePAD731|TelePAD732|TelePAD735Q|TelePAD830|TelePAD9730|TelePAD795|MegaPAD 1331|MegaPAD 1851|MegaPAD 2151",
        ViewsonicTablet: "ViewPad 10pi|ViewPad 10e|ViewPad 10s|ViewPad E72|ViewPad7|ViewPad E100|ViewPad 7e|ViewSonic VB733|VB100a",
        VerizonTablet: "QTAQZ3|QTAIR7|QTAQTZ3|QTASUN1|QTASUN2|QTAXIA1",
        OdysTablet: "LOOX|XENO10|ODYS[ -](Space|EVO|Xpress|NOON)|\\bXELIO\\b|Xelio10Pro|XELIO7PHONETAB|XELIO10EXTREME|XELIOPT2|NEO_QUAD10",
        CaptivaTablet: "CAPTIVA PAD",
        IconbitTablet: "NetTAB|NT-3702|NT-3702S|NT-3702S|NT-3603P|NT-3603P|NT-0704S|NT-0704S|NT-3805C|NT-3805C|NT-0806C|NT-0806C|NT-0909T|NT-0909T|NT-0907S|NT-0907S|NT-0902S|NT-0902S",
        TeclastTablet: "T98 4G|\\bP80\\b|\\bX90HD\\b|X98 Air|X98 Air 3G|\\bX89\\b|P80 3G|\\bX80h\\b|P98 Air|\\bX89HD\\b|P98 3G|\\bP90HD\\b|P89 3G|X98 3G|\\bP70h\\b|P79HD 3G|G18d 3G|\\bP79HD\\b|\\bP89s\\b|\\bA88\\b|\\bP10HD\\b|\\bP19HD\\b|G18 3G|\\bP78HD\\b|\\bA78\\b|\\bP75\\b|G17s 3G|G17h 3G|\\bP85t\\b|\\bP90\\b|\\bP11\\b|\\bP98t\\b|\\bP98HD\\b|\\bG18d\\b|\\bP85s\\b|\\bP11HD\\b|\\bP88s\\b|\\bA80HD\\b|\\bA80se\\b|\\bA10h\\b|\\bP89\\b|\\bP78s\\b|\\bG18\\b|\\bP85\\b|\\bA70h\\b|\\bA70\\b|\\bG17\\b|\\bP18\\b|\\bA80s\\b|\\bA11s\\b|\\bP88HD\\b|\\bA80h\\b|\\bP76s\\b|\\bP76h\\b|\\bP98\\b|\\bA10HD\\b|\\bP78\\b|\\bP88\\b|\\bA11\\b|\\bA10t\\b|\\bP76a\\b|\\bP76t\\b|\\bP76e\\b|\\bP85HD\\b|\\bP85a\\b|\\bP86\\b|\\bP75HD\\b|\\bP76v\\b|\\bA12\\b|\\bP75a\\b|\\bA15\\b|\\bP76Ti\\b|\\bP81HD\\b|\\bA10\\b|\\bT760VE\\b|\\bT720HD\\b|\\bP76\\b|\\bP73\\b|\\bP71\\b|\\bP72\\b|\\bT720SE\\b|\\bC520Ti\\b|\\bT760\\b|\\bT720VE\\b|T720-3GE|T720-WiFi",
        OndaTablet: "\\b(V975i|Vi30|VX530|V701|Vi60|V701s|Vi50|V801s|V719|Vx610w|VX610W|V819i|Vi10|VX580W|Vi10|V711s|V813|V811|V820w|V820|Vi20|V711|VI30W|V712|V891w|V972|V819w|V820w|Vi60|V820w|V711|V813s|V801|V819|V975s|V801|V819|V819|V818|V811|V712|V975m|V101w|V961w|V812|V818|V971|V971s|V919|V989|V116w|V102w|V973|Vi40)\\b[\\s]+|V10 \\b4G\\b",
        JaytechTablet: "TPC-PA762",
        BlaupunktTablet: "Endeavour 800NG|Endeavour 1010",
        DigmaTablet: "\\b(iDx10|iDx9|iDx8|iDx7|iDxD7|iDxD8|iDsQ8|iDsQ7|iDsQ8|iDsD10|iDnD7|3TS804H|iDsQ11|iDj7|iDs10)\\b",
        EvolioTablet: "ARIA_Mini_wifi|Aria[ _]Mini|Evolio X10|Evolio X7|Evolio X8|\\bEvotab\\b|\\bNeura\\b",
        LavaTablet: "QPAD E704|\\bIvoryS\\b|E-TAB IVORY|\\bE-TAB\\b",
        AocTablet: "MW0811|MW0812|MW0922|MTK8382|MW1031|MW0831|MW0821|MW0931|MW0712",
        MpmanTablet: "MP11 OCTA|MP10 OCTA|MPQC1114|MPQC1004|MPQC994|MPQC974|MPQC973|MPQC804|MPQC784|MPQC780|\\bMPG7\\b|MPDCG75|MPDCG71|MPDC1006|MP101DC|MPDC9000|MPDC905|MPDC706HD|MPDC706|MPDC705|MPDC110|MPDC100|MPDC99|MPDC97|MPDC88|MPDC8|MPDC77|MP709|MID701|MID711|MID170|MPDC703|MPQC1010",
        CelkonTablet: "CT695|CT888|CT[\\s]?910|CT7 Tab|CT9 Tab|CT3 Tab|CT2 Tab|CT1 Tab|C820|C720|\\bCT-1\\b",
        WolderTablet: "miTab \\b(DIAMOND|SPACE|BROOKLYN|NEO|FLY|MANHATTAN|FUNK|EVOLUTION|SKY|GOCAR|IRON|GENIUS|POP|MINT|EPSILON|BROADWAY|JUMP|HOP|LEGEND|NEW AGE|LINE|ADVANCE|FEEL|FOLLOW|LIKE|LINK|LIVE|THINK|FREEDOM|CHICAGO|CLEVELAND|BALTIMORE-GH|IOWA|BOSTON|SEATTLE|PHOENIX|DALLAS|IN 101|MasterChef)\\b",
        MediacomTablet: "M-MPI10C3G|M-SP10EG|M-SP10EGP|M-SP10HXAH|M-SP7HXAH|M-SP10HXBH|M-SP8HXAH|M-SP8MXA",
        MiTablet: "\\bMI PAD\\b|\\bHM NOTE 1W\\b",
        NibiruTablet: "Nibiru M1|Nibiru Jupiter One",
        NexoTablet: "NEXO NOVA|NEXO 10|NEXO AVIO|NEXO FREE|NEXO GO|NEXO EVO|NEXO 3G|NEXO SMART|NEXO KIDDO|NEXO MOBI",
        LeaderTablet: "TBLT10Q|TBLT10I|TBL-10WDKB|TBL-10WDKBO2013|TBL-W230V2|TBL-W450|TBL-W500|SV572|TBLT7I|TBA-AC7-8G|TBLT79|TBL-8W16|TBL-10W32|TBL-10WKB|TBL-W100",
        UbislateTablet: "UbiSlate[\\s]?7C",
        PocketBookTablet: "Pocketbook",
        KocasoTablet: "\\b(TB-1207)\\b",
        HisenseTablet: "\\b(F5281|E2371)\\b",
        Hudl: "Hudl HT7S3|Hudl 2",
        TelstraTablet: "T-Hub2",
        GenericTablet: "Android.*\\b97D\\b|Tablet(?!.*PC)|BNTV250A|MID-WCDMA|LogicPD Zoom2|\\bA7EB\\b|CatNova8|A1_07|CT704|CT1002|\\bM721\\b|rk30sdk|\\bEVOTAB\\b|M758A|ET904|ALUMIUM10|Smartfren Tab|Endeavour 1010|Tablet-PC-4|Tagi Tab|\\bM6pro\\b|CT1020W|arc 10HD|\\bTP750\\b|\\bQTAQZ3\\b|WVT101|TM1088|KT107"
      },
      oss: {
        AndroidOS: "Android",
        BlackBerryOS: "blackberry|\\bBB10\\b|rim tablet os",
        PalmOS: "PalmOS|avantgo|blazer|elaine|hiptop|palm|plucker|xiino",
        SymbianOS: "Symbian|SymbOS|Series60|Series40|SYB-[0-9]+|\\bS60\\b",
        WindowsMobileOS: "Windows CE.*(PPC|Smartphone|Mobile|[0-9]{3}x[0-9]{3})|Window Mobile|Windows Phone [0-9.]+|WCE;",
        WindowsPhoneOS: "Windows Phone 10.0|Windows Phone 8.1|Windows Phone 8.0|Windows Phone OS|XBLWP7|ZuneWP7|Windows NT 6.[23]; ARM;",
        iOS: "\\biPhone.*Mobile|\\biPod|\\biPad|AppleCoreMedia",
        MeeGoOS: "MeeGo",
        MaemoOS: "Maemo",
        JavaOS: "J2ME/|\\bMIDP\\b|\\bCLDC\\b",
        webOS: "webOS|hpwOS",
        badaOS: "\\bBada\\b",
        BREWOS: "BREW"
      },
      uas: {
        Chrome: "\\bCrMo\\b|CriOS|Android.*Chrome/[.0-9]* (Mobile)?",
        Dolfin: "\\bDolfin\\b",
        Opera: "Opera.*Mini|Opera.*Mobi|Android.*Opera|Mobile.*OPR/[0-9.]+$|Coast/[0-9.]+",
        Skyfire: "Skyfire",
        Edge: "Mobile Safari/[.0-9]* Edge",
        IE: "IEMobile|MSIEMobile",
        Firefox: "fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile|FxiOS",
        Bolt: "bolt",
        TeaShark: "teashark",
        Blazer: "Blazer",
        Safari: "Version.*Mobile.*Safari|Safari.*Mobile|MobileSafari",
        WeChat: "\\bMicroMessenger\\b",
        UCBrowser: "UC.*Browser|UCWEB",
        baiduboxapp: "baiduboxapp",
        baidubrowser: "baidubrowser",
        DiigoBrowser: "DiigoBrowser",
        Puffin: "Puffin",
        Mercury: "\\bMercury\\b",
        ObigoBrowser: "Obigo",
        NetFront: "NF-Browser",
        GenericBrowser: "NokiaBrowser|OviBrowser|OneBrowser|TwonkyBeamBrowser|SEMC.*Browser|FlyFlow|Minimo|NetFront|Novarra-Vision|MQQBrowser|MicroMessenger",
        PaleMoon: "Android.*PaleMoon|Mobile.*PaleMoon"
      },
      props: {
        Mobile: "Mobile/[VER]",
        Build: "Build/[VER]",
        Version: "Version/[VER]",
        VendorID: "VendorID/[VER]",
        iPad: "iPad.*CPU[a-z ]+[VER]",
        iPhone: "iPhone.*CPU[a-z ]+[VER]",
        iPod: "iPod.*CPU[a-z ]+[VER]",
        Kindle: "Kindle/[VER]",
        Chrome: ["Chrome/[VER]", "CriOS/[VER]", "CrMo/[VER]"],
        Coast: ["Coast/[VER]"],
        Dolfin: "Dolfin/[VER]",
        Firefox: ["Firefox/[VER]", "FxiOS/[VER]"],
        Fennec: "Fennec/[VER]",
        Edge: "Edge/[VER]",
        IE: ["IEMobile/[VER];", "IEMobile [VER]", "MSIE [VER];", "Trident/[0-9.]+;.*rv:[VER]"],
        NetFront: "NetFront/[VER]",
        NokiaBrowser: "NokiaBrowser/[VER]",
        Opera: [" OPR/[VER]", "Opera Mini/[VER]", "Version/[VER]"],
        "Opera Mini": "Opera Mini/[VER]",
        "Opera Mobi": "Version/[VER]",
        UCBrowser: ["UCWEB[VER]", "UC.*Browser/[VER]"],
        MQQBrowser: "MQQBrowser/[VER]",
        MicroMessenger: "MicroMessenger/[VER]",
        baiduboxapp: "baiduboxapp/[VER]",
        baidubrowser: "baidubrowser/[VER]",
        SamsungBrowser: "SamsungBrowser/[VER]",
        Iron: "Iron/[VER]",
        Safari: ["Version/[VER]", "Safari/[VER]"],
        Skyfire: "Skyfire/[VER]",
        Tizen: "Tizen/[VER]",
        Webkit: "webkit[ /][VER]",
        PaleMoon: "PaleMoon/[VER]",
        Gecko: "Gecko/[VER]",
        Trident: "Trident/[VER]",
        Presto: "Presto/[VER]",
        Goanna: "Goanna/[VER]",
        iOS: " \\bi?OS\\b [VER][ ;]{1}",
        Android: "Android [VER]",
        BlackBerry: ["BlackBerry[\\w]+/[VER]", "BlackBerry.*Version/[VER]", "Version/[VER]"],
        BREW: "BREW [VER]",
        Java: "Java/[VER]",
        "Windows Phone OS": ["Windows Phone OS [VER]", "Windows Phone [VER]"],
        "Windows Phone": "Windows Phone [VER]",
        "Windows CE": "Windows CE/[VER]",
        "Windows NT": "Windows NT [VER]",
        Symbian: ["SymbianOS/[VER]", "Symbian/[VER]"],
        webOS: ["webOS/[VER]", "hpwOS/[VER];"]
      },
      utils: {
        Bot: "Googlebot|facebookexternalhit|AdsBot-Google|Google Keyword Suggestion|Facebot|YandexBot|YandexMobileBot|bingbot|ia_archiver|AhrefsBot|Ezooms|GSLFbot|WBSearchBot|Twitterbot|TweetmemeBot|Twikle|PaperLiBot|Wotbox|UnwindFetchor|Exabot|MJ12bot|YandexImages|TurnitinBot|Pingdom",
        MobileBot: "Googlebot-Mobile|AdsBot-Google-Mobile|YahooSeeker/M1A1-R2D2",
        DesktopMode: "WPDesktop",
        TV: "SonyDTV|HbbTV",
        WebKit: "(webkit)[ /]([\\w.]+)",
        Console: "\\b(Nintendo|Nintendo WiiU|Nintendo 3DS|Nintendo Switch|PLAYSTATION|Xbox)\\b",
        Watch: "SM-V700"
      }
    }, g.detectMobileBrowsers = {
      fullPattern: /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
      shortPattern: /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
      tabletPattern: /android|ipad|playbook|silk/i
    };
    var h,
        i = Object.prototype.hasOwnProperty;
    return g.FALLBACK_PHONE = "UnknownPhone", g.FALLBACK_TABLET = "UnknownTablet", g.FALLBACK_MOBILE = "UnknownMobile", h = "isArray" in Array ? Array.isArray : function (a) {
      return "[object Array]" === Object.prototype.toString.call(a);
    }, function () {
      var a,
          b,
          c,
          e,
          f,
          j,
          k = g.mobileDetectRules;

      for (a in k.props) {
        if (i.call(k.props, a)) {
          for (b = k.props[a], h(b) || (b = [b]), f = b.length, e = 0; e < f; ++e) {
            c = b[e], j = c.indexOf("[VER]"), j >= 0 && (c = c.substring(0, j) + "([\\w._\\+]+)" + c.substring(j + 5)), b[e] = new RegExp(c, "i");
          }

          k.props[a] = b;
        }
      }

      d(k.oss), d(k.phones), d(k.tablets), d(k.uas), d(k.utils), k.oss0 = {
        WindowsPhoneOS: k.oss.WindowsPhoneOS,
        WindowsMobileOS: k.oss.WindowsMobileOS
      };
    }(), g.findMatch = function (a, b) {
      for (var c in a) {
        if (i.call(a, c) && a[c].test(b)) return c;
      }

      return null;
    }, g.findMatches = function (a, b) {
      var c = [];

      for (var d in a) {
        i.call(a, d) && a[d].test(b) && c.push(d);
      }

      return c;
    }, g.getVersionStr = function (a, b) {
      var c,
          d,
          e,
          f,
          h = g.mobileDetectRules.props;
      if (i.call(h, a)) for (c = h[a], e = c.length, d = 0; d < e; ++d) {
        if (f = c[d].exec(b), null !== f) return f[1];
      }
      return null;
    }, g.getVersion = function (a, b) {
      var c = g.getVersionStr(a, b);
      return c ? g.prepareVersionNo(c) : NaN;
    }, g.prepareVersionNo = function (a) {
      var b;
      return b = a.split(/[a-z._ \/\-]/i), 1 === b.length && (a = b[0]), b.length > 1 && (a = b[0] + ".", b.shift(), a += b.join("")), Number(a);
    }, g.isMobileFallback = function (a) {
      return g.detectMobileBrowsers.fullPattern.test(a) || g.detectMobileBrowsers.shortPattern.test(a.substr(0, 4));
    }, g.isTabletFallback = function (a) {
      return g.detectMobileBrowsers.tabletPattern.test(a);
    }, g.prepareDetectionCache = function (a, c, d) {
      if (a.mobile === b) {
        var e, h, i;
        return (h = g.findMatch(g.mobileDetectRules.tablets, c)) ? (a.mobile = a.tablet = h, void (a.phone = null)) : (e = g.findMatch(g.mobileDetectRules.phones, c)) ? (a.mobile = a.phone = e, void (a.tablet = null)) : void (g.isMobileFallback(c) ? (i = f.isPhoneSized(d), i === b ? (a.mobile = g.FALLBACK_MOBILE, a.tablet = a.phone = null) : i ? (a.mobile = a.phone = g.FALLBACK_PHONE, a.tablet = null) : (a.mobile = a.tablet = g.FALLBACK_TABLET, a.phone = null)) : g.isTabletFallback(c) ? (a.mobile = a.tablet = g.FALLBACK_TABLET, a.phone = null) : a.mobile = a.tablet = a.phone = null);
      }
    }, g.mobileGrade = function (a) {
      var b = null !== a.mobile();
      return a.os("iOS") && a.version("iPad") >= 4.3 || a.os("iOS") && a.version("iPhone") >= 3.1 || a.os("iOS") && a.version("iPod") >= 3.1 || a.version("Android") > 2.1 && a.is("Webkit") || a.version("Windows Phone OS") >= 7 || a.is("BlackBerry") && a.version("BlackBerry") >= 6 || a.match("Playbook.*Tablet") || a.version("webOS") >= 1.4 && a.match("Palm|Pre|Pixi") || a.match("hp.*TouchPad") || a.is("Firefox") && a.version("Firefox") >= 12 || a.is("Chrome") && a.is("AndroidOS") && a.version("Android") >= 4 || a.is("Skyfire") && a.version("Skyfire") >= 4.1 && a.is("AndroidOS") && a.version("Android") >= 2.3 || a.is("Opera") && a.version("Opera Mobi") > 11 && a.is("AndroidOS") || a.is("MeeGoOS") || a.is("Tizen") || a.is("Dolfin") && a.version("Bada") >= 2 || (a.is("UC Browser") || a.is("Dolfin")) && a.version("Android") >= 2.3 || a.match("Kindle Fire") || a.is("Kindle") && a.version("Kindle") >= 3 || a.is("AndroidOS") && a.is("NookTablet") || a.version("Chrome") >= 11 && !b || a.version("Safari") >= 5 && !b || a.version("Firefox") >= 4 && !b || a.version("MSIE") >= 7 && !b || a.version("Opera") >= 10 && !b ? "A" : a.os("iOS") && a.version("iPad") < 4.3 || a.os("iOS") && a.version("iPhone") < 3.1 || a.os("iOS") && a.version("iPod") < 3.1 || a.is("Blackberry") && a.version("BlackBerry") >= 5 && a.version("BlackBerry") < 6 || a.version("Opera Mini") >= 5 && a.version("Opera Mini") <= 6.5 && (a.version("Android") >= 2.3 || a.is("iOS")) || a.match("NokiaN8|NokiaC7|N97.*Series60|Symbian/3") || a.version("Opera Mobi") >= 11 && a.is("SymbianOS") ? "B" : (a.version("BlackBerry") < 5 || a.match("MSIEMobile|Windows CE.*Mobile") || a.version("Windows Mobile") <= 5.2, "C");
    }, g.detectOS = function (a) {
      return g.findMatch(g.mobileDetectRules.oss0, a) || g.findMatch(g.mobileDetectRules.oss, a);
    }, g.getDeviceSmallerSide = function () {
      return window.screen.width < window.screen.height ? window.screen.width : window.screen.height;
    }, f.prototype = {
      constructor: f,
      mobile: function mobile() {
        return g.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth), this._cache.mobile;
      },
      phone: function phone() {
        return g.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth), this._cache.phone;
      },
      tablet: function tablet() {
        return g.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth), this._cache.tablet;
      },
      userAgent: function userAgent() {
        return this._cache.userAgent === b && (this._cache.userAgent = g.findMatch(g.mobileDetectRules.uas, this.ua)), this._cache.userAgent;
      },
      userAgents: function userAgents() {
        return this._cache.userAgents === b && (this._cache.userAgents = g.findMatches(g.mobileDetectRules.uas, this.ua)), this._cache.userAgents;
      },
      os: function os() {
        return this._cache.os === b && (this._cache.os = g.detectOS(this.ua)), this._cache.os;
      },
      version: function version(a) {
        return g.getVersion(a, this.ua);
      },
      versionStr: function versionStr(a) {
        return g.getVersionStr(a, this.ua);
      },
      is: function is(b) {
        return c(this.userAgents(), b) || a(b, this.os()) || a(b, this.phone()) || a(b, this.tablet()) || c(g.findMatches(g.mobileDetectRules.utils, this.ua), b);
      },
      match: function match(a) {
        return a instanceof RegExp || (a = new RegExp(a, "i")), a.test(this.ua);
      },
      isPhoneSized: function isPhoneSized(a) {
        return f.isPhoneSized(a || this.maxPhoneWidth);
      },
      mobileGrade: function mobileGrade() {
        return this._cache.grade === b && (this._cache.grade = g.mobileGrade(this)), this._cache.grade;
      }
    }, "undefined" != typeof window && window.screen ? f.isPhoneSized = function (a) {
      return a < 0 ? b : g.getDeviceSmallerSide() <= a;
    } : f.isPhoneSized = function () {}, f._impl = g, f.version = "1.4.3 2018-09-08", f;
  });
}(function (a) {
  if ("undefined" != typeof module && module.exports) return function (a) {
    module.exports = a();
  };
  if ("function" == typeof define && define.amd) return define;
  if ("undefined" != typeof window) return function (a) {
    window.MobileDetect = a();
  };
  throw new Error("unknown environment");
}());
/*
  termlib.js - JS-WebTerminal Object v1.66

  (c) Norbert Landsteiner 2003-2015
  mass:werk - media environments
  <http://www.masswerk.at/termlib/>

  Creates [multiple] Terminal instances.

  Synopsis:

  myTerminal = new Terminal(<config object>);
  myTerminal.open();

  <config object> overrides any values of object `TerminalDefaults'.
  individual values of `id' must be supplied for multiple terminals.
  `handler' specifies a function to be called for input handling.
  (see `Terminal.prototype.defaultHandler()' and documentation.)

  globals defined in this library:
  	Terminal           (Terminal object)
    TerminalDefaults   (default configuration)
    termDefaultHandler (default command line handler)
    TermGlobals        (common vars and code for all instances)
    termKey            (named mappings for special keys)
    termDomKeyRef      (special key mapping for DOM constants)

  (please see the v. 1.4 history entry on these elements)

  required CSS classes for font definitions: ".term", ".termReverse".

  Compatibilty:
  Standard web browsers with a JavaScript implementation compliant to
  ECMA-262 2nd edition and support for the anonymous array and object
  constructs and the anonymous function construct in the form of
  "myfunc=function(x) {}" (c.f. ECMA-262 3rd edion for details).
  This comprises almost all current browsers but Konquerer (khtml) and
  versions of Apple Safari for Mac OS 10.0-10.28 (Safari 1.0) which
  lack support for keyboard events.
  v1.5: Dropped support of Netscape 4 (layers)

  License:
  This JavaScript-library is free.
  Include a visible backlink to <http://www.masswerk.at/termlib/> in the
  embedding web page or application.
  The library should always be accompanied by the 'readme.txt' and the
  sample HTML-documents.

  Any changes should be commented and must be reflected in `Terminal.version'
  in the format: "Version.Subversion (compatibility)".

  Donations:
  Donations are welcome: You may support and/or honor the development of
  "termlib.js" via PayPal at: <http://www.masswerk.at/termlib/donate/>

  Disclaimer:
  This software is distributed AS IS and in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. The entire risk as to
  the quality and performance of the product is borne by the user. No use of
  the product is authorized hereunder except under this disclaimer.

  ### The sections above must not be removed. ###

  version 1.01: added Terminal.prototype.resizeTo(x,y)
                added Terminal.conf.fontClass (=> configureable class name)
                Terminal.prototype.open() now checks for element conf.termDiv
                in advance and returns success.

  version 1.02: added support for <TAB> and Euro sign
                (Terminal.conf.printTab, Terminal.conf.printEuro)
                and a method to evaluate printable chars:
                Terminal.prototype.isPrintable(keycode)

  version 1.03: added global keyboard locking (TermGlobals.keylock)
                modified Terminal.prototype.redraw for speed (use of locals)

  version 1.04: modified the key handler to fix a bug with MSIE5/Mac
                fixed a bug in TermGlobals.setVisible with older MSIE-alike
                browsers without DOM support.

  version 1.05: added config flag historyUnique.

  version 1.06: fixed CTRl+ALT (Windows alt gr) isn't CTRL any more
                fixed double backspace bug for Safari;
                added TermGlobals.setDisplay for setting style.display props
                termlib.js now outputs lower case html (xhtml compatibility)

  version 1.07: added method rebuild() to rebuild with new color settings.

  version 1.1:  fixed a bug in 'more' output mode (cursor could be hidden after
                quit)
                added socket-extension for server-client talk in a separate file
                -> "temlib_socket.js" (to be loaded after termlib.js)
                (this is a separate file because we break our compatibility
                guide lines with this IO/AJAX library.)

  version 1.2   added color support ("%[+-]c(<color>)" markup)
                moved paste support from sample file to lib
                * TermGlobals.insertText( <text>)
                * TermGlobals.importEachLine( <text> )
                * TermGlobals.importMultiLine( <text> )

  version 1.3   added word wrapping to write()
                * activate with myTerm.wrapOn()
                * deactivate with myTerm.wrapOff()
                use conf.wrapping (boolean) for a global setting

  version 1.4   Terminal is now an entirely self-contained object
                Global references to inner objects for backward compatipility:
                * TerminalDefaults   => Terminal.prototype.Defaults
                * termDefaultHandler => Terminal.prototype.defaultHandler
                * termKey            => Terminal.prototype.globals.termKey
                                        see also: Terminal.prototype.termKey
                * TermGlobals        => Terminal.prototype.globals
                * termDomKeyRef      => Terminal.prototype.globals.termDomKeyRef

                So in effect to outside scripts everything remains the same;
                no need to rewrite any existing scripts.
                You may now use "this.globals" inside any handlers
                to refer to the static global object (TermGlobals).
                You may also refer to key definitions as "this.termKey.*".
                (Please mind that "this.termKey" is a reference to the static object
                and not specific to the instance. A change to "this.termKey" will be
                by any other instances of Terminal too.)

                Added method TermGlobals.assignStyle() for custom styles & mark up.

                Unified the color mark up: You may now use color codes (decimal or hex)
                inside brackets. e.g.: %c(10)DARKRED%c() or %c(a)DARKRED%c()

                Added key repeat for remapped keys (cursor movements etc).

  version 1.41  fixed a bug in the word wrapping regarding write() output, when
                the cursor was set with cursorSet() before.

  version 1.42  fixed a bug which caused Opera to delete 2 chars at once.
                introduced property Terminal.isOpera (Boolean)

  version 1.43  enhanced the control handler so it also catches ESC if flag closeOnESC
                is set to false. fixed a bug with Safari which fired repeated events
                for the control handler for TAB if flag printTab was set to false.

  version 1.5   Changed the license.
                Dropped support for Netscape 4 (layers).
                HTML-elements are now created by document.createElement, if applicable.
                Included the formerly separate socket extension in the main library.
                Added methods 'backupScreen()' and 'restoreScreen()' to save a screen
                and restore it's content from backup. (see the globbing sample).

  version 1.51  Added basic support of ANSI-SGR-sequences.

  version 1.52  Added method swapBackup(), reorganized some of the accompanying files.

  version 1.54  Fixed BACK_SPACE for Chrome, DELETE for Safari/WebKit.

  version 1.55  Fixed dead keys issue for Mac OS (Leapard & later), vowels only.
  version 1.56  Fixed new ESC issue for Safari.
  version 1.57  Fixed dead keys fix: now only for Safari/Mac, German (de-de).
  version 1.59  Dropped dead keys fix, fixed backspace for Safari.
  version 1.6   Saved some bytes by discarding traces of ancient condition syntax
                Added input mode "fieldMode"
  version 1.61  Changes to defaults implementation of the constructor.
  version 1.62  Fixed a bug related to AltGr-sequences with IE8+.
  version 1.65  Added options for textColor and textBlur.
  version 1.66  textBlur accepts also an array of values for multiple text-shadows.

*/

var Terminal = function Terminal(conf) {
  if (_typeof(conf) != 'object') conf = new Object();

  for (var i in this.Defaults) {
    if (typeof conf[i] == 'undefined') conf[i] = this.Defaults[i];
  }

  if (typeof conf.handler != 'function') conf.handler = Terminal.prototype.defaultHandler;
  this.conf = conf;
  this.setInitValues();
};

Terminal.prototype = {
  // prototype definitions (save some 2k on indentation)
  version: '1.66 (original)',
  Defaults: {
    // dimensions
    cols: 80,
    rows: 24,
    // appearance
    x: 100,
    y: 100,
    termDiv: 'termDiv',
    bgColor: '#181818',
    frameColor: '#555555',
    frameWidth: 1,
    rowHeight: 15,
    blinkDelay: 500,
    // css class
    fontClass: 'term',
    // initial cursor mode
    crsrBlinkMode: false,
    crsrBlockMode: true,
    // key mapping
    DELisBS: false,
    printTab: true,
    printEuro: true,
    catchCtrlH: true,
    closeOnESC: true,
    // prevent consecutive history doublets
    historyUnique: false,
    // optional id
    id: 0,
    // strings
    ps: '>',
    greeting: '%+r Terminal ready. %-r',
    // handlers
    handler: null,
    ctrlHandler: null,
    initHandler: null,
    exitHandler: null,
    wrapping: false,
    mapANSI: false,
    ANSItrueBlack: false,
    textBlur: 0,
    textColor: ''
  },
  setInitValues: function setInitValues() {
    this.isSafari = navigator.userAgent.indexOf('Safari') >= 0 || navigator.userAgent.indexOf('WebKit') >= 0 ? true : false;
    this.isOpera = window.opera && navigator.userAgent.indexOf('Opera') >= 0 ? true : false;
    this.isChrome = navigator.userAgent.indexOf('Chrome/') >= 0 && navigator.userAgent.indexOf('WebKit') >= 0 ? true : false;
    this.domAPI = document && document.createElement ? true : false;
    this.isMac = navigator.userAgent.indexOf('Mac') >= 0 ? true : false;
    this.id = this.conf.id;
    this.maxLines = this.conf.rows;
    this.maxCols = this.conf.cols;
    this.termDiv = this.conf.termDiv;
    this.crsrBlinkMode = this.conf.crsrBlinkMode;
    this.crsrBlockMode = this.conf.crsrBlockMode;
    this.blinkDelay = this.conf.blinkDelay;
    this.DELisBS = this.conf.DELisBS;
    this.printTab = this.conf.printTab;
    this.printEuro = this.conf.printEuro;
    this.catchCtrlH = this.conf.catchCtrlH;
    this.closeOnESC = this.conf.closeOnESC;
    this.historyUnique = this.conf.historyUnique;
    this.ps = this.conf.ps;
    this.closed = false;
    this.r;
    this.c;
    this.charBuf = new Array();
    this.styleBuf = new Array();
    this.scrollBuf = null;
    this.blinkBuffer = 0;
    this.blinkTimer;
    this.cursoractive = false;
    this.lock = true;
    this.insert = false;
    this.charMode = false;
    this.rawMode = false;
    this.lineBuffer = '';
    this.inputChar = 0;
    this.lastLine = '';
    this.guiCounter = 0;
    this.history = new Array();
    this.histPtr = 0;
    this.env = new Object();
    this.buckupBuffer = null;
    this.handler = this.conf.handler;
    this.wrapping = this.conf.wrapping;
    this.mapANSI = this.conf.mapANSI;
    this.ANSItrueBlack = this.conf.ANSItrueBlack;
    this.ctrlHandler = this.conf.ctrlHandler;
    this.initHandler = this.conf.initHandler;
    this.exitHandler = this.conf.exitHandler;
    this.fieldMode = false;
    this.fieldStart = this.fieldEnd = this.fieldC = 0;

    if (_typeof(this.conf.textBlur) === 'object' && this.conf.textBlur.length) {
      var a = [];

      for (var i = 0; i < this.conf.textBlur.length; i++) {
        var b = Number(this.conf.textBlur[i]);
        if (!isNaN(b) && b > 0) a.push(b);
      }

      this.textBlur = a.length ? a : 0;
    } else {
      this.textBlur = Number(this.conf.textBlur);
      if (isNaN(this.textBlur) || this.textBlur < 0 || this.textBlur > 40) this.textBlur = 0;
    }

    this.textColor = this.conf.textColor || '';
  },
  defaultHandler: function defaultHandler() {
    this.newLine();

    if (this.lineBuffer != '') {
      this.type('You typed: ' + this.lineBuffer);
      this.newLine();
    }

    this.prompt();
  },
  open: function open() {
    if (this.termDivReady()) {
      if (!this.closed) this._makeTerm();
      this.init();
      return true;
    } else {
      return false;
    }
  },
  close: function close() {
    this.lock = true;
    this.cursorOff();
    if (this.exitHandler) this.exitHandler();
    this.globals.setVisible(this.termDiv, 0);
    this.closed = true;
  },
  init: function init() {
    // wait for gui
    if (this.guiReady()) {
      this.guiCounter = 0; // clean up at re-entry

      if (this.closed) {
        this.setInitValues();
      }

      this.clear();
      this.globals.setVisible(this.termDiv, 1);
      this.globals.enableKeyboard(this);

      if (this.initHandler) {
        this.initHandler();
      } else {
        this.write(this.conf.greeting);
        this.newLine();
        this.prompt();
      }
    } else {
      this.guiCounter++;

      if (this.guiCounter > 18000) {
        if (confirm('Terminal:\nYour browser hasn\'t responded for more than 2 minutes.\nRetry?')) {
          this.guiCounter = 0;
        } else {
          return;
        }
      }

      ;
      this.globals.termToInitialze = this;
      window.setTimeout('Terminal.prototype.globals.termToInitialze.init()', 200);
    }
  },
  getRowArray: function getRowArray(l, v) {
    // returns a fresh array of l length initialized with value v
    var a = new Array();

    for (var i = 0; i < l; i++) {
      a[i] = v;
    }

    return a;
  },
  wrapOn: function wrapOn() {
    // activate word wrap, wrapping workes with write() only!
    this.wrapping = true;
  },
  wrapOff: function wrapOff() {
    this.wrapping = false;
  },
  setTextBlur: function setTextBlur(v) {
    var rerender = false;

    if (_typeof(v) === 'object' && v.length) {
      var a = [];

      for (var i = 0; i < v.length; i++) {
        var b = Number(v[i]);
        if (!isNaN(b) && b > 0) a.push(b);
      }

      this.textBlur = a.length ? a : 0;
      rerender = true;
    } else {
      v = Number(v);
      if (isNaN(v) || v < 0 || v > 40) v = 0;

      if (v != this.textBlur) {
        this.textBlur = v;
        rerender = true;
      }
    }

    if (rerender) {
      for (var r = 0, l = this.conf.rows; r < l; r++) {
        this.redraw(r);
      }
    }
  },
  setTextColor: function setTextColor(v) {
    if (!v) v = '';

    if (v != this.textColor) {
      this.textColor = v;

      for (var r = 0, l = this.conf.rows; r < l; r++) {
        this.redraw(r);
      }
    }
  },
  // main output methods
  type: function type(text, style) {
    for (var i = 0; i < text.length; i++) {
      var ch = text.charCodeAt(i);
      if (!this.isPrintable(ch)) ch = 94;
      this.charBuf[this.r][this.c] = ch;
      this.styleBuf[this.r][this.c] = style ? style : 0;
      var last_r = this.r;

      this._incCol();

      if (this.r != last_r) this.redraw(last_r);
    }

    this.redraw(this.r);
  },
  write: function write(text, usemore) {
    // write to scroll buffer with markup
    // new line = '%n' prepare any strings or arrys first
    if (_typeof(text) != 'object') {
      if (typeof text != 'string') text = '' + text;

      if (text.indexOf('\n') >= 0) {
        var ta = text.split('\n');
        text = ta.join('%n');
      }
    } else {
      if (text.join) {
        text = text.join('%n');
      } else {
        text = '' + text;
      }

      if (text.indexOf('\n') >= 0) {
        var ta = text.split('\n');
        text = ta.join('%n');
      }
    }

    if (this.mapANSI) text = this.globals.ANSI_map(text, this.ANSItrueBlack);

    this._sbInit(usemore);

    var chunks = text.split('%');
    var esc = text.charAt(0) != '%';
    var style = 0;
    var styleMarkUp = this.globals.termStyleMarkup;

    for (var i = 0; i < chunks.length; i++) {
      if (esc) {
        if (chunks[i].length > 0) {
          this._sbType(chunks[i], style);
        } else if (i > 0) {
          this._sbType('%', style);
        }

        esc = false;
      } else {
        var func = chunks[i].charAt(0);

        if (chunks[i].length == 0 && i > 0) {
          this._sbType("%", style);

          esc = true;
        } else if (func == 'n') {
          this._sbNewLine(true);

          if (chunks[i].length > 1) this._sbType(chunks[i].substring(1), style);
        } else if (func == '+') {
          var opt = chunks[i].charAt(1);
          opt = opt.toLowerCase();

          if (opt == 'p') {
            style = 0;
          } else if (styleMarkUp[opt]) {
            style |= styleMarkUp[opt];
          }

          if (chunks[i].length > 2) this._sbType(chunks[i].substring(2), style);
        } else if (func == '-') {
          var opt = chunks[i].charAt(1);
          opt = opt.toLowerCase();

          if (opt == 'p') {
            style = 0;
          } else if (styleMarkUp[opt]) {
            style &= ~styleMarkUp[opt];
          }

          if (chunks[i].length > 2) this._sbType(chunks[i].substring(2), style);
        } else if (chunks[i].length > 1 && func == 'c') {
          var cinfo = this._parseColor(chunks[i].substring(1));

          style = style & ~0xfffff0 | cinfo.style;
          if (cinfo.rest) this._sbType(cinfo.rest, style);
        } else if (chunks[i].length > 1 && chunks[i].charAt(0) == 'C' && chunks[i].charAt(1) == 'S') {
          this.clear();

          this._sbInit();

          if (chunks[i].length > 2) this._sbType(chunks[i].substring(2), style);
        } else {
          if (chunks[i].length > 0) this._sbType(chunks[i], style);
        }
      }
    }

    this._sbOut();
  },
  // parse a color markup
  _parseColor: function _parseColor(chunk) {
    var rest = '';
    var style = 0;

    if (chunk.length) {
      if (chunk.charAt(0) == '(') {
        var clabel = '';

        for (var i = 1; i < chunk.length; i++) {
          var c = chunk.charAt(i);

          if (c == ')') {
            if (chunk.length > i) rest = chunk.substring(i + 1);
            break;
          }

          clabel += c;
        }

        if (clabel) {
          if (clabel.charAt(0) == '@') {
            var sc = this.globals.nsColors[clabel.substring(1).toLowerCase()];
            if (sc) style = (16 + sc) * 0x100;
          } else if (clabel.charAt(0) == '#') {
            var cl = clabel.substring(1).toLowerCase();
            var sc = this.globals.webColors[cl];

            if (sc) {
              style = sc * 0x10000;
            } else {
              cl = this.globals.webifyColor(cl);
              if (cl) style = this.globals.webColors[cl] * 0x10000;
            }
          } else if (clabel.length && clabel.length <= 2) {
            var isHex = false;

            for (var i = 0; i < clabel.length; i++) {
              if (this.globals.isHexOnlyChar(clabel.charAt(i))) {
                isHex = true;
                break;
              }
            }

            var cl = isHex ? parseInt(clabel, 16) : parseInt(clabel, 10);

            if (!isNaN(cl) || cl <= 15) {
              style = cl * 0x100;
            }
          } else {
            style = this.globals.getColorCode(clabel) * 0x100;
          }
        }
      } else {
        var c = chunk.charAt(0);

        if (this.globals.isHexChar(c)) {
          style = this.globals.hexToNum[c] * 0x100;
          rest = chunk.substring(1);
        } else {
          rest = chunk;
        }
      }
    }

    return {
      rest: rest,
      style: style
    };
  },
  // internal scroll buffer output methods
  _sbInit: function _sbInit(usemore) {
    var sb = this.scrollBuf = new Object();
    var sbl = sb.lines = new Array();
    var sbs = sb.styles = new Array();
    sb.more = usemore;
    sb.line = 0;
    sb.status = 0;
    sb.r = 0;
    sb.c = this.c;
    sbl[0] = this.getRowArray(this.conf.cols, 0);
    sbs[0] = this.getRowArray(this.conf.cols, 0);

    for (var i = 0; i < this.c; i++) {
      sbl[0][i] = this.charBuf[this.r][i];
      sbs[0][i] = this.styleBuf[this.r][i];
    }
  },
  _sbType: function _sbType(text, style) {
    // type to scroll buffer
    var sb = this.scrollBuf;

    for (var i = 0; i < text.length; i++) {
      var ch = text.charCodeAt(i);
      if (!this.isPrintable(ch)) ch = 94;
      sb.lines[sb.r][sb.c] = ch;
      sb.styles[sb.r][sb.c++] = style ? style : 0;
      if (sb.c >= this.maxCols) this._sbNewLine();
    }
  },
  _sbNewLine: function _sbNewLine(forced) {
    var sb = this.scrollBuf;

    if (this.wrapping && forced) {
      sb.lines[sb.r][sb.c] = 10;
      sb.lines[sb.r].length = sb.c + 1;
    }

    sb.r++;
    sb.c = 0;
    sb.lines[sb.r] = this.getRowArray(this.conf.cols, 0);
    sb.styles[sb.r] = this.getRowArray(this.conf.cols, 0);
  },
  _sbWrap: function _sbWrap() {
    // create a temp wrap buffer wb and scan for words/wrap-chars
    // then re-asign lines & styles to scrollBuf
    var wb = new Object();
    wb.lines = new Array();
    wb.styles = new Array();
    wb.lines[0] = this.getRowArray(this.conf.cols, 0);
    wb.styles[0] = this.getRowArray(this.conf.cols, 0);
    wb.r = 0;
    wb.c = 0;
    var sb = this.scrollBuf;
    var sbl = sb.lines;
    var sbs = sb.styles;
    var ch, st, wrap, lc, ls;
    var l = this.c;
    var lastR = 0;
    var lastC = 0;
    wb.cBreak = false;

    for (var r = 0; r < sbl.length; r++) {
      lc = sbl[r];
      ls = sbs[r];

      for (var c = 0; c < lc.length; c++) {
        ch = lc[c];
        st = ls[c];

        if (ch) {
          var wrap = this.globals.wrapChars[ch];
          if (ch == 10) wrap = 1;

          if (wrap) {
            if (wrap == 2) {
              l++;
            } else if (wrap == 4) {
              l++;
              lc[c] = 45;
            }

            this._wbOut(wb, lastR, lastC, l);

            if (ch == 10) {
              this._wbIncLine(wb);
            } else if (wrap == 1 && wb.c < this.maxCols) {
              wb.lines[wb.r][wb.c] = ch;
              wb.styles[wb.r][wb.c++] = st;
              if (wb.c >= this.maxCols) this._wbIncLine(wb);
            }

            if (wrap == 3) {
              lastR = r;
              lastC = c;
              l = 1;
            } else {
              l = 0;
              lastR = r;
              lastC = c + 1;

              if (lastC == lc.length) {
                lastR++;
                lastC = 0;
              }

              if (wrap == 4) wb.cBreak = true;
            }
          } else {
            l++;
          }
        } else {
          continue;
        }
      }
    }

    if (l) {
      if (wb.cBreak && wb.c != 0) wb.c--;

      this._wbOut(wb, lastR, lastC, l);
    }

    sb.lines = wb.lines;
    sb.styles = wb.styles;
    sb.r = wb.r;
    sb.c = wb.c;
  },
  _wbOut: function _wbOut(wb, br, bc, l) {
    // copy a word (of l length from br/bc) to wrap buffer wb
    var sb = this.scrollBuf;
    var sbl = sb.lines;
    var sbs = sb.styles;
    var ofs = 0;
    var lc, ls;

    if (l + wb.c > this.maxCols) {
      if (l < this.maxCols) {
        this._wbIncLine(wb);
      } else {
        var i0 = 0;
        ofs = this.maxCols - wb.c;
        lc = sbl[br];
        ls = sbs[br];

        while (true) {
          for (var i = i0; i < ofs; i++) {
            wb.lines[wb.r][wb.c] = lc[bc];
            wb.styles[wb.r][wb.c++] = ls[bc++];

            if (bc == sbl[br].length) {
              bc = 0;
              br++;
              lc = sbl[br];
              ls = sbs[br];
            }
          }

          this._wbIncLine(wb);

          if (l - ofs < this.maxCols) break;
          i0 = ofs;
          ofs += this.maxCols;
        }
      }
    } else if (wb.cBreak) {
      wb.c--;
    }

    lc = sbl[br];
    ls = sbs[br];

    for (var i = ofs; i < l; i++) {
      wb.lines[wb.r][wb.c] = lc[bc];
      wb.styles[wb.r][wb.c++] = ls[bc++];

      if (bc == sbl[br].length) {
        bc = 0;
        br++;
        lc = sbl[br];
        ls = sbs[br];
      }
    }

    wb.cBreak = false;
  },
  _wbIncLine: function _wbIncLine(wb) {
    // create a new line in temp buffer
    wb.r++;
    wb.c = 0;
    wb.lines[wb.r] = this.getRowArray(this.conf.cols, 0);
    wb.styles[wb.r] = this.getRowArray(this.conf.cols, 0);
  },
  _sbOut: function _sbOut() {
    var sb = this.scrollBuf;
    if (this.wrapping && !sb.status) this._sbWrap();
    var sbl = sb.lines;
    var sbs = sb.styles;
    var tcb = this.charBuf;
    var tsb = this.styleBuf;
    var ml = this.maxLines;
    var buflen = sbl.length;

    if (sb.more) {
      if (sb.status) {
        if (this.inputChar == this.globals.lcMoreKeyAbort) {
          this.r = ml - 1;
          this.c = 0;
          tcb[this.r] = this.getRowArray(this.conf.cols, 0);
          tsb[this.r] = this.getRowArray(this.conf.cols, 0);
          this.redraw(this.r);
          this.handler = sb.handler;
          this.charMode = false;
          this.inputChar = 0;
          this.scrollBuf = null;
          this.prompt();
          return;
        } else if (this.inputChar == this.globals.lcMoreKeyContinue) {
          this.clear();
        } else {
          return;
        }
      } else {
        if (this.r >= ml - 1) this.clear();
      }
    }

    if (this.r + buflen - sb.line <= ml) {
      for (var i = sb.line; i < buflen; i++) {
        var r = this.r + i - sb.line;
        tcb[r] = sbl[i];
        tsb[r] = sbs[i];
        this.redraw(r);
      }

      this.r += sb.r - sb.line;
      this.c = sb.c;

      if (sb.more) {
        if (sb.status) this.handler = sb.handler;
        this.charMode = false;
        this.inputChar = 0;
        this.scrollBuf = null;
        this.prompt();
        return;
      }
    } else if (sb.more) {
      ml--;

      if (sb.status == 0) {
        sb.handler = this.handler;
        this.handler = this._sbOut;
        this.charMode = true;
        sb.status = 1;
      }

      if (this.r) {
        var ofs = ml - this.r;

        for (var i = sb.line; i < ofs; i++) {
          var r = this.r + i - sb.line;
          tcb[r] = sbl[i];
          tsb[r] = sbs[i];
          this.redraw(r);
        }
      } else {
        var ofs = sb.line + ml;

        for (var i = sb.line; i < ofs; i++) {
          var r = this.r + i - sb.line;
          tcb[r] = sbl[i];
          tsb[r] = sbs[i];
          this.redraw(r);
        }
      }

      sb.line = ofs;
      this.r = ml;
      this.c = 0;
      this.type(this.globals.lcMorePrompt1, this.globals.lcMorePromtp1Style);
      this.type(this.globals.lcMorePrompt2, this.globals.lcMorePrompt2Style);
      this.lock = false;
      return;
    } else if (buflen >= ml) {
      var ofs = buflen - ml;

      for (var i = 0; i < ml; i++) {
        var r = ofs + i;
        tcb[i] = sbl[r];
        tsb[i] = sbs[r];
        this.redraw(i);
      }

      this.r = ml - 1;
      this.c = sb.c;
    } else {
      var dr = ml - buflen;
      var ofs = this.r - dr;

      for (var i = 0; i < dr; i++) {
        var r = ofs + i;

        for (var c = 0; c < this.maxCols; c++) {
          tcb[i][c] = tcb[r][c];
          tsb[i][c] = tsb[r][c];
        }

        this.redraw(i);
      }

      for (var i = 0; i < buflen; i++) {
        var r = dr + i;
        tcb[r] = sbl[i];
        tsb[r] = sbs[i];
        this.redraw(r);
      }

      this.r = ml - 1;
      this.c = sb.c;
    }

    this.scrollBuf = null;
  },
  // basic console output
  typeAt: function typeAt(r, c, text, style) {
    var tr1 = this.r;
    var tc1 = this.c;
    this.cursorSet(r, c);

    for (var i = 0; i < text.length; i++) {
      var ch = text.charCodeAt(i);
      if (!this.isPrintable(ch)) ch = 94;
      this.charBuf[this.r][this.c] = ch;
      this.styleBuf[this.r][this.c] = style ? style : 0;
      var last_r = this.r;

      this._incCol();

      if (this.r != last_r) this.redraw(last_r);
    }

    this.redraw(this.r);
    this.r = tr1;
    this.c = tc1;
  },
  statusLine: function statusLine(text, style, offset) {
    var ch, r;
    style = style && !isNaN(style) ? parseInt(style) & 15 : 0;

    if (offset && offset > 0) {
      r = this.conf.rows - offset;
    } else {
      r = this.conf.rows - 1;
    }

    for (var i = 0; i < this.conf.cols; i++) {
      if (i < text.length) {
        ch = text.charCodeAt(i);
        if (!this.isPrintable(ch)) ch = 94;
      } else {
        ch = 0;
      }

      this.charBuf[r][i] = ch;
      this.styleBuf[r][i] = style;
    }

    this.redraw(r);
  },
  printRowFromString: function printRowFromString(r, text, style) {
    var ch;
    style = style && !isNaN(style) ? parseInt(style) & 15 : 0;

    if (r >= 0 && r < this.maxLines) {
      if (typeof text != 'string') text = '' + text;

      for (var i = 0; i < this.conf.cols; i++) {
        if (i < text.length) {
          ch = text.charCodeAt(i);
          if (!this.isPrintable(ch)) ch = 94;
        } else {
          ch = 0;
        }

        this.charBuf[r][i] = ch;
        this.styleBuf[r][i] = style;
      }

      this.redraw(r);
    }
  },
  setChar: function setChar(ch, r, c, style) {
    this.charBuf[r][c] = ch;
    this.styleBuf[r][c] = style ? style : 0;
    this.redraw(r);
  },
  newLine: function newLine() {
    this.c = 0;

    this._incRow();
  },
  // internal methods for output
  _charOut: function _charOut(ch, style) {
    this.charBuf[this.r][this.c] = ch;
    this.styleBuf[this.r][this.c] = style ? style : 0;
    this.redraw(this.r);

    this._incCol();
  },
  _incCol: function _incCol() {
    this.c++;

    if (this.c >= this.maxCols) {
      this.c = 0;

      this._incRow();
    }
  },
  _incRow: function _incRow() {
    this.r++;

    if (this.r >= this.maxLines) {
      this._scrollLines(0, this.maxLines);

      this.r = this.maxLines - 1;
    }
  },
  _scrollLines: function _scrollLines(start, end) {
    window.status = 'Scrolling lines ...';
    start++;

    for (var ri = start; ri < end; ri++) {
      var rt = ri - 1;
      this.charBuf[rt] = this.charBuf[ri];
      this.styleBuf[rt] = this.styleBuf[ri];
    } // clear last line


    var rt = end - 1;
    this.charBuf[rt] = this.getRowArray(this.conf.cols, 0);
    this.styleBuf[rt] = this.getRowArray(this.conf.cols, 0);
    this.redraw(rt);

    for (var r = end - 1; r >= start; r--) {
      this.redraw(r - 1);
    }

    window.status = '';
  },
  // control methods
  clear: function clear() {
    window.status = 'Clearing display ...';
    this.cursorOff();
    this.insert = false;

    for (var ri = 0; ri < this.maxLines; ri++) {
      this.charBuf[ri] = this.getRowArray(this.conf.cols, 0);
      this.styleBuf[ri] = this.getRowArray(this.conf.cols, 0);
      this.redraw(ri);
    }

    this.r = 0;
    this.c = 0;
    window.status = '';
  },
  reset: function reset() {
    if (this.lock) return;
    this.lock = true;
    this.rawMode = false;
    this.charMode = false;
    this.maxLines = this.conf.rows;
    this.maxCols = this.conf.cols;
    this.lastLine = '';
    this.lineBuffer = '';
    this.inputChar = 0;
    this.clear();
  },
  // this.scan was added as a feature to get a line in program
  scan: function scan() {
    var _this = this;

    this.scanning = true;
    return new Promise(function (resolve, reject) {
      _this.prompt();

      _this.scanResolve = resolve;
    });
  },
  // this is called by the shell after the scan
  scanned: function scanned(str) {
    this.scanning = false;
    this.scanResolve(str);
  },
  prompt: function prompt() {
    this.lock = true;
    if (this.c > 0) this.newLine();

    if (!this.scanning) {
      this.write(typeof this.ps == 'function' ? this.ps() : this.ps);

      this._charOut(1);
    }

    this.lock = false;
    this.cursorOn();
  },
  isPrintable: function isPrintable(ch, unicodePage1only) {
    if (this.wrapping && this.globals.wrapChars[ch] == 4) return true;

    if (unicodePage1only && ch > 255) {
      return ch == this.termKey.EURO && this.printEuro ? true : false;
    }

    return ch >= 32 && ch != this.termKey.DEL || this.printTab && ch == this.termKey.TAB;
  },
  // cursor methods
  cursorSet: function cursorSet(r, c) {
    var crsron = this.cursoractive;
    if (crsron) this.cursorOff();
    this.r = r % this.maxLines;
    this.c = c % this.maxCols;

    this._cursorReset(crsron);
  },
  cursorOn: function cursorOn() {
    if (this.blinkTimer) clearTimeout(this.blinkTimer);
    this.blinkBuffer = this.styleBuf[this.r][this.c];

    this._cursorBlink();

    this.cursoractive = true;
  },
  cursorOff: function cursorOff() {
    if (this.blinkTimer) clearTimeout(this.blinkTimer);

    if (this.cursoractive) {
      this.styleBuf[this.r][this.c] = this.blinkBuffer;
      this.redraw(this.r);
      this.cursoractive = false;
    }
  },
  cursorLeft: function cursorLeft() {
    var crsron = this.cursoractive;
    if (crsron) this.cursorOff();
    var r = this.r;
    var c = this.c;

    if (c > 0) {
      c--;
    } else if (r > 0) {
      c = this.maxCols - 1;
      r--;
    }

    if (this.isPrintable(this.charBuf[r][c])) {
      this.r = r;
      this.c = c;
    }

    this.insert = true;

    this._cursorReset(crsron);
  },
  cursorRight: function cursorRight() {
    var crsron = this.cursoractive;
    if (crsron) this.cursorOff();
    var r = this.r;
    var c = this.c;

    if (c < this.maxCols - 1) {
      c++;
    } else if (r < this.maxLines - 1) {
      c = 0;
      r++;
    }

    if (!this.isPrintable(this.charBuf[r][c])) {
      this.insert = false;
    }

    if (this.isPrintable(this.charBuf[this.r][this.c])) {
      this.r = r;
      this.c = c;
    }

    this._cursorReset(crsron);
  },
  backspace: function backspace() {
    var crsron = this.cursoractive;
    if (crsron) this.cursorOff();
    var r = this.r;
    var c = this.c;
    if (c > 0) c--;else if (r > 0) {
      c = this.maxCols - 1;
      r--;
    }
    ;

    if (this.isPrintable(this.charBuf[r][c])) {
      this._scrollLeft(r, c);

      this.r = r;
      this.c = c;
    }

    ;

    this._cursorReset(crsron);
  },
  fwdDelete: function fwdDelete() {
    var crsron = this.cursoractive;
    if (crsron) this.cursorOff();

    if (this.isPrintable(this.charBuf[this.r][this.c])) {
      this._scrollLeft(this.r, this.c);

      if (!this.isPrintable(this.charBuf[this.r][this.c])) this.insert = false;
    }

    this._cursorReset(crsron);
  },
  _cursorReset: function _cursorReset(crsron) {
    if (crsron) {
      this.cursorOn();
    } else {
      this.blinkBuffer = this.styleBuf[this.r][this.c];
    }
  },
  _cursorBlink: function _cursorBlink() {
    if (this.blinkTimer) clearTimeout(this.blinkTimer);

    if (this == this.globals.activeTerm) {
      if (this.crsrBlockMode) {
        this.styleBuf[this.r][this.c] = this.styleBuf[this.r][this.c] & 1 ? this.styleBuf[this.r][this.c] & 0xfffffe : this.styleBuf[this.r][this.c] | 1;
      } else {
        this.styleBuf[this.r][this.c] = this.styleBuf[this.r][this.c] & 2 ? this.styleBuf[this.r][this.c] & 0xffffd : this.styleBuf[this.r][this.c] | 2;
      }

      this.redraw(this.r);
    }

    if (this.crsrBlinkMode) this.blinkTimer = setTimeout('Terminal.prototype.globals.activeTerm._cursorBlink()', this.blinkDelay);
  },
  _scrollLeft: function _scrollLeft(r, c) {
    var rows = new Array();
    rows[0] = r;

    while (this.isPrintable(this.charBuf[r][c])) {
      var ri = r;
      var ci = c + 1;

      if (ci == this.maxCols) {
        if (ri < this.maxLines - 1) {
          ci = 0;
          ri++;
          rows[rows.length] = ri;
        } else {
          break;
        }
      }

      this.charBuf[r][c] = this.charBuf[ri][ci];
      this.styleBuf[r][c] = this.styleBuf[ri][ci];
      c = ci;
      r = ri;
    }

    if (this.charBuf[r][c] != 0) this.charBuf[r][c] = 0;

    for (var i = 0; i < rows.length; i++) {
      this.redraw(rows[i]);
    }
  },
  _scrollRight: function _scrollRight(r, c) {
    var rows = new Array();

    var end = this._getLineEnd(r, c);

    var ri = end[0];
    var ci = end[1];

    if (ci == this.maxCols - 1 && ri == this.maxLines - 1) {
      if (r == 0) return;

      this._scrollLines(0, this.maxLines);

      this.r--;
      r--;
      ri--;
    }

    rows[r] = 1;

    while (this.isPrintable(this.charBuf[ri][ci])) {
      var rt = ri;
      var ct = ci + 1;

      if (ct == this.maxCols) {
        ct = 0;
        rt++;
        rows[rt] = 1;
      }

      this.charBuf[rt][ct] = this.charBuf[ri][ci];
      this.styleBuf[rt][ct] = this.styleBuf[ri][ci];
      if (ri == r && ci == c) break;
      ci--;

      if (ci < 0) {
        ci = this.maxCols - 1;
        ri--;
        rows[ri] = 1;
      }
    }

    for (var i = r; i < this.maxLines; i++) {
      if (rows[i]) this.redraw(i);
    }
  },
  _getLineEnd: function _getLineEnd(r, c) {
    if (!this.isPrintable(this.charBuf[r][c])) {
      c--;

      if (c < 0) {
        if (r > 0) {
          r--;
          c = this.maxCols - 1;
        } else {
          c = 0;
        }
      }
    }

    if (this.isPrintable(this.charBuf[r][c])) {
      while (true) {
        var ri = r;
        var ci = c + 1;

        if (ci == this.maxCols) {
          if (ri < this.maxLines - 1) {
            ri++;
            ci = 0;
          } else {
            break;
          }
        }

        if (!this.isPrintable(this.charBuf[ri][ci])) break;
        c = ci;
        r = ri;
      }
    }

    return [r, c];
  },
  _getLineStart: function _getLineStart(r, c) {
    // not used by now, just in case anyone needs this ...
    var ci, ri;

    if (!this.isPrintable(this.charBuf[r][c])) {
      ci = c - 1;
      ri = r;

      if (ci < 0) {
        if (ri == 0) return [0, 0];
        ci = this.maxCols - 1;
        ri--;
      }

      if (!this.isPrintable(this.charBuf[ri][ci])) {
        return [r, c];
      } else {
        r = ri;
        c = ci;
      }
    }

    while (true) {
      var ri = r;
      var ci = c - 1;

      if (ci < 0) {
        if (ri == 0) break;
        ci = this.maxCols - 1;
        ri--;
      }

      if (!this.isPrintable(this.charBuf[ri][ci])) break;
      ;
      r = ri;
      c = ci;
    }

    return [r, c];
  },
  _getLine: function _getLine(adjustCrsrPos) {
    var end = this._getLineEnd(this.r, this.c);

    var r = end[0];
    var c = end[1];

    if (adjustCrsrPos && (this.r != r || this.c != c + 1)) {
      this.r = r;
      this.c = c + 1;
      if (this.c >= this.maxCols) this.c = this.maxCols - 1;
    }

    var line = new Array();

    while (this.isPrintable(this.charBuf[r][c])) {
      line[line.length] = String.fromCharCode(this.charBuf[r][c]);

      if (c > 0) {
        c--;
      } else if (r > 0) {
        c = this.maxCols - 1;
        r--;
      } else {
        break;
      }
    }

    line.reverse();
    return line.join('');
  },
  _clearLine: function _clearLine() {
    var end = this._getLineEnd(this.r, this.c);

    var r = end[0];
    var c = end[1];
    var line = '';

    while (this.isPrintable(this.charBuf[r][c])) {
      this.charBuf[r][c] = 0;

      if (c > 0) {
        c--;
      } else if (r > 0) {
        this.redraw(r);
        c = this.maxCols - 1;
        r--;
      } else {
        break;
      }
    }

    if (r != end[0]) this.redraw(r);
    c++;
    this.cursorSet(r, c);
    this.insert = false;
  },
  // backup/restore screen & state
  backupScreen: function backupScreen() {
    var backup = this.backupBuffer = new Object();
    var rl = this.conf.rows;
    var cl = this.conf.cols;
    backup.cbuf = new Array(rl);
    backup.sbuf = new Array(rl);
    backup.maxCols = this.maxCols;
    backup.maxLines = this.maxLines;
    backup.r = this.r;
    backup.c = this.c;
    backup.charMode = this.charMode;
    backup.rawMode = this.rawMode;
    backup.handler = this.handler;
    backup.ctrlHandler = this.ctrlHandler;
    backup.cursoractive = this.cursoractive;
    backup.crsrBlinkMode = this.crsrBlinkMode;
    backup.crsrBlockMode = this.crsrBlockMode;
    backup.blinkDelay = this.blinkDelay;
    backup.DELisBS = this.DELisBS;
    backup.printTab = this.printTab;
    backup.printEuro = this.printEuro;
    backup.catchCtrlH = this.catchCtrlH;
    backup.closeOnESC = this.closeOnESC;
    backup.historyUnique = this.historyUnique;
    backup.ps = this.ps;
    backup.lineBuffer = this.lineBuffer;
    backup.inputChar = this.inputChar;
    backup.lastLine = this.lastLine;
    backup.historyLength = this.history.length;
    backup.histPtr = this.histPtr;
    backup.wrapping = this.wrapping;
    backup.mapANSI = this.mapANSI;
    backup.ANSItrueBlack = this.ANSItrueBlack;
    if (this.cursoractive) this.cursorOff();

    for (var r = 0; r < rl; r++) {
      var cbr = this.charBuf[r];
      var sbr = this.styleBuf[r];
      var tcbr = backup.cbuf[r] = new Array(cl);
      var tsbr = backup.sbuf[r] = new Array(cl);

      for (var c = 0; c < cl; c++) {
        tcbr[c] = cbr[c];
        tsbr[c] = sbr[c];
      }
    }
  },
  restoreScreen: function restoreScreen() {
    var backup = this.backupBuffer;
    if (!backup) return;
    var rl = this.conf.rows;

    for (var r = 0; r < rl; r++) {
      this.charBuf[r] = backup.cbuf[r];
      this.styleBuf[r] = backup.sbuf[r];
      this.redraw(r);
    }

    this.maxCols = backup.maxCols;
    this.maxLines = backup.maxLines;
    this.r = backup.r;
    this.c = backup.c;
    this.charMode = backup.charMode;
    this.rawMode = backup.rawMode;
    this.handler = backup.handler;
    this.ctrlHandler = backup.ctrlHandler;
    this.cursoractive = backup.cursoractive;
    this.crsrBlinkMode = backup.crsrBlinkMode;
    this.crsrBlockMode = backup.crsrBlockMode;
    this.blinkDelay = backup.blinkDelay;
    this.DELisBS = backup.DELisBS;
    this.printTab = backup.printTab;
    this.printEuro = backup.printEuro;
    this.catchCtrlH = backup.catchCtrlH;
    this.closeOnESC = backup.closeOnESC;
    this.historyUnique = backup.historyUnique;
    this.ps = backup.ps;
    this.lineBuffer = backup.lineBuffer;
    this.inputChar = backup.inputChar;
    this.lastLine = backup.lastLine;

    if (this.history.length > backup.historyLength) {
      this.history.length = backup.historyLength;
      this.histPtr = backup.histPtr;
    }

    this.wrapping = backup.wrapping;
    this.mapANSI = backup.mapANSI;
    this.ANSItrueBlack = backup.ANSItrueBlack;
    if (this.cursoractive) this.cursorOn();
    this.backupBuffer = null;
  },
  swapBackup: function swapBackup() {
    // swap current state and backup buffer (e.g.: toggle do/undo)
    var backup = this.backupBuffer;
    this.backupScreen;

    if (backup) {
      var backup2 = this.backupBuffer;
      this.backupBuffer = backup;
      this.restoreScreen();
      this.backupBuffer = backup2;
    }
  },
  // simple markup escaping
  escapeMarkup: function escapeMarkup(t) {
    return t.replace(/%/g, '%%');
  },
  // field mode
  enterFieldMode: function enterFieldMode(start, end, style) {
    this.cursorOff();
    if (start === undefined || start < 0) start = this.c;
    if (end === undefined || end < start || end > this.maxCols) end = this.maxCols;
    if (!style) style = 0;
    this.fieldStart = start;
    this.fieldEnd = end;
    this.fieldStyle = style;
    this.fieldC = 0;
    this.lastLine = '';
    this.fieldMode = true;
    this.rawMode = this.charMode = false;

    if (style & 1) {
      this._crsrWasBlockMode = this.crsrBlockMode;
      this._crsrWasBlinkMode = this.crsrBlinkMode;
      this.crsrBlockMode = false;
      this.crsrBlinkMode = true;
    }

    this.drawField();
    this.lock = false;
  },
  exitFieldMode: function exitFieldMode() {
    this.drawField(true);
    this.fieldMode = false;
    this.c = this.fieldEnd;
    if (this.c == this.maxLine) this.newLine();
    this.lock = true;
  },
  drawField: function drawField(isfinal) {
    this.cursorOff();
    if (isfinal) this.fieldC = 0;
    var fl = this.fieldEnd - this.fieldStart;
    if (this.fieldC == this.lastLine.length) fl--;
    var ofs = this.fieldC - fl;
    if (ofs < 0) ofs = 0;
    var line = ofs ? this.lastLine.substring(ofs) : this.lastLine;
    var sb = this.styleBuf[this.r];
    var cb = this.charBuf[this.r];
    var max = line.length;

    for (var i = this.fieldStart, k = 0; i < this.fieldEnd; i++, k++) {
      sb[i] = this.fieldStyle;
      cb[i] = k < max ? line.charCodeAt(k) : 0;
    }

    this.redraw(this.r);

    if (isfinal) {
      if (this.fieldStyle & 1) {
        this.crsrBlockMode = this._crsrWasBlockMode;
        this.crsrBlinkMode = this._crsrWasBlinkMode;
        delete this._crsrWasBlockMode;
        delete this._crsrWasBlinkMode;
      }
    } else {
      this.c = this.fieldStart + this.fieldC - ofs;
      this.cursorOn();
    }
  },
  // keyboard focus
  focus: function focus() {
    this.globals.setFocus(this);
  },
  // a inner reference (just for comfort) to be mapped to Terminal.prototype.globals.termKey
  termKey: null,
  // GUI related methods
  _makeTerm: function _makeTerm(rebuild) {
    window.status = 'Building terminal ...';
    var divPrefix = this.termDiv + '_r';

    if (this.domAPI) {
      // if applicable we're using createElement
      this.globals.hasSubDivs = false;
      var td, row, table, tbody, table2, tbody2, tr, td, node, ptd;
      table = document.createElement('table');
      table.setAttribute('border', 0);
      table.setAttribute('cellSpacing', 0);
      table.setAttribute('cellPadding', this.conf.frameWidth);
      tbody = document.createElement('tbody');
      table.appendChild(tbody);
      row = document.createElement('tr');
      tbody.appendChild(row);
      ptd = document.createElement('td');
      ptd.style.backgroundColor = this.conf.frameColor;
      row.appendChild(ptd);
      table2 = document.createElement('table');
      table2.setAttribute('border', 0);
      table2.setAttribute('cellSpacing', 0);
      table2.setAttribute('cellPadding', 2);
      tbody2 = document.createElement('tbody');
      table2.appendChild(tbody2);
      tr = document.createElement('tr');
      tbody2.appendChild(tr);
      td = document.createElement('td');
      td.style.backgroundColor = this.conf.bgColor;
      tr.appendChild(td);
      ptd.appendChild(table2);
      ptd = td;
      table2 = document.createElement('table');
      table2.setAttribute('border', 0);
      table2.setAttribute('cellSpacing', 0);
      table2.setAttribute('cellPadding', 0);
      tbody2 = document.createElement('tbody');
      table2.appendChild(tbody2);
      var rstr = '';

      for (var c = 0; c < this.conf.cols; c++) {
        rstr += '&nbsp;';
      }

      for (var r = 0; r < this.conf.rows; r++) {
        tr = document.createElement('tr');
        td = document.createElement('td');
        td.id = divPrefix + r;
        td.style.height = td.style.minHeight = td.style.maxHeight = this.conf.rowHeight;
        td.style.whiteSpace = 'nowrap';
        td.className = this.conf.fontClass;
        td.innerHTML = rstr;
        tr.appendChild(td);
        tbody2.appendChild(tr);
      }

      ptd.appendChild(table2);
      node = document.getElementById(this.termDiv);

      while (node.hasChildNodes()) {
        node.removeChild(node.firstChild);
      }

      node.appendChild(table);
    } else {
      // legacy code
      this.globals.hasSubDivs = navigator.userAgent.indexOf('Gecko') < 0;
      var s = '',
          bgColorAttribute = this.conf.bgColor && (this.conf.bgColor !== 'none' || this.conf.bgColor != 'transparent') ? ' bgcolor="' + this.conf.bgColor + '"' : '',
          frameColorAttribute = this.conf.frameColor && (this.conf.frameColor !== 'none' || this.conf.frameColor != 'transparent') ? ' bgcolor="' + this.conf.frameColor + '"' : '';
      s += '<table border="0" cellspacing="0" cellpadding="' + this.conf.frameWidth + '">\n';
      s += '<tr><td' + frameColorAttribute + '><table border="0" cellspacing="0" cellpadding="2"><tr><td' + bgColorAttribute + '><table border="0" cellspacing="0" cellpadding="0">\n';
      var rstr = '';

      for (var c = 0; c < this.conf.cols; c++) {
        rstr += '&nbsp;';
      }

      for (var r = 0; r < this.conf.rows; r++) {
        var termid = this.globals.hasSubDivs ? '' : ' id="' + divPrefix + r + '"';
        s += '<tr><td nowrap height="' + this.conf.rowHeight + '"' + termid + ' class="' + this.conf.fontClass + '">' + rstr + '<\/td><\/tr>\n';
      }

      s += '<\/table><\/td><\/tr>\n';
      s += '<\/table><\/td><\/tr>\n';
      s += '<\/table>\n';
      var termOffset = 2 + this.conf.frameWidth;

      if (this.globals.hasSubDivs) {
        for (var r = 0; r < this.conf.rows; r++) {
          s += '<div id="' + divPrefix + r + '" class="' + this.conf.fontClass + '"><\/div>\n';
        }

        this.globals.termStringStart = '<table border="0" cellspacing="0" cellpadding="0"><tr><td nowrap height="' + this.conf.rowHeight + '" class="' + this.conf.fontClass + '">';
        this.globals.termStringEnd = '<\/td><\/tr><\/table>';
      }

      this.globals.writeElement(this.termDiv, s);
    }

    if (!rebuild) {
      this.globals.setElementXY(this.termDiv, this.conf.x, this.conf.y);
      this.globals.setVisible(this.termDiv, 1);
    }

    window.status = '';
  },
  rebuild: function rebuild() {
    // check for bounds and array lengths
    var rl = this.conf.rows;
    var cl = this.conf.cols;

    for (var r = 0; r < rl; r++) {
      var cbr = this.charBuf[r];

      if (!cbr) {
        this.charBuf[r] = this.getRowArray(cl, 0);
        this.styleBuf[r] = this.getRowArray(cl, 0);
      } else if (cbr.length < cl) {
        for (var c = cbr.length; c < cl; c++) {
          this.charBuf[r][c] = 0;
          this.styleBuf[r][c] = 0;
        }
      }
    }

    var resetcrsr = false;

    if (this.r >= rl) {
      r = rl - 1;
      resetcrsr = true;
    }

    if (this.c >= cl) {
      c = cl - 1;
      resetcrsr = true;
    }

    if (resetcrsr && this.cursoractive) this.cursorOn(); // and actually rebuild

    this._makeTerm(true);

    for (var r = 0; r < rl; r++) {
      this.redraw(r);
    } // clear backup buffer to prevent errors


    this.backupBuffer = null;
  },
  moveTo: function moveTo(x, y) {
    this.globals.setElementXY(this.termDiv, x, y);
  },
  resizeTo: function resizeTo(x, y) {
    if (this.termDivReady()) {
      x = parseInt(x, 10);
      y = parseInt(y, 10);
      if (isNaN(x) || isNaN(y) || x < 4 || y < 2) return false;
      this.maxCols = this.conf.cols = x;
      this.maxLines = this.conf.rows = y;

      this._makeTerm();

      this.clear();
      return true;
    } else {
      return false;
    }
  },
  redraw: function redraw(r) {
    var s = this.globals.termStringStart;
    var curStyle = 0;
    var tstls = this.globals.termStyles;
    var tscls = this.globals.termStyleClose;
    var tsopn = this.globals.termStyleOpen;
    var tspcl = this.globals.termSpecials;
    var tclrs = this.globals.colorCodes;
    var tnclrs = this.globals.nsColorCodes;
    var twclrs = this.globals.webColorCodes;
    var t_cb = this.charBuf;
    var t_sb = this.styleBuf;
    var blur = this.textBlur;
    var clr = '';
    var textColor = this.textColor || '';

    for (var i = 0; i < this.conf.cols; i++) {
      var c = t_cb[r][i];
      var cs = t_sb[r][i];

      if (cs != curStyle || i == 0 && textColor) {
        if (curStyle) {
          if (curStyle & 0xffff00) s += '</span>';

          for (var k = tstls.length - 1; k >= 0; k--) {
            var st = tstls[k];
            if (curStyle & st) s += tscls[st];
          }
        }

        curStyle = cs;

        for (var k = 0; k < tstls.length; k++) {
          var st = tstls[k];
          if (curStyle & st) s += tsopn[st];
        }

        clr = textColor;

        if (curStyle & 0xff00) {
          var cc = (curStyle & 0xff00) >>> 8;
          clr = cc < 16 ? tclrs[cc] : '#' + tnclrs[cc - 16];
        } else if (curStyle & 0xff0000) {
          clr = '#' + twclrs[(curStyle & 0xff0000) >>> 16];
        }

        if (clr) {
          if (curStyle & 1) {
            s += '<span style="background-color:' + clr + ' !important;">';
          } else if (_typeof(blur) === 'object') {
            s += '<span style="color:' + clr + ' !important; text-shadow: 0 0 ' + blur.join('px ' + clr + ', 0 0 ') + 'px ' + clr + ';">';
          } else if (blur) {
            s += '<span style="color:' + clr + ' !important; text-shadow: 0 0 ' + blur + 'px ' + clr + ';">';
          } else {
            s += '<span style="color:' + clr + ' !important;">';
          }
        }
      }

      s += tspcl[c] ? tspcl[c] : String.fromCharCode(c);
    }

    if (curStyle > 0) {
      if (curStyle & 0xffff00) s += '</span>';

      for (var k = tstls.length - 1; k >= 0; k--) {
        var st = tstls[k];
        if (curStyle & st) s += tscls[st];
      }
    }

    s += this.globals.termStringEnd;
    this.globals.writeElement(this.termDiv + '_r' + r, s);
  },
  guiReady: function guiReady() {
    var ready = true;

    if (this.globals.guiElementsReady(this.termDiv)) {
      for (var r = 0; r < this.conf.rows; r++) {
        if (this.globals.guiElementsReady(this.termDiv + '_r' + r) == false) {
          ready = false;
          break;
        }
      }
    } else {
      ready = false;
    }

    return ready;
  },
  termDivReady: function termDivReady() {
    if (document.getElementById) {
      return document.getElementById(this.termDiv) ? true : false;
    } else if (document.all) {
      return document.all[this.termDiv] ? true : false;
    } else {
      return false;
    }
  },
  getDimensions: function getDimensions() {
    var w = 0;
    var h = 0;
    var d = this.termDiv;

    if (document.getElementById) {
      var obj = document.getElementById(d);

      if (obj && obj.firstChild) {
        w = parseInt(obj.firstChild.offsetWidth, 10);
        h = parseInt(obj.firstChild.offsetHeight, 10);
      } else if (obj && obj.children && obj.children[0]) {
        w = parseInt(obj.children[0].offsetWidth, 10);
        h = parseInt(obj.children[0].offsetHeight, 10);
      }
    } else if (document.all) {
      var obj = document.all[d];

      if (obj && obj.children && obj.children[0]) {
        w = parseInt(obj.children[0].offsetWidth, 10);
        h = parseInt(obj.children[0].offsetHeight, 10);
      }
    }

    return {
      width: w,
      height: h
    };
  },
  // global store for static data and methods (former "TermGlobals")
  globals: {
    termToInitialze: null,
    activeTerm: null,
    kbdEnabled: false,
    keylock: false,
    keyRepeatDelay1: 450,
    // initial delay
    keyRepeatDelay2: 100,
    // consecutive delays
    keyRepeatTimer: null,
    lcMorePrompt1: ' -- MORE -- ',
    lcMorePromtp1Style: 1,
    lcMorePrompt2: ' (Type: space to continue, \'q\' to quit)',
    lcMorePrompt2Style: 0,
    lcMoreKeyAbort: 113,
    lcMoreKeyContinue: 32,
    // initialize global data structs
    _initGlobals: function _initGlobals() {
      var tg = Terminal.prototype.globals;

      tg._extendMissingStringMethods();

      tg._initWebColors();

      tg._initDomKeyRef();

      Terminal.prototype.termKey = tg.termKey;
    },
    // hex support (don't rely on generic support like Number.toString(16))
    getHexChar: function getHexChar(c) {
      var tg = Terminal.prototype.globals;
      if (tg.isHexChar(c)) return tg.hexToNum[c];
      return -1;
    },
    isHexChar: function isHexChar(c) {
      return c >= '0' && c <= '9' || c >= 'a' && c <= 'f' || c >= 'A' && c <= 'F' ? true : false;
    },
    isHexOnlyChar: function isHexOnlyChar(c) {
      return c >= 'a' && c <= 'f' || c >= 'A' && c <= 'F' ? true : false;
    },
    hexToNum: {
      '0': 0,
      '1': 1,
      '2': 2,
      '3': 3,
      '4': 4,
      '5': 5,
      '6': 6,
      '7': 7,
      '8': 8,
      '9': 9,
      'a': 10,
      'b': 11,
      'c': 12,
      'd': 13,
      'e': 14,
      'f': 15,
      'A': 10,
      'B': 11,
      'C': 12,
      'D': 13,
      'E': 14,
      'F': 15
    },
    // data for color support
    webColors: [],
    webColorCodes: [''],
    colors: {
      // ANSI bright (bold) color set
      black: 1,
      red: 2,
      green: 3,
      yellow: 4,
      blue: 5,
      magenta: 6,
      cyan: 7,
      white: 8,
      // dark color set
      grey: 9,
      red2: 10,
      green2: 11,
      yellow2: 12,
      blue2: 13,
      magenta2: 14,
      cyan2: 15,
      // synonyms
      red1: 2,
      green1: 3,
      yellow1: 4,
      blue1: 5,
      magenta1: 6,
      cyan1: 7,
      gray: 9,
      darkred: 10,
      darkgreen: 11,
      darkyellow: 12,
      darkblue: 13,
      darkmagenta: 14,
      darkcyan: 15,
      // default color
      'default': 0,
      clear: 0
    },
    colorCodes: ['', '#000000', '#ff0000', '#00ff00', '#ffff00', '#0066ff', '#ff00ff', '#00ffff', '#ffffff', '#808080', '#990000', '#009900', '#999900', '#003399', '#990099', '#009999'],
    nsColors: {
      'aliceblue': 1,
      'antiquewhite': 2,
      'aqua': 3,
      'aquamarine': 4,
      'azure': 5,
      'beige': 6,
      'black': 7,
      'blue': 8,
      'blueviolet': 9,
      'brown': 10,
      'burlywood': 11,
      'cadetblue': 12,
      'chartreuse': 13,
      'chocolate': 14,
      'coral': 15,
      'cornflowerblue': 16,
      'cornsilk': 17,
      'crimson': 18,
      'darkblue': 19,
      'darkcyan': 20,
      'darkgoldenrod': 21,
      'darkgray': 22,
      'darkgreen': 23,
      'darkkhaki': 24,
      'darkmagenta': 25,
      'darkolivegreen': 26,
      'darkorange': 27,
      'darkorchid': 28,
      'darkred': 29,
      'darksalmon': 30,
      'darkseagreen': 31,
      'darkslateblue': 32,
      'darkslategray': 33,
      'darkturquoise': 34,
      'darkviolet': 35,
      'deeppink': 36,
      'deepskyblue': 37,
      'dimgray': 38,
      'dodgerblue': 39,
      'firebrick': 40,
      'floralwhite': 41,
      'forestgreen': 42,
      'fuchsia': 43,
      'gainsboro': 44,
      'ghostwhite': 45,
      'gold': 46,
      'goldenrod': 47,
      'gray': 48,
      'green': 49,
      'greenyellow': 50,
      'honeydew': 51,
      'hotpink': 52,
      'indianred': 53,
      'indigo': 54,
      'ivory': 55,
      'khaki': 56,
      'lavender': 57,
      'lavenderblush': 58,
      'lawngreen': 59,
      'lemonchiffon': 60,
      'lightblue': 61,
      'lightcoral': 62,
      'lightcyan': 63,
      'lightgoldenrodyellow': 64,
      'lightgreen': 65,
      'lightgrey': 66,
      'lightpink': 67,
      'lightsalmon': 68,
      'lightseagreen': 69,
      'lightskyblue': 70,
      'lightslategray': 71,
      'lightsteelblue': 72,
      'lightyellow': 73,
      'lime': 74,
      'limegreen': 75,
      'linen': 76,
      'maroon': 77,
      'mediumaquamarine': 78,
      'mediumblue': 79,
      'mediumorchid': 80,
      'mediumpurple': 81,
      'mediumseagreen': 82,
      'mediumslateblue': 83,
      'mediumspringgreen': 84,
      'mediumturquoise': 85,
      'mediumvioletred': 86,
      'midnightblue': 87,
      'mintcream': 88,
      'mistyrose': 89,
      'moccasin': 90,
      'navajowhite': 91,
      'navy': 92,
      'oldlace': 93,
      'olive': 94,
      'olivedrab': 95,
      'orange': 96,
      'orangered': 97,
      'orchid': 98,
      'palegoldenrod': 99,
      'palegreen': 100,
      'paleturquoise': 101,
      'palevioletred': 102,
      'papayawhip': 103,
      'peachpuff': 104,
      'peru': 105,
      'pink': 106,
      'plum': 107,
      'powderblue': 108,
      'purple': 109,
      'red': 110,
      'rosybrown': 111,
      'royalblue': 112,
      'saddlebrown': 113,
      'salmon': 114,
      'sandybrown': 115,
      'seagreen': 116,
      'seashell': 117,
      'sienna': 118,
      'silver': 119,
      'skyblue': 120,
      'slateblue': 121,
      'slategray': 122,
      'snow': 123,
      'springgreen': 124,
      'steelblue': 125,
      'tan': 126,
      'teal': 127,
      'thistle': 128,
      'tomato': 129,
      'turquoise': 130,
      'violet': 131,
      'wheat': 132,
      'white': 133,
      'whitesmoke': 134,
      'yellow': 135,
      'yellowgreen': 136
    },
    nsColorCodes: ['', 'f0f8ff', 'faebd7', '00ffff', '7fffd4', 'f0ffff', 'f5f5dc', '000000', '0000ff', '8a2be2', 'a52a2a', 'deb887', '5f9ea0', '7fff00', 'd2691e', 'ff7f50', '6495ed', 'fff8dc', 'dc143c', '00008b', '008b8b', 'b8860b', 'a9a9a9', '006400', 'bdb76b', '8b008b', '556b2f', 'ff8c00', '9932cc', '8b0000', 'e9967a', '8fbc8f', '483d8b', '2f4f4f', '00ced1', '9400d3', 'ff1493', '00bfff', '696969', '1e90ff', 'b22222', 'fffaf0', '228b22', 'ff00ff', 'dcdcdc', 'f8f8ff', 'ffd700', 'daa520', '808080', '008000', 'adff2f', 'f0fff0', 'ff69b4', 'cd5c5c', '4b0082', 'fffff0', 'f0e68c', 'e6e6fa', 'fff0f5', '7cfc00', 'fffacd', 'add8e6', 'f08080', 'e0ffff', 'fafad2', '90ee90', 'd3d3d3', 'ffb6c1', 'ffa07a', '20b2aa', '87cefa', '778899', 'b0c4de', 'ffffe0', '00ff00', '32cd32', 'faf0e6', '800000', '66cdaa', '0000cd', 'ba55d3', '9370db', '3cb371', '7b68ee', '00fa9a', '48d1cc', 'c71585', '191970', 'f5fffa', 'ffe4e1', 'ffe4b5', 'ffdead', '000080', 'fdf5e6', '808000', '6b8e23', 'ffa500', 'ff4500', 'da70d6', 'eee8aa', '98fb98', 'afeeee', 'db7093', 'ffefd5', 'ffdab9', 'cd853f', 'ffc0cb', 'dda0dd', 'b0e0e6', '800080', 'ff0000', 'bc8f8f', '4169e1', '8b4513', 'fa8072', 'f4a460', '2e8b57', 'fff5ee', 'a0522d', 'c0c0c0', '87ceeb', '6a5acd', '708090', 'fffafa', '00ff7f', '4682b4', 'd2b48c', '008080', 'd8bfd8', 'ff6347', '40e0d0', 'ee82ee', 'f5deb3', 'ffffff', 'f5f5f5', 'ffff00', '9acd32'],
    _webSwatchChars: ['0', '3', '6', '9', 'c', 'f'],
    _initWebColors: function _initWebColors() {
      // generate long and short web color ref
      var tg = Terminal.prototype.globals;
      var ws = tg._webColorSwatch;
      var wn = tg.webColors;
      var cc = tg.webColorCodes;
      var n = 1;
      var a, b, c, al, bl, bs, cl;

      for (var i = 0; i < 6; i++) {
        a = tg._webSwatchChars[i];
        al = a + a;

        for (var j = 0; j < 6; j++) {
          b = tg._webSwatchChars[j];
          bl = al + b + b;
          bs = a + b;

          for (var k = 0; k < 6; k++) {
            c = tg._webSwatchChars[k];
            cl = bl + c + c;
            wn[bs + c] = wn[cl] = n;
            cc[n] = cl;
            n++;
          }
        }
      }
    },
    webifyColor: function webifyColor(s) {
      // return nearest web color in 3 digit format
      // (do without RegExp for compatibility)
      var tg = Terminal.prototype.globals;

      if (s.length == 6) {
        var c = '';

        for (var i = 0; i < 6; i += 2) {
          var a = s.charAt(i);
          var b = s.charAt(i + 1);

          if (tg.isHexChar(a) && tg.isHexChar(b)) {
            c += tg._webSwatchChars[Math.round(parseInt(a + b, 16) / 255 * 5)];
          } else {
            return '';
          }
        }

        return c;
      } else if (s.length == 3) {
        var c = '';

        for (var i = 0; i < 3; i++) {
          var a = s.charAt(i);

          if (tg.isHexChar(a)) {
            c += tg._webSwatchChars[Math.round(parseInt(a, 16) / 15 * 5)];
          } else {
            return '';
          }
        }

        return c;
      } else {
        return '';
      }
    },
    // public methods for color support
    setColor: function setColor(label, value) {
      var tg = Terminal.prototype.globals;

      if (typeof label == 'number' && label >= 1 && label <= 15) {
        tg.colorCodes[label] = value;
      } else if (typeof label == 'string') {
        label = label.toLowerCase();

        if (label.length == 1 && tg.isHexChar(label)) {
          var n = tg.hexToNum[label];
          if (n) tg.colorCodes[n] = value;
        } else if (typeof tg.colors[label] != 'undefined') {
          var n = tg.colors[label];
          if (n) tg.colorCodes[n] = value;
        }
      }
    },
    getColorString: function getColorString(label) {
      var tg = Terminal.prototype.globals;

      if (typeof label == 'number' && label >= 0 && label <= 15) {
        return tg.colorCodes[label];
      } else if (typeof label == 'string') {
        label = label.toLowerCase();

        if (label.length == 1 && tg.isHexChar(label)) {
          return tg.colorCodes[tg.hexToNum[label]];
        } else if (typeof tg.colors[label] != 'undefined') {
          return tg.colorCodes[tg.colors[label]];
        }
      }

      return '';
    },
    getColorCode: function getColorCode(label) {
      var tg = Terminal.prototype.globals;

      if (typeof label == 'number' && label >= 0 && label <= 15) {
        return label;
      } else if (typeof label == 'string') {
        label = label.toLowerCase();

        if (label.length == 1 && tg.isHexChar(label)) {
          return parseInt(label, 16);
        } else if (typeof tg.colors[label] != 'undefined') {
          return tg.colors[label];
        }
      }

      return 0;
    },
    // import/paste methods (methods return success)
    insertText: function insertText(text) {
      // auto-types a given string to the active terminal
      // returns success (false indicates a lock or no active terminal)
      var tg = Terminal.prototype.globals;
      var termRef = tg.activeTerm;
      if (!termRef || termRef.closed || tg.keylock || termRef.lock || termRef.charMode || termRef.fieldMode) return false; // terminal open and unlocked, so type the text

      for (var i = 0; i < text.length; i++) {
        tg.keyHandler({
          which: text.charCodeAt(i),
          _remapped: true
        });
      }

      return true;
    },
    importEachLine: function importEachLine(text) {
      // import multiple lines of text per line each and execs
      // returns success (false indicates a lock or no active terminal)
      var tg = Terminal.prototype.globals;
      var termRef = tg.activeTerm;
      if (!termRef || termRef.closed || tg.keylock || termRef.lock || termRef.charMode || termRef.fieldMode) return false; // clear the current command line

      termRef.cursorOff();

      termRef._clearLine(); // normalize line breaks


      text = text.replace(/\r\n?/g, '\n'); // split lines and auto-type the text

      var t = text.split('\n');

      for (var i = 0; i < t.length; i++) {
        for (var k = 0; k < t[i].length; k++) {
          tg.keyHandler({
            which: t[i].charCodeAt(k),
            _remapped: true
          });
        }

        tg.keyHandler({
          which: term.termKey.CR,
          _remapped: true
        });
      }

      return true;
    },
    importMultiLine: function importMultiLine(text) {
      // importing multi-line text as single input with "\n" in lineBuffer
      var tg = Terminal.prototype.globals;
      var termRef = tg.activeTerm;
      if (!termRef || termRef.closed || tg.keylock || termRef.lock || termRef.charMode || termRef.fieldMode) return false; // lock and clear the line

      termRef.lock = true;
      termRef.cursorOff();

      termRef._clearLine(); // normalize linebreaks and echo the text linewise


      text = text.replace(/\r\n?/g, '\n');
      var lines = text.split('\n');

      for (var i = 0; i < lines.length; i++) {
        termRef.type(lines[i]);
        if (i < lines.length - 1) termRef.newLine();
      } // fake <ENTER>;
      // (no history entry for this)


      termRef.lineBuffer = text;
      termRef.lastLine = '';
      termRef.inputChar = 0;
      termRef.handler();
      return true;
    },
    // text related service functions
    normalize: function normalize(n, m) {
      var s = '' + n;

      while (s.length < m) {
        s = '0' + s;
      }

      return s;
    },
    fillLeft: function fillLeft(t, n) {
      if (typeof t != 'string') t = '' + t;

      while (t.length < n) {
        t = ' ' + t;
      }

      return t;
    },
    center: function center(t, l) {
      var s = '';

      for (var i = t.length; i < l; i += 2) {
        s += ' ';
      }

      return s + t;
    },
    // simple substitute for String.replace()
    stringReplace: function stringReplace(s1, s2, t) {
      var l1 = s1.length;
      var l2 = s2.length;
      var ofs = t.indexOf(s1);

      while (ofs >= 0) {
        t = t.substring(0, ofs) + s2 + t.substring(ofs + l1);
        ofs = t.indexOf(s1, ofs + l2);
      }

      return t;
    },
    // config data for text wrap
    wrapChars: {
      // keys: charCode
      // values: 1 = white space, 2 = wrap after, 3 = wrap before, 4 = conditional word break
      9: 1,
      // tab
      10: 1,
      // new line - don't change this (used internally)!!!
      12: 4,
      // form feed (use this for conditional word breaks)
      13: 1,
      // cr
      32: 1,
      // blank
      40: 3,
      // (
      45: 2,
      // dash/hyphen
      61: 2,
      // =
      91: 3,
      // [
      94: 3,
      // caret (non-printing chars)
      123: 3 // {

    },
    // keyboard methods & controls
    setFocus: function setFocus(termref) {
      Terminal.prototype.globals.activeTerm = termref;
      Terminal.prototype.globals.clearRepeatTimer();
    },
    termKey: {
      // codes of special keys
      'NUL': 0x00,
      'SOH': 0x01,
      'STX': 0x02,
      'ETX': 0x03,
      'EOT': 0x04,
      'ENQ': 0x05,
      'ACK': 0x06,
      'BEL': 0x07,
      'BS': 0x08,
      'BACKSPACE': 0x08,
      'HT': 0x09,
      'TAB': 0x09,
      'LF': 0x0A,
      'VT': 0x0B,
      'FF': 0x0C,
      'CR': 0x0D,
      'SO': 0x0E,
      'SI': 0x0F,
      'DLE': 0x10,
      'DC1': 0x11,
      'DC2': 0x12,
      'DC3': 0x13,
      'DC4': 0x14,
      'NAK': 0x15,
      'SYN': 0x16,
      'ETB': 0x17,
      'CAN': 0x18,
      'EM': 0x19,
      'SUB': 0x1A,
      'ESC': 0x1B,
      'IS4': 0x1C,
      'IS3': 0x1D,
      'IS2': 0x1E,
      'IS1': 0x1F,
      'DEL': 0x7F,
      // other specials
      'EURO': 0x20AC,
      // cursor mapping
      'LEFT': 0x1C,
      'RIGHT': 0x1D,
      'UP': 0x1E,
      'DOWN': 0x1F
    },
    // map some DOM_VK_* properties to values defined in termKey
    termDomKeyRef: {},
    _domKeyMappingData: {
      'LEFT': 'LEFT',
      'RIGHT': 'RIGHT',
      'UP': 'UP',
      'DOWN': 'DOWN',
      'BACK_SPACE': 'BS',
      'RETURN': 'CR',
      'ENTER': 'CR',
      'ESCAPE': 'ESC',
      'DELETE': 'DEL',
      'TAB': 'TAB'
    },
    _initDomKeyRef: function _initDomKeyRef() {
      var tg = Terminal.prototype.globals;
      var m = tg._domKeyMappingData;
      var r = tg.termDomKeyRef;
      var k = tg.termKey;

      for (var i in m) {
        r['DOM_VK_' + i] = k[m[i]];
      }
    },
    registerEvent: function registerEvent(obj, eventType, handler, capture) {
      if (obj.addEventListener) {
        obj.addEventListener(eventType.toLowerCase(), handler, capture);
      }
      /*
      else if (obj.attachEvent) {
      	obj.attachEvent('on'+eventType.toLowerCase(), handler);
      }
      */
      else {
          var et = eventType.toUpperCase();
          if (window.Event && window.Event[et] && obj.captureEvents) obj.captureEvents(Event[et]);
          obj['on' + eventType.toLowerCase()] = handler;
        }
    },
    releaseEvent: function releaseEvent(obj, eventType, handler, capture) {
      if (obj.removeEventListener) {
        obj.removeEventListener(eventType.toLowerCase(), handler, capture);
      }
      /*
      else if (obj.detachEvent) {
      	obj.detachEvent('on'+eventType.toLowerCase(), handler);
      }
      */
      else {
          var et = eventType.toUpperCase();
          if (window.Event && window.Event[et] && obj.releaseEvents) obj.releaseEvents(Event[et]);
          et = 'on' + eventType.toLowerCase();
          if (obj[et] && obj[et] == handler) obj.et = null;
        }
    },
    enableKeyboard: function enableKeyboard(term) {
      var tg = Terminal.prototype.globals;

      if (!tg.kbdEnabled) {
        tg.registerEvent(document, 'keypress', tg.keyHandler, true);
        tg.registerEvent(document, 'keydown', tg.keyFix, true);
        tg.registerEvent(document, 'keyup', tg.clearRepeatTimer, true);
        tg.kbdEnabled = true;
      }

      tg.activeTerm = term;
    },
    disableKeyboard: function disableKeyboard(term) {
      var tg = Terminal.prototype.globals;

      if (tg.kbdEnabled) {
        tg.releaseEvent(document, 'keypress', tg.keyHandler, true);
        tg.releaseEvent(document, 'keydown', tg.keyFix, true);
        tg.releaseEvent(document, 'keyup', tg.clearRepeatTimer, true);
        tg.kbdEnabled = false;
      }

      tg.activeTerm = null;
    },
    // remap some special key mappings on keydown
    keyFix: function keyFix(e) {
      var tg = Terminal.prototype.globals;
      var term = tg.activeTerm;
      var ch;
      if (tg.keylock || term.lock) return true;

      if (window.event) {
        if (!e) e = window.event;
        ch = e.keyCode;

        if (e.DOM_VK_UP) {
          for (var i in tg.termDomKeyRef) {
            if (e[i] && ch == e[i]) {
              tg.keyHandler({
                which: tg.termDomKeyRef[i],
                _remapped: true,
                _repeat: ch == 0x1B ? true : false
              });
              if (e.preventDefault) e.preventDefault();
              if (e.stopPropagation) e.stopPropagation();
              e.cancelBubble = true;
              return false;
            }
          }

          e.cancelBubble = false;
          return true;
        } else {
          // no DOM support
          var termKey = term.termKey;
          var keyHandler = tg.keyHandler;

          if (ch == 8 && !term.isOpera) {
            keyHandler({
              which: termKey.BS,
              _remapped: true,
              _repeat: true
            });
          } else if (ch == 9) {
            keyHandler({
              which: termKey.TAB,
              _remapped: true,
              _repeat: term.printTab ? false : true
            });
          } else if (ch == 27) {
            keyHandler({
              which: termKey.ESC,
              _remapped: true,
              _repeat: term.printTab ? false : true
            });
          } else if (ch == 37) {
            keyHandler({
              which: termKey.LEFT,
              _remapped: true,
              _repeat: true
            });
          } else if (ch == 39) {
            keyHandler({
              which: termKey.RIGHT,
              _remapped: true,
              _repeat: true
            });
          } else if (ch == 38) {
            keyHandler({
              which: termKey.UP,
              _remapped: true,
              _repeat: true
            });
          } else if (ch == 40) {
            keyHandler({
              which: termKey.DOWN,
              _remapped: true,
              _repeat: true
            });
          } else if (ch == 127 || ch == 46) {
            keyHandler({
              which: termKey.DEL,
              _remapped: true,
              _repeat: true
            });
          } else if (ch >= 57373 && ch <= 57376) {
            if (ch == 57373) {
              keyHandler({
                which: termKey.UP,
                _remapped: true,
                _repeat: true
              });
            } else if (ch == 57374) {
              keyHandler({
                which: termKey.DOWN,
                _remapped: true,
                _repeat: true
              });
            } else if (ch == 57375) {
              keyHandler({
                which: termKey.LEFT,
                _remapped: true,
                _repeat: true
              });
            } else if (ch == 57376) {
              keyHandler({
                which: termKey.RIGHT,
                _remapped: true,
                _repeat: true
              });
            }
          } else {
            e.cancelBubble = false;
            return true;
          }

          if (e.preventDefault) e.preventDefault();
          if (e.stopPropagation) e.stopPropagation();
          e.cancelBubble = true;
          return false;
        }
      }
    },
    clearRepeatTimer: function clearRepeatTimer(e) {
      var tg = Terminal.prototype.globals;

      if (tg.keyRepeatTimer) {
        clearTimeout(tg.keyRepeatTimer);
        tg.keyRepeatTimer = null;
      }
    },
    doKeyRepeat: function doKeyRepeat(ch) {
      Terminal.prototype.globals.keyHandler({
        which: ch,
        _remapped: true,
        _repeated: true
      });
    },
    keyHandler: function keyHandler(e) {
      var tg = Terminal.prototype.globals;
      var term = tg.activeTerm;
      if (tg.keylock || term.lock || term.isMac && e && e.metaKey) return true;

      if (window.event) {
        if (window.event.preventDefault) window.event.preventDefault();
        if (window.event.stopPropagation) window.event.stopPropagation();
      } else if (e) {
        if (e.preventDefault) e.preventDefault();
        if (e.stopPropagation) e.stopPropagation();
      }

      var ch;
      var ctrl = false;
      var shft = false;
      var remapped = false;
      var termKey = term.termKey;
      var keyRepeat = 0;

      if (e) {
        ch = e.which;
        ctrl = e.ctrlKey && !e.altKey || e.modifiers == 2;
        shft = e.shiftKey || e.modifiers == 4;

        if (e._remapped) {
          remapped = true;

          if (window.event) {
            //ctrl=(ctrl || window.event.ctrlKey);
            ctrl = ctrl || window.event.ctrlKey && !window.event.altKey;
            shft = shft || window.event.shiftKey;
          }
        }

        if (e._repeated) {
          keyRepeat = 2;
        } else if (e._repeat) {
          keyRepeat = 1;
        }
      } else if (window.event) {
        ch = window.event.keyCode; //ctrl=(window.event.ctrlKey);

        ctrl = window.event.ctrlKey && !window.event.altKey; // allow alt gr == ctrl alt

        shft = window.event.shiftKey;

        if (window.event._repeated) {
          keyRepeat = 2;
        } else if (window.event._repeat) {
          keyRepeat = 1;
        }
      } else {
        return true;
      }

      if (ch == '' && remapped == false) {
        // map specials
        if (e == null) e = window.event;

        if (e.charCode == 0 && e.keyCode) {
          if (e.DOM_VK_UP) {
            var dkr = tg.termDomKeyRef;

            for (var i in dkr) {
              if (e[i] && e.keyCode == e[i]) {
                ch = dkr[i];
                break;
              }
            }
          } else {
            // NS4
            if (e.keyCode == 28) {
              ch = termKey.LEFT;
            } else if (e.keyCode == 29) {
              ch = termKey.RIGHT;
            } else if (e.keyCode == 30) {
              ch = termKey.UP;
            } else if (e.keyCode == 31) {
              ch = termKey.DOWN;
            } // Mozilla alike but no DOM support
            else if (e.keyCode == 37) {
                ch = termKey.LEFT;
              } else if (e.keyCode == 39) {
                ch = termKey.RIGHT;
              } else if (e.keyCode == 38) {
                ch = termKey.UP;
              } else if (e.keyCode == 40) {
                ch = termKey.DOWN;
              } // just to have the TAB mapping here too
              else if (e.keyCode == 9) {
                  ch = termKey.TAB;
                }
          }
        }
      } // leave on unicode private use area (might be function key etc)


      if (ch >= 0xE000 && ch <= 0xF8FF) return;

      if (keyRepeat) {
        tg.clearRepeatTimer();
        tg.keyRepeatTimer = window.setTimeout('Terminal.prototype.globals.doKeyRepeat(' + ch + ')', keyRepeat == 1 ? tg.keyRepeatDelay1 : tg.keyRepeatDelay2);
      } // key actions


      if (term.charMode) {
        term.insert = false;
        term.inputChar = ch;
        term.lineBuffer = '';
        term.handler();
        if (ch <= 32 && window.event) window.event.cancelBubble = true;
        return false;
      }

      if (!ctrl) {
        // special keys
        if (ch == termKey.CR) {
          term.lock = true;
          term.cursorOff();
          term.insert = false;

          if (term.rawMode) {
            term.lineBuffer = term.lastLine;
          } else if (term.fieldMode) {
            term.lineBuffer = term.lastLine;
            term.exitFieldMode();
          } else {
            term.lineBuffer = term._getLine(true);

            if (term.lineBuffer != '' && (!term.historyUnique || term.history.length == 0 || term.lineBuffer != term.history[term.history.length - 1])) {
              if (!term.scanning) term.history[term.history.length] = term.lineBuffer;
            }

            term.histPtr = term.history.length;
          }

          term.lastLine = '';
          term.inputChar = 0;
          term.handler();
          if (window.event) window.event.cancelBubble = true;
          return false;
        } else if (term.fieldMode) {
          if (ch == termKey.ESC) {
            term.lineBuffer = term.lastLine = '';
            term.exitFieldMode();
            term.lastLine = '';
            term.inputChar = 0;
            term.handler();
            if (window.event) window.event.cancelBubble = true;
            return false;
          } else if (ch == termKey.LEFT) {
            if (term.fieldC > 0) term.fieldC--;
          } else if (ch == termKey.RIGHT) {
            if (term.fieldC < term.lastLine.length) term.fieldC++;
          } else if (ch == termKey.BS) {
            if (term.fieldC > 0) {
              term.lastLine = term.lastLine.substring(0, term.fieldC - 1) + term.lastLine.substring(term.fieldC);
              term.fieldC--;
            }
          } else if (ch == termKey.DEL) {
            if (term.fieldC < term.lastLine.length) {
              term.lastLine = term.lastLine.substring(0, term.fieldC) + term.lastLine.substring(term.fieldC + 1);
            }
          } else if (ch >= 32) {
            term.lastLine = term.lastLine.substring(0, term.fieldC) + String.fromCharCode(ch) + term.lastLine.substring(term.fieldC);
            term.fieldC++;
          }

          term.drawField();
          return false;
        } else if (ch == termKey.ESC && term.conf.closeOnESC) {
          term.close();
          if (window.event) window.event.cancelBubble = true;
          return false;
        }

        if (ch < 32 && term.rawMode) {
          if (window.event) window.event.cancelBubble = true;
          return false;
        } else {
          if (ch == termKey.LEFT) {
            term.cursorLeft();
            if (window.event) window.event.cancelBubble = true;
            return false;
          } else if (ch == termKey.RIGHT) {
            term.cursorRight();
            if (window.event) window.event.cancelBubble = true;
            return false;
          } else if (ch == termKey.UP) {
            term.cursorOff();
            if (term.histPtr == term.history.length) term.lastLine = term._getLine();

            term._clearLine();

            if (term.history.length && term.histPtr >= 0) {
              if (term.histPtr > 0) term.histPtr--;
              term.type(term.history[term.histPtr]);
            } else if (term.lastLine) {
              term.type(term.lastLine);
            }

            term.cursorOn();
            if (window.event) window.event.cancelBubble = true;
            return false;
          } else if (ch == termKey.DOWN) {
            term.cursorOff();
            if (term.histPtr == term.history.length) term.lastLine = term._getLine();

            term._clearLine();

            if (term.history.length && term.histPtr <= term.history.length) {
              if (term.histPtr < term.history.length) term.histPtr++;

              if (term.histPtr < term.history.length) {
                term.type(term.history[term.histPtr]);
              } else if (term.lastLine) {
                term.type(term.lastLine);
              }
            } else if (term.lastLine) {
              term.type(term.lastLine);
            }

            term.cursorOn();
            if (window.event) window.event.cancelBubble = true;
            return false;
          } else if (ch == termKey.BS) {
            term.backspace();
            if (window.event) window.event.cancelBubble = true;
            return false;
          } else if (ch == termKey.DEL) {
            if (term.DELisBS) {
              term.backspace();
            } else {
              term.fwdDelete();
            }

            if (window.event) window.event.cancelBubble = true;
            return false;
          }
        }
      }

      if (term.rawMode) {
        if (term.isPrintable(ch)) {
          term.lastLine += String.fromCharCode(ch);
        }

        if (ch == 32 && window.event) {
          window.event.cancelBubble = true;
        } else if (window.opera && window.event) {
          window.event.cancelBubble = true;
        }

        return false;
      } else {
        if (term.conf.catchCtrlH && (ch == termKey.BS || ctrl && ch == 72)) {
          // catch ^H
          term.backspace();
          if (window.event) window.event.cancelBubble = true;
          return false;
        } else if (term.ctrlHandler && (ch < 32 || ctrl && term.isPrintable(ch, true))) {
          if (ch >= 65 && ch <= 96 || ch == 63) {
            // remap canonical
            if (ch == 63) {
              ch = 31;
            } else {
              ch -= 64;
            }
          }

          term.inputChar = ch;
          term.ctrlHandler();
          if (window.event) window.event.cancelBubble = true;
          return false;
        } else if (ctrl || !term.isPrintable(ch, true)) {
          if (window.event) window.event.cancelBubble = true;
          return false;
        } else if (term.isPrintable(ch, true)) {
          if (term.blinkTimer) clearTimeout(term.blinkTimer);

          if (term.insert) {
            term.cursorOff();

            term._scrollRight(term.r, term.c);
          }

          term._charOut(ch);

          term.cursorOn();

          if (ch == 32 && window.event) {
            window.event.cancelBubble = true;
          } else if (window.opera && window.event) {
            window.event.cancelBubble = true;
          }

          return false;
        }
      }

      return true;
    },
    // gui mappings
    hasSubDivs: false,
    termStringStart: '',
    termStringEnd: '',
    termSpecials: {
      // special HTML escapes
      0: '&nbsp;',
      1: '&nbsp;',
      9: '&nbsp;',
      32: '&nbsp;',
      34: '&quot;',
      38: '&amp;',
      60: '&lt;',
      62: '&gt;',
      127: '&loz;',
      0x20AC: '&euro;'
    },
    // extensive list of max 8 styles (2^n, n<16)
    termStyles: [1, 2, 4, 8, 16],
    // style markup: one letter keys, reserved keys: "p" (plain), "c" (color)
    termStyleMarkup: {
      'r': 1,
      'u': 2,
      'i': 4,
      's': 8,
      'b': 16 // map "b" to 16 (italics) for ANSI mapping

    },
    // mappings for styles (heading HTML)
    termStyleOpen: {
      1: '<span class="termReverse">',
      2: '<u>',
      4: '<i>',
      8: '<strike>',
      16: '<i>'
    },
    // mapping for styles (trailing HTML)
    termStyleClose: {
      1: '<\/span>',
      2: '<\/u>',
      4: '<\/i>',
      8: '<\/strike>',
      16: '</i>'
    },
    // method to install custom styles
    assignStyle: function assignStyle(styleCode, markup, htmlOpen, htmlClose) {
      var tg = Terminal.prototype.globals; // check params

      if (!styleCode || isNaN(styleCode)) {
        if (styleCode >= 256) {
          alert('termlib.js:\nCould not assign style.\n' + s + ' is not a valid power of 2 between 0 and 256.');
          return;
        }
      }

      var s = styleCode & 0xff;
      var matched = false;

      for (var i = 0; i < 8; i++) {
        if (s >>> i & 1) {
          if (matched) {
            alert('termlib.js:\nCould not assign style code.\n' + s + ' is not a power of 2!');
            return;
          }

          matched = true;
        }
      }

      if (!matched) {
        alert('termlib.js:\nCould not assign style code.\n' + s + ' is not a valid power of 2 between 0 and 256.');
        return;
      }

      markup = String(markup).toLowerCase();

      if (markup == 'c' || markup == 'p') {
        alert('termlib.js:\nCould not assign mark up.\n"' + markup + '" is a reserved code.');
        return;
      }

      if (markup.length > 1) {
        alert('termlib.js:\nCould not assign mark up.\n"' + markup + '" is not a single letter code.');
        return;
      }

      var exists = false;

      for (var i = 0; i < tg.termStyles.length; i++) {
        if (tg.termStyles[i] == s) {
          exists = true;
          break;
        }
      }

      if (exists) {
        var m = tg.termStyleMarkup[markup];

        if (m && m != s) {
          alert('termlib.js:\nCould not assign mark up.\n"' + markup + '" is already in use.');
          return;
        }
      } else {
        if (tg.termStyleMarkup[markup]) {
          alert('termlib.js:\nCould not assign mark up.\n"' + markup + '" is already in use.');
          return;
        }

        tg.termStyles[tg.termStyles.length] = s;
      } // install properties


      tg.termStyleMarkup[markup] = s;
      tg.termStyleOpen[s] = htmlOpen;
      tg.termStyleClose[s] = htmlClose;
    },
    // ANSI output mapping (styles & fg colors only)
    ANSI_regexp: /(\x1b\[|x9b)([0-9;]+?)([a-zA-Z])/g,
    // CSI ( = 0x1b+"[" or 0x9b ) + params + letter
    ANIS_SGR_codes: {
      '0': '%+p',
      '1': '%+b',
      '3': '%+i',
      '4': '%+u',
      '7': '%+r',
      '9': '%+s',
      '21': '%+u',
      '22': '%-b',
      '23': '%-i',
      '24': '%-u',
      '27': '%-r',
      '29': '%-s',
      '30': '%c(0)',
      // using default fg color for black (black: "%c(1)")
      '31': '%c(a)',
      '32': '%c(b)',
      '33': '%c(c)',
      '34': '%c(d)',
      '35': '%c(e)',
      '36': '%c(f)',
      '37': '%c(#999)',
      '39': '%c(0)',
      '90': '%c(9)',
      '91': '%c(2)',
      '92': '%c(3)',
      '93': '%c(4)',
      '94': '%c(5)',
      '95': '%c(6)',
      '96': '%c(7)',
      '97': '%c(8)',
      '99': '%c(0)',
      'trueBlack': '%c(1)'
    },
    ANSI_map: function ANSI_map(t, trueBlack) {
      // transform simple ANSI SGR codes to internal markup
      var tg = Terminal.prototype.globals;
      tg.ANSI_regexp.lastIndex = 0;
      return t.replace(tg.ANSI_regexp, function (str, p1, p2, p3, offset, s) {
        return tg.ANSI_replace(p2, p3, trueBlack);
      });
    },
    ANSI_replace: function ANSI_replace(p, cmd, trueBlack) {
      var tg = Terminal.prototype.globals;

      if (cmd == 'm') {
        if (p == '') {
          return tg.ANIS_SGR_codes[0];
        } else if (trueBlack && p == '30') {
          return tg.ANIS_SGR_codes.trueBlack;
        } else if (tg.ANIS_SGR_codes[p]) {
          return tg.ANIS_SGR_codes[p];
        }
      }

      return '';
    },
    // basic DHTML dynamics and browser abstraction
    writeElement: function writeElement(e, t) {
      if (document.getElementById) {
        var obj = document.getElementById(e);
        obj.innerHTML = t;
      } else if (document.all) {
        document.all[e].innerHTML = t;
      }
    },
    setElementXY: function setElementXY(d, x, y) {
      if (document.getElementById) {
        var obj = document.getElementById(d); // obj.style.left=x+'px';
        // obj.style.top=y+'px';
      } else if (document.all) {
        document.all[d].style.left = x + 'px';
        document.all[d].style.top = y + 'px';
      }
    },
    setVisible: function setVisible(d, v) {
      if (document.getElementById) {
        var obj = document.getElementById(d);
        obj.style.visibility = v ? 'visible' : 'hidden';
      } else if (document.all) {
        document.all[d].style.visibility = v ? 'visible' : 'hidden';
      }
    },
    setDisplay: function setDisplay(d, v) {
      if (document.getElementById) {
        var obj = document.getElementById(d);
        obj.style.display = v;
      } else if (document.all) {
        document.all[d].style.display = v;
      }
    },
    guiElementsReady: function guiElementsReady(e) {
      if (document.getElementById) {
        return document.getElementById(e) ? true : false;
      } else if (document.all) {
        return document.all[e] ? true : false;
      } else {
        return false;
      }
    },
    // constructor mods (MSIE fixes)
    _termString_makeKeyref: function _termString_makeKeyref() {
      var tg = Terminal.prototype.globals;
      var termString_keyref = tg.termString_keyref = new Array();
      var termString_keycoderef = tg.termString_keycoderef = new Array();
      var hex = new Array('A', 'B', 'C', 'D', 'E', 'F');

      for (var i = 0; i <= 15; i++) {
        var high = i < 10 ? i : hex[i - 10];

        for (var k = 0; k <= 15; k++) {
          var low = k < 10 ? k : hex[k - 10];
          var cc = i * 16 + k;

          if (cc >= 32) {
            var cs = unescape("%" + high + low);
            termString_keyref[cc] = cs;
            termString_keycoderef[cs] = cc;
          }
        }
      }
    },
    _extendMissingStringMethods: function _extendMissingStringMethods() {
      if (!String.fromCharCode || !String.prototype.charCodeAt) {
        Terminal.prototype.globals._termString_makeKeyref();
      }

      if (!String.fromCharCode) {
        String.fromCharCode = function (cc) {
          return cc != null ? Terminal.prototype.globals.termString_keyref[cc] : '';
        };
      }

      if (!String.prototype.charCodeAt) {
        String.prototype.charCodeAt = function (n) {
          cs = this.charAt(n);
          return Terminal.prototype.globals.termString_keycoderef[cs] ? Terminal.prototype.globals.termString_keycoderef[cs] : 0;
        };
      }
    } // end of Terminal.prototype.globals
    // end of Terminal.prototype

  } // initialize global data

};

Terminal.prototype.globals._initGlobals(); // global entities for backward compatibility with termlib 1.x applications


var TerminalDefaults = Terminal.prototype.Defaults;
var termDefaultHandler = Terminal.prototype.defaultHandler;
var TermGlobals = Terminal.prototype.globals;
var termKey = Terminal.prototype.globals.termKey;
var termDomKeyRef = Terminal.prototype.globals.termDomKeyRef;
/*
  === termlib.js Socket Extension v.1.02 ===

  (c) Norbert Landsteiner 2003-2007
  mass:werk - media environments
  <http://www.masswerk.at>

# Synopsis:
  Integrates async XMLHttpRequests (AJAX/JSON) tightly into termlib.js

# Example:

  myTerm = new Terminal( { handler: myTermHandler } );
  myTerm.open();

  function myTermHandler() {
    this.newLine();
    if (this.lineBuffer == 'get file') {
       myTerm.send(
         {
           url: 'myservice',
           data: {
               book: 'theBook',
               chapter: 7,
               page: 45
             },
           callback: myCallback
          }
       );
       return;
    }
    else {
       // ...
    }
    this.prompt();
  }

  function myCallback() {
  	if (this.socket.success) {
  		this.write(this.socket.responseText);
  	}
  	else {
  		this.write('OOPS: ' + this.socket.status + ' ' + this.socket.statusText);
  		if (this.socket.errno) {
  			this.newLine();
  			this.write('Error: ' + this.socket.errstring);
  		}
  	}
  	this.prompt();
  }


# Documentation:

  for usage and description see readme.txt chapter 13:
  <http://www.masswerk.at/termlib/readme.txt>

  or refer to the sample page:
  <http://www.masswerk.at/termlib/sample_socket.html>

*/

Terminal.prototype._HttpSocket = function () {
  var req = null;

  if (window.XMLHttpRequest) {
    try {
      req = new XMLHttpRequest();
    } catch (e) {}
  } else if (window.ActiveXObject) {
    var prtcls = this._msXMLHttpObjects;

    for (var i = 0; i < prtcls.length; i++) {
      try {
        req = new ActiveXObject(prtcls[i]);

        if (req) {
          // shorten proto list to working element
          if (prtcls.length > 1) this.prototype._msXMLHttpObjects = [prtcls[i]];
          break;
        }
      } catch (e) {}
    }
  }

  this.request = req;
  this.url;
  this.data = null;
  this.query = '';
  this.timeoutTimer = null;
  this.localMode = Boolean(window.location.href.search(/^file:/i) == 0);
  this.error = 0;
};

Terminal.prototype._HttpSocket.prototype = {
  version: '1.02',
  // config
  useXMLEncoding: false,
  // use ";" as separator if true, "&" else
  defaulTimeout: 10000,
  // request timeout in ticks (milliseconds)
  defaultMethod: 'GET',
  forceNewline: true,
  // translate line-breaks in responseText to newlines
  // static const
  errno: {
    OK: 0,
    NOTIMPLEMENTED: 1,
    FATALERROR: 2,
    TIMEOUT: 3,
    NETWORKERROR: 4,
    LOCALFILEERROR: 5
  },
  errstring: ['', 'XMLHttpRequest not implemented.', 'Could not open XMLHttpRequest.', 'The connection timed out.', 'Network error.', 'The requested local document was not found.'],
  // private static data
  _msXMLHttpObjects: ['Msxml2.XMLHTTP', 'Microsoft.XMLHTTP', 'Msxml2.XMLHTTP.5.0', 'Msxml2.XMLHTTP.4.0', 'Msxml2.XMLHTTP.3.0'],
  // internal methods
  serializeData: function serializeData() {
    this.query = this.serialize(this.data);
  },
  serialize: function serialize(data) {
    var v = '';

    if (data != null) {
      switch (_typeof(data)) {
        case 'object':
          var d = [];

          if (data instanceof Array) {
            // array
            for (var i = 0; i < data.length; i++) {
              d.push(this.serialize(data[i]));
            }

            v = d.join(',');
            break;
          }

          for (var i in data) {
            switch (_typeof(data[i])) {
              case 'object':
                d.push(encodeURIComponent(i) + '=' + this.serialize(data[i]));
                break;

              default:
                d.push(encodeURIComponent(i) + '=' + encodeURIComponent(data[i]));
                break;
            }
          }

          v = this.useXMLEncoding ? d.join(';') : d.join('&');
          break;

        case 'number':
          v = String(data);
          break;

        case 'string':
          v = encodeURIComponent(data);
          break;

        case 'boolean':
          v = data ? '1' : '0';
          break;
      }
    }

    return v;
  },
  toCamelCase: function toCamelCase(s) {
    if (typeof s != 'string') s = String(s);
    var a = s.toLowerCase().split('-');
    var cc = a[0];

    for (var i = 1; i < a.length; i++) {
      p = a[i];
      if (p.length) cc += p.charAt(0).toUpperCase() + p.substring(1);
    }

    return cc;
  },
  callbackHandler: function callbackHandler() {
    if (this.termRef.closed) return;
    var r = this.request;
    if (this.error == 0 && r.readyState != 4) return;

    if (this.timeoutTimer) {
      clearTimeout(this.timeoutTimer);
      this.timeoutTimer = null;
    }

    var success = false;
    var failed = true;
    var response = {
      headers: {},
      ErrorCodes: this.errno
    };

    if (this.localMode) {
      if (this.error && this.error < this.errno.NETWORKERROR) {
        response.status = 0;
        response.statusText = 'Connection Error';
        response.responseText = '';
        response.responseXML = null;
      } else if (this.error || r.responseText == null) {
        failed = false;
        response.status = 404;
        response.statusText = 'Not Found';
        response.responseText = 'The document ' + this.url + ' was not found on this file system.';
        response.responseXML = null;
        this.error = this.errno.LOCALFILEERROR;
      } else {
        success = true;
        failed = false;
        response.status = 200;
        response.statusText = 'OK';
        response.responseText = r.responseText;
        response.responseXML = r.responseXML;
      }
    } else {
      try {
        if (!this.error) {
          if (_typeof(r) == 'object' && r.status != undefined) {
            failed = false;

            if (r.status >= 200 && r.status < 300) {
              success = true;
            } else if (r.status >= 12000) {
              // MSIE network error
              failed = true;
              this.error = this.errno.NETWORKERROR;
            }
          }
        }
      } catch (e) {}

      if (!failed) {
        response.status = r.status;
        response.statusText = r.status == 404 ? 'Not Found' : r.statusText; // force correct header

        response.responseText = r.responseText;
        response.responseXML = r.responseXML;

        if (this.getHeaders) {
          if (this.getHeaders instanceof Array) {
            for (var i = 0; i < this.getHeaders.length; i++) {
              var h = this.getHeaders[i];

              try {
                response.headers[this.toCamelCase(h)] = r.getResponseHeader(h);
              } catch (e) {}
            }
          } else {
            for (var h in this.getHeaders) {
              try {
                response.headers[this.toCamelCase(h)] = r.getResponseHeader(h);
              } catch (e) {}
            }
          }
        }
      } else {
        response.status = 0;
        response.statusText = 'Connection Error';
        response.responseText = '';
        response.responseXML = null;
      }
    }

    if (this.forceNewline) response.responseText = response.responseText.replace(/\r\n?/g, '\n');
    response.url = this.url;
    response.data = this.data;
    response.query = this.query;
    response.method = this.method;
    response.success = success;
    response.errno = this.error;
    response.errstring = this.errstring[this.error];
    var term = this.termRef;
    term.socket = response;

    if (this.callback) {
      if (typeof this.callback == 'function') {
        this.callback.apply(term);
      } else if (window[this.callback] && typeof window[this.callback] == 'function') {
        window[this.callback].apply(term);
      } else {
        term._defaultServerCallback();
      }
    } else {
      term._defaultServerCallback();
    }

    delete term.socket;
    this.request = null;
    this.callback = null;
  },
  timeoutHandler: function timeoutHandler() {
    this.error = this.errno.TIMEOUT;

    try {
      this.request.abort();
    } catch (e) {}

    if (!this.localMode) this.callbackHandler();
  }
};

Terminal.prototype.send = function (opts) {
  var soc = new this._HttpSocket();

  if (opts) {
    if (typeof opts.method == 'string') {
      switch (opts.method.toLowerCase()) {
        case 'post':
          soc.method = 'POST';
          break;

        case 'get':
          soc.method = 'GET';
          break;

        default:
          soc.method = soc.defaultMethod.toUpperCase();
      }
    } else {
      soc.method = soc.defaultMethod;
    }

    if (opts.postbody != undefined) {
      soc.method = 'POST';
      soc.query = opts.postbody;
      soc.data = opts.data;
    } else if (opts.data != undefined) {
      soc.data = opts.data;
      soc.serializeData();
    }

    if (opts.url) soc.url = opts.url;

    if (opts.getHeaders && _typeof(opts.getHeaders) == 'object') {
      soc.getHeaders = opts.getHeaders;
    }
  } else {
    opts = {};
    soc.method = soc.defaultMethod;
  }

  var uri = soc.url;

  if (soc.method == 'GET') {
    if (soc.query) {
      uri += uri.indexOf('?') < 0 ? '?' + soc.query : soc.useXMLEncoding ? ';' + soc.query : '&' + soc.query;
    }

    if (!soc.localMode) {
      // add a random value to the query string (force a request)
      var uniqueparam = '_termlib_reqid=' + new Date().getTime() + '_' + Math.floor(Math.random() * 100000);
      uri += uri.indexOf('?') < 0 ? '?' + uniqueparam : soc.useXMLEncoding ? ';' + uniqueparam : '&' + uniqueparam;
    }
  }

  soc.callback = opts.callback;
  soc.termRef = this;

  if (!soc.request) {
    soc.error = soc.errno.NOTIMPLEMENTED;
    soc.callbackHandler();
    return;
  } else {
    try {
      if (opts.userid != undefined) {
        if (opts.password != undefined) {
          soc.request.open(soc.method, uri, true, opts.userid, opts.password);
        } else {
          soc.request.open(soc.method, uri, true, opts.userid);
        }
      } else {
        soc.request.open(soc.method, uri, true);
      }
    } catch (e) {
      soc.error = soc.errno.FATALERROR;
      soc.callbackHandler();
      return;
    }

    var body = null;

    if (soc.method == 'POST') {
      try {
        soc.request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      } catch (e) {}

      body = soc.query;
    }

    if (opts.headers && typeof opts.headers == 'objects') {
      for (var i in opts.headers) {
        try {
          soc.request.setRequestHeader(i, opts.headers[i]);
        } catch (e) {}
      }
    }

    if (opts.mimetype && soc.request.overrideMimeType) {
      try {
        soc.request.overrideMimeType(opts.mimetype); // force "Connection: close" (Bugzilla #246651)

        soc.request.setRequestHeader('Connection', 'close');
      } catch (e) {}
    }

    var timeoutDelay = opts.timeout && typeof opts.timeout == 'number' ? opts.tiomeout : soc.defaulTimeout;

    soc.request.onreadystatechange = function () {
      soc.callbackHandler();
    };

    try {
      soc.request.send(body);
    } catch (e) {
      if (soc.localMode) {
        soc.request.onreadystatechange = null;
        soc.request.abort();
        soc.error = soc.errno.LOCALFILEERROR;
      } else {
        soc.request.onreadystatechange = null;

        try {
          soc.request.abort();
        } catch (e2) {}

        soc.error = soc.errno.NETWORKERROR;
      }

      soc.callbackHandler();
      return true;
    }

    soc.timeoutTimer = setTimeout(function () {
      soc.timeoutHandler();
    }, timeoutDelay);
  }
};

Terminal.prototype._defaultServerCallback = function () {
  if (this.socket.success) {
    // output im more-mode
    this.write('Server Response:%n' + this.socket.responseText, true);
  } else {
    var s = 'Request failed: ' + this.socket.status + ' ' + this.socket.statusText;
    if (this.socket.errno) s += '%n' + this.socket.errstring;
    this.write(s);
    this.prompt();
  }
}; // eof


!function (t) {
  function e(r) {
    if (n[r]) return n[r].exports;
    var o = n[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return t[r].call(o.exports, o, o.exports, e), o.l = !0, o.exports;
  }

  var n = {};
  return e.m = t, e.c = n, e.i = function (t) {
    return t;
  }, e.d = function (t, n, r) {
    e.o(t, n) || Object.defineProperty(t, n, {
      configurable: !1,
      enumerable: !0,
      get: r
    });
  }, e.n = function (t) {
    var n = t && t.__esModule ? function () {
      return t.default;
    } : function () {
      return t;
    };
    return e.d(n, "a", n), n;
  }, e.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }, e.p = "", e(e.s = 18);
}([function (t, e) {
  var n;

  n = function () {
    return this;
  }();

  try {
    n = n || Function("return this")() || (0, eval)("this");
  } catch (t) {
    "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && (n = window);
  }

  t.exports = n;
}, function (t, e, n) {
  "use strict";

  function r(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }

  var o = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
    return _typeof(t);
  } : function (t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
  },
      i = function () {
    function t(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
      }
    }

    return function (e, n, r) {
      return n && t(e.prototype, n), r && t(e, r), e;
    };
  }(),
      a = function () {
    function t() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          n = e.name,
          o = e.fn,
          i = e.type,
          a = void 0 === i ? "usr" : i,
          s = e.shell,
          u = void 0 === s ? void 0 : s,
          c = e.man,
          l = void 0 === c ? "" : c;
      if (r(this, t), "string" != typeof n) throw Error("Command name must be a string");
      if ("function" != typeof o) throw Error("Command function must be... a function");
      this.fn = o.bind(this), this.name = n, this.type = a, this.man = l, u && (this.shell = u);
    }

    return i(t, [{
      key: "exec",
      value: function value() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if ("object" !== ("undefined" == typeof t ? "undefined" : o(t)) || Array.isArray(t)) throw Error("Command exec ARGV Must be an [Object]");
        return Object.keys(t).length ? this.fn(t) : this.fn();
      }
    }]), t;
  }();

  t.exports = a;
}, function (t, e, n) {
  "use strict";

  function r(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }

  var o = function () {
    function t(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
      }
    }

    return function (e, n, r) {
      return n && t(e.prototype, n), r && t(e, r), e;
    };
  }(),
      i = function () {
    function t() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          n = e.name,
          o = void 0 === n ? "" : n,
          i = e.type,
          a = void 0 === i ? "file" : i,
          s = e.content,
          u = void 0 === s ? "" : s;
      r(this, t), this.uid = this.genUid(), this.name = o, this.type = a, this.content = u, this.user = "root", this.group = "root", "file" === this.type ? this.permission = "rwxr--r--" : this.permission = "drwxr-xr-x";
    }

    return o(t, [{
      key: "genUid",
      value: function value() {
        function t() {
          return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1);
        }

        return t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t();
      }
    }]), t;
  }();

  t.exports = i;
}, function (t, e, n) {
  "use strict";

  (function (e) {
    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }

    function o(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" != _typeof(e) && "function" != typeof e ? t : e;
    }

    function i(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + _typeof(e));
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
    }

    var a = Object.assign || function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];

        for (var r in n) {
          Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        }
      }

      return t;
    },
        s = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }

      return function (e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
      };
    }(),
        u = n(5),
        c = n(4),
        l = n(8),
        f = function (t) {
      function u() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            e = t.filesystem,
            i = void 0 === e ? void 0 : e,
            s = t.commands,
            f = void 0 === s ? void 0 : s,
            h = t.env,
            d = void 0 === h ? {} : h;
        r(this, u);
        var p = o(this, (u.__proto__ || Object.getPrototypeOf(u)).call(this));
        return p.polyfills(), p.Classes = {
          Command: n(1),
          File: n(2)
        }, p.fs = new c(i, p), p.env = a({}, l, d), p.ShellCommands = p.registerCommands(p), p.ShellCommands = a({}, p.ShellCommands, p.registerCommands(p, f)), p;
      }

      return i(u, t), s(u, [{
        key: "polyfills",
        value: function value() {
          return e.Promise || (e.Promise = n(10).Promise), e.fetch || (e.fetch = n(14)), !0;
        }
      }, {
        key: "run",
        value: function value(t) {
          return this.exec(t);
        }
      }]), u;
    }(u);

    t.exports = f;
  }).call(e, n(0));
}, function (t, e, n) {
  "use strict";

  function r(t, e, n) {
    return e in t ? Object.defineProperty(t, e, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[e] = n, t;
  }

  function o(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }

  var i = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
    return _typeof(t);
  } : function (t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
  },
      a = function () {
    function t(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
      }
    }

    return function (e, n, r) {
      return n && t(e.prototype, n), r && t(e, r), e;
    };
  }(),
      s = n(7),
      u = n(2),
      c = function () {
    function t() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s,
          n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      if (o(this, t), this.shell = n, "object" !== ("undefined" == typeof e ? "undefined" : i(e)) || Array.isArray(e)) throw new Error("Virtual Filesystem provided not valid, initialization failed.");
      e = JSON.parse(JSON.stringify(e)), this.FileSystem = this.initFs(e), this.cwd = ["/"];
    }

    return a(t, [{
      key: "initFs",
      value: function value(t) {
        this.buildVirtualFs(t);
        var e = new u({
          name: "/",
          content: t,
          type: "dir"
        });
        return e;
      }
    }, {
      key: "buildVirtualFs",
      value: function value(t) {
        for (var e in t) {
          t.hasOwnProperty(e) && ("object" !== i(t[e]) || Array.isArray(t[e]) ? t[e] = new u({
            name: e,
            content: t[e]
          }) : (t[e] = new u({
            name: e,
            content: t[e],
            type: "dir"
          }), this.buildVirtualFs(t[e].content)));
        }
      }
    }, {
      key: "pathStringToArray",
      value: function value() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        if (!t.length) throw new Error("Path cannot be empty");
        if (t.match(/\/{2,}/g)) throw new Error("-invalid path: " + t);
        var e = t.split("/");
        return "" === e[0] && (e[0] = "/"), "." === e[0] && e.shift(), "" === e[e.length - 1] && e.pop(), "/" !== e[0] && (e = this.cwd.concat(e)), e;
      }
    }, {
      key: "pathArrayToString",
      value: function value() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        if (!Array.isArray(t)) throw new Error("-fatal filesystem: path must be an array");
        if (!t.length) throw new Error("-invalid filesystem: path not provided");
        var e = t.join("/");
        return e.replace(/\/{2,}/g, "/");
      }
    }, {
      key: "fileWalker",
      value: function value() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ["/"],
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.FileSystem;
        if (!Array.isArray(t)) throw new Error("Path must be an array of nodes, use Filesystem.pathStringToArray({string})");
        if (t = t.slice(0), !t.length) return "dir" === e.type ? e.content : e;
        var n = t.shift();

        if ("/" !== n) {
          var r = e.content[n];
          if (!r) throw new Error("File doesn't exist");
          e = r;
        }

        return this.fileWalker(t, e);
      }
    }, {
      key: "getNode",
      value: function value() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        if (arguments[1], "string" != typeof t) throw new Error("Invalid input.");
        var e = void 0,
            n = void 0;

        try {
          e = this.pathStringToArray(t), n = this.fileWalker(e);
        } catch (t) {
          throw t;
        }

        return {
          path: t,
          pathArray: e,
          node: n
        };
      }
    }, {
      key: "changeDir",
      value: function value() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            e = void 0;

        if (".." === t) {
          var n = this.cwd.splice(0, this.cwd.length - 1);
          if (!n.length) return "You are in the root directory";
          t = this.pathArrayToString(n);
        }

        try {
          e = this.getNode(t, "dir");
        } catch (t) {
          throw t;
        }

        if ("file" === e.node.type) throw new Error(e.pathArray[e.pathArray.length - 1] + " is a file not a directory");
        return this.cwd = e.pathArray, "changed directory: " + this.getCurrentDirectory();
      }
    }, {
      key: "listDir",
      value: function value() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            e = void 0;

        try {
          e = this.getNode(t, "dir");
        } catch (t) {
          throw t;
        }

        return "file" === e.node.type && (e.node = r({}, e.node.name, e.node)), e.node;
      }
    }, {
      key: "readFile",
      value: function value() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            e = void 0;

        try {
          e = this.getNode(t, "file");
        } catch (t) {
          throw t;
        }

        if (!e.node.type) throw new Error(e.pathArray[e.pathArray.length - 1] + " is a directory not a file");
        return e.node;
      }
    }, {
      key: "getCurrentDirectory",
      value: function value() {
        var t = void 0;

        try {
          t = this.pathArrayToString(this.cwd);
        } catch (t) {
          return "-invalid filesystem: An error occured while parsing current working directory to string.";
        }

        return t;
      }
    }]), t;
  }();

  t.exports = c;
}, function (t, e, n) {
  "use strict";

  function r(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }

  var o = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
    return _typeof(t);
  } : function (t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
  },
      i = function () {
    function t(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
      }
    }

    return function (e, n, r) {
      return n && t(e.prototype, n), r && t(e, r), e;
    };
  }(),
      a = n(1),
      s = n(12),
      u = function () {
    function t() {
      r(this, t), this.buildHistory();
    }

    return i(t, [{
      key: "parse",
      value: function value(t) {
        return new s(t);
      }
    }, {
      key: "exec",
      value: function value(t) {
        this.setHistoryItem(t);
        var e = void 0;

        try {
          e = this.parse(t);
        } catch (t) {
          return "-fatal command: " + (t.message || "Some Error Occured while parsing the command string.");
        }

        var n = this.ShellCommands[e.command];
        if (!n) return "-invalid shell: Command <" + e.command + "> doesn't exist.\n";
        var r = void 0;

        try {
          r = n.exec(e);
        } catch (t) {
          return "-fatal " + e.command + ": " + t.message;
        }

        return this.format(r);
      }
    }, {
      key: "format",
      value: function value(t) {
        return "function" == typeof t ? "-invalid command: Command returned invalid data type." : void 0 === t || "undefined" == typeof t ? "-invalid command: Command returned no data." : t;
      }
    }, {
      key: "registerCommands",
      value: function value(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            r = n(6);

        if (e) {
          if ("object" !== ("undefined" == typeof e ? "undefined" : o(e)) || Array.isArray(e)) throw new Error("Custom command provided are not in a valid format.");
          r = e;
        }

        var i = {};
        return Object.keys(r).map(function (e) {
          var n = r[e];
          "string" == typeof n.name && "function" == typeof n.fn && (n.shell = t, i[e] = new a(n));
        }), i;
      }
    }, {
      key: "buildHistory",
      value: function value() {
        localStorage.getItem("termlyHistory") || localStorage.setItem("termlyHistory", JSON.stringify([]));
      }
    }, {
      key: "setHistoryItem",
      value: function value(t) {
        if (t.length) {
          var e = JSON.parse(localStorage.getItem("termlyHistory"));
          return e.unshift(t), localStorage.setItem("termlyHistory", JSON.stringify(e));
        }
      }
    }, {
      key: "getHistory",
      value: function value() {
        return JSON.parse(localStorage.getItem("termlyHistory"));
      }
    }, {
      key: "clearHistory",
      value: function value() {
        return localStorage.setItem("termlyHistory", JSON.stringify([]));
      }
    }]), t;
  }();

  t.exports = u;
}, function (t, e, n) {
  "use strict";

  var r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
    return _typeof(t);
  } : function (t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
  },
      o = n(15),
      i = o.name,
      a = o.version,
      s = o.description,
      u = o.repository,
      c = o.author,
      l = o.license;
  t.exports = {
    help: {
      name: "help",
      type: "builtin",
      man: "List of available commands\nType man <command> to have further info.",
      fn: function fn() {
        return "Commands available: " + Object.keys(this.shell.ShellCommands).join(", ") + '\nType "man <command>" to have further info.';
      }
    },
    whoami: {
      name: "whoami",
      type: "builtin",
      man: "Current user",
      fn: function fn() {
        return this.shell.user;
      }
    },
    about: {
      name: "about",
      type: "builtin",
      man: "About this project",
      fn: function fn() {
        var t = "";
        return t += "name: " + i + "\n", t += "version: " + a + "\n", t += "description: " + s + "\n", t += "repository: " + u + "\n", t += "author: " + c + "\n", t += "license: " + l + "\n";
      }
    },
    pwd: {
      name: "pwd",
      type: "builtin",
      man: "Print current working directory",
      fn: function fn() {
        return this.shell.fs.getCurrentDirectory();
      }
    },
    arguments: {
      name: "arguments",
      type: "builtin",
      man: "Return argument passed, used for testing purpose",
      fn: function fn(t) {
        return JSON.stringify(t, null, 2);
      }
    },
    printenv: {
      name: "printenv",
      type: "builtin",
      man: "Return environment variables",
      fn: function fn() {
        var t = this.shell.env,
            e = "";
        return Object.keys(t).map(function (n) {
          var o = "object" !== r(t[n]) || Array.isArray(t[n]) ? t[n] : JSON.stringify(t[n]);
          e += n + "=" + o + "\n";
        }), e;
      }
    },
    export: {
      name: "export",
      type: "builtin",
      man: "Export a variable into the current environment",
      fn: function fn(t) {
        if (!t || !t._.length) throw new Error("-fatal " + this.name + ': Invalid syntax,\n correct syntax: export VAR=value or VAR="much value, such environment"');
        var e = t._,
            n = void 0,
            r = void 0;

        if (1 === e.length) {
          var o = e[0].split("=");
          n = o[0], r = o[1];
        }

        return e.length > 1 && (n = e[0].replace(/=$/, ""), r = e[1].replace(/(\'|\")/g, "")), this.shell.env[n] = r, n + "=" + r;
      }
    },
    cd: {
      name: "cd",
      type: "builtin",
      man: "Change directory, pass absolute or relative path: eg. cd /etc, cd / cd/my/nested/dir",
      fn: function fn(t) {
        if (!t._.length) throw new Error("-invalid No path provided.");

        var e = t._.join();

        try {
          return this.shell.fs.changeDir(e);
        } catch (t) {
          throw t;
        }
      }
    },
    ls: {
      name: "ls",
      type: "builtin",
      man: "list directory files, pass absolute/relative path, if empty list current directory",
      fn: function fn() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          _: ["./"]
        };
        t._.length || t._.push(".");

        var e = t._.join(),
            n = void 0,
            r = "";

        try {
          n = this.shell.fs.listDir(e);
        } catch (t) {
          throw t;
        }

        for (var o in n) {
          n.hasOwnProperty(o) && (r += n[o].permission + "\t" + n[o].user + " " + n[o].group + "\t" + n[o].name + "\n");
        }

        return r;
      }
    },
    cat: {
      name: "cat",
      type: "builtin",
      man: "Return file content, take one argument: file path (relative/absolute)",
      fn: function fn() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          _: ["./"]
        },
            e = t._.join(),
            n = void 0;

        try {
          n = this.shell.fs.readFile(e);
        } catch (t) {
          throw t;
        }

        return n.content;
      }
    },
    man: {
      name: "man",
      type: "builtin",
      man: "Command manual, takes one argument, command name",
      fn: function fn() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (!t._[0]) throw new Error("man: no command provided.");
        var e = t._[0];
        if (!this.shell.ShellCommands[e]) throw new Error("command doesn't exist.");
        if (!this.shell.ShellCommands[e].man) throw new Error("no manual entry for this command.");
        return this.shell.ShellCommands[e].man;
      }
    },
    http: {
      name: "http",
      type: "builtin",
      man: "Send HTTP requests.\n syntax: http [OPTIONS FLAGS] URL.\neg: http -m GET http://jsonplaceholder.typicode.com/\n    options:\n    \t-m --method POST,GET,PUT,DELETE\n     \t--body must be an object, and MUST use single quoets inside eg: --body=\"{ 'data': '1' }\"\n     ",
      fn: function fn() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (!t._.length) throw new Error("http: no URL provided, provide URL and/or method \n help: " + this.shell.ShellCommands.http.man);
        var e = t.method || t.m || "GET",
            n = t._[0],
            r = void 0;
        if (t.body) try {
          r = JSON.stringify(JSON.parse(t.body.replace(/\'/g, '"')));
        } catch (t) {
          throw console.log(t), new Error("Body provided is not a valid JSON");
        }
        var o = {
          method: e,
          headers: {
            "Content-Type": "application/json"
          }
        };
        return "GET" !== e && (o.body = r), fetch(n, o).then(function (t) {
          if (t.ok) return t.json();
          throw new Error("Request Failed (" + (t.status || 500) + "): " + (t.statusText || "Some Error Occured."));
        }).catch(function (t) {
          throw new Error("-fetch error response returned but it was not a valid JSON. Cannot Parse.");
        });
      }
    },
    history: {
      name: "history",
      type: "builtin",
      man: "Return list of previous executed commands, use -c flag to clear",
      fn: function fn(t) {
        if (t.c) return this.shell.clearHistory(), "History Cleared.";

        for (var e = this.shell.getHistory().reverse(), n = "", r = 0; r < e.length; r++) {
          n += r + "\t" + e[r] + "\n";
        }

        return n;
      }
    }
  };
}, function (t, e, n) {
  "use strict";

  t.exports = {
    "file.h": "#include <nope.h>",
    etc: {
      apache2: {
        "apache2.conf": "Not What you were looking for :)"
      }
    },
    home: {
      guest: {
        docs: {
          "mydoc.md": "TestFile",
          "mydoc2.md": "TestFile2",
          "mydoc3.md": "TestFile3"
        }
      }
    },
    root: {
      ".zshrc": "not even close :)",
      ".oh-my-zsh": {
        themes: {}
      }
    }
  };
}, function (t, e, n) {
  "use strict";

  (function (e) {
    var n = e || window,
        r = n.location;
    t.exports = {
      USER: "root",
      HOSTNAME: r && r.hostname.length ? r.hostname : "my.host.me"
    };
  }).call(e, n(0));
}, function (t, e) {
  function n() {
    throw new Error("setTimeout has not been defined");
  }

  function r() {
    throw new Error("clearTimeout has not been defined");
  }

  function o(t) {
    if (l === setTimeout) return setTimeout(t, 0);
    if ((l === n || !l) && setTimeout) return l = setTimeout, setTimeout(t, 0);

    try {
      return l(t, 0);
    } catch (e) {
      try {
        return l.call(null, t, 0);
      } catch (e) {
        return l.call(this, t, 0);
      }
    }
  }

  function i(t) {
    if (f === clearTimeout) return clearTimeout(t);
    if ((f === r || !f) && clearTimeout) return f = clearTimeout, clearTimeout(t);

    try {
      return f(t);
    } catch (e) {
      try {
        return f.call(null, t);
      } catch (e) {
        return f.call(this, t);
      }
    }
  }

  function a() {
    y && d && (y = !1, d.length ? p = d.concat(p) : m = -1, p.length && s());
  }

  function s() {
    if (!y) {
      var t = o(a);
      y = !0;

      for (var e = p.length; e;) {
        for (d = p, p = []; ++m < e;) {
          d && d[m].run();
        }

        m = -1, e = p.length;
      }

      d = null, y = !1, i(t);
    }
  }

  function u(t, e) {
    this.fun = t, this.array = e;
  }

  function c() {}

  var l,
      f,
      h = t.exports = {};
  !function () {
    try {
      l = "function" == typeof setTimeout ? setTimeout : n;
    } catch (t) {
      l = n;
    }

    try {
      f = "function" == typeof clearTimeout ? clearTimeout : r;
    } catch (t) {
      f = r;
    }
  }();
  var d,
      p = [],
      y = !1,
      m = -1;
  h.nextTick = function (t) {
    var e = new Array(arguments.length - 1);
    if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) {
      e[n - 1] = arguments[n];
    }
    p.push(new u(t, e)), 1 !== p.length || y || o(s);
  }, u.prototype.run = function () {
    this.fun.apply(null, this.array);
  }, h.title = "browser", h.browser = !0, h.env = {}, h.argv = [], h.version = "", h.versions = {}, h.on = c, h.addListener = c, h.once = c, h.off = c, h.removeListener = c, h.removeAllListeners = c, h.emit = c, h.binding = function (t) {
    throw new Error("process.binding is not supported");
  }, h.cwd = function () {
    return "/";
  }, h.chdir = function (t) {
    throw new Error("process.chdir is not supported");
  }, h.umask = function () {
    return 0;
  };
}, function (t, e, n) {
  (function (e) {
    !function (n) {
      function r() {}

      function o(t, e) {
        return function () {
          t.apply(e, arguments);
        };
      }

      function i(t) {
        if ("object" != _typeof(this)) throw new TypeError("Promises must be constructed via new");
        if ("function" != typeof t) throw new TypeError("not a function");
        this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], f(t, this);
      }

      function a(t, e) {
        for (; 3 === t._state;) {
          t = t._value;
        }

        return 0 === t._state ? void t._deferreds.push(e) : (t._handled = !0, void i._immediateFn(function () {
          var n = 1 === t._state ? e.onFulfilled : e.onRejected;
          if (null === n) return void (1 === t._state ? s : u)(e.promise, t._value);
          var r;

          try {
            r = n(t._value);
          } catch (t) {
            return void u(e.promise, t);
          }

          s(e.promise, r);
        }));
      }

      function s(t, e) {
        try {
          if (e === t) throw new TypeError("A promise cannot be resolved with itself.");

          if (e && ("object" == _typeof(e) || "function" == typeof e)) {
            var n = e.then;
            if (e instanceof i) return t._state = 3, t._value = e, void c(t);
            if ("function" == typeof n) return void f(o(n, e), t);
          }

          t._state = 1, t._value = e, c(t);
        } catch (e) {
          u(t, e);
        }
      }

      function u(t, e) {
        t._state = 2, t._value = e, c(t);
      }

      function c(t) {
        2 === t._state && 0 === t._deferreds.length && i._immediateFn(function () {
          t._handled || i._unhandledRejectionFn(t._value);
        });

        for (var e = 0, n = t._deferreds.length; e < n; e++) {
          a(t, t._deferreds[e]);
        }

        t._deferreds = null;
      }

      function l(t, e, n) {
        this.onFulfilled = "function" == typeof t ? t : null, this.onRejected = "function" == typeof e ? e : null, this.promise = n;
      }

      function f(t, e) {
        var n = !1;

        try {
          t(function (t) {
            n || (n = !0, s(e, t));
          }, function (t) {
            n || (n = !0, u(e, t));
          });
        } catch (t) {
          if (n) return;
          n = !0, u(e, t);
        }
      }

      var h = setTimeout;
      i.prototype.catch = function (t) {
        return this.then(null, t);
      }, i.prototype.then = function (t, e) {
        var n = new this.constructor(r);
        return a(this, new l(t, e, n)), n;
      }, i.all = function (t) {
        var e = Array.prototype.slice.call(t);
        return new i(function (t, n) {
          function r(i, a) {
            try {
              if (a && ("object" == _typeof(a) || "function" == typeof a)) {
                var s = a.then;
                if ("function" == typeof s) return void s.call(a, function (t) {
                  r(i, t);
                }, n);
              }

              e[i] = a, 0 === --o && t(e);
            } catch (t) {
              n(t);
            }
          }

          if (0 === e.length) return t([]);

          for (var o = e.length, i = 0; i < e.length; i++) {
            r(i, e[i]);
          }
        });
      }, i.resolve = function (t) {
        return t && "object" == _typeof(t) && t.constructor === i ? t : new i(function (e) {
          e(t);
        });
      }, i.reject = function (t) {
        return new i(function (e, n) {
          n(t);
        });
      }, i.race = function (t) {
        return new i(function (e, n) {
          for (var r = 0, o = t.length; r < o; r++) {
            t[r].then(e, n);
          }
        });
      }, i._immediateFn = "function" == typeof e && function (t) {
        e(t);
      } || function (t) {
        h(t, 0);
      }, i._unhandledRejectionFn = function (t) {
        "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", t);
      }, i._setImmediateFn = function (t) {
        i._immediateFn = t;
      }, i._setUnhandledRejectionFn = function (t) {
        i._unhandledRejectionFn = t;
      }, "undefined" != typeof t && t.exports ? t.exports = i : n.Promise || (n.Promise = i);
    }(this);
  }).call(e, n(13).setImmediate);
}, function (t, e, n) {
  (function (t, e) {
    !function (t, n) {
      "use strict";

      function r(t) {
        "function" != typeof t && (t = new Function("" + t));

        for (var e = new Array(arguments.length - 1), n = 0; n < e.length; n++) {
          e[n] = arguments[n + 1];
        }

        var r = {
          callback: t,
          args: e
        };
        return y[p] = r, d(p), p++;
      }

      function o(t) {
        delete y[t];
      }

      function i(t) {
        var e = t.callback,
            r = t.args;

        switch (r.length) {
          case 0:
            e();
            break;

          case 1:
            e(r[0]);
            break;

          case 2:
            e(r[0], r[1]);
            break;

          case 3:
            e(r[0], r[1], r[2]);
            break;

          default:
            e.apply(n, r);
        }
      }

      function a(t) {
        if (m) setTimeout(a, 0, t);else {
          var e = y[t];

          if (e) {
            m = !0;

            try {
              i(e);
            } finally {
              o(t), m = !1;
            }
          }
        }
      }

      function s() {
        d = function d(t) {
          e.nextTick(function () {
            a(t);
          });
        };
      }

      function u() {
        if (t.postMessage && !t.importScripts) {
          var e = !0,
              n = t.onmessage;
          return t.onmessage = function () {
            e = !1;
          }, t.postMessage("", "*"), t.onmessage = n, e;
        }
      }

      function c() {
        var e = "setImmediate$" + Math.random() + "$",
            n = function n(_n) {
          _n.source === t && "string" == typeof _n.data && 0 === _n.data.indexOf(e) && a(+_n.data.slice(e.length));
        };

        t.addEventListener ? t.addEventListener("message", n, !1) : t.attachEvent("onmessage", n), d = function d(n) {
          t.postMessage(e + n, "*");
        };
      }

      function l() {
        var t = new MessageChannel();
        t.port1.onmessage = function (t) {
          var e = t.data;
          a(e);
        }, d = function d(e) {
          t.port2.postMessage(e);
        };
      }

      function f() {
        var t = v.documentElement;

        d = function d(e) {
          var n = v.createElement("script");
          n.onreadystatechange = function () {
            a(e), n.onreadystatechange = null, t.removeChild(n), n = null;
          }, t.appendChild(n);
        };
      }

      function h() {
        d = function d(t) {
          setTimeout(a, 0, t);
        };
      }

      if (!t.setImmediate) {
        var d,
            p = 1,
            y = {},
            m = !1,
            v = t.document,
            b = Object.getPrototypeOf && Object.getPrototypeOf(t);
        b = b && b.setTimeout ? b : t, "[object process]" === {}.toString.call(t.process) ? s() : u() ? c() : t.MessageChannel ? l() : v && "onreadystatechange" in v.createElement("script") ? f() : h(), b.setImmediate = r, b.clearImmediate = o;
      }
    }("undefined" == typeof self ? "undefined" == typeof t ? this : t : self);
  }).call(e, n(0), n(9));
}, function (t, e, n) {
  "use strict";

  function r(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }

  var o = function () {
    function t(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
      }
    }

    return function (e, n, r) {
      return n && t(e.prototype, n), r && t(e, r), e;
    };
  }(),
      i = function () {
    function t(e) {
      if (r(this, t), !e || !e.length) throw new Error("Parser: command provided is empty.");
      if ("string" != typeof e) throw new Error("Parser: command must be a string!");
      this.raw = e;
      var n = this.stringToArray(e.replace(/\s{2,}/g, "").replace(/\t|\n/g, " "));

      if (this.command = n[0], this._ = [], n.length) {
        var o = this.parse(n.slice(1));

        if (!Object.assign) {
          for (var i in o) {
            o.hasOwnProperty(i) && (this[i] = o[i]);
          }

          return !0;
        }

        return Object.assign(this, o);
      }
    }

    return o(t, [{
      key: "stringToArray",
      value: function value(t) {
        return t.match(/[^\s"']+|"([^"]*)"|'([^']*)'/g);
      }
    }, {
      key: "parse",
      value: function value(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!t.length) return e;

        if (t[0].match(/^\-[^\-].*/)) {
          var n = t[0].replace("-", "");
          return t[1] && t[1].match(/^\-.*/) ? (e[n] = !0, this.parse(t.splice(1), e)) : t[1] ? (e[n] = t[1], this.parse(t.splice(2), e)) : (e[n] = !0, this.parse(t.splice(1), e));
        }

        if (t[0].match(/^\-{2}.*\=$/)) {
          var r = t[0].match(/--(.*)=/)[1];
          return e[r] = t[1].replace(/"/g, ""), this.parse(t.splice(2), e);
        }

        if (t[0].match(/^\-{2}.*\={1}.*$/)) {
          var o = t[0].match(/\-{2}(.*)=/)[1];
          return e[o] = t[0].match(/\={1}(.*)/)[1], this.parse(t.splice(1), e);
        }

        if (t[0].match(/^\-{2}.*$/)) {
          var i = t[0].replace("--", "");
          if (!t[1] || t[1] && t[1].match(/^\-{1,}/)) return e[i] = !0, this.parse(t.slice(1), e);
          if (t[1] && !t[1].match(/^\-{1,}/)) return e[i] = t[1], this.parse(t.slice(2), e);
        }

        return this._.push(t.shift()), this.parse(t, e);
      }
    }]), t;
  }();

  try {
    t.exports = i;
  } catch (t) {}
}, function (t, e, n) {
  function r(t, e) {
    this._id = t, this._clearFn = e;
  }

  var o = Function.prototype.apply;
  e.setTimeout = function () {
    return new r(o.call(setTimeout, window, arguments), clearTimeout);
  }, e.setInterval = function () {
    return new r(o.call(setInterval, window, arguments), clearInterval);
  }, e.clearTimeout = e.clearInterval = function (t) {
    t && t.close();
  }, r.prototype.unref = r.prototype.ref = function () {}, r.prototype.close = function () {
    this._clearFn.call(window, this._id);
  }, e.enroll = function (t, e) {
    clearTimeout(t._idleTimeoutId), t._idleTimeout = e;
  }, e.unenroll = function (t) {
    clearTimeout(t._idleTimeoutId), t._idleTimeout = -1;
  }, e._unrefActive = e.active = function (t) {
    clearTimeout(t._idleTimeoutId);
    var e = t._idleTimeout;
    e >= 0 && (t._idleTimeoutId = setTimeout(function () {
      t._onTimeout && t._onTimeout();
    }, e));
  }, n(11), e.setImmediate = setImmediate, e.clearImmediate = clearImmediate;
}, function (t, e) {
  !function (t) {
    "use strict";

    function e(t) {
      if ("string" != typeof t && (t = String(t)), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t)) throw new TypeError("Invalid character in header field name");
      return t.toLowerCase();
    }

    function n(t) {
      return "string" != typeof t && (t = String(t)), t;
    }

    function r(t) {
      var e = {
        next: function next() {
          var e = t.shift();
          return {
            done: void 0 === e,
            value: e
          };
        }
      };
      return v.iterable && (e[Symbol.iterator] = function () {
        return e;
      }), e;
    }

    function o(t) {
      this.map = {}, t instanceof o ? t.forEach(function (t, e) {
        this.append(e, t);
      }, this) : t && Object.getOwnPropertyNames(t).forEach(function (e) {
        this.append(e, t[e]);
      }, this);
    }

    function i(t) {
      return t.bodyUsed ? Promise.reject(new TypeError("Already read")) : void (t.bodyUsed = !0);
    }

    function a(t) {
      return new Promise(function (e, n) {
        t.onload = function () {
          e(t.result);
        }, t.onerror = function () {
          n(t.error);
        };
      });
    }

    function s(t) {
      var e = new FileReader(),
          n = a(e);
      return e.readAsArrayBuffer(t), n;
    }

    function u(t) {
      var e = new FileReader(),
          n = a(e);
      return e.readAsText(t), n;
    }

    function c(t) {
      for (var e = new Uint8Array(t), n = new Array(e.length), r = 0; r < e.length; r++) {
        n[r] = String.fromCharCode(e[r]);
      }

      return n.join("");
    }

    function l(t) {
      if (t.slice) return t.slice(0);
      var e = new Uint8Array(t.byteLength);
      return e.set(new Uint8Array(t)), e.buffer;
    }

    function f() {
      return this.bodyUsed = !1, this._initBody = function (t) {
        if (this._bodyInit = t, t) {
          if ("string" == typeof t) this._bodyText = t;else if (v.blob && Blob.prototype.isPrototypeOf(t)) this._bodyBlob = t;else if (v.formData && FormData.prototype.isPrototypeOf(t)) this._bodyFormData = t;else if (v.searchParams && URLSearchParams.prototype.isPrototypeOf(t)) this._bodyText = t.toString();else if (v.arrayBuffer && v.blob && g(t)) this._bodyArrayBuffer = l(t.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer]);else {
            if (!v.arrayBuffer || !ArrayBuffer.prototype.isPrototypeOf(t) && !w(t)) throw new Error("unsupported BodyInit type");
            this._bodyArrayBuffer = l(t);
          }
        } else this._bodyText = "";
        this.headers.get("content-type") || ("string" == typeof t ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : v.searchParams && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
      }, v.blob && (this.blob = function () {
        var t = i(this);
        if (t) return t;
        if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
        if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
        if (this._bodyFormData) throw new Error("could not read FormData body as blob");
        return Promise.resolve(new Blob([this._bodyText]));
      }, this.arrayBuffer = function () {
        return this._bodyArrayBuffer ? i(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(s);
      }), this.text = function () {
        var t = i(this);
        if (t) return t;
        if (this._bodyBlob) return u(this._bodyBlob);
        if (this._bodyArrayBuffer) return Promise.resolve(c(this._bodyArrayBuffer));
        if (this._bodyFormData) throw new Error("could not read FormData body as text");
        return Promise.resolve(this._bodyText);
      }, v.formData && (this.formData = function () {
        return this.text().then(p);
      }), this.json = function () {
        return this.text().then(JSON.parse);
      }, this;
    }

    function h(t) {
      var e = t.toUpperCase();
      return _.indexOf(e) > -1 ? e : t;
    }

    function d(t, e) {
      e = e || {};
      var n = e.body;

      if (t instanceof d) {
        if (t.bodyUsed) throw new TypeError("Already read");
        this.url = t.url, this.credentials = t.credentials, e.headers || (this.headers = new o(t.headers)), this.method = t.method, this.mode = t.mode, n || null == t._bodyInit || (n = t._bodyInit, t.bodyUsed = !0);
      } else this.url = String(t);

      if (this.credentials = e.credentials || this.credentials || "omit", !e.headers && this.headers || (this.headers = new o(e.headers)), this.method = h(e.method || this.method || "GET"), this.mode = e.mode || this.mode || null, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && n) throw new TypeError("Body not allowed for GET or HEAD requests");

      this._initBody(n);
    }

    function p(t) {
      var e = new FormData();
      return t.trim().split("&").forEach(function (t) {
        if (t) {
          var n = t.split("="),
              r = n.shift().replace(/\+/g, " "),
              o = n.join("=").replace(/\+/g, " ");
          e.append(decodeURIComponent(r), decodeURIComponent(o));
        }
      }), e;
    }

    function y(t) {
      var e = new o();
      return t.split(/\r?\n/).forEach(function (t) {
        var n = t.split(":"),
            r = n.shift().trim();

        if (r) {
          var o = n.join(":").trim();
          e.append(r, o);
        }
      }), e;
    }

    function m(t, e) {
      e || (e = {}), this.type = "default", this.status = "status" in e ? e.status : 200, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in e ? e.statusText : "OK", this.headers = new o(e.headers), this.url = e.url || "", this._initBody(t);
    }

    if (!t.fetch) {
      var v = {
        searchParams: "URLSearchParams" in t,
        iterable: "Symbol" in t && "iterator" in Symbol,
        blob: "FileReader" in t && "Blob" in t && function () {
          try {
            return new Blob(), !0;
          } catch (t) {
            return !1;
          }
        }(),
        formData: "FormData" in t,
        arrayBuffer: "ArrayBuffer" in t
      };
      if (v.arrayBuffer) var b = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
          g = function g(t) {
        return t && DataView.prototype.isPrototypeOf(t);
      },
          w = ArrayBuffer.isView || function (t) {
        return t && b.indexOf(Object.prototype.toString.call(t)) > -1;
      };
      o.prototype.append = function (t, r) {
        t = e(t), r = n(r);
        var o = this.map[t];
        this.map[t] = o ? o + "," + r : r;
      }, o.prototype.delete = function (t) {
        delete this.map[e(t)];
      }, o.prototype.get = function (t) {
        return t = e(t), this.has(t) ? this.map[t] : null;
      }, o.prototype.has = function (t) {
        return this.map.hasOwnProperty(e(t));
      }, o.prototype.set = function (t, r) {
        this.map[e(t)] = n(r);
      }, o.prototype.forEach = function (t, e) {
        for (var n in this.map) {
          this.map.hasOwnProperty(n) && t.call(e, this.map[n], n, this);
        }
      }, o.prototype.keys = function () {
        var t = [];
        return this.forEach(function (e, n) {
          t.push(n);
        }), r(t);
      }, o.prototype.values = function () {
        var t = [];
        return this.forEach(function (e) {
          t.push(e);
        }), r(t);
      }, o.prototype.entries = function () {
        var t = [];
        return this.forEach(function (e, n) {
          t.push([n, e]);
        }), r(t);
      }, v.iterable && (o.prototype[Symbol.iterator] = o.prototype.entries);
      var _ = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
      d.prototype.clone = function () {
        return new d(this, {
          body: this._bodyInit
        });
      }, f.call(d.prototype), f.call(m.prototype), m.prototype.clone = function () {
        return new m(this._bodyInit, {
          status: this.status,
          statusText: this.statusText,
          headers: new o(this.headers),
          url: this.url
        });
      }, m.error = function () {
        var t = new m(null, {
          status: 0,
          statusText: ""
        });
        return t.type = "error", t;
      };
      var T = [301, 302, 303, 307, 308];
      m.redirect = function (t, e) {
        if (T.indexOf(e) === -1) throw new RangeError("Invalid status code");
        return new m(null, {
          status: e,
          headers: {
            location: t
          }
        });
      }, t.Headers = o, t.Request = d, t.Response = m, t.fetch = function (t, e) {
        return new Promise(function (n, r) {
          var o = new d(t, e),
              i = new XMLHttpRequest();
          i.onload = function () {
            var t = {
              status: i.status,
              statusText: i.statusText,
              headers: y(i.getAllResponseHeaders() || "")
            };
            t.url = "responseURL" in i ? i.responseURL : t.headers.get("X-Request-URL");
            var e = "response" in i ? i.response : i.responseText;
            n(new m(e, t));
          }, i.onerror = function () {
            r(new TypeError("Network request failed"));
          }, i.ontimeout = function () {
            r(new TypeError("Network request failed"));
          }, i.open(o.method, o.url, !0), "include" === o.credentials && (i.withCredentials = !0), "responseType" in i && v.blob && (i.responseType = "blob"), o.headers.forEach(function (t, e) {
            i.setRequestHeader(e, t);
          }), i.send("undefined" == typeof o._bodyInit ? null : o._bodyInit);
        });
      }, t.fetch.polyfill = !0;
    }
  }("undefined" != typeof self ? self : this);
}, function (t, e) {
  t.exports = {
    name: "termly.js",
    version: "2.5.7",
    description: "Simple, Extensible, Hackable and Lightweight Javascript Browser Terminal Simulator!",
    main: "bin/classes/Shell.js",
    scripts: {
      test: "mocha --compilers babel-core/register tests/",
      build: "NODE_ENV=production webpack -p",
      "build:dev": "webpack -w"
    },
    keywords: ["terminal", "javascript", "simulator", "browser", "presentation", "mockup", "demo", "cli", "prompt", "commands", "no depency", "lightweight", "hackable", "js", "vanilla"],
    repository: "https://github.com/Kirkhammetz/termly.js",
    author: "Simone Corsi",
    license: "GNU GPLv3",
    devDependencies: {
      babel: "^6.5.2",
      "babel-core": "^6.21.0",
      "babel-loader": "^6.2.10",
      "babel-plugin-transform-object-rest-spread": "^6.22.0",
      "babel-polyfill": "^6.22.0",
      "babel-preset-es2015": "^6.18.0",
      "babel-preset-stage-3": "^6.22.0",
      chai: "^3.5.0",
      gulp: "^3.9.1",
      "gulp-sass": "^3.1.0",
      mocha: "^3.2.0",
      "promise-polyfill": "^6.0.2",
      "string-to-argv.js": "^1.1.2",
      webpack: "beta",
      "whatwg-fetch": "^2.0.2"
    }
  };
},,, function (t, e, n) {
  "use strict";

  (function (t) {
    t.Termly = n(3);
  }).call(e, n(0));
}]);

var Validator =
/*#__PURE__*/
function () {
  function Validator(question) {
    _classCallCheck(this, Validator);

    this.question = question;
  }

  _createClass(Validator, [{
    key: "validate",
    value: function validate(answer) {
      throw new Error('Abstract method');
    } // creates a validator according to a question

  }], [{
    key: "create",
    value: function create(question) {
      if (question.type == String) return new StringValidator(question);
      if (question.type == Number) return new NumberValidator(question);
      if (question.type == Array) return new ArrayValidator(question);
    }
  }]);

  return Validator;
}();

var StringValidator =
/*#__PURE__*/
function (_Validator) {
  _inherits(StringValidator, _Validator);

  function StringValidator() {
    _classCallCheck(this, StringValidator);

    return _possibleConstructorReturn(this, _getPrototypeOf(StringValidator).apply(this, arguments));
  }

  _createClass(StringValidator, [{
    key: "validate",
    value: function validate(answer) {
      // is it a string?
      if (answer.__proto__ != String.prototype) return false; // validate range

      if (this.question.range) {
        return answer.length >= this.question.range[0] && answer.length <= this.question.range[1];
      } // validate regex


      if (this.question.regex) {
        return this.question.regex.test(answer);
      }

      return true;
    }
  }]);

  return StringValidator;
}(Validator);

var NumberValidator =
/*#__PURE__*/
function (_Validator2) {
  _inherits(NumberValidator, _Validator2);

  function NumberValidator() {
    _classCallCheck(this, NumberValidator);

    return _possibleConstructorReturn(this, _getPrototypeOf(NumberValidator).apply(this, arguments));
  }

  _createClass(NumberValidator, [{
    key: "validate",
    value: function validate(answer) {
      // is it a number?
      if (!(answer instanceof Number) && (answer = parseInt(answer)) == NaN) return false; // validate range

      if (this.question.range) {
        return answer >= this.question.range[0] && answer <= this.question.range[1];
      }

      return true;
    }
  }]);

  return NumberValidator;
}(Validator);

var ArrayValidator =
/*#__PURE__*/
function (_Validator3) {
  _inherits(ArrayValidator, _Validator3);

  function ArrayValidator() {
    _classCallCheck(this, ArrayValidator);

    return _possibleConstructorReturn(this, _getPrototypeOf(ArrayValidator).apply(this, arguments));
  }

  _createClass(ArrayValidator, [{
    key: "validate",
    value: function validate(answer) {
      // is it a number? (index)
      if (!(answer instanceof Number) && (answer = parseInt(answer)) === NaN) return false; // validate answer number

      return answer >= 0 && answer < this.question.answers.length;
    }
  }]);

  return ArrayValidator;
}(Validator);

var Shell =
/*#__PURE__*/
function () {
  function Shell(options) {
    var _this2 = this;

    _classCallCheck(this, Shell);

    if (!options.hasOwnProperty('id')) throw new Error('Element id must be provided!');
    if (!options.hasOwnProperty('form')) throw new Error('Form questions must be provided!'); // register callback

    this.registerCallback = options.register || function (answer) {
      console.log(answer);
    }; // close callback


    this.closeCallback = options.close || null; // Form questions

    this.form = options.form.reverse(); // Shell's system (filesystem, commands, ...)

    this.system = new Termly({
      commands: {
        shell: {
          name: 'shell',
          type: 'builtin',
          man: 'Interactive Shell',
          fn: function fn() {
            return '';
          }
        },
        clear: {
          name: 'clear',
          type: 'builtin',
          man: 'Clear the screen',
          fn: function fn() {
            _this2.cli.clear();

            return '';
          }
        },
        whoami: {
          name: 'whoami',
          type: 'builtin',
          man: 'Shows the name of the current user',
          fn: function fn() {
            return _this2.system.env.USER;
          }
        },
        exit: {
          name: 'exit',
          type: 'builtin',
          man: 'Exit the shell',
          fn: function fn() {
            setTimeout(function () {
              return _this2.close();
            }, 1000);

            _this2.cli.write(":'(");

            return '';
          }
        },
        join: {
          name: 'join',
          type: 'usr',
          man: 'Become a shellmate',
          fn: function fn() {
            // who am i ?
            var self = _this2; // clone the form questions

            var questions = _toConsumableArray(_this2.form); // i wonder what are the answers


            var answers = {};
            self.cli.write('So you want to join the Shellmates!%nLet me ask you a few questions.%n'); // start asking questions :)

            ask();

            function ask() {
              // still got some question?
              if (!questions.length) {
                // we are done here
                self.cli.write('%nConfirm your response: %n');

                for (var key in answers) {
                  self.cli.write("".concat(key, ": %c7").concat(answers[key], "%c0%n"));
                }

                self.cli.write('%nConfirm?%n0. Yes%n1. No%n');
                self.cli.scan().then(function check(answer) {
                  if (answer == '0') {
                    return self.register(answers);
                  }

                  return self.cli.prompt();
                });
                return;
              } // get a question


              var question = questions.pop(); // ask about it

              self.cli.write('%n' + question.question + '%n');

              if (question.type == Array) {
                var i = 0;
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                  for (var _iterator = question.answers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var answer = _step.value;
                    self.cli.write("".concat(i, ". ").concat(answer, "%n"));
                    i++;
                  }
                } catch (err) {
                  _didIteratorError = true;
                  _iteratorError = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                      _iterator.return();
                    }
                  } finally {
                    if (_didIteratorError) {
                      throw _iteratorError;
                    }
                  }
                }
              } // get response


              self.cli.scan().then(function check(answer) {
                // check if everything is ok
                var validator = Validator.create(question); // if it's ok, save it and go for the next one

                if (validator.validate(answer)) {
                  answers[question.id] = question.type == Array ? question.answers[answer] : answer;
                  ask();
                } // something's wong
                else {
                    self.cli.write('Invalid input, please retry');
                    self.cli.scan().then(function (answer) {
                      return check(answer);
                    });
                  }
              });
            }

            return '';
          }
        }
      },
      filesystem: {
        init: 'Binary executable.',
        etc: {
          apache2: {
            'apache2.conf': ''
          },
          apt: {
            'sources.list': ''
          }
        },
        home: {
          guest: {
            docs: {
              homework: 'I got none of that.'
            },
            'todo.txt': ['# Things i need to do', '', '* Join the shellmates', '* Buy some wafer', '* Do some random thing']
          }
        },
        root: {
          'README.md': ['Hey!', 'You are not supposed to be seeing this.']
        },
        usr: {
          share: {
            themes: {},
            games: {}
          }
        },
        bin: {
          help: 'Binary executable.',
          whoami: 'Binary executable.',
          pwd: 'Binary executable.',
          printenv: 'Binary executable.',
          'export': 'Binary executable.',
          cd: 'Binary executable.',
          ls: 'Binary executable.',
          cat: 'Binary executable.',
          man: 'Binary executable.',
          history: 'Binary executable.',
          clear: 'Binary executable.',
          exit: 'Binary executable.',
          join: 'Binary executable.',
          shell: 'Binary executable.'
        }
      },
      env: {
        USER: 'guest',
        PATH: '/bin',
        HOSTNAME: 'shellmates'
      }
    }); // change file permissions and owner name

    this.system.fs.FileSystem.content.home.content.guest.user = 'guest';
    this.system.fs.FileSystem.content.home.content.guest.group = 'guest';
    this.system.fs.FileSystem.content.home.content.guest.content.docs.user = 'guest';
    this.system.fs.FileSystem.content.home.content.guest.content.docs.group = 'guest';
    this.system.fs.FileSystem.content.home.content.guest.content['todo.txt'].user = 'guest';
    this.system.fs.FileSystem.content.home.content.guest.content['todo.txt'].group = 'guest';
    this.system.fs.FileSystem.content.home.content.guest.content.docs.content.homework.user = 'guest';
    this.system.fs.FileSystem.content.home.content.guest.content.docs.content.homework.group = 'guest';
    this.system.fs.FileSystem.content.init.permission = 'rwx------';
    var _arr = ['help', 'whoami', 'pwd', 'printenv', 'export', 'cd', 'ls', 'cat', 'man', 'history', 'clear', 'exit', 'join', 'shell'];

    for (var _i = 0; _i < _arr.length; _i++) {
      var file = _arr[_i];
      this.system.fs.FileSystem.content.bin.content[file].permission = 'rwxr-xr-x';
    } // change home directory


    this.system.run('cd /home/guest'); // remove some commands

    delete this.system.ShellCommands.about;
    delete this.system.ShellCommands.arguments;
    delete this.system.ShellCommands.http; // system alias

    var system = this.system; // calculate responsive width and height for shell

    var cols = Math.min(70, (window.innerWidth / 9).toFixed(0));
    var rows = (cols * (3 / 4) / 2.5).toFixed(0);
    rows = Math.max(18, rows);
    var shellmates = ' ____  _          _ _                 _            %n/ ___|| |__   ___| | |_ __ ___   __ _| |_ ___  ___ %n\\___ \\| \'_ \\ / _ \\ | | \'_ ` _ \\ / _` | __/ _ \\/ __|%n ___) | | | |  __/ | | | | | | | (_| | ||  __/\\__ \\%n|____/|_| |_|\\___|_|_|_| |_| |_|\\__,_|\\__\\___||___/%n';
    if (cols < 55) shellmates = '%+r== Shellmates ==%-r';else shellmates = '%c3' + shellmates + '%c0'; // Shell's command line interface

    this.cli = new Terminal({
      greeting: shellmates + '%nType %c7help%c0 for help.%nType %c7join%c0 to join the %c5shellmates%c0%n',
      ps: function ps() {
        var wd = system.fs.cwd.slice(1).join('/');
        return "%c3".concat(system.env.USER, "@shellmates:%c7").concat(wd == 'home/guest' ? '~' : "/".concat(wd), "%c0 $");
      },
      id: 0,
      x: 0,
      y: 0,
      cols: cols,
      rows: rows,
      frameWidth: 10,
      frameColor: 'black',
      bgColor: 'black',
      termDiv: options.id,
      crsrBlinkMode: true,
      handler: function handler() {
        var line = this.lineBuffer;
        this.newLine();

        if (line != "") {
          // if a line was being scanned
          if (this.scanning) {
            this.scanned(line);
            return;
          }

          this.write(system.run(line));
        }

        this.prompt();
      }
    }); // cli alias

    var cli = this.cli; // register ctrl+c hotkey

    document.addEventListener('keydown', function (e) {
      if (e.key == 'c' && e.ctrlKey) {
        cli.write('^C');
        cli.scanning = false;
        cli.prompt();
      }
    });
  } // This is called after being provided with all the answers


  _createClass(Shell, [{
    key: "register",
    value: function register(answers) {
      this.registerCallback(answers);
    }
  }, {
    key: "open",
    value: function open() {
      // open the cli
      this.cli.open();
    }
  }, {
    key: "close",
    value: function close() {
      var _this3 = this;

      // close the cli
      setTimeout(function () {
        return _this3.cli.close();
      }, 1000); // call the close callback if any

      if (this.closeCallback) this.closeCallback();
    }
  }]);

  return Shell;
}();

firebase.initializeApp({
  apiKey: "AIzaSyB36aCwpcXgKL46aL5DFczOJXI82O94ywc",
  databaseURL: "https://shellmates-registration.firebaseio.com"
});
var shell = new Shell({
  id: 'terminal',
  register: function register(answer) {
    var _this4 = this;

    this.system.env.USER = [answer.firstname, answer.lastname].join('-').toLowerCase();
    var database = firebase.database();
    database.ref('members/' + database.ref('members').push().key).set(answer, function (error) {
      if (error) {
        _this4.cli.write(':\'( An error has occured, please retry.');

        return _this4.cli.prompt();
      }

      _this4.cli.write('%c7:)%c0 Your response has been registered successfuly!');

      return _this4.cli.prompt();
    });
  },
  close: function close() {
    closeTerminal();
  },
  form: [{
    id: "firstname",
    question: "First Name?",
    type: String,
    range: [0, 32]
  }, {
    id: "lastname",
    question: "Last Name?",
    type: String,
    range: [1, 32]
  }, {
    id: "email",
    question: "Email?",
    type: String,
    regex: /^\S+@\S+\.\S+$/
  }, {
    id: "gender",
    question: "Gender?",
    type: Array,
    answers: ["Male", "Female"]
  }, {
    id: "phone",
    question: "Phone Number?",
    type: Number
  }, {
    id: "school",
    question: "Where do you study?",
    type: String
  }, {
    id: "school_year",
    question: "What year?",
    type: String,
    range: [1, 8]
  }, {
    id: "security_level",
    question: "What are your interests in information security?",
    type: Array,
    answers: ["I want to discover the field", "I need to improve my skills", "I'm root"]
  }, {
    id: "programming_level",
    question: "What's your estimated level in programming from 0 to 10?",
    type: Number,
    range: [0, 10]
  }, {
    id: "linux_level",
    question: "How familiar are you with the Linux Terminal?",
    type: Array,
    answers: ["I'm a beginner", "i know some basics", "i'm an intermediate", "I consider myself as an expert"]
  }, {
    id: "hack_fb",
    question: "Are you ready to learn to hack facebook accounts?",
    type: Array,
    answers: ["No, that's inappropiate", "Yes (We won't teach you that)"]
  }]
});
/* DOM Manipulation */

showTerminal();

function showTerminal() {
  var term = document.getElementById('terminal');
  shell.open();
  term.style.opacity = '1';
  var md = new MobileDetect(window.navigator.userAgent);
  if (md.mobile()) handleMobile();

  function handleMobile() {
    // handle mobile keyboard
    var dummy = document.createElement('input');
    dummy.setAttribute('autocapitalize', 'off');
    dummy.setAttribute('style', "position: relative; top: -200px; float: left");
    dummy.id = 'dummy';
    dummy.addEventListener('input', function (e) {
      press(e.data.charCodeAt(0));
      dummy.value = '';
    });
    dummy.addEventListener('keydown', function (e) {
      if (e.key == 'Unidentified') return; // if (e.key == "Enter") dummy.blur()

      press(e.key.length == 1 ? e.key.charCodeAt(0) : e.keyCode);
    });

    function press(key) {
      Terminal.prototype.globals.keyHandler({
        which: key,
        _remapped: true,
        _repeated: false
      });
    }

    term.appendChild(dummy);
    term.addEventListener('click', function (e) {
      return dummy.focus();
    });
    dummy.focus();
  }
}

function closeTerminal() {
  document.getElementById('terminal').style.opacity = '0';
}