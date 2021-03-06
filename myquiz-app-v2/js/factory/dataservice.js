(function(){
    angular.module("quizApp").factory("DataService", DataFactory);

    function DataFactory($http){
        var vm = this;
        
        var dataObj = {
            quizQuestions : quizQuestions,
            correctAnswers : correctAnswers,
            quizData : getInfoData
        }
        

        function getInfoData() {
            return $http.get("js/factory/infodata.json");
        }


        
        return dataObj;
        /*
        

        $http.get("js/factory/infodata.json").then(function(data) {
            dataObj.quizData = data;
            console.log("file found");
        }, function(errorResponse) {
            console.log('error', errorResponse);
        });
        
        

        function getQuestionData(){
            $http.get("js/factory/questiondata.json").then(function(response) {
                quizQuestions = response.data;
                console.log("file found");
            }, function(response) {
                quizQuestions = response.status;
                
            });
            return quizQuestions;
        }
        function getAnswerData(){
            $http.get("js/factory/correctanswer.json").then(function(response) {
                correctAnswers = response.data;
                console.log("file found");
            }, function(response) {
                correctAnswers = response.status;
            });
            return correctAnswers;
        }
        */
    };
    var correctAnswers = [0, 1, 0, 2, 0, 3, 0, 1, 1];
    var quizQuestions  = [
        {
            type: "text",
            text: "Partile componente a oricarui calculator sunt: ",
            possibilities: [
                {
                    answer: "Hardware si Software"
                },
                {
                    answer: "Hardware"
                },
                {
                    answer: "Software"
                },
                {
                    answer: "Mouse-ul"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Care din urmatoarele constituie o componenta periferica ?",
            possibilities: [
                {
                    answer: "Placa de baza"
                },
                {
                    answer: "Monitor"
                },
                {
                    answer: "Placa video"
                },
                {
                    answer: "Editor de text"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Care este avantajul unui calculator laptop fata de un calculator stationar ?",
            possibilities: [
                {
                    answer: "Portabilitate"
                },
                {
                    answer: "Nu are avantaje"
                },
                {
                    answer: "Puterea de calcul"
                },
                {
                    answer: "Frumusetea"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "image",
            text: "Care din imaginele urmatoare reprezinta un Procesor(CPU) ?",
            possibilities: [
                {
                    answer: "data/motherboard.jpeg"
                },
                {
                    answer: "data/desktop-computer.jpeg"
                },
                {
                    answer: "data/cpu.processor-1.jpeg"
                },
                {
                    answer: "data/laptop-computer.jpeg"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Pe o unitate de stocare(Hard disk) datele sunt: ",
            possibilities: [
                {
                    answer: "Stocat pe termen lung"
                },
                {
                    answer: "Stocate pe termen scurt"
                },
                {
                    answer: "Pierdute daca deconectam calculatorul"
                },
                {
                    answer: "Salvate in procesor"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Unitatea de alimentare (PSU) unui calculator are sarcina: ",
            possibilities: [
                {
                    answer: "De a converti puterea de la priza la puterea necesara de lucru al procesorului"
                },
                {
                    answer: "Sa lucreze"
                },
                {
                    answer: "Sa proceseze informatia"
                },
                {
                    answer: "De a converti puterii de la priza la puterea necesara de lucru al fiecarei componente al calculatorului"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Care din urmatoarele variante de raspuns reprezinta o componenta de tip 'software' al unui calculator: ",
            possibilities: [
                {
                    answer: "Browser Web (navigator internet)"
                },
                {
                    answer: "Monitor"
                },
                {
                    answer: "Printer"
                },
                {
                    answer: "Camera Web"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "image",
            text: "Care componenta din imaginele indicare are sarcina de a stoca informatia pe termen scurt ?",
            possibilities: [
                {
                    answer: "data/hard-drive.jpeg"
                },
                {
                    answer: "data/ram.jpeg"
                },
                {
                    answer: "data/psu.jpeg"
                },
                {
                    answer: "data/cpu.processor-1.jpeg"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Daca nu am nici un card de expansiune instalat pe placa de baza atunci: ",
            possibilities: [
                {
                    answer: "Este necesar sa cumpar deoarece calculatorul nu va functiona corect"
                },
                {
                    answer: "Nu ma alarmez deoarece majoritatea pl??cilor de baz?? au func??ii video, sunet, re??ea ??i alte func??ii ??ncorporate."
                },
                {
                    answer: "Nustiu ce sa fac"
                },
                {
                    answer: "Trebuie sa ma adresez la serviciul de raparatie al calculatoarelor"
                }
            ],
            selected: null,
            correct: null
        }
    ];
    
    var quizData = [
        {
            type: "Un 'Calculator personal'",
            image_url: "data/personal-computer.jpg",
            description: "Un calculator personal, sau simplu numit calculator, este un dispozitiv electronic care manipuleaz?? informa??ii sau date. Are capacitatea de a stoca, prelua ??i prelucra date. Este posibil s?? ??ti??i deja c?? pute??i utiliza un computer pentru a introduce documente, a trimite e-mailuri, a juca jocuri ??i a naviga pe web. De asemenea, ??l pute??i utiliza pentru a edita sau crea foi de calcul, prezent??ri ??i chiar videoclipuri."
        },
        {
            type: "Hardware si software",
            image_url: "data/hardware-vs-software.jpg",
            description: "??nainte de a vorbi despre diferite tipuri de computere, s?? vorbim despre dou?? lucruri pe care toate computerele le au ??n comun: hardware ??i software. Hardware-ul este orice parte a computerului care are o structur?? fizic??, cum ar fi tastatura sau mouse-ul. De asemenea, include toate p??r??ile interne ale computerului. Software-ul este orice set de instruc??iuni care spune hardware-ului ce trebuie s?? fac?? ??i cum s?? o fac??. Exemple de software includ browsere web, jocuri ??i procesoare de text. Tot ceea ce face??i pe computerul dvs. se va baza at??t pe hardware, c??t ??i pe software. De exemplu, chiar acum vedeti aceast?? lec??ie ??ntr-un browser web (software) ??i utiliza??i mouse-ul (hardware) pentru a face clic de la pagin?? la pagin??."
        },
        {
            type: "Componente perferice",
            image_url: "data/componente-periferice.jpeg",
            description: "Cele mai obisnuite componente periferice unui calculator includ de obicei monitorul, tastatura ??i mouse-ul, dar pute??i conecta mai multe tipuri de dispozitive ??n porturile suplimentare al calculatorului, cum ar fi un printer, casti, boxe de sunet, microfon, camera video si multe alte componente. "
        },
        {
            type: "Computer Stationar(Desktop)",
            image_url: "data/desktop-computer.jpeg",
            description: "Mul??i oameni folosesc computere desktop la serviciu, acas?? ??i la ??coal??. Computerele desktop sunt proiectate pentru a fi a??ezate pe un birou ??i sunt formate de obicei din c??teva p??r??i diferite, inclusiv carcasa computerului, monitorul, tastatura ??i mouse-ul."
        },
        {
            type: "Computer Laptop",
            image_url: "data/laptop-computer.jpeg",
            description: "Laptopurile sunt concepute pentru portabilitate, exist?? unele diferen??e importante ??ntre acestea ??i computerele desktop. Un laptop are un design all-in-one, cu un monitor ??ncorporat, tastatur??, touchpad (care ??nlocuie??te mouse-ul) ??i difuzoare. Aceasta ??nseamn?? c?? este complet func??ional, chiar ??i atunci c??nd nu sunt conectate periferice. Un laptop este, de asemenea, mai rapid de configurat ??i exist?? mai pu??ine cabluri de ??mpiedicat. "
        },
        {
            type: "Computer Tableta",
            image_url: "data/tablet-computer.jpg",
            description: "Tablet PC-sau tablete, sunt computere portabile, care sunt chiar mai portabil dec??t laptop-uri. ??n loc de tastatur?? ??i mouse, tabletele folosesc un ecran sensibil la atingere pentru tastare ??i navigare. IPad-ul este un exemplu de tablet??."
        },
        {
            type: "Placa de baza",
            image_url: "data/motherboard.jpeg",
            description: "Placa de baza - este placa de circuit principal?? a computerului. Este o plac?? sub??ire care con??ine CPU, memorie, conectori pentru hard disk ??i unit????i optice, carduri de expansiune pentru controlul video ??i audio ??i conexiuni la porturile computerului (cum ar fi porturile USB). Placa de baz?? se conecteaz?? direct sau indirect la fiecare parte a computerului."
        },
        {
            type: "CPU/procesor",
            image_url: "data/cpu.processor-1.jpeg",
            description: "Unitatea central?? de procesare (CPU), numit?? ??i procesor, se afl?? ??n interiorul carcasei computerului de pe placa de baz??. Uneori se nume??te creierul computerului, iar sarcina sa este s?? execute comenzi. Ori de c??te ori ap??sa??i o tast??, face??i clic pe mouse sau porni??i o aplica??ie, trimite??i instruc??iuni c??tre CPU. Viteza unui procesor este m??surat?? ??n megahertz (MHz) sau ??n milioane de instruc??iuni pe secund??; ??i gigahertz (GHz), sau miliarde de instruc??iuni pe secund??. Un procesor mai rapid poate executa instruc??iuni mai rapid. Cu toate acestea, viteza real?? a computerului depinde de viteza multor componente diferite - nu doar a procesorului."
        },
        {
            type: "RAM (memoria cu acces aleatoriu)",
            image_url: "data/ram.jpeg",
            description: "RAM, sau memoria cu acces aleatoriu, este memoria pe termen scurt a sistemului dvs. Ori de c??te ori computerul efectueaz?? calcule, acesta stocheaz?? temporar datele ??n memoria RAM p??n?? c??nd sunt necesare. Aceast?? memorie pe termen scurt dispare c??nd computerul este oprit. Dac?? lucra??i la un document, foaie de calcul sau alt tip de fi??ier, va trebui s?? ??l salva??i pentru a nu-l pierde. C??nd salva??i un fi??ier, datele sunt scrise pe hard disk, care ac??ioneaz?? ca stocare pe termen lung."
        },
        {
            type: "Unitate de stocare",
            image_url: "data/hard-drive.jpeg",
            description: "Unitatea de stocare (Hard disk-ul) - este locul unde sunt stocate software-ul, documentele ??i alte fi??iere. Hard diskul este stocat pe termen lung, ceea ce ??nseamn?? c?? datele sunt ??nc?? salvate chiar dac?? opri??i computerul sau ??l deconecta??i."
        },
        {
            type: "Unitatea de alimentare",
            image_url: "data/psu.jpeg",
            description: "Unitatea de alimentare (PSU) - a unui computer converte??te puterea de la priza de perete la tipul de alimentare necesar computerului. Trimite energie prin cabluri c??tre placa de baz?? ??i alte componente."
        },
        {
            type: "Carduri de expansiune",
            image_url: "data/expansion-card.jpeg",
            description: "Majoritatea computerelor au sloturi de expansiune pe placa de baz??, care v?? permit s?? ad??uga??i diferite tipuri de carduri de expansiune. Acestea sunt uneori numite pl??ci PCI (interconectare component?? periferic??). Este posibil s?? nu fie nevoie s?? ad??uga??i niciodat?? pl??ci PCI, deoarece majoritatea pl??cilor de baz?? au func??ii video, sunet, re??ea ??i alte func??ii ??ncorporate."
        },
        {
            type: "Pl??c?? video",
            image_url: "data/video-card.jpeg",
            description: "Placa video este responsabil?? pentru ceea ce vede??i pe monitor. Majoritatea computerelor au un GPU (unitate de procesare grafic??) ??ncorporat?? ??n placa de baz?? ??n loc s?? aib?? o plac?? video separat??. Dac?? v?? place s?? juca??i jocuri cu intensitate grafic??, pute??i ad??uga o plac?? video mai rapid?? la unul dintre sloturile de expansiune pentru a ob??ine performan??e mai bune."
        },
        {
            type: "Placa de sunet",
            image_url: "data/sound-card.jpeg",
            description: "Placa de sunet - numit?? ??i plac?? audio - este responsabil?? pentru ceea ce auzi??i ??n difuzoare sau c????ti. Majoritatea pl??cilor de baz?? au sunet integrat, dar pute??i face upgrade la o plac?? de sunet dedicat?? pentru un sunet de calitate superioar??. Placa de sunet - numit?? ??i plac?? audio - este responsabil?? pentru ceea ce auzi??i ??n difuzoare sau c????ti. Majoritatea pl??cilor de baz?? au sunet integrat, dar pute??i face upgrade la o plac?? de sunet dedicat?? pentru un sunet de calitate superioar??."
        },
        {
            type: "Placa de retea",
            image_url: "data/network-card2.jpeg",
            description: "Placa de re??ea permite computerului s?? comunice printr-o re??ea ??i s?? acceseze internetul. Se poate conecta fie printr-un cablu Ethernet, fie printr-o conexiune wireless (denumit?? adesea Wi-Fi). Multe pl??ci de baz?? au conexiuni de re??ea ??ncorporate, iar o plac?? de re??ea poate fi ad??ugat?? la un slot de expansiune."
        },
        {
            type: "Adapter bluetooth",
            image_url: "data/bluetooth-card.jpeg",
            description: "Bluetooth este o tehnologie pentru comunica??ii f??r?? fir pe distan??e scurte. Este adesea folosit ??n computere pentru a comunica cu tastaturi f??r?? fir, ??oareci ??i imprimante. Este ??ncorporat ??n mod obi??nuit ??n placa de baz?? sau inclus ??ntr-o plac?? de re??ea f??r?? fir. Pentru computerele care nu au Bluetooth, pute??i achizi??iona un adaptor USB, numit adesea dongle."
        }
        
    ];
})();