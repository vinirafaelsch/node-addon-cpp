var addon = require('bindings')('addon.node')

function euclideanModulo (n, m) {
	
	return ((n % m) + m) % m;
	
}

function mapLinear (x, a1, a2, b1, b2) {

	return b1 + (x - a1) * (b2 - b1) / (a2 - a1);

}

console.log("\nFUNÇÕES EXECUTADAS NO NODE");
console.log("\tModelo Euclideano: " + euclideanModulo(10, 20));
console.log("\tTranformações Lineares: " + mapLinear(5, 10, 15, 12, 2));

console.log("\n\nFUNÇÕES EXECUTADAS NO C++");
console.log("\tModelo Euclideano: " + addon.euclideanModulo(10, 20));
console.log("\tTranformações Lineares: " + addon.mapLinear(5, 10, 15, 12, 2));





