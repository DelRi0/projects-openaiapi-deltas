const TwapBase = require("./twap-base");

module.exports = class extends TwapBase {
	static displayName = "TWAP Order Completed";
	static description = "Get notified when your TWAP order is completely filled (Polygon)";
	static network = "polygon";

	constructor() {
		super("polygon", "OrderCompleted");
	}
}
