import { RuleProperties } from 'json-rules-engine'

enum Afecciones {
  ESTRES = "Estres",
  DESCUIDO_PERSONAL = "Mal cuidado de si mismo",
  ENFERMEDAD = "Riesgo alto de estar enfermo"
}

export default class EngineTestAnimo {

  static getRules(): RuleProperties[] {

    const descuidoRule: RuleProperties = {
      conditions: {
        any: [
          {
            fact: "descansoEnHrs",
            operator: "lessThanInclusive",
            path: "$.descansoEnHrs",
            value: 7.5
          }, {
            fact: "descansoEnHrs",
            operator: "greaterThanInclusive",
            path: "$.descansoEnHrs",
            value: 8.10
          },
          {
            fact: "buenaAlimentacion",
            operator: "equal",
            path: "$.buenaAlimentacion",
            value: false
          }
        ]
      },
      event: {
        type: "personal",
        params: {
          condicion: Afecciones.DESCUIDO_PERSONAL
        }
      }
    };

    const propensoRule: RuleProperties = {
      conditions: {
        all: [
          {
            fact: "cansacioSinRazon",
            operator: "equal",
            value: true,
            path: "$.cansacioSinRazon"
          },
          {
            fact: "enfermedadesCronicas",
            operator: "equal",
            path: "$.enfermedadesCronicas",
            value: true
          },
          {
            fact: "buenaAlimentacion",
            operator: "equal",
            path: "$.buenaAlimentacion",
            value: false
          },

        ]
      },
      event: {
        type: "propenso",
        params: {
          enfermedad: Afecciones.ENFERMEDAD
        }
      }
    };

    const cansacioRule: RuleProperties = {
      conditions: {
        all: [
          {
            fact: "ansiedad",
            operator: "equal",
            value: true,
            path: "$.ansiedad"
          },
          {
            fact: "descansoEnHrs",
            operator: "lessThan",
            value: 6,
            path: "$.descansoEnHrs"
          },
        ]
      },
      event: {
        type: "estres",
        params: {
          achaque: Afecciones.ESTRES
        }
      }
    };



    return [cansacioRule, propensoRule, descuidoRule];

  }
}

