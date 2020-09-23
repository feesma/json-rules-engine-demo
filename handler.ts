import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';
import EngineTest from './rules/peso-rules';
import EngineTestAnimo from './rules/animo-rules'
import { Engine, EngineResult, Event } from 'json-rules-engine';

export const hello: APIGatewayProxyHandler = async (event, _context) => {

  let engine: Engine = new Engine();
  const pesoRules = EngineTest.getRules();
  const condicionRules = EngineTestAnimo.getRules();

  let results: Event[];
  let body = JSON.parse(event.body);

  pesoRules.map(rule => engine.addRule(rule));
  condicionRules.map(rule => engine.addRule(rule));

  body['imc'] = (body.peso / (body.altura * body.altura)).toFixed(2);

  const result: EngineResult = await engine.run(body);
  results = result.events;


  console.log(result)

  return {
    statusCode: 200,
    body: JSON.stringify(results)
  };
}
