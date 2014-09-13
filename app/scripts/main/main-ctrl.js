'use strict';

angular.module('meuEventoSustentavel').controller('MainCtrl', function ($scope) {
  $scope.eixos = [
    {
      eixo: "Eixo Geral",
      questoes: [
        {
          enunciado: "Primeira Pergunta",
          resposta: "",
          tipo: "radio" //RADIO, TEXT, EMAIL, CHECKBOX
          opcoes: [ //Só quando radio ou checkbox
            "A - Primeira opção",
            "B - Segunda opção",
            "C - Terceira opção",
          ]
        }
      ]
    }
  ];

        {
          enunciado: "Primeira Pergunta",
          resposta: "",
          tipo: "email"
          opcoes: [
            "A - Primeira opção",
            "B - Segunda opção",
            "C - Terceira opção",
          ]
        },
        {
          enunciado: "Primeira Pergunta",
          resposta: "",
          tipo: "email"
          opcoes: [
            "A - Primeira opção",
            "B - Segunda opção",
            "C - Terceira opção",
          ]
        }
      ]
    },

    {
      eixo: "Eixo Transporte",
      questoes: [
        {
          enunciado: "Primeira Pergunta",
          resposta: "",
          opcoes: [
            "A - Primeira opção",
            "B - Segunda opção",
            "C - Terceira opção",
            "D - Quarta opção",
            "E - Quianta opção"
          ]
        },
        {
          enunciado: "Segunda Pergunta",
          resposta: "",
          opcoes: [
            "A - Primeira opção",
            "B - Segunda opção",
            "C - Terceira opção",
            "D - Quarta opção",
            "E - Quianta opção"
          ]
        }
      ]
    }
  ];
});
