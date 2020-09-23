import { RuleProperties } from 'json-rules-engine'

enum Peso {
  OBESO = "Obesidad",
  SOBRE_PESO = "Sobre peso",
  PESO_NORMAL = "Peso Normal",
  INFRA_PESO = "Infra peso , delgadez aceptable",
  INFRA_PESO_I = "Infrapeso, delgadez moderada-servera"
}

export default class EngineTest {


  static getRules(): RuleProperties[] {

    const pesoNormalRule: RuleProperties = {
      conditions: {
        all: [
          {
            fact: "imc",
            operator: "greaterThanInclusive",
            value: 18.50
          }, {
            fact: "imc",
            operator: "lessThanInclusive",
            value: 24.99
          }
        ]
      },
      event: {
        type: "img",
        params: {
          peso: Peso.PESO_NORMAL
        }
      }
    };

    const sobrePesoRule: RuleProperties = {
      conditions: {
        all: [
          {
            fact: "imc",
            operator: "greaterThanInclusive",
            value: 25
          },
          {
            fact: "imc",
            operator: "lessThanInclusive",
            value: 29.99
          }
        ]
      },
      event: {
        type: "img",
        params: {
          peso: Peso.SOBRE_PESO
        }
      }
    };

    const obesidadPesoRule: RuleProperties = {
      conditions: {
        any: [
          {
            fact: "imc",
            operator: "greaterThan",
            value: 29.00
          }
        ]
      },
      event: {
        type: "img",
        params: {
          peso: Peso.OBESO
        }
      }
    };

    const pesoBajoPesoRule: RuleProperties = {
      conditions: {
        all: [
          {
            fact: "imc",
            operator: "lessThanInclusive",
            value: 18.49
          },
          {
            fact: "imc",
            operator: "greaterThanInclusive",
            value: 17
          }
        ]
      },
      event: {
        type: "img",
        params: {
          peso: Peso.INFRA_PESO
        }
      }
    };

    const pesoBajo2PesoRule: RuleProperties = {
      conditions: {
        all: [
          {
            fact: "imc",
            operator: "lessThanInclusive",
            value: 16.99
          }
        ]
      },
      event: {
        type: "img",
        params: {
          peso: Peso.INFRA_PESO_I
        }
      }
    };
    return [pesoNormalRule, sobrePesoRule, obesidadPesoRule, pesoBajoPesoRule, pesoBajo2PesoRule];

  }
}

