/* K2Badge.js

   KanColle Badge Generator Support
*/
(function() {
    "use strict";

    function reverseTable(xs){
        var obj = {};
        $.each(xs, function(k,v) {
            obj[v] = k;
        });
        return obj;
    }

    window.K2Badge = {
        init: function () {
            this.mstId2KanniTable = reverseTable(this.kaini2MstIdTable);
            this.mstId2ColleTable = reverseTable(this.colle2MstIdTable);
        },
        kaini2MstIdTable: {
            "fubuki2":426,
            "murakumo3":420,
            "ayanami2":195,
            "mutsuki3":434,
            "kisaragi3":435,
            "ushio2":407,
            "akatsuki2":437,
            "verniy1":147,
            "hatsuharu2":326,
            "hatsushimo2":419,
            "yuudachi2":144,
            "shigure2":145,
            "kasumi2":464,
            "z12":179,
            "z32":180,
            "kitakami3":119,
            "ooi3":118,
            "kiso2":146,
            "abukuma2":200,
            "isuzu2":141,
            "sendai2":158,
            "jintsuu2":159,
            "naka2":160,
            "furutaka2":416,
            "kako2":417,
            "kinugasa2":142,
            "myoukou2":319,
            "nachi2":192,
            "haguro2":194,
            "ashigara2":193,
            "maya2":428,
            "choukai2":427,
            "tone2":188,
            "chikuma2":189,
            "kongou2":149,
            "hiei2":150,
            "haruna2":151,
            "kirishima2":152,
            "fusou3":411,
            "yamashiro3":412,
            "bismarck3":173,
            "bismarck4":178,
            "italia1":446,
            "roma2":447,
            "ryuujou3":157,
            "junyou2":408,
            "chitosecvl2":296,
            "chiyodacvl2":297,
            "ryuuhou2":318,
            "souryuu2":197,
            "hiryuu2":196,
            "shoukaku2":461,
            "zuikaku3":462,
            "unryuu2":406,
            "amagi2":429,
            "katsuragi2":430,
            "ro5001":436
        },
        colle2MstIdTable: {
            "shimakaze1":50,
            "fubuki1":9,
            "shirayuki1":10,
            "hatsuyuki1":32,
            "miyuki1":11,
            "murakumo1":33,
            "isonami1":12,
            "ayanami1":13,
            "shikinami1":14,
            "oboro1":93,
            "akebono1":15,
            "sazanami1":94,
            "ushio1":16,
            "mutsuki1":1,
            "kisaragi1":2,
            "satsuki1":28,
            "fumizuki1":29,
            "nagatsuki1":6,
            "kikuzuki1":30,
            "mikazuki1":7,
            "mochizuki1":31,
            "yayoi1":164,
            "uzuki1":165,
            "akatsuki1":34,
            "hibiki1":35,
            "ikazuchi1":36,
            "inazuma1":37,
            "hatsuharu1":38,
            "nenohi1":39,
            "wakaba1":40,
            "hatsushimo1":41,
            "shiratsuyu1":42,
            "shigure1":43,
            "murasame1":44,
            "yuudachi1":45,
            "samidare1":46,
            "suzukaze1":47,
            "harusame1":405,
            "umikaze1":458,
            "kawakaze1":459,
            "asashio1":95,
            "ooshio1":96,
            "michishio1":97,
            "arashio1":98,
            "arare1":48,
            "kasumi1":49,
            "asagumo1":413,
            "yamagumo1":414,
            "kagerou1":17,
            "shiranui1":18,
            "kuroshio1":19,
            "hatsukaze1":190,
            "maikaze1":122,
            "akigumo1":132,
            "urakaze1":168,
            "tanikaze1":169,
            "hamakaze1":170,
            "isokaze1":167,
            "tokitsukaze1":186,
            "nowaki1":415,
            "yukikaze1":20,
            "amatsukaze1":181,
            "arashi1":454,
            "hagikaze1":455,
            "yuugumo1":133,
            "makigumo1":134,
            "kazagumo1":453,
            "naganami1":135,
            "hayashimo1":409,
            "kiyoshimo1":410,
            "takanami1":424,
            "asashimo1":425,
            "z11":174,
            "z31":175,
            "akizuki1":421,
            "teruzuki1":422,
            "libeccio1":443,
            "tenryuu1":51,
            "tatsuta1":52,
            "kuma1":99,
            "tama1":100,
            "kiso1":101,
            "kitakami1":25,
            "ooi1":24,
            "nagara1":21,
            "isuzu1":22,
            "natori1":53,
            "yura1":23,
            "kinu1":113,
            "abukuma1":114,
            "sendai1":54,
            "jintsuu1":55,
            "naka1":56,
            "yuubari1":115,
            "agano1":137,
            "noshiro1":138,
            "yahagi1":139,
            "sakawa1":140,
            "ooyodo1":183,
            "katori1":154,
            "kashima1":465,
            "furutaka1":59,
            "kako1":60,
            "aoba1":61,
            "kinugasa1":123,
            "myoukou1":62,
            "nachi1":63,
            "haguro1":65,
            "ashigara1":64,
            "takao1":66,
            "atago1":67,
            "maya1":68,
            "choukai1":69,
            "tone1":71,
            "chikuma1":72,
            "mogami1":70,
            "mikuma1":120,
            "suzuya1":124,
            "kumano1":125,
            "prinzeugen1":176,
            "nagato1":80,
            "mutsu1":81,
            "kongou1":78,
            "hiei1":86,
            "haruna1":79,
            "kirishima1":85,
            "fusou1":26,
            "yamashiro1":27,
            "ise1":77,
            "hyuuga1":87,
            "yamato1":131,
            "musashi1":143,
            "bismarck1":171,
            "littorio1":441,
            "roma1":442,
            "houshou1":89,
            "ryuujou1":76,
            "hiyou1":75,
            "junyou1":92,
            "shouhou1":74,
            "zuihou1":116,
            "akagi1":83,
            "kaga1":84,
            "souryuu1":90,
            "hiryuu2":91,
            "shoukaku1":110,
            "zuikaku1":111,
            "taihou1":153,
            "unryuu1":404,
            "amagi1":331,
            "katsuragi1":332,
            "graf1":432,
            "i1681":126,
            "i581":127,
            "i191":191,
            "i81":128,
            "i4011":155,
            "maruyu1":163,
            "u5111":431,
            "chitose1":102,
            "chiyoda1":103,
            "akitsumaru1":161,
            "akashi1":182,
            "taigei1":184,
            "akitsushima1":445,
            "mizuho1":451,
            "hayasui1":460
        },
        k2Template: {
            "dd":{
                "fubuki2":false,
                "murakumo3":false,
                "ayanami2":false,
                "mutsuki3":false,
                "kisaragi3":false,
                "ushio2":false,
                "akatsuki2":false,
                "verniy1":false,
                "hatsuharu2":false,
                "hatsushimo2":false,
                "yuudachi2":false,
                "shigure2":false,
                "kasumi2":false,
                "z12":false,
                "z32":false
            },
            "cl":{
                "kitakami3":false,
                "ooi3":false,
                "kiso2":false,
                "abukuma2":false,
                "isuzu2":false,
                "sendai2":false,
                "jintsuu2":false,
                "naka2":false
            },
            "ca":{
                "furutaka2":false,
                "kako2":false,
                "kinugasa2":false,
                "myoukou2":false,
                "nachi2":false,
                "haguro2":false,
                "ashigara2":false,
                "maya2":false,
                "choukai2":false,
                "tone2":false,
                "chikuma2":false
            },
            "bb":{
                "kongou2":false,
                "hiei2":false,
                "haruna2":false,
                "kirishima2":false,
                "fusou3":false,
                "yamashiro3":false,
                "bismarck3":false,
                "bismarck4":false,
                "italia1":false,
                "roma2":false
            },
            "cvl":{
                "ryuujou3":false,
                "junyou2":false,
                "chitosecvl2":false,
                "chiyodacvl2":false,
                "ryuuhou2":false
            },
            "cv":{
                "souryuu2":false,
                "hiryuu2":false,
                "shoukaku2":false,
                "zuikaku3":false,
                "unryuu2":false,
                "amagi2":false,
                "katsuragi2":false
            },
            "ss":{
                "ro5001":false
            }
        }
    };
})();
