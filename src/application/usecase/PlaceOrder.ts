import ItemRepository from "../../domain/repository/ItemRepository";
import OrderRepository from "../../domain/repository/OrderRepository";
import Order from "../../domain/entity/Order";
import PlaceOrderInput from "../dto/PlaceOrderInput";
import PlaceOrderOutput from "../dto/PlaceOrderOutput";
import PlaceOrderOutputAssembler from "../dto/PlaceOrderOutputAssembler";

export default class PlaceOrder {

    constructor (readonly itemRepository: ItemRepository, readonly orderRepository: OrderRepository) {
    }

    async execute (input: PlaceOrderInput): Promise<PlaceOrderOutput> {
        const order = new Order(input.cpf);
        for (const orderItem of input.orderItems) {
            order.addItem(
                await this.itemRepository.findById(orderItem.idItem),
                orderItem.quantity
            );
        }
        this.orderRepository.save(order);
        return PlaceOrderOutputAssembler.assemble(order);
    }
}
