export function fillNames(datalist) {
    for (let id in names) {
        for (let name of names[id]) {
            let option = document.createElement("option");
            option.value = name;
            datalist.appendChild(option);
        }
    }
}

export function nameToId(searchname) {
    for (let id in names) {
        for (let name of names[id]) {
            if (name === searchname) {
                return id;
            }
        }
    }
    return searchname.toLowerCase();
}

export const names = {
    "bulbasaur": [
        "Bulbasaur"
    ],
    "ivysaur": [
        "Ivysaur"
    ],
    "venusaur": [
        "Venusaur"
    ],
    "charmander": [
        "Charmander"
    ],
    "charmeleon": [
        "Charmeleon"
    ],
    "charizard": [
        "Charizard"
    ],
    "squirtle": [
        "Squirtle"
    ],
    "wartortle": [
        "Wartortle"
    ],
    "blastoise": [
        "Blastoise"
    ],
    "caterpie": [
        "Caterpie"
    ],
    "metapod": [
        "Metapod"
    ],
    "butterfree": [
        "Butterfree"
    ],
    "weedle": [
        "Weedle"
    ],
    "kakuna": [
        "Kakuna"
    ],
    "beedrill": [
        "Beedrill"
    ],
    "pidgey": [
        "Pidgey"
    ],
    "pidgeotto": [
        "Pidgeotto"
    ],
    "pidgeot": [
        "Pidgeot"
    ],
    "rattata": [
        "Rattata"
    ],
    "raticate": [
        "Raticate"
    ],
    "spearow": [
        "Spearow"
    ],
    "fearow": [
        "Fearow"
    ],
    "ekans": [
        "Ekans"
    ],
    "arbok": [
        "Arbok"
    ],
    "pikachu": [
        "Pikachu"
    ],
    "raichu": [
        "Raichu"
    ],
    "sandshrew": [
        "Sandshrew"
    ],
    "sandslash": [
        "Sandslash"
    ],
    "nidoran-f": [
        "Nidoran F"
    ],
    "nidorina": [
        "Nidorina"
    ],
    "nidoqueen": [
        "Nidoqueen"
    ],
    "nidoran-m": [
        "Nidoran M"
    ],
    "nidorino": [
        "Nidorino"
    ],
    "nidoking": [
        "Nidoking"
    ],
    "clefairy": [
        "Clefairy"
    ],
    "clefable": [
        "Clefable"
    ],
    "vulpix": [
        "Vulpix"
    ],
    "ninetales": [
        "Ninetales"
    ],
    "jigglypuff": [
        "Jigglypuff"
    ],
    "wigglytuff": [
        "Wigglytuff"
    ],
    "zubat": [
        "Zubat"
    ],
    "golbat": [
        "Golbat"
    ],
    "oddish": [
        "Oddish"
    ],
    "gloom": [
        "Gloom"
    ],
    "vileplume": [
        "Vileplume"
    ],
    "paras": [
        "Paras"
    ],
    "parasect": [
        "Parasect"
    ],
    "venonat": [
        "Venonat"
    ],
    "venomoth": [
        "Venomoth"
    ],
    "diglett": [
        "Diglett"
    ],
    "dugtrio": [
        "Dugtrio"
    ],
    "meowth": [
        "Meowth"
    ],
    "persian": [
        "Persian"
    ],
    "psyduck": [
        "Psyduck"
    ],
    "golduck": [
        "Golduck"
    ],
    "mankey": [
        "Mankey"
    ],
    "primeape": [
        "Primeape"
    ],
    "growlithe": [
        "Growlithe"
    ],
    "arcanine": [
        "Arcanine"
    ],
    "poliwag": [
        "Poliwag"
    ],
    "poliwhirl": [
        "Poliwhirl"
    ],
    "poliwrath": [
        "Poliwrath"
    ],
    "abra": [
        "Abra"
    ],
    "kadabra": [
        "Kadabra"
    ],
    "alakazam": [
        "Alakazam"
    ],
    "machop": [
        "Machop"
    ],
    "machoke": [
        "Machoke"
    ],
    "machamp": [
        "Machamp"
    ],
    "bellsprout": [
        "Bellsprout"
    ],
    "weepinbell": [
        "Weepinbell"
    ],
    "victreebel": [
        "Victreebel"
    ],
    "tentacool": [
        "Tentacool"
    ],
    "tentacruel": [
        "Tentacruel"
    ],
    "geodude": [
        "Geodude"
    ],
    "graveler": [
        "Graveler"
    ],
    "golem": [
        "Golem"
    ],
    "ponyta": [
        "Ponyta"
    ],
    "rapidash": [
        "Rapidash"
    ],
    "slowpoke": [
        "Slowpoke"
    ],
    "slowbro": [
        "Slowbro"
    ],
    "magnemite": [
        "Magnemite"
    ],
    "magneton": [
        "Magneton"
    ],
    "farfetchd": [
        "Farfetchd"
    ],
    "doduo": [
        "Doduo"
    ],
    "dodrio": [
        "Dodrio"
    ],
    "seel": [
        "Seel"
    ],
    "dewgong": [
        "Dewgong"
    ],
    "grimer": [
        "Grimer"
    ],
    "muk": [
        "Muk"
    ],
    "shellder": [
        "Shellder"
    ],
    "cloyster": [
        "Cloyster"
    ],
    "gastly": [
        "Gastly"
    ],
    "haunter": [
        "Haunter"
    ],
    "gengar": [
        "Gengar"
    ],
    "onix": [
        "Onix"
    ],
    "drowzee": [
        "Drowzee"
    ],
    "hypno": [
        "Hypno"
    ],
    "krabby": [
        "Krabby"
    ],
    "kingler": [
        "Kingler"
    ],
    "voltorb": [
        "Voltorb"
    ],
    "electrode": [
        "Electrode"
    ],
    "exeggcute": [
        "Exeggcute"
    ],
    "exeggutor": [
        "Exeggutor"
    ],
    "cubone": [
        "Cubone"
    ],
    "marowak": [
        "Marowak"
    ],
    "hitmonlee": [
        "Hitmonlee"
    ],
    "hitmonchan": [
        "Hitmonchan"
    ],
    "lickitung": [
        "Lickitung"
    ],
    "koffing": [
        "Koffing"
    ],
    "weezing": [
        "Weezing"
    ],
    "rhyhorn": [
        "Rhyhorn"
    ],
    "rhydon": [
        "Rhydon"
    ],
    "chansey": [
        "Chansey"
    ],
    "tangela": [
        "Tangela"
    ],
    "kangaskhan": [
        "Kangaskhan"
    ],
    "horsea": [
        "Horsea"
    ],
    "seadra": [
        "Seadra"
    ],
    "goldeen": [
        "Goldeen"
    ],
    "seaking": [
        "Seaking"
    ],
    "staryu": [
        "Staryu"
    ],
    "starmie": [
        "Starmie"
    ],
    "mr-mime": [
        "Mr Mime"
    ],
    "scyther": [
        "Scyther"
    ],
    "jynx": [
        "Jynx"
    ],
    "electabuzz": [
        "Electabuzz"
    ],
    "magmar": [
        "Magmar"
    ],
    "pinsir": [
        "Pinsir"
    ],
    "tauros": [
        "Tauros"
    ],
    "magikarp": [
        "Magikarp"
    ],
    "gyarados": [
        "Gyarados"
    ],
    "lapras": [
        "Lapras"
    ],
    "ditto": [
        "Ditto"
    ],
    "eevee": [
        "Eevee"
    ],
    "vaporeon": [
        "Vaporeon"
    ],
    "jolteon": [
        "Jolteon"
    ],
    "flareon": [
        "Flareon"
    ],
    "porygon": [
        "Porygon"
    ],
    "omanyte": [
        "Omanyte"
    ],
    "omastar": [
        "Omastar"
    ],
    "kabuto": [
        "Kabuto"
    ],
    "kabutops": [
        "Kabutops"
    ],
    "aerodactyl": [
        "Aerodactyl"
    ],
    "snorlax": [
        "Snorlax"
    ],
    "articuno": [
        "Articuno"
    ],
    "zapdos": [
        "Zapdos"
    ],
    "moltres": [
        "Moltres"
    ],
    "dratini": [
        "Dratini"
    ],
    "dragonair": [
        "Dragonair"
    ],
    "dragonite": [
        "Dragonite"
    ],
    "mewtwo": [
        "Mewtwo"
    ],
    "mew": [
        "Mew"
    ],
    "chikorita": [
        "Chikorita"
    ],
    "bayleef": [
        "Bayleef"
    ],
    "meganium": [
        "Meganium"
    ],
    "cyndaquil": [
        "Cyndaquil"
    ],
    "quilava": [
        "Quilava"
    ],
    "typhlosion": [
        "Typhlosion"
    ],
    "totodile": [
        "Totodile"
    ],
    "croconaw": [
        "Croconaw"
    ],
    "feraligatr": [
        "Feraligatr"
    ],
    "sentret": [
        "Sentret"
    ],
    "furret": [
        "Furret"
    ],
    "hoothoot": [
        "Hoothoot"
    ],
    "noctowl": [
        "Noctowl"
    ],
    "ledyba": [
        "Ledyba"
    ],
    "ledian": [
        "Ledian"
    ],
    "spinarak": [
        "Spinarak"
    ],
    "ariados": [
        "Ariados"
    ],
    "crobat": [
        "Crobat"
    ],
    "chinchou": [
        "Chinchou"
    ],
    "lanturn": [
        "Lanturn"
    ],
    "pichu": [
        "Pichu"
    ],
    "cleffa": [
        "Cleffa"
    ],
    "igglybuff": [
        "Igglybuff"
    ],
    "togepi": [
        "Togepi"
    ],
    "togetic": [
        "Togetic"
    ],
    "natu": [
        "Natu"
    ],
    "xatu": [
        "Xatu"
    ],
    "mareep": [
        "Mareep"
    ],
    "flaaffy": [
        "Flaaffy"
    ],
    "ampharos": [
        "Ampharos"
    ],
    "bellossom": [
        "Bellossom"
    ],
    "marill": [
        "Marill"
    ],
    "azumarill": [
        "Azumarill"
    ],
    "sudowoodo": [
        "Sudowoodo"
    ],
    "politoed": [
        "Politoed"
    ],
    "hoppip": [
        "Hoppip"
    ],
    "skiploom": [
        "Skiploom"
    ],
    "jumpluff": [
        "Jumpluff"
    ],
    "aipom": [
        "Aipom"
    ],
    "sunkern": [
        "Sunkern"
    ],
    "sunflora": [
        "Sunflora"
    ],
    "yanma": [
        "Yanma"
    ],
    "wooper": [
        "Wooper"
    ],
    "quagsire": [
        "Quagsire"
    ],
    "espeon": [
        "Espeon"
    ],
    "umbreon": [
        "Umbreon"
    ],
    "murkrow": [
        "Murkrow"
    ],
    "slowking": [
        "Slowking"
    ],
    "misdreavus": [
        "Misdreavus"
    ],
    "unown": [
        "Unown"
    ],
    "wobbuffet": [
        "Wobbuffet"
    ],
    "girafarig": [
        "Girafarig"
    ],
    "pineco": [
        "Pineco"
    ],
    "forretress": [
        "Forretress"
    ],
    "dunsparce": [
        "Dunsparce"
    ],
    "gligar": [
        "Gligar"
    ],
    "steelix": [
        "Steelix"
    ],
    "snubbull": [
        "Snubbull"
    ],
    "granbull": [
        "Granbull"
    ],
    "qwilfish": [
        "Qwilfish"
    ],
    "scizor": [
        "Scizor"
    ],
    "shuckle": [
        "Shuckle"
    ],
    "heracross": [
        "Heracross"
    ],
    "sneasel": [
        "Sneasel"
    ],
    "teddiursa": [
        "Teddiursa"
    ],
    "ursaring": [
        "Ursaring"
    ],
    "slugma": [
        "Slugma"
    ],
    "magcargo": [
        "Magcargo"
    ],
    "swinub": [
        "Swinub"
    ],
    "piloswine": [
        "Piloswine"
    ],
    "corsola": [
        "Corsola"
    ],
    "remoraid": [
        "Remoraid"
    ],
    "octillery": [
        "Octillery"
    ],
    "delibird": [
        "Delibird"
    ],
    "mantine": [
        "Mantine"
    ],
    "skarmory": [
        "Skarmory"
    ],
    "houndour": [
        "Houndour"
    ],
    "houndoom": [
        "Houndoom"
    ],
    "kingdra": [
        "Kingdra"
    ],
    "phanpy": [
        "Phanpy"
    ],
    "donphan": [
        "Donphan"
    ],
    "porygon2": [
        "Porygon2"
    ],
    "stantler": [
        "Stantler"
    ],
    "smeargle": [
        "Smeargle"
    ],
    "tyrogue": [
        "Tyrogue"
    ],
    "hitmontop": [
        "Hitmontop"
    ],
    "smoochum": [
        "Smoochum"
    ],
    "elekid": [
        "Elekid"
    ],
    "magby": [
        "Magby"
    ],
    "miltank": [
        "Miltank"
    ],
    "blissey": [
        "Blissey"
    ],
    "raikou": [
        "Raikou"
    ],
    "entei": [
        "Entei"
    ],
    "suicune": [
        "Suicune"
    ],
    "larvitar": [
        "Larvitar"
    ],
    "pupitar": [
        "Pupitar"
    ],
    "tyranitar": [
        "Tyranitar"
    ],
    "lugia": [
        "Lugia"
    ],
    "ho-oh": [
        "Ho Oh"
    ],
    "celebi": [
        "Celebi"
    ],
    "treecko": [
        "Treecko"
    ],
    "grovyle": [
        "Grovyle"
    ],
    "sceptile": [
        "Sceptile"
    ],
    "torchic": [
        "Torchic"
    ],
    "combusken": [
        "Combusken"
    ],
    "blaziken": [
        "Blaziken"
    ],
    "mudkip": [
        "Mudkip"
    ],
    "marshtomp": [
        "Marshtomp"
    ],
    "swampert": [
        "Swampert"
    ],
    "poochyena": [
        "Poochyena"
    ],
    "mightyena": [
        "Mightyena"
    ],
    "zigzagoon": [
        "Zigzagoon"
    ],
    "linoone": [
        "Linoone"
    ],
    "wurmple": [
        "Wurmple"
    ],
    "silcoon": [
        "Silcoon"
    ],
    "beautifly": [
        "Beautifly"
    ],
    "cascoon": [
        "Cascoon"
    ],
    "dustox": [
        "Dustox"
    ],
    "lotad": [
        "Lotad"
    ],
    "lombre": [
        "Lombre"
    ],
    "ludicolo": [
        "Ludicolo"
    ],
    "seedot": [
        "Seedot"
    ],
    "nuzleaf": [
        "Nuzleaf"
    ],
    "shiftry": [
        "Shiftry"
    ],
    "taillow": [
        "Taillow"
    ],
    "swellow": [
        "Swellow"
    ],
    "wingull": [
        "Wingull"
    ],
    "pelipper": [
        "Pelipper"
    ],
    "ralts": [
        "Ralts"
    ],
    "kirlia": [
        "Kirlia"
    ],
    "gardevoir": [
        "Gardevoir"
    ],
    "surskit": [
        "Surskit"
    ],
    "masquerain": [
        "Masquerain"
    ],
    "shroomish": [
        "Shroomish"
    ],
    "breloom": [
        "Breloom"
    ],
    "slakoth": [
        "Slakoth"
    ],
    "vigoroth": [
        "Vigoroth"
    ],
    "slaking": [
        "Slaking"
    ],
    "nincada": [
        "Nincada"
    ],
    "ninjask": [
        "Ninjask"
    ],
    "shedinja": [
        "Shedinja"
    ],
    "whismur": [
        "Whismur"
    ],
    "loudred": [
        "Loudred"
    ],
    "exploud": [
        "Exploud"
    ],
    "makuhita": [
        "Makuhita"
    ],
    "hariyama": [
        "Hariyama"
    ],
    "azurill": [
        "Azurill"
    ],
    "nosepass": [
        "Nosepass"
    ],
    "skitty": [
        "Skitty"
    ],
    "delcatty": [
        "Delcatty"
    ],
    "sableye": [
        "Sableye"
    ],
    "mawile": [
        "Mawile"
    ],
    "aron": [
        "Aron"
    ],
    "lairon": [
        "Lairon"
    ],
    "aggron": [
        "Aggron"
    ],
    "meditite": [
        "Meditite"
    ],
    "medicham": [
        "Medicham"
    ],
    "electrike": [
        "Electrike"
    ],
    "manectric": [
        "Manectric"
    ],
    "plusle": [
        "Plusle"
    ],
    "minun": [
        "Minun"
    ],
    "volbeat": [
        "Volbeat"
    ],
    "illumise": [
        "Illumise"
    ],
    "roselia": [
        "Roselia"
    ],
    "gulpin": [
        "Gulpin"
    ],
    "swalot": [
        "Swalot"
    ],
    "carvanha": [
        "Carvanha"
    ],
    "sharpedo": [
        "Sharpedo"
    ],
    "wailmer": [
        "Wailmer"
    ],
    "wailord": [
        "Wailord"
    ],
    "numel": [
        "Numel"
    ],
    "camerupt": [
        "Camerupt"
    ],
    "torkoal": [
        "Torkoal"
    ],
    "spoink": [
        "Spoink"
    ],
    "grumpig": [
        "Grumpig"
    ],
    "spinda": [
        "Spinda"
    ],
    "trapinch": [
        "Trapinch"
    ],
    "vibrava": [
        "Vibrava"
    ],
    "flygon": [
        "Flygon"
    ],
    "cacnea": [
        "Cacnea"
    ],
    "cacturne": [
        "Cacturne"
    ],
    "swablu": [
        "Swablu"
    ],
    "altaria": [
        "Altaria"
    ],
    "zangoose": [
        "Zangoose"
    ],
    "seviper": [
        "Seviper"
    ],
    "lunatone": [
        "Lunatone"
    ],
    "solrock": [
        "Solrock"
    ],
    "barboach": [
        "Barboach"
    ],
    "whiscash": [
        "Whiscash"
    ],
    "corphish": [
        "Corphish"
    ],
    "crawdaunt": [
        "Crawdaunt"
    ],
    "baltoy": [
        "Baltoy"
    ],
    "claydol": [
        "Claydol"
    ],
    "lileep": [
        "Lileep"
    ],
    "cradily": [
        "Cradily"
    ],
    "anorith": [
        "Anorith"
    ],
    "armaldo": [
        "Armaldo"
    ],
    "feebas": [
        "Feebas"
    ],
    "milotic": [
        "Milotic"
    ],
    "castform": [
        "Castform"
    ],
    "kecleon": [
        "Kecleon"
    ],
    "shuppet": [
        "Shuppet"
    ],
    "banette": [
        "Banette"
    ],
    "duskull": [
        "Duskull"
    ],
    "dusclops": [
        "Dusclops"
    ],
    "tropius": [
        "Tropius"
    ],
    "chimecho": [
        "Chimecho"
    ],
    "absol": [
        "Absol"
    ],
    "wynaut": [
        "Wynaut"
    ],
    "snorunt": [
        "Snorunt"
    ],
    "glalie": [
        "Glalie"
    ],
    "spheal": [
        "Spheal"
    ],
    "sealeo": [
        "Sealeo"
    ],
    "walrein": [
        "Walrein"
    ],
    "clamperl": [
        "Clamperl"
    ],
    "huntail": [
        "Huntail"
    ],
    "gorebyss": [
        "Gorebyss"
    ],
    "relicanth": [
        "Relicanth"
    ],
    "luvdisc": [
        "Luvdisc"
    ],
    "bagon": [
        "Bagon"
    ],
    "shelgon": [
        "Shelgon"
    ],
    "salamence": [
        "Salamence"
    ],
    "beldum": [
        "Beldum"
    ],
    "metang": [
        "Metang"
    ],
    "metagross": [
        "Metagross"
    ],
    "regirock": [
        "Regirock"
    ],
    "regice": [
        "Regice"
    ],
    "registeel": [
        "Registeel"
    ],
    "latias": [
        "Latias"
    ],
    "latios": [
        "Latios"
    ],
    "kyogre": [
        "Kyogre"
    ],
    "groudon": [
        "Groudon"
    ],
    "rayquaza": [
        "Rayquaza"
    ],
    "jirachi": [
        "Jirachi"
    ],
    "deoxys-normal": [
        "Deoxys Normal"
    ],
    "turtwig": [
        "Turtwig"
    ],
    "grotle": [
        "Grotle"
    ],
    "torterra": [
        "Torterra"
    ],
    "chimchar": [
        "Chimchar"
    ],
    "monferno": [
        "Monferno"
    ],
    "infernape": [
        "Infernape"
    ],
    "piplup": [
        "Piplup"
    ],
    "prinplup": [
        "Prinplup"
    ],
    "empoleon": [
        "Empoleon"
    ],
    "starly": [
        "Starly"
    ],
    "staravia": [
        "Staravia"
    ],
    "staraptor": [
        "Staraptor"
    ],
    "bidoof": [
        "Bidoof"
    ],
    "bibarel": [
        "Bibarel"
    ],
    "kricketot": [
        "Kricketot"
    ],
    "kricketune": [
        "Kricketune"
    ],
    "shinx": [
        "Shinx"
    ],
    "luxio": [
        "Luxio"
    ],
    "luxray": [
        "Luxray"
    ],
    "budew": [
        "Budew"
    ],
    "roserade": [
        "Roserade"
    ],
    "cranidos": [
        "Cranidos"
    ],
    "rampardos": [
        "Rampardos"
    ],
    "shieldon": [
        "Shieldon"
    ],
    "bastiodon": [
        "Bastiodon"
    ],
    "burmy": [
        "Burmy"
    ],
    "wormadam-plant": [
        "Wormadam Plant"
    ],
    "mothim": [
        "Mothim"
    ],
    "combee": [
        "Combee"
    ],
    "vespiquen": [
        "Vespiquen"
    ],
    "pachirisu": [
        "Pachirisu"
    ],
    "buizel": [
        "Buizel"
    ],
    "floatzel": [
        "Floatzel"
    ],
    "cherubi": [
        "Cherubi"
    ],
    "cherrim": [
        "Cherrim"
    ],
    "shellos": [
        "Shellos"
    ],
    "gastrodon": [
        "Gastrodon"
    ],
    "ambipom": [
        "Ambipom"
    ],
    "drifloon": [
        "Drifloon"
    ],
    "drifblim": [
        "Drifblim"
    ],
    "buneary": [
        "Buneary"
    ],
    "lopunny": [
        "Lopunny"
    ],
    "mismagius": [
        "Mismagius"
    ],
    "honchkrow": [
        "Honchkrow"
    ],
    "glameow": [
        "Glameow"
    ],
    "purugly": [
        "Purugly"
    ],
    "chingling": [
        "Chingling"
    ],
    "stunky": [
        "Stunky"
    ],
    "skuntank": [
        "Skuntank"
    ],
    "bronzor": [
        "Bronzor"
    ],
    "bronzong": [
        "Bronzong"
    ],
    "bonsly": [
        "Bonsly"
    ],
    "mime-jr": [
        "Mime Jr"
    ],
    "happiny": [
        "Happiny"
    ],
    "chatot": [
        "Chatot"
    ],
    "spiritomb": [
        "Spiritomb"
    ],
    "gible": [
        "Gible"
    ],
    "gabite": [
        "Gabite"
    ],
    "garchomp": [
        "Garchomp"
    ],
    "munchlax": [
        "Munchlax"
    ],
    "riolu": [
        "Riolu"
    ],
    "lucario": [
        "Lucario"
    ],
    "hippopotas": [
        "Hippopotas"
    ],
    "hippowdon": [
        "Hippowdon"
    ],
    "skorupi": [
        "Skorupi"
    ],
    "drapion": [
        "Drapion"
    ],
    "croagunk": [
        "Croagunk"
    ],
    "toxicroak": [
        "Toxicroak"
    ],
    "carnivine": [
        "Carnivine"
    ],
    "finneon": [
        "Finneon"
    ],
    "lumineon": [
        "Lumineon"
    ],
    "mantyke": [
        "Mantyke"
    ],
    "snover": [
        "Snover"
    ],
    "abomasnow": [
        "Abomasnow"
    ],
    "weavile": [
        "Weavile"
    ],
    "magnezone": [
        "Magnezone"
    ],
    "lickilicky": [
        "Lickilicky"
    ],
    "rhyperior": [
        "Rhyperior"
    ],
    "tangrowth": [
        "Tangrowth"
    ],
    "electivire": [
        "Electivire"
    ],
    "magmortar": [
        "Magmortar"
    ],
    "togekiss": [
        "Togekiss"
    ],
    "yanmega": [
        "Yanmega"
    ],
    "leafeon": [
        "Leafeon"
    ],
    "glaceon": [
        "Glaceon"
    ],
    "gliscor": [
        "Gliscor"
    ],
    "mamoswine": [
        "Mamoswine"
    ],
    "porygon-z": [
        "Porygon Z"
    ],
    "gallade": [
        "Gallade"
    ],
    "probopass": [
        "Probopass"
    ],
    "dusknoir": [
        "Dusknoir"
    ],
    "froslass": [
        "Froslass"
    ],
    "rotom": [
        "Rotom"
    ],
    "uxie": [
        "Uxie"
    ],
    "mesprit": [
        "Mesprit"
    ],
    "azelf": [
        "Azelf"
    ],
    "dialga": [
        "Dialga"
    ],
    "palkia": [
        "Palkia"
    ],
    "heatran": [
        "Heatran"
    ],
    "regigigas": [
        "Regigigas"
    ],
    "giratina-altered": [
        "Giratina Altered"
    ],
    "cresselia": [
        "Cresselia"
    ],
    "phione": [
        "Phione"
    ],
    "manaphy": [
        "Manaphy"
    ],
    "darkrai": [
        "Darkrai"
    ],
    "shaymin-land": [
        "Shaymin Land"
    ],
    "arceus": [
        "Arceus"
    ],
    "victini": [
        "Victini"
    ],
    "snivy": [
        "Snivy"
    ],
    "servine": [
        "Servine"
    ],
    "serperior": [
        "Serperior"
    ],
    "tepig": [
        "Tepig"
    ],
    "pignite": [
        "Pignite"
    ],
    "emboar": [
        "Emboar"
    ],
    "oshawott": [
        "Oshawott"
    ],
    "dewott": [
        "Dewott"
    ],
    "samurott": [
        "Samurott"
    ],
    "patrat": [
        "Patrat"
    ],
    "watchog": [
        "Watchog"
    ],
    "lillipup": [
        "Lillipup"
    ],
    "herdier": [
        "Herdier"
    ],
    "stoutland": [
        "Stoutland"
    ],
    "purrloin": [
        "Purrloin"
    ],
    "liepard": [
        "Liepard"
    ],
    "pansage": [
        "Pansage"
    ],
    "simisage": [
        "Simisage"
    ],
    "pansear": [
        "Pansear"
    ],
    "simisear": [
        "Simisear"
    ],
    "panpour": [
        "Panpour"
    ],
    "simipour": [
        "Simipour"
    ],
    "munna": [
        "Munna"
    ],
    "musharna": [
        "Musharna"
    ],
    "pidove": [
        "Pidove"
    ],
    "tranquill": [
        "Tranquill"
    ],
    "unfezant": [
        "Unfezant"
    ],
    "blitzle": [
        "Blitzle"
    ],
    "zebstrika": [
        "Zebstrika"
    ],
    "roggenrola": [
        "Roggenrola"
    ],
    "boldore": [
        "Boldore"
    ],
    "gigalith": [
        "Gigalith"
    ],
    "woobat": [
        "Woobat"
    ],
    "swoobat": [
        "Swoobat"
    ],
    "drilbur": [
        "Drilbur"
    ],
    "excadrill": [
        "Excadrill"
    ],
    "audino": [
        "Audino"
    ],
    "timburr": [
        "Timburr"
    ],
    "gurdurr": [
        "Gurdurr"
    ],
    "conkeldurr": [
        "Conkeldurr"
    ],
    "tympole": [
        "Tympole"
    ],
    "palpitoad": [
        "Palpitoad"
    ],
    "seismitoad": [
        "Seismitoad"
    ],
    "throh": [
        "Throh"
    ],
    "sawk": [
        "Sawk"
    ],
    "sewaddle": [
        "Sewaddle"
    ],
    "swadloon": [
        "Swadloon"
    ],
    "leavanny": [
        "Leavanny"
    ],
    "venipede": [
        "Venipede"
    ],
    "whirlipede": [
        "Whirlipede"
    ],
    "scolipede": [
        "Scolipede"
    ],
    "cottonee": [
        "Cottonee"
    ],
    "whimsicott": [
        "Whimsicott"
    ],
    "petilil": [
        "Petilil"
    ],
    "lilligant": [
        "Lilligant"
    ],
    "basculin-red-striped": [
        "Basculin Red Striped"
    ],
    "sandile": [
        "Sandile"
    ],
    "krokorok": [
        "Krokorok"
    ],
    "krookodile": [
        "Krookodile"
    ],
    "darumaka": [
        "Darumaka"
    ],
    "darmanitan-standard": [
        "Darmanitan Standard"
    ],
    "maractus": [
        "Maractus"
    ],
    "dwebble": [
        "Dwebble"
    ],
    "crustle": [
        "Crustle"
    ],
    "scraggy": [
        "Scraggy"
    ],
    "scrafty": [
        "Scrafty"
    ],
    "sigilyph": [
        "Sigilyph"
    ],
    "yamask": [
        "Yamask"
    ],
    "cofagrigus": [
        "Cofagrigus"
    ],
    "tirtouga": [
        "Tirtouga"
    ],
    "carracosta": [
        "Carracosta"
    ],
    "archen": [
        "Archen"
    ],
    "archeops": [
        "Archeops"
    ],
    "trubbish": [
        "Trubbish"
    ],
    "garbodor": [
        "Garbodor"
    ],
    "zorua": [
        "Zorua"
    ],
    "zoroark": [
        "Zoroark"
    ],
    "minccino": [
        "Minccino"
    ],
    "cinccino": [
        "Cinccino"
    ],
    "gothita": [
        "Gothita"
    ],
    "gothorita": [
        "Gothorita"
    ],
    "gothitelle": [
        "Gothitelle"
    ],
    "solosis": [
        "Solosis"
    ],
    "duosion": [
        "Duosion"
    ],
    "reuniclus": [
        "Reuniclus"
    ],
    "ducklett": [
        "Ducklett"
    ],
    "swanna": [
        "Swanna"
    ],
    "vanillite": [
        "Vanillite"
    ],
    "vanillish": [
        "Vanillish"
    ],
    "vanilluxe": [
        "Vanilluxe"
    ],
    "deerling": [
        "Deerling"
    ],
    "sawsbuck": [
        "Sawsbuck"
    ],
    "emolga": [
        "Emolga"
    ],
    "karrablast": [
        "Karrablast"
    ],
    "escavalier": [
        "Escavalier"
    ],
    "foongus": [
        "Foongus"
    ],
    "amoonguss": [
        "Amoonguss"
    ],
    "frillish": [
        "Frillish"
    ],
    "jellicent": [
        "Jellicent"
    ],
    "alomomola": [
        "Alomomola"
    ],
    "joltik": [
        "Joltik"
    ],
    "galvantula": [
        "Galvantula"
    ],
    "ferroseed": [
        "Ferroseed"
    ],
    "ferrothorn": [
        "Ferrothorn"
    ],
    "klink": [
        "Klink"
    ],
    "klang": [
        "Klang"
    ],
    "klinklang": [
        "Klinklang"
    ],
    "tynamo": [
        "Tynamo"
    ],
    "eelektrik": [
        "Eelektrik"
    ],
    "eelektross": [
        "Eelektross"
    ],
    "elgyem": [
        "Elgyem"
    ],
    "beheeyem": [
        "Beheeyem"
    ],
    "litwick": [
        "Litwick"
    ],
    "lampent": [
        "Lampent"
    ],
    "chandelure": [
        "Chandelure"
    ],
    "axew": [
        "Axew"
    ],
    "fraxure": [
        "Fraxure"
    ],
    "haxorus": [
        "Haxorus"
    ],
    "cubchoo": [
        "Cubchoo"
    ],
    "beartic": [
        "Beartic"
    ],
    "cryogonal": [
        "Cryogonal"
    ],
    "shelmet": [
        "Shelmet"
    ],
    "accelgor": [
        "Accelgor"
    ],
    "stunfisk": [
        "Stunfisk"
    ],
    "mienfoo": [
        "Mienfoo"
    ],
    "mienshao": [
        "Mienshao"
    ],
    "druddigon": [
        "Druddigon"
    ],
    "golett": [
        "Golett"
    ],
    "golurk": [
        "Golurk"
    ],
    "pawniard": [
        "Pawniard"
    ],
    "bisharp": [
        "Bisharp"
    ],
    "bouffalant": [
        "Bouffalant"
    ],
    "rufflet": [
        "Rufflet"
    ],
    "braviary": [
        "Braviary"
    ],
    "vullaby": [
        "Vullaby"
    ],
    "mandibuzz": [
        "Mandibuzz"
    ],
    "heatmor": [
        "Heatmor"
    ],
    "durant": [
        "Durant"
    ],
    "deino": [
        "Deino"
    ],
    "zweilous": [
        "Zweilous"
    ],
    "hydreigon": [
        "Hydreigon"
    ],
    "larvesta": [
        "Larvesta"
    ],
    "volcarona": [
        "Volcarona"
    ],
    "cobalion": [
        "Cobalion"
    ],
    "terrakion": [
        "Terrakion"
    ],
    "virizion": [
        "Virizion"
    ],
    "tornadus-incarnate": [
        "Tornadus Incarnate"
    ],
    "thundurus-incarnate": [
        "Thundurus Incarnate"
    ],
    "reshiram": [
        "Reshiram"
    ],
    "zekrom": [
        "Zekrom"
    ],
    "landorus-incarnate": [
        "Landorus Incarnate"
    ],
    "kyurem": [
        "Kyurem"
    ],
    "keldeo-ordinary": [
        "Keldeo Ordinary"
    ],
    "meloetta-aria": [
        "Meloetta Aria"
    ],
    "genesect": [
        "Genesect"
    ],
    "chespin": [
        "Chespin"
    ],
    "quilladin": [
        "Quilladin"
    ],
    "chesnaught": [
        "Chesnaught"
    ],
    "fennekin": [
        "Fennekin"
    ],
    "braixen": [
        "Braixen"
    ],
    "delphox": [
        "Delphox"
    ],
    "froakie": [
        "Froakie"
    ],
    "frogadier": [
        "Frogadier"
    ],
    "greninja": [
        "Greninja"
    ],
    "bunnelby": [
        "Bunnelby"
    ],
    "diggersby": [
        "Diggersby"
    ],
    "fletchling": [
        "Fletchling"
    ],
    "fletchinder": [
        "Fletchinder"
    ],
    "talonflame": [
        "Talonflame"
    ],
    "scatterbug": [
        "Scatterbug"
    ],
    "spewpa": [
        "Spewpa"
    ],
    "vivillon": [
        "Vivillon"
    ],
    "litleo": [
        "Litleo"
    ],
    "pyroar": [
        "Pyroar"
    ],
    "flabebe": [
        "Flabebe"
    ],
    "floette": [
        "Floette"
    ],
    "florges": [
        "Florges"
    ],
    "skiddo": [
        "Skiddo"
    ],
    "gogoat": [
        "Gogoat"
    ],
    "pancham": [
        "Pancham"
    ],
    "pangoro": [
        "Pangoro"
    ],
    "furfrou": [
        "Furfrou"
    ],
    "espurr": [
        "Espurr"
    ],
    "meowstic-male": [
        "Meowstic Male"
    ],
    "honedge": [
        "Honedge"
    ],
    "doublade": [
        "Doublade"
    ],
    "aegislash-shield": [
        "Aegislash Shield"
    ],
    "spritzee": [
        "Spritzee"
    ],
    "aromatisse": [
        "Aromatisse"
    ],
    "swirlix": [
        "Swirlix"
    ],
    "slurpuff": [
        "Slurpuff"
    ],
    "inkay": [
        "Inkay"
    ],
    "malamar": [
        "Malamar"
    ],
    "binacle": [
        "Binacle"
    ],
    "barbaracle": [
        "Barbaracle"
    ],
    "skrelp": [
        "Skrelp"
    ],
    "dragalge": [
        "Dragalge"
    ],
    "clauncher": [
        "Clauncher"
    ],
    "clawitzer": [
        "Clawitzer"
    ],
    "helioptile": [
        "Helioptile"
    ],
    "heliolisk": [
        "Heliolisk"
    ],
    "tyrunt": [
        "Tyrunt"
    ],
    "tyrantrum": [
        "Tyrantrum"
    ],
    "amaura": [
        "Amaura"
    ],
    "aurorus": [
        "Aurorus"
    ],
    "sylveon": [
        "Sylveon"
    ],
    "hawlucha": [
        "Hawlucha"
    ],
    "dedenne": [
        "Dedenne"
    ],
    "carbink": [
        "Carbink"
    ],
    "goomy": [
        "Goomy"
    ],
    "sliggoo": [
        "Sliggoo"
    ],
    "goodra": [
        "Goodra"
    ],
    "klefki": [
        "Klefki"
    ],
    "phantump": [
        "Phantump"
    ],
    "trevenant": [
        "Trevenant"
    ],
    "pumpkaboo-average": [
        "Pumpkaboo Average"
    ],
    "gourgeist-average": [
        "Gourgeist Average"
    ],
    "bergmite": [
        "Bergmite"
    ],
    "avalugg": [
        "Avalugg"
    ],
    "noibat": [
        "Noibat"
    ],
    "noivern": [
        "Noivern"
    ],
    "xerneas": [
        "Xerneas"
    ],
    "yveltal": [
        "Yveltal"
    ],
    "zygarde": [
        "Zygarde"
    ],
    "diancie": [
        "Diancie"
    ],
    "hoopa": [
        "Hoopa"
    ],
    "volcanion": [
        "Volcanion"
    ],
    "rowlet": [
        "Rowlet"
    ],
    "dartrix": [
        "Dartrix"
    ],
    "decidueye": [
        "Decidueye"
    ],
    "litten": [
        "Litten"
    ],
    "torracat": [
        "Torracat"
    ],
    "incineroar": [
        "Incineroar"
    ],
    "popplio": [
        "Popplio"
    ],
    "brionne": [
        "Brionne"
    ],
    "primarina": [
        "Primarina"
    ],
    "pikipek": [
        "Pikipek"
    ],
    "trumbeak": [
        "Trumbeak"
    ],
    "toucannon": [
        "Toucannon"
    ],
    "yungoos": [
        "Yungoos"
    ],
    "gumshoos": [
        "Gumshoos"
    ],
    "grubbin": [
        "Grubbin"
    ],
    "charjabug": [
        "Charjabug"
    ],
    "vikavolt": [
        "Vikavolt"
    ],
    "crabrawler": [
        "Crabrawler"
    ],
    "crabominable": [
        "Crabominable"
    ],
    "oricorio-baile": [
        "Oricorio Baile"
    ],
    "cutiefly": [
        "Cutiefly"
    ],
    "ribombee": [
        "Ribombee"
    ],
    "rockruff": [
        "Rockruff"
    ],
    "lycanroc-midday": [
        "Lycanroc Midday"
    ],
    "wishiwashi-solo": [
        "Wishiwashi Solo"
    ],
    "mareanie": [
        "Mareanie"
    ],
    "toxapex": [
        "Toxapex"
    ],
    "mudbray": [
        "Mudbray"
    ],
    "mudsdale": [
        "Mudsdale"
    ],
    "dewpider": [
        "Dewpider"
    ],
    "araquanid": [
        "Araquanid"
    ],
    "fomantis": [
        "Fomantis"
    ],
    "lurantis": [
        "Lurantis"
    ],
    "morelull": [
        "Morelull"
    ],
    "shiinotic": [
        "Shiinotic"
    ],
    "salandit": [
        "Salandit"
    ],
    "salazzle": [
        "Salazzle"
    ],
    "stufful": [
        "Stufful"
    ],
    "bewear": [
        "Bewear"
    ],
    "bounsweet": [
        "Bounsweet"
    ],
    "steenee": [
        "Steenee"
    ],
    "tsareena": [
        "Tsareena"
    ],
    "comfey": [
        "Comfey"
    ],
    "oranguru": [
        "Oranguru"
    ],
    "passimian": [
        "Passimian"
    ],
    "wimpod": [
        "Wimpod"
    ],
    "golisopod": [
        "Golisopod"
    ],
    "sandygast": [
        "Sandygast"
    ],
    "palossand": [
        "Palossand"
    ],
    "pyukumuku": [
        "Pyukumuku"
    ],
    "type-null": [
        "Type Null"
    ],
    "silvally": [
        "Silvally"
    ],
    "minior-red-meteor": [
        "Minior Red Meteor"
    ],
    "komala": [
        "Komala"
    ],
    "turtonator": [
        "Turtonator"
    ],
    "togedemaru": [
        "Togedemaru"
    ],
    "mimikyu-disguised": [
        "Mimikyu Disguised"
    ],
    "bruxish": [
        "Bruxish"
    ],
    "drampa": [
        "Drampa"
    ],
    "dhelmise": [
        "Dhelmise"
    ],
    "jangmo-o": [
        "Jangmo O"
    ],
    "hakamo-o": [
        "Hakamo O"
    ],
    "kommo-o": [
        "Kommo O"
    ],
    "tapu-koko": [
        "Tapu Koko"
    ],
    "tapu-lele": [
        "Tapu Lele"
    ],
    "tapu-bulu": [
        "Tapu Bulu"
    ],
    "tapu-fini": [
        "Tapu Fini"
    ],
    "cosmog": [
        "Cosmog"
    ],
    "cosmoem": [
        "Cosmoem"
    ],
    "solgaleo": [
        "Solgaleo"
    ],
    "lunala": [
        "Lunala"
    ],
    "nihilego": [
        "Nihilego"
    ],
    "buzzwole": [
        "Buzzwole"
    ],
    "pheromosa": [
        "Pheromosa"
    ],
    "xurkitree": [
        "Xurkitree"
    ],
    "celesteela": [
        "Celesteela"
    ],
    "kartana": [
        "Kartana"
    ],
    "guzzlord": [
        "Guzzlord"
    ],
    "necrozma": [
        "Necrozma"
    ],
    "magearna": [
        "Magearna"
    ],
    "marshadow": [
        "Marshadow"
    ],
    "poipole": [
        "Poipole"
    ],
    "naganadel": [
        "Naganadel"
    ],
    "stakataka": [
        "Stakataka"
    ],
    "blacephalon": [
        "Blacephalon"
    ],
    "zeraora": [
        "Zeraora"
    ],
    "meltan": [
        "Meltan"
    ],
    "melmetal": [
        "Melmetal"
    ]
}

