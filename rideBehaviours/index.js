let {SharedRide} = require("./sharedRide");
let {IndividualRide} = require("./individualRide");

module.export = {
    "individualRide": new IndividualRide(),
    "sharedRide": new SharedRide()
}
