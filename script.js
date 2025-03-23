// Buat peta
var map = L.map('map').setView([3.5952, 98.6722], 13); // Medan

// Tambahkan peta dari OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// ==========================
// 🔵 Jalur Bus Listrik 1 (Biru)
// ==========================
var jalurBus1 = L.polyline([
    [3.5893128328654633, 98.61000866200243], [3.5854405314611992, 98.61395960514534], [3.5851135455883245, 98.6267643620752], [3.5864764300531444, 98.6269464364502], [3.5858519431760736, 98.64133465499786], [3.5907280276436215, 98.64388369630767], [3.590085737939026, 98.65856798878872], [3.590734035425674, 98.66134671528027], [3.5846032912630745, 98.66129172095222], [3.58424312364217, 98.66681308685708],[3.5890424975373714, 98.66812182953028],[3.5913295475882308, 98.67108099289777], [3.589690795790253, 98.67275905510083], [3.590231043961414, 98.67788345993264],[3.5957275795797874, 98.67565852664043], [3.5987901713821833, 98.68370995085125],[3.59875864988399, 98.68681448522374],[3.58489838392572, 98.6919636725997],[3.5820890735597257, 98.6847462010056],[3.5685073514117582, 98.69121446133623],[3.553562555202278, 98.6959836188538],[3.5516798419272058, 98.69778810892223], [3.549662829123617, 98.69865420551353],[3.5423359625853252, 98.69861451749549],[3.5405022025917883, 98.69960970496267],[3.5391268802802243, 98.70162559659002],[3.537063892984744, 98.7118071251889],[3.5364016985583304, 98.717905835302],[3.540156812999141, 98.71735982980843],[3.5395638906611455, 98.71807314448355],[3.540156812999141, 98.71735982980843],[3.5364016985583304, 98.717905835302], [3.540156812999141, 98.71735982980843], [3.5395638906611455, 98.71807314448355],[3.540156812999141, 98.71735982980843],[3.5364016985583304, 98.717905835302],[3.537063892984744, 98.7118071251889],[3.5391268802802243, 98.70162559659002],[3.5405022025917883, 98.69960970496267],[3.5423359625853252, 98.69861451749549],[3.549662829123617, 98.69865420551353],[3.5516798419272058, 98.69778810892223],[3.553562555202278, 98.6959836188538],[3.5685073514117582, 98.69121446133623],[3.5820890735597257, 98.6847462010056],[3.5822855407603074, 98.68451531157534],[3.5813139260008566, 98.68253919865538],[3.5879596483665432, 98.67865994269457],[3.595688547820192, 98.67563477819823],[3.594869479059239, 98.67416706410424],[3.594512935304923, 98.67181944347492],[3.5936215753093514, 98.66982906946313],[3.5907946849301253, 98.66128066794067],[3.59013252918016, 98.65849924778163],[3.5908710874785372, 98.64390317090186], [3.586051860905724, 98.64144704915007], [3.5822202205186118, 98.64062197242052],[3.5784384434483276, 98.62634942202854], [3.5847992053686193, 98.62688831085157], [3.585253500582223, 98.6139003382152], [3.589176043125693, 98.61078553379807], [3.58896593569103, 98.6101731110252]
], { color: 'blue', weight: 5, opacity: 0.7 }).addTo(map);

var halteBus1 = [
    L.marker([3.5901363452444994, 98.61018815248063]).bindPopup("Halte Terminal Pinang Baris"),
    L.marker([3.5909733404254522, 98.64497959599433]).bindPopup("Halte Panca BUdi"),
    L.marker([3.590612622313711, 98.64932361063967]).bindPopup("Halte RS Advent"),
    L.marker([3.5904971519502737, 98.65467310830202]).bindPopup("Halte Berastagi Supermarket"),
    L.marker([3.590428052357381, 98.65988554490755]).bindPopup("Halte Mardi Lestari"),
    L.marker([3.587006926045911, 98.66138230645207]).bindPopup("Halte RS SMEC"),
    L.marker([3.5845615382443277, 98.66283762431657]).bindPopup("Halte Gajah Mada"),
    L.marker([3.585768385632283, 98.66702233817783]).bindPopup("Halte Cambridge"),
    L.marker([3.5894776975925073, 98.66827609302514]).bindPopup("Halte Santo Thomas"),
    L.marker([3.5900158275211203, 98.67652007945112]).bindPopup("Halte Kantor Wali Kota"),
    L.marker([3.5917586373040367, 98.67702242334073]).bindPopup("Halte Lapangan Merdeka"),
    L.marker([3.5922080794441964, 98.67684842501389]).bindPopup("Halte Balai Kota"),
    L.marker([3.5817893727993853, 98.68512591357323]).bindPopup("Halte PDAM Tirtanadi"),
    L.marker([3.5790663676042382, 98.68631999480921]).bindPopup("Halte Klinik Spesialis Bunda"),
    L.marker([3.575744546650047, 98.68784566902929]).bindPopup("Halte Yuki Simpang Raya"),
    L.marker([3.574621758433196, 98.6884863673207]).bindPopup("Halte Simpang Juanda"),
    L.marker([3.568518003648413, 98.69138331755202]).bindPopup("Halte Simpang HM Joni"),
    L.marker([3.5655249093887287, 98.69228374083772]).bindPopup("Halte Stadion Teladan"),
    L.marker([3.5623636612678267, 98.69316626597342]).bindPopup("Halte UISU"),
    L.marker([3.5595696314572716, 98.69416748463503]).bindPopup("Halte Air Bersih"),
    L.marker([3.5564986656708104, 98.69507331755204]).bindPopup("Halte Budi Darma"),
    L.marker([3.5527412499625854, 98.69682441454685]).bindPopup("Halte Simpang Limun"),
    L.marker([3.549578419492447, 98.69881148093589]).bindPopup("Halte SD 100"),
    L.marker([3.5456857739436902, 98.69883675181138]).bindPopup("Halte UNIV SM Raja"),
    L.marker([3.543541616679607, 98.69867406074654]).bindPopup("Halte Harjo Sari"),
    L.marker([3.5391579123465973, 98.70171735548568]).bindPopup("Halte Indogrosir"),
    L.marker([3.5383918886685755, 98.70661554083767]).bindPopup("Halte Masjid Ar Rivai"),
    L.marker([3.537481330761871, 98.71183999480917]).bindPopup("Halte RS Mitra Medika"),
    L.marker([3.5368857124509856, 98.7147656879858]).bindPopup("Halte Terminal Amplas"),
    L.marker([3.5395638906611455, 98.71807314448355]).bindPopup("Halte Amplas"),
    L.marker([3.5373748786058843, 98.71022005283817]).bindPopup("Halte SMK Parulian 3"),
    L.marker([3.5380203027470682, 98.70670980512456]).bindPopup("Halte ALS"),
    L.marker([3.5399169972528775, 98.70020707946621]).bindPopup("Halte Tritura"),
    L.marker([3.542805174655663, 98.69870424212608]).bindPopup("Halte Simpang Marendal"),
    L.marker([3.545125579185172, 98.69847853713765]).bindPopup("Halte Kehutanan"),
    L.marker([3.5632614502437625, 98.69276136782346]).bindPopup("Halte Pelangi"),
    L.marker([3.5845615382443277, 98.66283762431657]).bindPopup("Halte Juanda"),
    L.marker([3.575645885296938, 98.68787070547724]).bindPopup("Halte Srideli"),
    L.marker([3.5845615382443277, 98.66283762431657]).bindPopup("Halte Kolam Renang Paradiso"),
    L.marker([3.5845615382443277, 98.66283762431657]).bindPopup("Halte Gedung Juang 45"),
    L.marker([3.5845615382443277, 98.66283762431657]).bindPopup("Halte Halte Kesawan "),
    L.marker([3.5845615382443277, 98.66283762431657]).bindPopup("Halte Deli Park"),
    L.marker([3.5845615382443277, 98.66283762431657]).bindPopup("Halte Sri Deli"),
    L.marker([3.573533483230955, 98.68872410788032]).bindPopup("Halte Mayestik"),
    L.marker([3.591417567270233, 98.66314880830198]).bindPopup("Halte Plaza Medan Fair")
    

];
halteBus1.forEach(halte => {
    halte.addTo(map);
    halte.on('mouseover', function () { this.openPopup(); });
    halte.on('mouseout', function () { this.closePopup(); });
});

// ==========================
// 🔴 Jalur Bus Listrik 2 (Merah)
// ==========================
var jalurBus2 = L.polyline([
    [3.5353012519665223, 98.660890216865], [3.5353475011857327, 98.66294359480291], [3.541332609088545, 98.66280354907565], [3.5412200930621633, 98.66102121438236],[3.540526065461212, 98.65834186467212], [3.540545167148836, 98.65402300810618], [3.5459445607520195, 98.65868635247753], [3.5471097559450784, 98.65929877526425], [3.5510965087970767, 98.65980757968697], [3.555991791678934, 98.6616656524968],[3.5595828412629302, 98.66156358203608], [3.561607575787163, 98.66262256310635], [3.566522950555401, 98.66157634084783], [3.570179757963408, 98.66004173066833],[3.571045672721911, 98.66032242444389], [3.5741273040254713, 98.66305280941955],[3.574879187082897, 98.66540594102872],[3.5770911079869356, 98.66674793006631],[3.576856997097956, 98.66830870835236], [3.5755513777052292, 98.66935524176307], [3.575272245041956, 98.6712859154589],[3.5754656848566904, 98.67208802960012],[3.5783230920334756, 98.6725258154667],[3.5835857216727383, 98.67276552571167],[3.586930240079251, 98.67291821964584],[3.589602164300378, 98.67314839003933],[3.589639857389037, 98.67441186059686],[3.5901431232244194, 98.67770561324738],[3.592938235483848, 98.67671074683523], [3.595657999415744, 98.67568077858743],[3.594882950671048, 98.6744122985628],[3.594570591819038, 98.6723092620138],[3.5937874684795017, 98.6709313107268],[3.593679231862384, 98.67047199363006],[3.5933339540076097, 98.66899040832999],[3.5930662603870926, 98.66870609417882],[3.592993983096102, 98.66809723274186],[3.5907127887054737, 98.66153176233694],[3.5720822478408896, 98.6608414959549]
], { color: 'red', weight: 5, opacity: 0.7 }).addTo(map);

var halteBus2 = [
    L.marker([3.5353012519665223, 98.660890216865]).bindPopup("Halte J City"),
    L.marker([3.5414336851738555, 98.6623161491811]).bindPopup("Halte Karya Wisata"),
    L.marker([3.5405176680719914, 98.65818023924773]).bindPopup("Halte Luku"),
    L.marker([3.5414161849092283, 98.65478757710454]).bindPopup("Halte Simpang Pos"),
    L.marker([3.544437822845941, 98.65696734176282]).bindPopup("Halte Jalan Beringin"),
    L.marker([3.5481723544587043, 98.65951272615214]).bindPopup("Halte Citra Garden"),
    L.marker([3.5552523498208117, 98.6612693591087]).bindPopup("Halte Harmonika"),
    L.marker([3.5608526037529065, 98.66216556171932]).bindPopup("Halte Jalan Pajus"),
    L.marker([3.563832138158201, 98.66223288269215]).bindPopup("Halte Pajak Sore"),
    L.marker([3.5678587468434593, 98.66038450572889]).bindPopup("Halte Simpang Dr Mansyur"),
    L.marker([3.5711921175510626, 98.66036676223153]).bindPopup("Halte Simpang Wahid Hasyim"),
    L.marker([3.573771205398167, 98.66245695982401]).bindPopup("Halte Monginsidi Pattimura"),
    L.marker([3.575719486892236, 98.6659424072953]).bindPopup("Halte BPJS"),
    L.marker([3.5761451629642225, 98.66884732543915]).bindPopup("Halte Taman Beringin"),
    L.marker([3.5762375463267144, 98.67218233226406]).bindPopup("Halte Oditurat MIliter"),
    L.marker([3.5792701835522993, 98.6725577577135]).bindPopup("Halte Diponegoro"),
    L.marker([3.581619422781194, 98.67257249033699]).bindPopup("Halte Masjid Agung"),
    L.marker([3.583454073786133, 98.67268806466973]).bindPopup("Halte Adimulia"),
    L.marker([3.5886960011327886, 98.67304567189889]).bindPopup("Halte Santika"),
    L.marker([3.590034204698159, 98.67653348901969]).bindPopup("Halte Kantor Walikota"),
    L.marker([3.5926424040527634, 98.6790805473798]).bindPopup("Halte Lapangan Merdeka"),
    L.marker([3.5953064725399138, 98.6757491284895]).bindPopup("Halte Delipark"),
    L.marker([3.594296024192681, 98.67144694534005]).bindPopup("Halte Sri Deli"),
    L.marker([3.59290271976014, 98.66785230471258]).bindPopup("Halte Mayestik"),
    L.marker([3.5913509424637446, 98.66316461282187]).bindPopup("Halte Plaza Medan Fair"),
    L.marker([3.587002602889848, 98.6613955944236]).bindPopup("Halte RS SMEC"),
    L.marker([3.5802143402894413, 98.6609907439788]).bindPopup("Halte Pringgan"),
    L.marker([3.575400093126626, 98.66097244439143]).bindPopup("Halte Nyak Makam"),
    L.marker([3.5416161967795947, 98.66077650830199]).bindPopup("Halte Tri Guna Darma"),
    L.marker([3.541316946478237, 98.66226784461189]).bindPopup("Halte Karya Bakti"),
    L.marker([3.5379482138948464, 98.66302212179478]).bindPopup("Halte SPBU Kawi"),
    
    
];
halteBus2.forEach(halte => {
    halte.addTo(map);
    halte.on('mouseover', function () { this.openPopup(); });
    halte.on('mouseout', function () { this.closePopup(); });
});

// ==========================
// 🟢 Jalur Bus Listrik 3 (Hijau)
// ==========================
var jalurBus3 = L.polyline([
    [3.785623776150913, 98.69913071372434],[3.7829610395101962, 98.68817107514926], [3.7844371208693666, 98.68920665495419],[3.783123611571763, 98.68844322762031] ,[3.7827690960293565, 98.68651192330292],[3.7826308207532153, 98.68449438746828] ,[3.7818610406561897, 98.68219647374399] ,[3.7807013728071825, 98.68166762837357],[3.7790480301285374, 98.681490316986],[3.7769471481497745, 98.68120264677901],[3.77477072688823, 98.68119773258664],[3.771385669882104, 98.68172620043958],[3.7689340835331886, 98.68230431777894],[3.7668024591296283, 98.68270737426381],[3.7656566463180927, 98.68275840949491],[3.7656566463180927, 98.68275840949491],[3.764538698405484, 98.68251965131763],[3.761429912607226, 98.68123526988863],[3.7590191651296627, 98.67972090983935],[3.758746056600195, 98.67960597101313],[3.7561366832650225, 98.67661797208845],[3.755173419523539, 98.67619394563229],[3.752247346766488, 98.6761153607181],[3.7465309035254117, 98.67426533356924],[3.7460068845339274, 98.67430215897733],[3.7396180751795347, 98.67533897657057],[3.7377035614336345, 98.67614801556618],[3.7351444921694066, 98.6764669857624],[3.7329981631174887, 98.67569161166952],[3.730459398612779, 98.67588107033829],[3.720275500649831, 98.6802199032795],[3.719225430415139, 98.68046558056632],[3.7150838285606085, 98.67946792683072],[3.7081295893612785, 98.67991170999812],[3.704221509668936, 98.67867115413594],[3.696281222364448, 98.67328814898127],[3.693995713826131, 98.6725915198548],[3.690411358553798, 98.67012767604457],[3.688958294696891, 98.66831291433063],[3.687915912254301, 98.66748320671934],[3.6820915163578736, 98.66566291587834],[3.679348190453451, 98.66520660127668],[3.6780518892651033, 98.66522328084966],[3.669918135302139, 98.66720143110896],[3.667026311073613, 98.66696743034286],[3.666777729969084, 98.66695493111885],[3.6609525299711576, 98.6663152519072],[3.656258596838008, 98.6642139009457],[3.653466754950242, 98.6635148239266],[3.6490906978021367, 98.66292308219252],[3.6440479591780806, 98.66290132697019],[3.6398444102678615, 98.6637880558422],[3.6350295590918105, 98.66854326851852],[3.633253292865135, 98.66932087871743],[3.631759887340431, 98.66979123449255] ,[3.629302379194855, 98.66961899058974],[3.6258827076625315, 98.66908610112006],[3.6252055693388163, 98.66899777029839],[3.623904693254151, 98.66929698407452],[3.6211855415419847, 98.6706322163388],[3.6154236397763064, 98.67209887351868],[3.6153621860218377, 98.67203864481775],[3.615388378597796, 98.67212757959626],[3.613589519534864, 98.67285714044182],[3.6113715641021025, 98.6738600945644],[3.609771405973432, 98.67419023087581],[3.60701578238959, 98.67402844430889],[3.6021812810893725, 98.67313354525231],[3.600641091713681, 98.67333790561999],[3.6003503254644076, 98.674160816501],[3.5995608402690196, 98.67537290329],[3.5986249174336407, 98.6761703287755],[3.5980768163327603, 98.6764688486631],[3.597395565363324, 98.67681971587673], [3.5965806102636306, 98.67704937441655],[3.593506919412777, 98.67826538081437] ,[3.5924653406586087, 98.67904261244512], [3.5896757863539457, 98.68005273506002], [3.5897704366317242, 98.67979576388706],[3.5888120893500792, 98.67828836244792],[3.5911624476298103, 98.67732813163987],[3.592907812311794, 98.67667903704965],[3.5930160133199953, 98.67664772269141],[3.5957052844532837, 98.67565919591087],[3.598022813376221, 98.67438331510482],[3.5991115406098215, 98.6736815806389],[3.600353070030052, 98.6731648489243],[3.6018964165189105, 98.67308930330256],[3.6067683809362667, 98.67399052551157]
], { color: 'green', weight: 5, opacity: 0.7 }).addTo(map);

var halteBus3 = [

    L.marker([3.785623776150913, 98.69913071372434]).bindPopup("Halte Stasiun Belawan"),
    L.marker([3.7844371208693666, 98.68920665495419]).bindPopup("Halte Pasar Belawan"),
    L.marker([3.7705145765928902, 98.68199242681588]).bindPopup("Halte Simpang Pahlawan"),
    L.marker([3.764389408593325, 98.68254914629902]).bindPopup("Halte RS Prima Husada"),
    L.marker([3.7578509952624843, 98.67859926597369]).bindPopup("Halte Yapim"),
    L.marker([3.755053210109225, 98.67625316421737]).bindPopup("Halte PLN"),
    L.marker([3.7479050551457616, 98.6747897236451]).bindPopup("Halte Pertamina"),
    L.marker([3.7401989089261467, 98.67526097228811]).bindPopup("Halte Simpang Syahbuddin Yatim"),
    L.marker([3.733130494654972, 98.67845789480943]).bindPopup("Halte Rusunawa Serwai"),
    L.marker([3.735213526477737, 98.67648416412366]).bindPopup("Halte Simpang Serwai"),
    L.marker([3.7222381516608745, 98.67954839278417]).bindPopup("Halte Pajak Inpres"),
    L.marker([3.7154545874515406, 98.6796527047289]).bindPopup("Halte SMP Ngeri 5"),
    L.marker([3.7079860256008303, 98.67995576888856]).bindPopup("Halte Titi Bambu"),
    L.marker([3.6964756986836345, 98.67346940988293]).bindPopup("Halte Simpang Martubung"),
    L.marker([3.6885148006682447, 98.66801228806898]).bindPopup("Halte Titi Papan"),
    L.marker([3.6791805971761526, 98.66520635063073]).bindPopup("Halte Asrama Ikan Hiu"),
    L.marker([3.66648258398533, 98.66685979110929]).bindPopup("Halte Simpang Kim"),
    L.marker([3.656886060915539, 98.66463833343784]).bindPopup("Halte Simpang Mabar"),
    L.marker([3.654075657641366, 98.66374728316647]).bindPopup("Halte SPBU Kayu Putih"),
    L.marker([3.650120882517533, 98.6612442164329]).bindPopup("Halte Tanjung Mulia"),
    L.marker([3.6356956542985595, 98.66791072364494]).bindPopup("Halte Swallow"),
    L.marker([3.6310813620402396, 98.6699022831664]).bindPopup("Halte Pasar Palapa"),
    L.marker([3.6265840780449037, 98.66930302165011]).bindPopup("Halte Brayan"),
    L.marker([3.615721316060553, 98.67221999480921]).bindPopup("Halte Maju Bersama"),
    L.marker([3.6122040004490605, 98.67358016621057]).bindPopup("Halte Methodist 8"),
    L.marker([3.6090333250036037, 98.67440365805086]).bindPopup("Halte Glugur"),
    L.marker([3.5976048579702193, 98.67676635063059]).bindPopup("Halte Merak Jingga"),
    L.marker([3.592666751439109, 98.6790600948092]).bindPopup("Halte Lapangan Merdeka"),
    L.marker([3.599208488485837, 98.67370072364493]).bindPopup("Halte Putri Hijau"),
    L.marker([3.677438477252595, 98.66526489295933]).bindPopup("Halte Kota Bangun"),
    L.marker([3.6978727783077927, 98.67332622475045]).bindPopup("Halte Simpang Martubung"),
    L.marker([3.716057733941406, 98.67979905433084]).bindPopup("Halte Guna Budhi Bakti"),
    L.marker([3.7350470567297394, 98.67639145248074]).bindPopup("Halte RSUD Labuhan"),
    L.marker([3.761552275051786, 98.68140946984789]).bindPopup("Halte Simpang Sicanang"),
    L.marker([3.7820012837556845, 98.6820827064523]).bindPopup("Halte Tugu TNI AL")

];
halteBus3.forEach(halte => {
    halte.addTo(map);
    halte.on('mouseover', function () { this.openPopup(); });
    halte.on('mouseout', function () { this.closePopup(); });
});

// ==========================
// 🟡 Jalur Bus Listrik 4 (Kuning)
// ==========================
var jalurBus4 = L.polyline([
    [3.500327745249056, 98.61153459575353], [3.5074750997887847, 98.6138584908388], [3.513329287800015, 98.61525535922695],[3.514185989847489, 98.61538414085074],[3.5200221924322808, 98.61896757205194],[3.5200221924322808, 98.61896757205194],[3.521412614571109, 98.62192198049968],[3.525845996775563, 98.63239798300818],[3.527998151465031, 98.63520492082286],[3.533053785108697, 98.64647094848269],[3.533843327412993, 98.64821890514692],[3.53717406311282, 98.65112292299455],[3.5459608280309753, 98.65876544898279],[3.5471323903654968, 98.65933959533234],[3.5519332336211993, 98.65999029456658],[3.5550913344391657, 98.66118962253975],[3.5561355427871315, 98.66180204531261],[3.5561355427871315, 98.66180204531261],[3.5586696533500635, 98.66149583396879],[3.56168765520869, 98.66261860905239],[3.565966324523429, 98.66178928656058],[3.5677490975441892, 98.66041133529058],[3.569002350641871, 98.65981909345275],[3.570886990016649, 98.66025289291686],[3.5736524067111977, 98.66243929420767],[3.574333857725196, 98.66350139475604],[3.574894161513001, 98.66545869433803],[3.5751213115997325, 98.66565594158273],[3.577190744257584, 98.66673279580512],[3.5766038338111965, 98.66848073112145],[3.575406841033256, 98.66965454143612],[3.575228565385965, 98.67122387487642],[3.575699722408275, 98.67371184244817],[3.575778170094732, 98.67366634691655],[3.5772665737806624, 98.67637537794822],[3.577785908306191, 98.67667578534824],[3.5781767475214363, 98.67765747388735],[3.580527133160541, 98.6804523356618],[3.580939386981858, 98.68186854203094],[3.581367437702711, 98.6824858353699],[3.5851684605795926, 98.6802838398398],[3.58791305064626, 98.67860305682154],[3.590826424335448, 98.677404147397],[3.592969167319443, 98.67665309055172],[3.5956873393029465, 98.67565168142355],[3.596555332104318, 98.67702674798032],[3.5988887438086885, 98.68343099243232],[3.5989607761902636, 98.68400839015986], [3.598821979314541, 98.68680934361086],[3.5849756128665997, 98.69197321732481],[3.583093326397246, 98.68740750135217],[3.583323545428453, 98.6873270350843],[3.5818661931444558, 98.6833547698188],[3.580980313997425, 98.68197403904621],[3.580798595094484, 98.68129884655474],[3.5804305341697718, 98.6804039983682],[3.5776826531604025, 98.67721492514683],[3.5722756427553772, 98.67790842558873],[3.5723024127299583, 98.67400312931815],[3.5724963214794028, 98.67246312373238],[3.572450891336557, 98.67213690713538],[3.5714906461282285, 98.67174720118206],[3.57115869810466, 98.67137169193204],[3.5711265740990066, 98.66408681225958],[3.5712184741010518, 98.66339104561817],[3.572862150953273, 98.66191046627982],[3.571925201977955, 98.66110043918334]
], { color: 'yellow', weight: 5, opacity: 0.7 }).addTo(map);

var halteBus4 = [
    L.marker([3.500327745249056, 98.61153459575353]).bindPopup("Halte Simpang Pasar Induk"),
    L.marker([3.5074750997887847, 98.6138584908388]).bindPopup("Halte SMP 31 Medan"),
    L.marker([3.513329287800015, 98.61525535922695]).bindPopup("Halte Simpang Adam Malik"),
    L.marker([3.5193784997018627, 98.61857707946623]).bindPopup("Halte RS Bukit Permai"),
    L.marker([3.521468144051177, 98.6219146560281]).bindPopup("Halte GBI Jamin Ginting"),
    L.marker([3.5231418117564837, 98.62624248059561]).bindPopup("Halte DIklat PKN Medan"),
    L.marker([3.5268718773447656, 98.63339021440544]).bindPopup("Halte Simpang Simalingkar"),
    L.marker([3.5316712792765945, 98.64282754666195]).bindPopup("Halte Penerbangan"),
    L.marker([3.533027402604109, 98.6464879611494]).bindPopup("Halte Dharma Bakti"),
    L.marker([3.5373201686880043, 98.65105636840556]).bindPopup("Halte Simpang Pintu Air"),
    L.marker([3.540219124338235, 98.6536770478865]).bindPopup("Halte Simpang Pos"),
    L.marker([3.5434394862297967, 98.65634423665117]).bindPopup("Halte Simpang Bringin"),
    L.marker([3.5551973889010626, 98.66124032612616]).bindPopup("Halte Simpang Harmonika"),
    L.marker([3.5609220917367534, 98.66215168411375]).bindPopup("Halte Pajus"),
    L.marker([3.563949495689892, 98.66226612635305]).bindPopup("Halte SDN Jamin Ginting"),
    L.marker([3.567843628414034, 98.66041311832576]).bindPopup("Halte Simpang DR Mansyur"),
    L.marker([3.567866139297714, 98.6603770309678]).bindPopup("Halte Simpang Wahid Hasyim"),
    L.marker([3.5726485125033034, 98.6614264674258]).bindPopup("Halte Simpang Monginsidi Pattimura"),
    L.marker([3.5757119770852968, 98.66595895511541]).bindPopup("Halte BPJS Ketenagakerjaan"),
    L.marker([3.5761968422031476, 98.66882288195346]).bindPopup("Halte Taman Beringin"),
    L.marker([3.5812568645486764, 98.68151214878176]).bindPopup("Halte Waspada"),
    L.marker([3.5853370696137064, 98.68021732866144]).bindPopup("Halte Kesawan"),
    L.marker([3.5926453359367057, 98.67908155248064]).bindPopup("Halte Lapangan Merdeka"),
    L.marker([3.5810661298949324, 98.68204718699161]).bindPopup("Halte Simpang Waspada"),
    L.marker([3.577205571729676, 98.67660450830199]).bindPopup("Halte Taman Ahmad Yani"),
    L.marker([3.574561580907945, 98.67048758599701]).bindPopup("Halte Medan Eye Center"),
    L.marker([3.571282740456526, 98.6712056217949]).bindPopup("Halte KFC Walikota"),
    L.marker([3.571307210513774, 98.66589347179486]).bindPopup("Halte Hermes Polonia"),
    L.marker([3.5483625675549906, 98.65950187576624]).bindPopup("Halte Citra Garden"),
    L.marker([3.5002621229495867, 98.61173801200192]).bindPopup("Halte Pasar Induk")


    
];
halteBus4.forEach(halte => {
    halte.addTo(map);
    halte.on('mouseover', function () { this.openPopup(); });
    halte.on('mouseout', function () { this.closePopup(); });
});

// ==========================
// 🟣 Jalur Bus Listrik 5 (Ungu)
// ==========================
var jalurBus5 = L.polyline([
    [3.5944207397056753, 98.75718144417718],[3.594509765506674, 98.75597098679884],[3.59562069178268, 98.75597903341303],[3.595494004453972, 98.75357158015137], [3.596714872230216, 98.7525008514488],[3.596869776788019, 98.75092442085507],[3.5967205967726144, 98.74630920369897],[3.5962073646679924, 98.74520853928087],[3.5963248844954503, 98.7445330963845],[3.5968453768153865, 98.74373717498105],[3.5968564305458255, 98.7404391036266],[3.597019617383358, 98.73616090475261],[3.5971311805196673, 98.73073710481077],[3.5973490159234403, 98.72183452581939],[3.5977017791552743, 98.71133403933598],[3.597967800837252, 98.70637180211013], [3.593960939276742, 98.70620856359919],[3.5906909340932227, 98.70621959741699],[3.5891962185188464, 98.70613666516896],[3.588939186716863, 98.70397578566698],[3.588395327571645, 98.69926216903653],[3.5875352849499316, 98.69329897113793],[3.5870607749620422, 98.69131556719384],[3.586949354100837, 98.69115608209674],[3.586642885635575, 98.69131067243747],[3.5849572553642686, 98.69197504039346],[3.583337781685937, 98.68734147185532],[3.5823049307873758, 98.68459130239145],[3.5818183599280244, 98.68335649048363],[3.5812401343175453, 98.68256792103459],[3.5837985365901197, 98.68101886076876],[3.5847515689625453, 98.68054890861457],[3.588022599787624, 98.67848422475515] ,[3.595163691547039, 98.67570801161175],[3.596650509434268, 98.67695396585438],[3.5989186440182546, 98.68338307733671],[3.598820571289027, 98.68681350089786],[3.596953361815593, 98.68741219875713],[3.591530105145155, 98.689470944265],[3.588947028331824, 98.69036045950027],[3.587143413898576, 98.69110481062542],[3.5870631052762536, 98.69134620942901],[3.587497041759799, 98.69309533066114]
], { color: 'purple', weight: 5, opacity: 0.7 }).addTo(map);

var halteBus5 = [
    
    L.marker([3.5944207397056753, 98.75718144417718]).bindPopup("Halte Stasiun Khalifah"),
    L.marker([3.596714872230216, 98.7525008514488]).bindPopup("Halte Simpang Jodoh "),
    L.marker([3.5965928975944026, 98.74615396948377]).bindPopup("Halte Simpang Bandar Setia"),
    L.marker([3.596778624772526, 98.74378031418847]).bindPopup("Halte KUA Percut Sei Tuan"),
    L.marker([3.596933020517926, 98.73871066824768]).bindPopup("Halte SPBU"),
    L.marker([3.59701494255353, 98.73372081539962]).bindPopup("Halte Pejuang Letda Sujono"),
    L.marker([3.5973309506882973, 98.72718603026252]).bindPopup("Halte Sei Padang"),
    L.marker([3.5973447766363016, 98.72187724649963]).bindPopup("Halte SMA Budi Satrya"),
    L.marker([3.597468918360871, 98.71785802285255]).bindPopup("Halte Bersama"),
    L.marker([3.597698328246219, 98.71119958830876]).bindPopup("Halte Simpang Mandala Bypass"),
    L.marker([3.597376565106082, 98.70650686998705]).bindPopup("Halte Simpang Aksara"),
    L.marker([3.59421923680864, 98.70639523435959]).bindPopup("Halte Simpang Sejati"),
    L.marker([3.5894351561172066, 98.70597063388522]).bindPopup("Halte Simpang Wahidin"),
    L.marker([3.588369675236282, 98.69929485919108]).bindPopup("Halte Kasimura"),
    L.marker([3.5874994075686195, 98.69338271517582]).bindPopup("Halte SMA 18"),
    L.marker([3.582392030209976, 98.68453718133465]).bindPopup("Halte Pandu"),
    L.marker([3.59265604366217, 98.67909228133468]).bindPopup("Halte Lapangan Merdeka"),
    L.marker([3.5917133888848665, 98.67701933569325]).bindPopup("Halte Grand Inna"),
    L.marker([3.5973041207646244, 98.67877738352989]).bindPopup("Halte Gaharu"),
    L.marker([3.5987876885839998, 98.68212345073148]).bindPopup("Halte Taman Budaya"),
    L.marker([3.5975457400544326, 98.72245522762394]).bindPopup("Halte Tol Bandar Selamat"),
    L.marker([3.5977204158261102, 98.73626526646927]).bindPopup("Halte Prayatna Medan"),
    
];
halteBus5.forEach(halte => {
    halte.addTo(map);
    halte.on('mouseover', function () { this.openPopup(); });
    halte.on('mouseout', function () { this.closePopup(); });
});

// ==========================
// 🔹 Fungsi untuk Mengontrol Jalur & Halte
// ==========================
function toggleJalur(checkbox, jalur, halte, info) {
    if (checkbox.checked) {
        if (!map.hasLayer(jalur)) {
            jalur.addTo(map);
        }
        halte.forEach(h => {
            if (!map.hasLayer(h)) {
                h.addTo(map);
            }
        });
        document.getElementById("detailJalur").innerHTML = info;
    } else {
        if (map.hasLayer(jalur)) {
            map.removeLayer(jalur);
        }
        halte.forEach(h => {
            if (map.hasLayer(h)) {
                map.removeLayer(h);
            }
        });
        document.getElementById("detailJalur").innerHTML = "Pilih jalur untuk melihat informasi";
    }
}



// Event listener untuk checkbox
document.getElementById("jalur1").addEventListener("change", function() {
    toggleJalur(this, jalurBus1, halteBus1, "🟦 Jalur 1 (Biru) - Lapangan Merdeka → Pajus");
});
document.getElementById("jalur2").addEventListener("change", function() {
    toggleJalur(this, jalurBus2, halteBus2, "🟥 Jalur 2 (Merah) - Lapangan Merdeka → Terminal");
});
document.getElementById("jalur3").addEventListener("change", function() {
    toggleJalur(this, jalurBus3, halteBus3, "🟩 Jalur 3 (Hijau) - Lapangan Merdeka → Gatsu");
});
document.getElementById("jalur4").addEventListener("change", function() {
    toggleJalur(this, jalurBus4, halteBus4, "🟨 Jalur 4 (Kuning) - Lapangan Merdeka → Ringroad");
});
document.getElementById("jalur5").addEventListener("change", function() {
    toggleJalur(this, jalurBus5, halteBus5, "🟪 Jalur 5 (Ungu) - Lapangan Merdeka → Amplas");
});
function cariLokasi() {
    var lokasi = document.getElementById("searchBox").value;

    // Daftar lokasi populer
    var lokasiPopuler = {
        "Lapangan Merdeka": [3.5952, 98.6722],
        "Sun Plaza": [3.5985, 98.6750],
        "Universitas Sumatera Utara": [3.5612, 98.6563],
        "Amplas": [3.6205, 98.6620]
    };

    if (lokasiPopuler[lokasi]) {
        map.setView(lokasiPopuler[lokasi], 15); // Pindah ke lokasi
        L.marker(lokasiPopuler[lokasi]).addTo(map)
            .bindPopup(lokasi).openPopup();
    } else {
        alert("Lokasi tidak ditemukan, coba nama lain!");
    }
}

function tampilkanSemua() {
    document.querySelectorAll("input[type=checkbox]").forEach(cb => {
        if (!cb.checked) {
            cb.checked = true;
            cb.dispatchEvent(new Event("change")); // Memicu perubahan status
        }
    });
}

function sembunyikanSemua() {
    document.querySelectorAll("input[type=checkbox]").forEach(cb => {
        if (cb.checked) {
            cb.checked = false;
            cb.dispatchEvent(new Event("change")); // Memicu perubahan status
        }
    });
}
function tampilkanJalurTerdekat() {
    if (!navigator.geolocation) {
        alert("Geolocation tidak didukung di browser Anda.");
        return;
    }

    navigator.geolocation.getCurrentPosition(position => {
        var userLatLng = [position.coords.latitude, position.coords.longitude];

        // Simpan semua halte dari semua jalur
        var semuaHalte = halteBus1.concat(halteBus2, halteBus3, halteBus4, halteBus5);
        
        var halteTerdekat = null;
        var minDistance = Infinity;

        semuaHalte.forEach(halte => {
            var halteLatLng = halte.getLatLng();
            var distance = map.distance(userLatLng, halteLatLng);

            if (distance < minDistance) {
                minDistance = distance;
                halteTerdekat = halte;
            }
        });

        if (halteTerdekat) {
            map.setView(halteTerdekat.getLatLng(), 15);
            halteTerdekat.openPopup();
        } else {
            alert("Tidak ada halte yang ditemukan!");
        }
    }, error => {
        alert("Gagal mendapatkan lokasi Anda.");
    });
}
var userMarker;
var routeLayer;

function tampilkanRuteKeHalte() {
    if (!navigator.geolocation) {
        alert("Geolocation tidak didukung di browser Anda.");
        return;
    }

    navigator.geolocation.getCurrentPosition(position => {
        var userLatLng = [position.coords.latitude, position.coords.longitude];

        // Simpan semua halte dari semua jalur
        var semuaHalte = halteBus1.concat(halteBus2, halteBus3, halteBus4, halteBus5);
        
        var halteTerdekat = null;
        var minDistance = Infinity;

        semuaHalte.forEach(halte => {
            var halteLatLng = halte.getLatLng();
            var distance = map.distance(userLatLng, halteLatLng);

            if (distance < minDistance) {
                minDistance = distance;
                halteTerdekat = halte;
            }
        });

        if (halteTerdekat) {
            var halteLatLng = halteTerdekat.getLatLng();

            // Hapus rute sebelumnya jika ada
            if (routeLayer) {
                map.removeLayer(routeLayer);
            }

            // Tampilkan marker lokasi pengguna
            if (userMarker) {
                map.removeLayer(userMarker);
            }
            userMarker = L.marker(userLatLng, { icon: L.icon({
                iconUrl: 'https://cdn-icons-png.flaticon.com/512/25/25694.png', // Ikon pengguna
                iconSize: [30, 30]
            }) }).addTo(map).bindPopup("Lokasi Anda").openPopup();

            // Gambarkan rute dari lokasi pengguna ke halte terdekat
            routeLayer = L.polyline([userLatLng, halteLatLng], { color: 'blue', weight: 4, dashArray: '5, 10' }).addTo(map);
            map.fitBounds([userLatLng, halteLatLng]);

            halteTerdekat.openPopup();
        } else {
            alert("Tidak ada halte yang ditemukan!");
        }
    }, error => {
        alert("Gagal mendapatkan lokasi Anda.");
    });
}
function cariHalte() {
    var input = document.getElementById("searchHalte").value.toLowerCase();
    var hasilList = document.getElementById("hasilPencarian");
    hasilList.innerHTML = ""; // Kosongkan hasil sebelumnya

    var semuaHalte = [
        { nama: "Lapangan Merdeka", latLng: [3.5952, 98.6722] },
        { nama: "Halte Kesawan", latLng: [3.5913, 98.6782] },
        { nama: "Halte Pajus", latLng: [3.6024, 98.6801] }
        // Tambahkan semua halte lain di sini
    ];

    var hasil = semuaHalte.filter(h => h.nama.toLowerCase().includes(input));

    hasil.forEach(h => {
        var li = document.createElement("li");
        li.innerText = h.nama;
        li.style.cursor = "pointer";
        li.onclick = function() {
            map.setView(h.latLng, 15);
            L.popup().setLatLng(h.latLng).setContent(h.nama).openOn(map);
        };
        hasilList.appendChild(li);
    });

    if (input === "") {
        hasilList.innerHTML = "";
    }
}
// Tambahkan jalur ke peta saat pertama kali dimuat
jalurBus1.addTo(map);
jalurBus2.addTo(map);
jalurBus3.addTo(map);
jalurBus4.addTo(map);
jalurBus5.addTo(map);

// Tambahkan halte ke peta
halteBus1.forEach(h => h.addTo(map));
halteBus2.forEach(h => h.addTo(map));
halteBus3.forEach(h => h.addTo(map));
halteBus4.forEach(h => h.addTo(map));
halteBus5.forEach(h => h.addTo(map));
