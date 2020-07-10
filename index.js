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

console.log("\n\nFUNÇÕES EXECUTADAS NO C++");

begin = Date.now();
console.log("\tModelo Euclideano: " + addon.euclideanModulo(10000, 15));
end = Date.now();
eucCPP = (end - begin) + "ms";

begin = Date.now();
console.log("\tTranformações Lineares: " + addon.mapLinear(500, 1000, 1500, 1200, 200));
end = Date.now();
linCPP = (end - begin)+ "ms";

console.log("\nTEMPO DE PROCESSAMENTO DE CADA FUNÇÃO\n");

console.log("Modelo Euclideano - JS: " + eucJS);
console.log("Modelo Euclideano - C++: " + eucCPP);

console.log("Transformação Linear - JS: " + linJS);
console.log("Transformação Linear - C++: " + linCPP);






