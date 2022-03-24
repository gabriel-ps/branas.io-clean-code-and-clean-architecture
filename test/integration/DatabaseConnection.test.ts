import DatabaseConnectionAdapter from "../../src/infra/database/DatabaseConnectionAdapter";

test.skip("Deve criar um conexão com o banco de dados", async function () {
    const databaseConnection = new DatabaseConnectionAdapter();
    const items = await databaseConnection.query("select * from ccca.item", []);
    expect(items).toHaveLength(3);
});
