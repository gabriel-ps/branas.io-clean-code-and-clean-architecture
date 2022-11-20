import Order from "../../domain/entity/Order";
import PlaceOrderOutput from "./PlaceOrderOutput";

export default class PlaceOrderOutputAssembler {

    static assemble (order: Order): PlaceOrderOutput {
        return new PlaceOrderOutput(order.getTotal());
    }
}
