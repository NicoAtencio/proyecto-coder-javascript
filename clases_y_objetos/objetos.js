// Liga argentina
const boca = new Productos("boca","Boca",10000,"Liga_Argentina");
const river = new Productos("river","River",10000,"Liga_Argentina");
const independiente = new Productos("independiente", "Independiente",8000,"Liga_Argentina");
const racing = new Productos("racing", "Racing",8000,"Liga_Argentina");
const sanLorenzo = new Productos("sanLorenzo", "San Lorenzo",7700,"Liga_Argentina");
const newells = new Productos("newells", "Newells",7500, "Liga_Argentina");
const central = new Productos("central", "Rosario Central",7500,"Liga_Argentina");
const estudiantes = new Productos("estudiantes", "Estudiantes",6000,"Liga_Argentina");

// liga alemana
const bayern = new Productos("bayern_munich", "Bayern Munich",10000,"Liga_Alemana");
const borussia = new Productos("borussia", "Borussia Dortmund",10000,"Liga_Alemana");
const hoffenheim = new Productos("hoffenheim", "Hoffenheim",8300, "Liga_Alemana");
const leipzig = new Productos("leipzig", "Leipzig",8000, "Liga_Alemana");
const leverkusen = new Productos("leverkusen", "Bayer Leverkusen",9000, "Liga_Alemana");
const monchengladbach = new Productos("monchengladbach", "Monchengladbach",7600,"Liga_Alemana");
const schalke = new Productos("schalke", "Schalke 04",7800, "Liga_Alemana");
const wolfsburg = new Productos("wolfsburg", "Wolfsburg",8000, "Liga_Alemana");

// botines
const adidas1 = new Productos("adidas1", "Botines Adidas1",20000,"Seccion_botines");
const adidas2 = new Productos("adidas2", "Botines Adidas2",18000,"Seccion_botines");
const adidas3 = new Productos("adidas3", "Botines Adidas3",15000, "Seccion_botines");
const nike1 = new Productos("nike1", "Botines Nike1",20000,"Seccion_botines");
const nike2 = new Productos("nike2", "Botines Nike2",18500,"Seccion_botines");
const nike3 = new Productos("nike3", "Botines Nike3",16200,"Seccion_botines");
const triaxGo = new Productos("triaxGo", "Botines TriaxGo",13000,"Seccion_botines");
const umbro = new Productos("umbro", "Botines Umbro",13000,"Seccion_botines");

// Accesorios
const canilleras = new Productos("canilleras", "Canilleras",3000,"Seccion_accesorios");
const conos = new Productos("conos", "Conos",500,"Seccion_accesorios");
const inflador = new Productos("inflador", "Inflador",3700,"Seccion_accesorios");
const medias = new Productos("medias", "Medias",2000, "Seccion_accesorios");
const pantalon  = new Productos("pantalon", "Pantalon",6000,"Seccion_accesorios");
const pelota_adidas = new Productos("pelota_adidas", "Pelota adidas",3000,"Seccion_accesorios");
const pelota_uefa = new Productos("pelota_uefa", "Pelota UEFA",3300, "Seccion_accesorios");
const vendas = new Productos("vendas", "Vendas",1800, "Seccion_accesorios");

// Liga española
const barcelona = new Productos("barcelona", "Barcelona",10000, "Liga_española");
const real_madrid = new Productos("real_madrid", "Real Madrid",10000, "Liga_española");
const atletico_madrid = new Productos("atletico_madrid", "Atletico de Madrid",9700, "Liga_española");
const betis = new Productos("betis", "Betis",6000, "Liga_española");
const celta = new Productos("celta", "Celta de Vigo",6000, "Liga_española");
const valencia = new Productos("valencia", "Valencia",8900, "Liga_española");
const vallecano = new Productos("vallecano", "Rayo Vallecano",6000, "Liga_española");
const villarreal = new Productos("villarreal", "Villarreal",9200, "Liga_española");

// Liga francesa
const lens = new Productos("lens", "Lens", 8300, "Liga_Francesa");
const lorient = new Productos("lorient", "Lorient", 7300, "Liga_Francesa");
const psg = new Productos("psg", "PSG", 10000, "Liga_Francesa");
const lyon = new Productos("lyon", "Lyon", 8500, "Liga_Francesa");
const marsella = new Productos("marsella", "Olympique de Marsella", 9600, "Liga_Francesa");
const monaco = new Productos("monaco", "Monaco", 9700, "Liga_Francesa");
const nantes = new Productos("nantes", "Nantes", 6300, "Liga_Francesa");
const nice = new Productos("nice", "Nice", 6000, "Liga_Francesa");

// Liga inglesa
const arsenal = new Productos("arsenal", "Arsenal", 10000, "Liga_Inglesa");
const aston_villa = new Productos("aston_villa", "Aston Villa", 7200, "Liga_Inglesa");
const chelsea = new Productos("chelsea", "Chelsea", 10000, "Liga_Inglesa");
const man_city = new Productos("man_city", "Manchester City", 10000, "Liga_Inglesa");
const man_united = new Productos("man_united", "Manchester United", 10000, "Liga_Inglesa");
const leicester = new Productos("leicester", "Leicester", 7000, "Liga_Inglesa");
const liverpool = new Productos("liverpool", "Liverpool", 8600, "Liga_Inglesa");
const tottenham = new Productos("tottenham", "Tottenham", 7800, "Liga_Inglesa");

// Liga italiana

const inter = new Productos("inter", "Inter", 9600, "Liga_Italiana");
const milan = new Productos("milan", "Milan", 9600, "Liga_Italiana");
const juventus = new Productos("juventus", "Juventus", 10000, "Liga_Italiana" );
const lazio = new Productos("lazio", "Lazio", 7800, "Liga_Italiana");
const napoli = new Productos("napoli", "Napoli", 9000, "Liga_Italiana");
const palermo = new Productos("palermo", "Palermo", 7000, "Liga_Italiana");
const roma = new Productos("roma", "Roma", 9300, "Liga_Italiana");
const pescara = new Productos("pescara", "Pescara", 6800, "Liga_Italiana");


const listaProductos = [
    boca,
    river,
    independiente,
    racing,
    sanLorenzo,
    newells,
    central,
    estudiantes,
    bayern,
    borussia,
    hoffenheim,
    leipzig,
    leverkusen,
    monchengladbach,
    schalke,
    wolfsburg,
    adidas1,
    adidas2,
    adidas3,
    nike1,
    nike2,
    nike3,
    triaxGo,
    umbro,
    canilleras,
    conos,
    inflador,
    medias,
    pantalon,
    pelota_adidas,
    pelota_uefa,
    vendas,
    barcelona,
    real_madrid,
    atletico_madrid,
    betis,
    celta,
    valencia,
    vallecano,
    villarreal,
    lens,
    lorient,
    psg,
    lyon,
    marsella,
    monaco,
    nantes,
    nice,
    arsenal,
    aston_villa,
    chelsea,
    man_city,
    man_united,
    leicester,
    liverpool,
    tottenham,
    inter,
    milan,
    juventus,
    lazio,
    napoli,
    palermo,
    roma,
    pescara
];


