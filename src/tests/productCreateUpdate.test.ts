import app from "../app";
import request from "supertest";

describe("/products/product", () => {
    describe("Is the name, price field not empty", () => {
        test("should respond with code 400", async () => {
            const respone = await request(app).post("/products/product/add").send({
                name: "",
                price: ""
            })
            expect(respone.statusCode).toBe(400)
        })
    })

    describe("Is the first name field shorter than 101 characters", () => {
        test("should respond with code 400", async () => {
            const respone = await request(app).post("/products/product/add").send({
                name: "ghjghjghjghjghjghjghjghjghjghjghjghjghjghjghjghjghjghjghjghjghjghjghjghjghjghjghjghjfghbnfdhndfghnbdf",
                price: 20
            })
            expect(respone.statusCode).toBe(400)
        })
    })
})

