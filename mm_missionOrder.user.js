// ==UserScript==
// @name         MM_missionOrder
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Reordering of your personal missions.
// @author       MisteryMan/AARC
// @include      *://leitstellenspiel.de/*
// @include      *://www.leitstellenspiel.de/*
// @include      *://missionchief.co.uk/*
// @include      *://www.missionchief.co.uk/*
// @include      *://missionchief.com/*
// @include      *://www.missionchief.com/*
// @include      *://meldkamerspel.com/*
// @include      *://www.meldkamerspel.com/*
// @include      *://centro-de-mando.es/*
// @include      *://www.centro-de-mando.es/*
// @include      *://missionchief-australia.com/*
// @include      *://www.missionchief-australia.com/*
// @include      *://larmcentralen-spelet.se/*
// @include      *://www.larmcentralen-spelet.se/*
// @include      *://operatorratunkowy.pl/*
// @include      *://www.operatorratunkowy.pl/*
// @include      *://operatore112.it/*
// @include      *://www.operatore112.it/*
// @include      *://operateur112.fr/*
// @include      *://www.operateur112.fr/*
// @include      *://dispetcher112.ru/*
// @include      *://www.dispetcher112.ru/*
// @include      *://alarmcentral-spil.dk/*
// @include      *://www.alarmcentral-spil.dk/*
// @include      *://nodsentralspillet.com/*
// @include      *://www.nodsentralspillet.com/*
// @include      *://operacni-stredisko.cz/*
// @include      *://www.operacni-stredisko.cz/*
// @include      *://112-merkez.com/*
// @include      *://www.112-merkez.com/*
// @include      *://jogo-operador112.com/*
// @include      *://www.jogo-operador112.com/*
// @include      *://operador193.com/*
// @include      *://www.operador193.com/*
// @include      *://centro-de-mando.mx/*
// @include      *://www.centro-de-mando.mx/*
// @include      *://dyspetcher101-game.com/*
// @include      *://www.dyspetcher101-game.com/*
// @include      *://missionchief-japan.com/*
// @include      *://www.missionchief-japan.com/*
// @include      *://missionchief-korea.com/*
// @include      *://www.missionchief-korea.com/*
// @include      *://jocdispecerat112.com/*
// @include      *://www.jocdispecerat112.com/*
// @include      *://hatakeskuspeli.com/*
// @include      *://www.hatakeskuspeli.com/*
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