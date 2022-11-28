import ItemRepositoryMemory from "../../src/infra/repository/memory/ItemRepositoryMemory";
import PlaceOrder from "../../src/application/usecase/PlaceOrder";
import OrderRepositoryMemory from "../../src/infra/repository/memory/OrderRepositoryMemory";
import PlaceOrderInput from "../../src/application/dto/PlaceOrderInput";

test("Deve fazer um pedido", async function() {
    const input = new PlaceOrderInput("847.903.332-05", [
        {
            idItem: 1,
            quantity: 1,
        },
        {
            idItem: 2,
            quantity: 1,
        },
        {
            idItem: 3,
            quantity: 3,
        },
    ], new Date("2021-03-01"));
    // const placeOrder = new PlaceOrder(new ItemRepositoryDatabase(new DatabaseConnectionAdapter()), new OrderRepositoryMemory());
    const placeOrder = new PlaceOrder(new ItemRepositoryMemory(), new OrderRepositoryMemory());
    const output = await placeOrder.execute(input);
    expect(output.total).toBe(6090);
});
