let addon = require('bindings')('addon.node')
let begin, end, eucJS, eucCPP, linJS, linCPP;

function euclideanModulo (n, m) {
	
	return ((n % m) + m) % m;
	
}

function mapLinear (x, a1, a2, b1, b2) {

	return b1 + (x - a1) * (b2 - b1) / (a2 - a1);

}

console.log("\nFUNÇÕES EXECUTADAS NO NODE");

begin = Date.now();
console.log("\tModelo Euclideano: " + euclideanModulo(10000, 15));
end = Date.now();
eucJS = (end - begin) + "ms";

begin = Date.now();
console.log("\tTranformações Lineares: " + mapLinear(500, 1000, 1500, 1200, 200));
end = Date.now();
linJS = (end - begin) + "ms";

console.log("\nFUNÇÕES EXECUTADAS NO C++");

begin = Date.now();
console.log("\tModelo Euclideano: " + addon.euclideanModulo(10000, 15));
end = Date.now();
eucCPP = (end - begin) + "ms";

begin = Date.now();
console.log("\tTranformações Lineares: " + addon.mapLinear(500, 1000, 1500, 1200, 200));
end = Date.now();
linCPP = (end - begin)+ "ms";

console.log("\nTEMPO DE PROCESSAMENTO DE CADA FUNÇÃO");

console.log("\tModelo Euclideano - JS: " + eucJS);
console.log("\tModelo Euclideano - C++: " + eucCPP);

console.log("\tTransformação Linear - JS: " + linJS);
console.log("\tTransformação Linear - C++: " + linCPP);

if (eucJS == eucCPP)
	console.log("Na função Modelo Euclideano ambas linguagens tiveram o mesmo desempenho.");
else if (eucJS > eucCPP) 
	console.log("Na função Modelo Euclideano a linguagem C++ teve melhor desempenho.");
else
	console.log("Na função Modelo Euclideano a linguagem JS teve melhor desempenho");
	
if (linJS == linCPP)
	console.log("Na função Transformação Linear ambas linguagens tiveram o mesmo desempenho.");
else if (linJS > linCPP) 
	console.log("Na função Transformação Linear a linguagem C++ teve melhor desempenho.");
else
	console.log("Na função Transformação Linear a linguagem JS teve melhor desempenho");
