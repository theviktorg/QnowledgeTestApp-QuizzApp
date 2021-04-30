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
                    answer: "Nu ma alarmez deoarece majoritatea plăcilor de bază au funcții video, sunet, rețea și alte funcții încorporate."
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
            description: "Un calculator personal, sau simplu numit calculator, este un dispozitiv electronic care manipulează informații sau date. Are capacitatea de a stoca, prelua și prelucra date. Este posibil să știți deja că puteți utiliza un computer pentru a introduce documente, a trimite e-mailuri, a juca jocuri și a naviga pe web. De asemenea, îl puteți utiliza pentru a edita sau crea foi de calcul, prezentări și chiar videoclipuri."
        },
        {
            type: "Hardware si software",
            image_url: "data/hardware-vs-software.jpg",
            description: "Înainte de a vorbi despre diferite tipuri de computere, să vorbim despre două lucruri pe care toate computerele le au în comun: hardware și software. Hardware-ul este orice parte a computerului care are o structură fizică, cum ar fi tastatura sau mouse-ul. De asemenea, include toate părțile interne ale computerului. Software-ul este orice set de instrucțiuni care spune hardware-ului ce trebuie să facă și cum să o facă. Exemple de software includ browsere web, jocuri și procesoare de text. Tot ceea ce faceți pe computerul dvs. se va baza atât pe hardware, cât și pe software. De exemplu, chiar acum vedeti această lecție într-un browser web (software) și utilizați mouse-ul (hardware) pentru a face clic de la pagină la pagină."
        },
        {
            type: "Componente perferice",
            image_url: "data/componente-periferice.jpeg",
            description: "Cele mai obisnuite componente periferice unui calculator includ de obicei monitorul, tastatura și mouse-ul, dar puteți conecta mai multe tipuri de dispozitive în porturile suplimentare al calculatorului, cum ar fi un printer, casti, boxe de sunet, microfon, camera video si multe alte componente. "
        },
        {
            type: "Computer Stationar(Desktop)",
            image_url: "data/desktop-computer.jpeg",
            description: "Mulți oameni folosesc computere desktop la serviciu, acasă și la școală. Computerele desktop sunt proiectate pentru a fi așezate pe un birou și sunt formate de obicei din câteva părți diferite, inclusiv carcasa computerului, monitorul, tastatura și mouse-ul."
        },
        {
            type: "Computer Laptop",
            image_url: "data/laptop-computer.jpeg",
            description: "Laptopurile sunt concepute pentru portabilitate, există unele diferențe importante între acestea și computerele desktop. Un laptop are un design all-in-one, cu un monitor încorporat, tastatură, touchpad (care înlocuiește mouse-ul) și difuzoare. Aceasta înseamnă că este complet funcțional, chiar și atunci când nu sunt conectate periferice. Un laptop este, de asemenea, mai rapid de configurat și există mai puține cabluri de împiedicat. "
        },
        {
            type: "Computer Tableta",
            image_url: "data/tablet-computer.jpg",
            description: "Tablet PC-sau tablete, sunt computere portabile, care sunt chiar mai portabil decât laptop-uri. În loc de tastatură și mouse, tabletele folosesc un ecran sensibil la atingere pentru tastare și navigare. IPad-ul este un exemplu de tabletă."
        },
        {
            type: "Placa de baza",
            image_url: "data/motherboard.jpeg",
            description: "Placa de baza - este placa de circuit principală a computerului. Este o placă subțire care conține CPU, memorie, conectori pentru hard disk și unități optice, carduri de expansiune pentru controlul video și audio și conexiuni la porturile computerului (cum ar fi porturile USB). Placa de bază se conectează direct sau indirect la fiecare parte a computerului."
        },
        {
            type: "CPU/procesor",
            image_url: "data/cpu.processor-1.jpeg",
            description: "Unitatea centrală de procesare (CPU), numită și procesor, se află în interiorul carcasei computerului de pe placa de bază. Uneori se numește creierul computerului, iar sarcina sa este să execute comenzi. Ori de câte ori apăsați o tastă, faceți clic pe mouse sau porniți o aplicație, trimiteți instrucțiuni către CPU. Viteza unui procesor este măsurată în megahertz (MHz) sau în milioane de instrucțiuni pe secundă; și gigahertz (GHz), sau miliarde de instrucțiuni pe secundă. Un procesor mai rapid poate executa instrucțiuni mai rapid. Cu toate acestea, viteza reală a computerului depinde de viteza multor componente diferite - nu doar a procesorului."
        },
        {
            type: "RAM (memoria cu acces aleatoriu)",
            image_url: "data/ram.jpeg",
            description: "RAM, sau memoria cu acces aleatoriu, este memoria pe termen scurt a sistemului dvs. Ori de câte ori computerul efectuează calcule, acesta stochează temporar datele în memoria RAM până când sunt necesare. Această memorie pe termen scurt dispare când computerul este oprit. Dacă lucrați la un document, foaie de calcul sau alt tip de fișier, va trebui să îl salvați pentru a nu-l pierde. Când salvați un fișier, datele sunt scrise pe hard disk, care acționează ca stocare pe termen lung."
        },
        {
            type: "Unitate de stocare",
            image_url: "data/hard-drive.jpeg",
            description: "Unitatea de stocare (Hard disk-ul) - este locul unde sunt stocate software-ul, documentele și alte fișiere. Hard diskul este stocat pe termen lung, ceea ce înseamnă că datele sunt încă salvate chiar dacă opriți computerul sau îl deconectați."
        },
        {
            type: "Unitatea de alimentare",
            image_url: "data/psu.jpeg",
            description: "Unitatea de alimentare (PSU) - a unui computer convertește puterea de la priza de perete la tipul de alimentare necesar computerului. Trimite energie prin cabluri către placa de bază și alte componente."
        },
        {
            type: "Carduri de expansiune",
            image_url: "data/expansion-card.jpeg",
            description: "Majoritatea computerelor au sloturi de expansiune pe placa de bază, care vă permit să adăugați diferite tipuri de carduri de expansiune. Acestea sunt uneori numite plăci PCI (interconectare componentă periferică). Este posibil să nu fie nevoie să adăugați niciodată plăci PCI, deoarece majoritatea plăcilor de bază au funcții video, sunet, rețea și alte funcții încorporate."
        },
        {
            type: "Plăcă video",
            image_url: "data/video-card.jpeg",
            description: "Placa video este responsabilă pentru ceea ce vedeți pe monitor. Majoritatea computerelor au un GPU (unitate de procesare grafică) încorporată în placa de bază în loc să aibă o placă video separată. Dacă vă place să jucați jocuri cu intensitate grafică, puteți adăuga o placă video mai rapidă la unul dintre sloturile de expansiune pentru a obține performanțe mai bune."
        },
        {
            type: "Placa de sunet",
            image_url: "data/sound-card.jpeg",
            description: "Placa de sunet - numită și placă audio - este responsabilă pentru ceea ce auziți în difuzoare sau căști. Majoritatea plăcilor de bază au sunet integrat, dar puteți face upgrade la o placă de sunet dedicată pentru un sunet de calitate superioară. Placa de sunet - numită și placă audio - este responsabilă pentru ceea ce auziți în difuzoare sau căști. Majoritatea plăcilor de bază au sunet integrat, dar puteți face upgrade la o placă de sunet dedicată pentru un sunet de calitate superioară."
        },
        {
            type: "Placa de retea",
            image_url: "data/network-card2.jpeg",
            description: "Placa de rețea permite computerului să comunice printr-o rețea și să acceseze internetul. Se poate conecta fie printr-un cablu Ethernet, fie printr-o conexiune wireless (denumită adesea Wi-Fi). Multe plăci de bază au conexiuni de rețea încorporate, iar o placă de rețea poate fi adăugată la un slot de expansiune."
        },
        {
            type: "Adapter bluetooth",
            image_url: "data/bluetooth-card.jpeg",
            description: "Bluetooth este o tehnologie pentru comunicații fără fir pe distanțe scurte. Este adesea folosit în computere pentru a comunica cu tastaturi fără fir, șoareci și imprimante. Este încorporat în mod obișnuit în placa de bază sau inclus într-o placă de rețea fără fir. Pentru computerele care nu au Bluetooth, puteți achiziționa un adaptor USB, numit adesea dongle."
        }
        
    ];
})();