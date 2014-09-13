'use strict';

angular.module('meuEventoSustentavel').controller('MainCtrl', function ($scope) {
  $scope.eixos = [
    {
      eixo: "Eixo Geral",
      questoes: [
        {
          enunciado: "Primeira Pergunta",
          resposta: "",
          tipo: "radio", //RADIO, TEXT, EMAIL, CHECKBOX
          opcoes: [ //Só quando radio ou checkbox
            "A - Primeira opção",
            "B - Segunda opção",
            "C - Terceira opção",
          ]
        },
        {
          enunciado: "Segunda Pergunta",
          resposta: "",
          tipo: "radio", //RADIO, TEXT, EMAIL, CHECKBOX
          opcoes: [ //Só quando radio ou checkbox
            "A - Primeira opção",
            "B - Segunda opção",
            "C - Terceira opção",
          ]
        },
        {
          enunciado: "Terceira Pergunta",
          resposta: "",
          tipo: "radio", //RADIO, TEXT, EMAIL, CHECKBOX
          opcoes: [ //Só quando radio ou checkbox
            "A - Primeira opção",
            "B - Segunda opção",
            "C - Terceira opção",
          ]
        },
      ]
    }
  ];
});
