# Simple Demo for json-rules-engine module.

## Init

Tested on node v12.x
```bash
npm install
sls offline start
```

This will open a server on _http://localhost:3000/dev_. With an http client make the resquest 

```js
@POST -> /engine-test
{
	"altura": 1.70,
	"peso": 40,
	"cansacioSinRazon": true,
	"ejercicio" : false ,
	"descansoEnHrs": 8 ,
	"enfermedadesCronicas" : false,
	"buenaAlimentacion": true,
	"ansiedad": true
}
```

Depending of the info the result will be differente based on the set or rules.

For a much information please read the [json-rules-engine](https://github.com/cachecontrol/json-rules-engine) documentation.