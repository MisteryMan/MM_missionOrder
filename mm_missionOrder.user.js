// ==UserScript==
// @name         MM_missionOrder
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Reordering of your personal missions.
// @author       MisteryMan/AARC
// @match           https://www.operacni-stredisko.cz/
// @match           https://policie.operacni-stredisko.cz/
// @match           https://www.alarmcentral-spil.dk/
// @match           https://politi.alarmcentral-spil.dk/
// @match           https://www.leitstellenspiel.de/
// @match           https://polizei.leitstellenspiel.de/
// @match           https://www.missionchief-australia.com/
// @match           https://police.missionchief-australia.com/
// @match           https://www.missionchief.co.uk/
// @match           https://police.missionchief.co.uk/
// @match           https://www.missionchief.com/
// @match           https://police.missionchief.com/
// @match           https://www.centro-de-mando.es/
// @match           https://www.centro-de-mando.mx/
// @match           https://www.hatakeskuspeli.com/
// @match           https://poliisi.hatakeskuspeli.com/
// @match           https://www.operateur112.fr/
// @match           https://police.operateur112.fr/
// @match           https://www.operatore112.it/
// @match           https://polizia.operatore112.it/
// @match           https://www.missionchief-japan.com/
// @match           https://www.missionchief-korea.com/
// @match           https://www.nodsentralspillet.com/
// @match           https://politiet.nodsentralspillet.com/
// @match           https://www.meldkamerspel.com/
// @match           https://politie.meldkamerspel.com/
// @match           https://www.operatorratunkowy.pl/
// @match           https://policja.operatorratunkowy.pl/
// @match           https://www.operador193.com/
// @match           https://www.jogo-operador112.com/
// @match           https://policia.jogo-operador112.com/
// @match           https://www.jocdispecerat112.com/
// @match           https://www.dispetcher112.ru/
// @match           https://www.dispecerske-centrum.com/
// @match           https://www.larmcentralen-spelet.se/
// @match           https://polis.larmcentralen-spelet.se/
// @match           https://www.112-merkez.com/
// @match           https://www.dyspetcher101-game.com/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    $("head").append("<style type='text/css'>div#mission_list { display: flex; flex-direction: column; }</style>");
    mm_mO_initialize();
    var original_func = missionMarkerAdd;
    missionMarkerAdd = function(e) {
        original_func.apply(this, arguments);
        var mm_mO_Missions = $(".missionSideBarEntry");
        for (var i = 0; i < mm_mO_Missions.length; i++) {
            var mm_mO_classlist = mm_mO_Missions[i].firstElementChild.classList;
            if (mm_mO_classlist.contains("mission_panel_red")) {
                mm_mO_Missions[i].setAttribute("style", "order: 1;");
            }
            else if (mm_mO_classlist.contains("mission_panel_yellow")) {
                mm_mO_Missions[i].setAttribute("style", "order: 2;");
            }
            else if (mm_mO_classlist.contains("mission_panel_green")) {
                mm_mO_Missions[i].setAttribute("style", "order: 3;");
            }
        }
    }
    async function mm_mO_initialize() {
        var mm_mO_Missions = $(".missionSideBarEntry");
        for (var i = 0; i < mm_mO_Missions.length; i++) {
            var mm_mO_classlist = mm_mO_Missions[i].firstElementChild.classList;
            if (mm_mO_classlist.contains("mission_panel_red")) {
                mm_mO_Missions[i].setAttribute("style", "order: 1;");
            }
            else if (mm_mO_classlist.contains("mission_panel_yellow")) {
                mm_mO_Missions[i].setAttribute("style", "order: 2;");
            }
            else if (mm_mO_classlist.contains("mission_panel_green")) {
                mm_mO_Missions[i].setAttribute("style", "order: 3;");
            }
        }
    }

})();
