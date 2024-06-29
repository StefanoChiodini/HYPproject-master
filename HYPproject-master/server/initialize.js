// npm run dev
export default async (models) => {

// node api.js
// let initialize = async function (models){    

    const serviceList = [
        {
            serviceTypeId: 1,
            serviceTypeName: "LloydsFarmacia Centrale 24H",
            serviceTypeImage: "https://i.imgur.com/4VcM17Lm.jpg",
            serviceTypeDescription: "Questa farmacia offre anche controllo pressione e peso, test intolleranze, Covid-19 Test e altro.",
            serviceTypeAddress: "Piazza Maggiore, 6",
            serviceTypeTime: "Tutti i giorni, 24H",
            serviceTypePhone: "051 239690"
        },
        {
            serviceTypeId: 2,
            serviceTypeName: "Biblioteca Salaborsa",
            serviceTypeImage: "https://i.imgur.com/M1gih9mm.jpg",
            serviceTypeDescription: "Salaborsa è la biblioteca civica multimediale di informazione generale di Bologna. In biblioteca sono disponibili libri, giornali, riviste, mappe, video e molto altro.",
            serviceTypeAddress: "Piazza del Nettuno, 3",
            serviceTypeTime: "10.00 - 19.00",
            serviceTypePhone: "051 2194400"
        },
        {
            serviceTypeId: 3,
            serviceTypeName: "Stazione Ecologica di Bologna CAAB",
            serviceTypeImage: "https://i.imgur.com/kafCLlWm.jpg",
            serviceTypeDescription: "I rifiuti vanno consegnati con mezzi propri e già divisi per tipo. Il servizio è gratuito e i cittadini residenti a Bologna possono portare una quantità illimitata di materiali.",
            serviceTypeAddress: "Via delle Vitti, 11",
            serviceTypeTime: "08.00 - 19.00",
            serviceTypePhone: "800 999500"
        },
        {
            serviceTypeId: 4,
            serviceTypeName: "Stazione di Bologna Centrale",
            serviceTypeImage: "https://i.imgur.com/CqLOeWOm.jpg",
            serviceTypeDescription: "La stazione di Bologna Centrale è la principale stazione ferroviaria della città di Bologna. Stazione con servizio di assistenza alle persone con disabilità e a ridotta mobilità.",
            serviceTypeAddress: "Piazza delle Medaglie d'Oro",
            serviceTypeTime: "",
            serviceTypePhone: ""
        },
        {
            serviceTypeId: 5,
            serviceTypeName: "Carrefour Express",
            serviceTypeImage: "https://i.imgur.com/Ai70B8vm.jpg",
            serviceTypeDescription: "Supermercato in grado di soddisfare le esigenze di spesa giornaliera, con una vasta offerta dai prodotti freschi da quelli a marchio commerciale, alle marche leader.",
            serviceTypeAddress: "Più negozi in centro città",
            serviceTypeTime: "08.00 - 21.00"
        },
        {
            serviceTypeId: 6,
            serviceTypeName: "Parcheggio RIVA",
            serviceTypeImage: "https://i.imgur.com/37m9h4cm.jpg",
            serviceTypeDescription: "Comodo parcheggio in pieno centro a Bologna, aperto tutte le ore del giorno.",
            serviceTypeAddress: "Via Rondone, 2",
            serviceTypeTime: "Tutti i giorni, 24H",
            serviceTypePhone: "051 4222114"
        },
        {
            serviceTypeId: 7,
            serviceTypeName: "Scuola Elementare Manzolini",
            serviceTypeImage: "https://i.imgur.com/hsVtx6wm.png",
            serviceTypeDescription: "Scuola primaria situata al centro di Bologna, nei pressi di trasporti pubblici. Offre attivita' pre e post-scolastiche, mensa ed è dotata di aule multimediali.",
            serviceTypeAddress: "Via Sant'Isaia, 16",
            serviceTypeTime: "",
            serviceTypePhone: "051 333301"
        },
        {
            serviceTypeId: 8,
            serviceTypeName: "Poste Italiane",
            serviceTypeImage: "https://i.imgur.com/Ud9NDjkm.jpg",
            serviceTypeDescription: "Poste Italiane S.p.A. è un'azienda italiana che si occupa di servizi postali, bancari, finanziari e di telecomunicazione, di telematica pubblica, di operazioni di riscossione e pagamento e di raccolta del risparmio postale.",
            serviceTypeAddress: "Varie filiali in centro città",
            serviceTypeTime: "08.20 - 19.00"
        },
        {
            serviceTypeId: 9,
            serviceTypeName: "Ospedale Sant’Orsola",
            serviceTypeImage: "https://i.imgur.com/gSc3Ylim.jpg",
            serviceTypeDescription: "L'IRCCS Policlinico di Sant'Orsola si conferma sul podio degli ospedali italiani.",
            serviceTypeAddress: "Via Giuseppe Massarenti, 13",
            serviceTypeTime: "Tutti i giorni, 24H",
            serviceTypePhone: "051 2141111"
        },
        {
            serviceTypeId: 10,
            serviceTypeName: "Teatro Comunale di Bologna",
            serviceTypeImage: "https://i.imgur.com/dbGjNzhm.jpg",
            serviceTypeDescription: "Opera lirica, balletto e concerti di musica classica in un maestoso teatro barocco del 1763.",
            serviceTypeAddress: "Largo Respighi, 1",
            serviceTypeTime: "12.00 - 18.00 (Call Center)",
            serviceTypePhone: "051 529019"
        }
    ]    
    await models.ServiceType.bulkCreate(serviceList)

    const eventList = [
        {
            eventId: 1,
            pointOfInterestId: 3,
            eventName: "Concerto per l'Ucraina, grandi ospiti sul palco",
            eventImage: "https://i.imgur.com/3bp6KT8m.jpg",
            eventDate: "10 luglio 2022, 21:00",
            eventAddress: "Piazza Maggiore",
            eventDescription:`Un grande evento a ingresso gratuito per raccogliere fondi a sostegno di Save the Children, l’organizzazione che da oltre 100 anni lotta per salvare le bambine e i bambini a rischio e garantire loro un futuro, per aiutare i bambini che stanno subendo le terribili conseguenze del conflitto in Ucraina.             `,
            eventSeasonFilter:0,
        },
        {
            // ``
            eventId:2,
            pointOfInterestId:14,
            eventName: "Technology Week, l'evoluzione tecnologica.",
            eventImage:"https://i.imgur.com/xgA4lUWm.jpg",
            eventDate:"Dal 10 al 20 luglio 2022",
            eventAddress:`Palazzo Fava (Palazzo delle Esposizioni),
            Via Manzoni, 2`,
            eventDescription:"Scopri come la tecnologia si è evoluta nel tempo. Un viaggio tra passato e futuro, storia ed innovazione all'interno del celebre Palazzo Fava. Durante la settimana saranno organizzati numerosi workshop e altre attività sia per adulti che per bambini. Non perderti l'occasione di stare al passo con l'innovazione.",
            eventSeasonFilter:0,
        },
        {
            // ``
            eventId: 3,
            pointOfInterestId: 3,
            eventName: `Unicef, 'Giornata mondiale del gioco'`,
            eventImage: "https://i.imgur.com/0JtK4D0m.jpg",
            eventDate: "25 agosto 2022, 15:00",
            eventAddress:"Piazza Maggiore",
            eventDescription:`Nell’ambito della Giornata Mondiale del gioco, si terrà una festa in piazza Maggiore, a cui parteciperanno le scuole di Bologna, per festeggiare il diritto fondamentale al gioco Unicef, il comune di Bologna e Cinnica insieme a moltissime associazioni organizzano canti, giochi, spettacolo di burattini, visita didattica di Bologna e altre attività.`,
            eventSeasonFilter:0,
        },
        {
            eventId: 4,
            pointOfInterestId: 1,
            eventName: "La sagra del fritto",
            eventImage:"https://i.imgur.com/6HmyOnsm.jpg",
            eventDate:"15 agosto 2022, 11:00 - 03:00",
            eventAddress:"Piazza di Porta Ravegnana",
            eventDescription:`La sagra del fritto arriva a Bologna. Goditi tutte le specialità offerte, a partire dal fritto di pesce e molto altro. La serata si conclude con uno spettacolo pirotecnico direttamente sotto le Due Torri di Bologna.`,
            eventSeasonFilter:0,
        },
        {
            eventId: 5,
            pointOfInterestId: 3,
            eventName:`Proiezione film "The Blues Brothers"`,
            eventImage:"https://i.imgur.com/icnidylm.png",
            eventDate: "31 agosto 2022, 20:45",
            eventAddress:"Piazza Maggiore",
            eventDescription:`Il grandissimo regista John Landis sarà a Bologna per presentare un grande capolavoro, il suo The Blues Brothers (USA/1980 Regia di John Landis. durata 148’. Versione in inglese): appuntamento nella nostra bellissima Piazza Maggiore dove la pellicola verrà proiettata sul maxi schermo del Cinema Ritrovato.`,
            eventSeasonFilter:0,
        },
        {
            eventId: 6,
            pointOfInterestId: 8,
            eventName:`Il nuovo libro di Alessandro D'Avenia`,
            eventImage:"https://i.imgur.com/N9DARx7m.jpg",
            eventDate:"8 dicembre 2022, 18:00",
            eventAddress:`Biblioteca comunale dell'Archiginnasio,
            Piazza Galvani, 1`,
            eventDescription:`I suoi romanzi sono tradotti in più di venti paesi e ha ricevuto il Premio Internazionale padre Pino Puglisi per «l’impegno mostrato a favore dei giovani». Alessandro D'Avenia sarà ospite di Bologna per la presentazione del suo nuovo libro 'A picco sul mare', già best seller su tutte le piattaforme a poche settimane dall'uscita.`,
            eventSeasonFilter:1,
        },
        {
            eventId:7,
            pointOfInterestId: 11,
            eventName:"Santa Messa di Natale",
            eventImage:"https://i.imgur.com/wCQce6um.jpg",
            eventDate:"25 dicembre 2022, 23:00",
            eventAddress:`Chiesa di Santa Maria della Vita,
            Via Clavature, 10`,
            eventDescription:`'Non temete, ecco vi annunzio una grande gioia, che sarà di tutto il popolo: oggi vi è nato nella città di Davide un salvatore, che è il Cristo Signore. Questo per voi il segno: troverete un bambino avvolto in fasce, che giace in una mangiatoia'.`,
            eventSeasonFilter:1,
        },
        {
            eventId:8,
            pointOfInterestId: 10,
            eventName:"Palazzo del Podestà apre al pubblico",
            eventImage:"https://i.imgur.com/E23oc1vm.jpg",
            eventDate:"7 gennaio 2023, 10:00",
            eventAddress:`Palazzo del Podestà,
            Piazza Maggiore, 1`,
            eventDescription:"Non perderti la visita guidata di quella che fu la prima sede del governo cittadino. Scopri la storia e i segreti di questo Palazzo grazie ad una guida disponibile ed esperta. La visita è gratuita ed aperta a tutti.",
            eventSeasonFilter:1,
        },
        {
            eventId:9,
            pointOfInterestId: 5,
            eventName:"Rotaract Club: raccolta fondi",
            eventImage:"https://i.imgur.com/QsxU1IDm.jpg",
            eventDate:"10 gennaio 2023, 18:00",
            eventAddress:`Fontana del Nettuno,
            Piazza del Nettuno`,
            eventDescription:"Il distretto Rotaract Bologna organizza un aperitivo tra ragazzi per la raccolta fondi per una borsa di studio. Segnala la tua partecipazione al 333 3435363 e trascorri un pomeriggio in compagnia.",
            eventSeasonFilter:1,
        },
        {
            eventId:10,
            pointOfInterestId: 9,
            eventName: "Tour guidato Basilica di San Domenico",
            eventImage:"https://i.imgur.com/CZk0Ox8m.png",
            eventDate:"1 febbraio 2023, 14:30",
            eventAddress:`Basilica di San Domenico,
            Piazza San Domenico, 13`,
            eventDescription:"Visita guidata su prenotazione di una delle chiese bolognesi più ricche di storie dell'arte. Ogni opera verrà spiegata e analizzata nel dettaglio. Per ulteriori informazioni o per prenotazioni contattare il numero verde 800 1056289.",
            eventSeasonFilter:1,
        },
    ]
    await models.Event.bulkCreate(eventList)

    const poiList = [
        {
            pointOfInterestId: 1,
            pointOfInterestName: "Le Due Torri (degli Asinelli e Garisenda)",
            pointOfInterestImage: "https://i.imgur.com/WLyMSqJl.jpg",
            pointOfInterestMap: "https://i.imgur.com/BJRxqHz.jpg",
            pointOfInterestAddress: `Piazza di Porta Ravegnana`,
            pointOfInterestDescription: `Le Due Torri di Bologna sono unanimemente considerate il simbolo della città felsinea.
            Torre degli Asinelli fu costruita nel XII secolo (tra il 1109 e il 1119) dalla famiglia degli Asinelli e già a partire dal XIII secolo divenne proprietà del Comune di Bologna. È alta ben 97,2 metri ed ha una pendenza di 1,3°.
            Torre Garisenda fu costruita nello stesso periodo. È alta 47 metri, circa la metà di Torre degli Asinelli ma ha una pendenza decisamente maggiore (4°, più della Torre di Pisa) che l’ha resa una delle torri pendenti più famose al mondo.`,
            pointOfInterestTime: `Tutti i giorni.
            Quattro ingressi all'ora (primo ingresso ore 10:00, ultimo ore 18:15).`
        },
        {
            pointOfInterestId: 2,
            pointOfInterestName: "Basilica di San Petronio",
            pointOfInterestImage: "https://i.imgur.com/rbxR0Cml.jpg",
            pointOfInterestMap: "https://i.imgur.com/hIsMm0B.jpg",
            pointOfInterestAddress: `Piazza Galvani, 5`,
            pointOfInterestDescription: `La Basilica di San Petronio, dedicata al patrono cittadino, sorge in Piazza Maggiore ed è la più grande e importante chiesa bolognese.
            La costruzione fu iniziata nel 1390 sotto la direzione di Antonio di Vincenzo. 
            L’interno del tempio, costruito in epoche diverse, è diviso in tre navate su cui si aprono ventidue cappelle decorate da artisti tra cui Francesco Francia, Lorenzo Costa, Parmigianino, Donato Creti.`,
            pointOfInterestTime: `Tutti i giorni dalle 8:30 alle 13:30 e dalle 15:00 alle 18:30
            Natale 7:45-13:00; 15:00 -19:00`
        },
        {
            pointOfInterestId: 3,
            pointOfInterestName: "Piazza Maggiore",
            pointOfInterestImage: "https://i.imgur.com/A3uykpJl.jpg",
            pointOfInterestMap: "https://i.imgur.com/OfbzqU6.jpg",
            pointOfInterestAddress: `Piazza Maggiore`,
            pointOfInterestDescription: `Cuore della città, Piazza Maggiore è il risultato di secolari trasformazioni che la arricchirono via via di importanti edifici: la Basilica di San Petronio, il Palazzo dei Notai, il Palazzo d’Accursio, il Palazzo del Podestà e il Palazzo dei Banchi.
            Risale al 1200, quando il Comune iniziò ad acquisire case e terreni per costruire una piazza che da un lato avrebbe dovuto rappresentare l'importanza dell'istituzione comunale e dall'altro riunire le varie attività cittadine (scambi, commerci e servizi di vario genere). `,
            pointOfInterestTime: `Tutti i giorni dalle 7:00 alle 18:30`
        },
        {
            pointOfInterestId: 4,
            pointOfInterestName: "Santuario di San Luca",
            pointOfInterestImage: "https://i.imgur.com/Fy32mkgl.jpg",
            pointOfInterestMap: "https://i.imgur.com/DfaCs9P.jpg",
            pointOfInterestAddress: `Via di San Luca, 36`,
            pointOfInterestDescription: `Il Santuario di San Luca, che sorge sul Colle della Guardia, è da secoli simbolo di Bologna oltre che oggetto di culto religioso. È collegato al centro città da una strada che, a partire da Porta Saragozza, si snoda per quattro chilometri in un porticato che, con le sue oltre 600 arcate, è il più lungo al mondo e, con gli altri portici della città, recentemente nominato Patrimonio Mondiale UNESCO. `,
            pointOfInterestTime: `Sempre visitabile`
        },
        {
            pointOfInterestId: 5,
            pointOfInterestName: "Fontana del Nettuno",
            pointOfInterestImage: "https://i.imgur.com/nQo3Zyel.jpg",
            pointOfInterestMap: "https://i.imgur.com/iJ6r0DX.jpg",
            pointOfInterestAddress: `Piazza del Nettuno`,
            pointOfInterestDescription: `La fontana del Nettuno, definita dal critico d'arte Giulio Carlo Argan un «soprammobile da piazza», poggia su una base di tre gradini, al di sopra dei quali è collocata una vasca in macigno locale ricoperto da marmo di Verona. Al centro della vasca troviamo uno zoccolo fiancheggiato alla base da quattro nereidi che si sorreggono i seni, e decorato con emblemi pontifici, ornamenti di foggia fantastica e con quattro putti che reggono delfini, in riferimento del Gange, del Nilo, del Rio delle Amazzoni e del Danubio e, quindi, delle «quattro parti del mondo», cioè dei continenti allora conosciuti. `,
            pointOfInterestTime: `Sempre visitabile`
        },
        {
            pointOfInterestId: 6,
            pointOfInterestName: "Complesso di Santo Stefano",
            pointOfInterestImage: "https://i.imgur.com/Yc5D13Yl.jpg",
            pointOfInterestMap: "https://i.imgur.com/HNIhdjz.jpg",
            pointOfInterestAddress: `Via Santo Stefano, 24`,
            pointOfInterestDescription: `Quello di Santo Stefano è il complesso più singolare di Bologna, vero santuario cittadino e culla della fede dei padri.È noto soprattutto come “sette chiese” perché composto dall’unione di più edifici sorti in epoche diverse.
            Le origini del complesso sono controverse e discusse. Secondo l’ipotesi più accreditata fu elevato da Petronio sulle rovine di un tempio pagano preesistente, vicino al quale sarebbero state poi affiancate una riproduzione del Santo Sepolcro di Gerusalemme e, accanto al sacello con le spoglie dei protomartiri bolognesi Vitale e Agricola, gli edifici eretti fra il X e il XIII secolo dai Benedettini. `,
            pointOfInterestTime: `Da Martedì a Domenica dalle 9:30 alle 12:30 e dalle 14:30 alle 19:00`
        },
        {
            pointOfInterestId: 7,
            pointOfInterestName: "Palazzo d'Accursio (Palazzo Comunale)",
            pointOfInterestImage: "https://i.imgur.com/3KJAcGBl.jpg",
            pointOfInterestMap: "https://i.imgur.com/Lt5IJB0.jpg",
            pointOfInterestAddress: `Piazza Maggiore, 6`,
            pointOfInterestDescription: `Il Palazzo D’Accursio o Comunale, posto nel centro di Bologna in Piazza Maggiore, è uno dei palazzi più importanti di Bologna, sede dal 1336 del Comune della città.
            Costituito da un insieme di edifici che nel corso dei secoli sono via via stati uniti a un nucleo più antico acquisito dal Comune alla fine del Duecento, comprendeva anche l'abitazione di Accursio, maestro di diritto nello Studio bolognese, da cui prende il nome.  `,
            pointOfInterestTime: `Da Martedì a Giovedì + Sabato e Domenica dalle 10:00 alle 13:00`
        },
        {
            pointOfInterestId: 8,
            pointOfInterestName: "Biblioteca comunale dell'Archiginnasio",
            pointOfInterestImage: "https://i.imgur.com/tw4CEoEl.jpg",
            pointOfInterestMap: "https://i.imgur.com/Rs5lniX.jpg",
            pointOfInterestAddress: `Piazza Galvani, 1`,
            pointOfInterestDescription: `La nascita della Biblioteca Comunale risale al 1801 per opera del Dipartimento del Reno. Questa raccoglieva inizialmente il patrimonio librario delle congregazioni religiose disciolte dai provvedimenti del periodo napoleonico (1797-1798) e dal Regno d'Italia (1866). Ospitata dapprima presso il Convento di San Domenico, venne trasferita nel 1838 nel palazzo dell'Archiginnasio.   `,
            pointOfInterestTime: `Da Lunedì a Venerdì dalle 9:00 alle 18:45 
            Sabato dalle 9:00 alle 13:45`
        },
        {
            pointOfInterestId: 9,
            pointOfInterestName: "Basilica di San Domenico",
            pointOfInterestImage: "https://i.imgur.com/FHNH7PPl.jpg",
            pointOfInterestMap: "https://i.imgur.com/frtl3jZ.jpg",
            pointOfInterestAddress: `Piazza San Domenico, 13`,
            pointOfInterestDescription: `La Basilica di San Domenico è una delle chiese bolognesi più ricche di storia d’arte e fu eretta dai Frati Domenicani come luogo in cui conservare le spoglie di San Domenico di Guzman, fondatore dell’ordine e giunto a Bologna intorno al 1200. All’interno sono conservate inestimabili opere d’arte di autori come Guercino, Filippino Lippi e Ludovico Carracci. `,
            pointOfInterestTime: `Da Lunedì a Venerdì dalle 8:30 alle 12:00 e dalle 15:30 alle 18:00`
        },
        {
            pointOfInterestId: 10,
            pointOfInterestName: "Palazzo del Podestà",
            pointOfInterestImage: "https://i.imgur.com/Bcwy4OZl.jpg",
            pointOfInterestMap: "https://i.imgur.com/DI32A0A.jpg",
            pointOfInterestAddress: `Piazza Maggiore, 1`,
            pointOfInterestDescription: `Palazzo del Podestà, in Piazza Maggiore, fu la prima sede del governo cittadino esercitato dal Podestà, dai suoi giudici e ufficiali. Fu da subito affiancato dalla Torre dell’Arengo, torre campanaria usata per chiamare a raccolta i cittadini in caso di eventi straordinari.
            Molto noto è il Voltone del Podestà, in cui un particolare effetto acustico consente ai visitatori di parlarsi agli angoli opposti del voltone.`,
            pointOfInterestTime: `Visitabile solo in occasione di mostre ed eventi`
        },
        {
            pointOfInterestId: 11,
            pointOfInterestName: "Chiesa di Santa Maria della Vita",
            pointOfInterestImage: "https://i.imgur.com/DJG3ggil.jpg",
            pointOfInterestMap: "https://i.imgur.com/34MJSXe.jpg",
            pointOfInterestAddress: `Via Clavature, 10`,
            pointOfInterestDescription: `Il complesso monumentale di Santa Maria della Vita sorge nel Quadrilatero, cuore pulsante del centro storico di Bologna. All'interno della chiesa in Barocco bolognese, la cui cupola venne disegnata dal Bibiena, è custodito il famoso Compianto sul Cristo Morto di Niccolò dell’Arca, risalente alla seconda metà del Quattrocento e definito “urlo di pietra” da Gabriele D’Annunzio.`,
            pointOfInterestTime: `Da Martedì a Domenica dalle 10:00 alle 19:00
            Ultimo ingresso 1 ora prima della chiusura.`
        },
        {
            pointOfInterestId: 12,
            pointOfInterestName: "Cattedrale Metropolitana di San Pietro",
            pointOfInterestImage: "https://i.imgur.com/RADgJn3l.jpg",
            pointOfInterestMap: "https://i.imgur.com/PtXOoMN.jpg",
            pointOfInterestAddress: `Via Indipendenza, 9`,
            pointOfInterestDescription: `È la cattedrale della città, elevata al titolo di “Metropolitana” nel 1582 da Papa Gregorio XIII che conferì alla diocesi di Bologna la dignità arcivescovile.
            Le prime testimonianze dell’edificio risalgono al X secolo. La cattedrale è stata oggetto di vari cambiamenti nel corso dei secoli. Il suo aspetto attuale risale alla ristrutturazione del 1605 che, tuttavia, ha causato la perdita di ogni traccia del primitivo impianto romano-gotico. L’interno ospita dipinti di artisti come Prospero Fontana, Ludovico Carracci e Donato Creti.`,
            pointOfInterestTime: `Da Lunedi a Domenica dalle 7:00 alle 19:00`
        },
        {
            pointOfInterestId: 13,
            pointOfInterestName: "Palazzo Pepoli (Museo della Storia di Bologna)",
            pointOfInterestImage: "https://i.imgur.com/Cx0SgtPl.jpg",
            pointOfInterestMap: "https://i.imgur.com/4FNitBn.jpg",
            pointOfInterestAddress: `Via Castiglione 8`,
            pointOfInterestDescription: `Palazzo Pepoli è sede di un museo dedicato alla storia, alla cultura e alle trasformazioni di Bologna, dalla Felsina etrusca fino ai nostri giorni.
            La storia della città e dei suoi abitanti è raccontata attraverso una serie di nuclei espositivi costruiti intorno a episodi chiave, personaggi simbolici, aneddoti e temi trasversali, la cui presentazione avviene mediante una combinazione di oggetti, immagini ed elementi multimediali.`,
            pointOfInterestTime: `Da Martedì a Domenica dalle 10:00 alle 19:00`
        },
        {
            pointOfInterestId: 14,
            pointOfInterestName: "Palazzo Fava (Palazzo delle Esposizioni)",
            pointOfInterestImage: "https://i.imgur.com/DRXF4wjl.jpg",
            pointOfInterestMap: "https://i.imgur.com/bHUfi99.jpg",
            pointOfInterestAddress: `Via Manzoni, 2`,
            pointOfInterestDescription: `Inaugurato nel gennaio 2011 dopo il restauro iniziato nel 2007, Palazzo Fava è un palazzo storico di Bologna risalente al Medioevo, oggi trasformato in Palazzo delle Esposizioni.
            Il palazzo, la cui struttura attuale prende forma nel Rinascimento, fu acquistato dall’antica famiglia Fava nel 1546 che affidò la decorazione del piano nobile ai Carracci con i cicli di affreschi delle Storie di Giasone e Medea e delle Storie di Enea. `,
            pointOfInterestTime: `Da Martedì a Domenica dalle 10:00 alle 19:00`
        },
        {
            pointOfInterestId: 15,
            pointOfInterestName: "Chiesa di Santa Maria dei Servi",
            pointOfInterestImage: "https://i.imgur.com/Sju02B4l.jpg",
            pointOfInterestMap: "https://i.imgur.com/0uIGDxK.jpg",
            pointOfInterestAddress: `Strada Maggiore, 43`,
            pointOfInterestDescription: `La Basilica di Santa Maria dei Servi sorge lungo Strada Maggiore e costituisce uno splendido esempio di architettura gotica. Edificata grazie alla volontà di padre Andrea Manfredi da Faenza e mastro Antonio di Vincenzo, che già avevano collaborato per il progetto della Basilica di San Petronio, è preceduta da un arioso quadriportico, la cui costruzione iniziò nel 1393 e terminò tra il XVI e il XIX secolo.`,
            pointOfInterestTime: `Lunedì dalle 8:30 alle 12:00; 
            Da Martedì a Domenica dalle 8:30 alle 12:00 e dalle 16:00 alle 19:00`
        }
    ]
    await models.PointOfInterest.bulkCreate(poiList)

    const itineraryList = [
        {
            itineraryId: 1,
            itineraryName: "Una passeggiata nel centro storico",
            itineraryImage: "https://i.imgur.com/WLyMSqJm.jpg",
            itineraryMap: "https://i.imgur.com/muAuLfKh.png",
            itineraryDescription: "L'itinerario ha inizio da Piazza di Porta Ravegnana, dove si possono osservare le due torri (Garisenda e degli Asinelli). Si prosegue per via Rizzoli per 200 metri e non appena arrivi in Piazza Re Enzo svolta a sinistra, proseguendo per qualche metro ti troverai di fronte alla Basilica di San Pietro. Uscito dalla chiesa ti troverai di fronte il cuore di Bologna, piazza Maggiore. Proseguendo sulla sinistra ti troverai in Piazza del Nettuno dove potrai osservare la splendida fontana del Nettuno.",
            itineraryPath: "1,2,3,7,5", // Sequenza di ID (i.e. 2;9;10;4;5;8;) in ordine di PERCORSO, non di numero.,
            itineraryTime: "7 minuti a piedi (550m)"
        },
        {
            itineraryId: 2,
            itineraryName: "Da Piazza Maggiore al Santuario San Luca",
            itineraryImage: "https://i.imgur.com/Bcwy4OZm.jpg",
            itineraryMap: "https://i.imgur.com/SGyIuhkh.png",
            itineraryDescription: "L'itinerario ha inizio da Piazza Maggiore, dove potrai osservare il Palazzo del Podestà, la prima sede del governo cittadino. Procedendo per Via Clavature e poi Via Santo Stefano giungerai in Piazza Santo Stefano. Di fronte a te troverai il Complesso di Santo Stefano, conosciuto anche come “sette chiese” perché composto dall’unione di più edifici sorti in epoche diverse. Una volta uscito prosegui a sinistra per via dei Pepoli e successivamente via Farini. Giunto a piazza Cavour svolta a sinistra e prosegui per 150 metri. Raggiunta Piazza San Domenico potrai visitare la Basilica di San Domenico, una delle chiese bolognesi più ricche di storia d’arte. Proseguendo su via Urbana arriverai a Porta Saragozza, dove si snoda per quattro chilometri in un porticato che, con le sue oltre 600 arcate, è il più lungo al mondo. Giunto alla fine di questo meraviglioso porticato arriverai al Santuario di San Luca.",
            itineraryPath: "10,1,6,9,4", // Sequenza di ID (i.e. 2;9;10;4;5;8;) in ordine di PERCORSO, non di numero.
            itineraryTime: "1 ora e 22 minuti a piedi (5,8km)"
        },
        {
            itineraryId: 3,
            itineraryName: "Tra chiese e musei",
            itineraryImage: "https://i.imgur.com/DRXF4wjm.jpg",
            itineraryMap: "https://i.imgur.com/doZuKXCh.png",
            itineraryDescription: "L'itinerario ha inizio in via Manzoni, presso Palazzo Fava, un palazzo storico di Bologna risalente al Medioevo, oggi trasformato in Palazzo delle Esposizioni. Proseguendo per via Indipendenza giungerai in Piazza del Nettuno e successivamente in piazza Maggiore, dove potrai visitare la Basilica di San Petronio. Una volta uscito percorri via Clavature, dove troverai il Santuario di Santa Maria della Vita, prosegui ancora per via Clavature fino a giungere alla fine gira a destra su via Castiglione. Proseguendo per 80 metri giungerai a Palazzo Pepoli, sede di un museo dedicato alla storia, alla cultura e alle trasformazioni di Bologna, dalla Felsina etrusca fino ai nostri giorni. Finita la visita torna indietro e gira a destra su via Sampieri e successivamente via Santo Stefano, dove giungerai al Complesso di Santo Stefano, conosciuto anche come “sette chiese” perché composto dall’unione di più edifici sorti in epoche diverse. Prosegui su via Gerusalemme e successivamente svolta a destra e prendi Str. Maggiore, percorrila per 300 metri fino a raggiungere l'ultima tappa di questo itinerario, Basilica Santa Maria dei Servi.",
            itineraryPath: "14,2,13,11,6,15", // Sequenza di ID (i.e. 2;9;10;4;5;8;) in ordine di PERCORSO, non di numero.
            itineraryTime: "23 minuti a piedi (1,8km)"
        },
    ]
    await models.Itinerary.bulkCreate(itineraryList)

    const poi_ItineraryList = [
        {
            itineraryItineraryId:1,
            pointOfInterestPointOfInterestId:1,
        },
        {
            itineraryItineraryId:1,
            pointOfInterestPointOfInterestId:2,
        },
        {
            itineraryItineraryId:1,
            pointOfInterestPointOfInterestId:3,
        },
        {
            itineraryItineraryId:1,
            pointOfInterestPointOfInterestId:7,
        },
        {
            itineraryItineraryId:1,
            pointOfInterestPointOfInterestId:5,
        },
        {
            itineraryItineraryId:2,
            pointOfInterestPointOfInterestId:10,
        },
        {
            itineraryItineraryId:2,
            pointOfInterestPointOfInterestId:1,
        },
        {
            itineraryItineraryId:2,
            pointOfInterestPointOfInterestId:6,
        },
        {
            itineraryItineraryId:2,
            pointOfInterestPointOfInterestId:9,
        },
        {
            itineraryItineraryId:2,
            pointOfInterestPointOfInterestId:4,
        },
        {
            itineraryItineraryId:3,
            pointOfInterestPointOfInterestId:14,
        },
        {
            itineraryItineraryId:3,
            pointOfInterestPointOfInterestId:2,
        },
        {
            itineraryItineraryId:3,
            pointOfInterestPointOfInterestId:13,
        },
        {
            itineraryItineraryId:3,
            pointOfInterestPointOfInterestId:11,
        },
        {
            itineraryItineraryId:3,
            pointOfInterestPointOfInterestId:6,
        },
        {
            itineraryItineraryId:3,
            pointOfInterestPointOfInterestId:15,
        },
    ]
    await models.Poi_Itinerary.bulkCreate(poi_ItineraryList)
}
// node api.js
// module.exports={initialize}
