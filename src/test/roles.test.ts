import app from "../app";
import request from "supertest";
import { CreateTypeormCon } from "../configs/database.config";

beforeAll(async () => {
  await CreateTypeormCon();
});

describe("POST /roles", () => {
  test("New rol < 50", async () => {
    const rol: string = "test";
    const res: request.Response = await request(app)
      .post("/roles")
      .send({ description: rol })
      .set("Accept", "application/json");
    expect(res.status).toEqual(201);
    expect(res.body.description).toBe(rol);
  });
  test("New rol > 50", async () => {
    const rol: string =
      "asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd";
    const res: request.Response = await request(app)
      .post("/roles")
      .send({ description: rol })
      .set("Accept", "application/json");
    expect(res.status).toEqual(202);
    expect(res.body.Massage).toBe(
      "The description does not comply with the request"
    );
  });
  test("New rol = 0", async () => {
    const rol: string = "";
    const res: request.Response = await request(app)
      .post("/roles")
      .send({ description: rol })
      .set("Accept", "application/json");
    expect(res.status).toEqual(202);
    expect(res.body.Massage).toBe(
      "The description does not comply with the request"
    );
  });
  test("/roles/:id (number)", async () => {
    const id: number = 5;
    const rol: string = "test2";
    const res: request.Response = await request(app).post(`/roles/${id}`).send({ description: rol }).set("Accept", "application/json");;
    expect(res.status).toEqual(404);
  });
  test("/roles/:id (string)", async () => {
    const id: string = "test";
    const rol: string = "test2";
    const res: request.Response = await request(app).post(`/roles/${id}`).send({ description: rol }).set("Accept", "application/json");;
    expect(res.status).toEqual(404);
  });
});

describe("GET /roles and GET /roles/:id", () => {
  test("Roles complete", async () => {
    const res: request.Response = await request(app).get("/roles");
    expect(res.status).toEqual(200);
    expect(res.body[0].id).toEqual(1);
    expect(res.body[0].description).toBe("test");
  });
  test("/roles/:id with existing id", async () => {
    const id: number = 1;
    const description: string = "test";
    const res: request.Response = await request(app).get(`/roles/${id}`);
    expect(res.status).toEqual(200);
    expect(res.body.id).toEqual(id);
    expect(res.body.description).toBe(description);
  });
  test("/roles/:id with not existing id (number)", async () => {
    const id: number = 5;
    const res: request.Response = await request(app).get(`/roles/${id}`);
    expect(res.status).toEqual(202);
    expect(res.body.Massage).toBe("Role not found");
  });
  test("/roles/:id with not existing id (string)", async () => {
    const id: string = "test";
    const res: request.Response = await request(app).get(`/roles/${id}`);
    expect(res.status).toEqual(202);
    expect(res.body.Massage).toBe("Role not found");
  });
});

describe("PUT /roles/:id", () => {
  test("/roles/:id rol create", async () => {
    const id: number = 1;
    const rol: string = "test2";
    const res: request.Response = await request(app)
      .put(`/roles/${id}`)
      .send({ description: rol })
      .set("Accept", "application/json");
    expect(res.status).toEqual(200);
    expect(res.body.description).toBe(rol);
  });
  test("/roles/:id rol not create (number)", async () => {
    const id: number = 4;
    const rol: string = "test2";
    const res: request.Response = await request(app)
      .put(`/roles/${id}`)
      .send({ description: rol })
      .set("Accept", "application/json");
    expect(res.status).toEqual(202);
    expect(res.body.Massage).toBe("Role not found");
  });
  test("/roles/:id rol not create (string)", async () => {
    const id: string = "test";
    const rol: string = "test2";
    const res: request.Response = await request(app)
      .put(`/roles/${id}`)
      .send({ description: rol })
      .set("Accept", "application/json");
    expect(res.status).toEqual(202);
    expect(res.body.Massage).toBe("Role not found");
  });
  test("/roles", async () => {
    const rol: string = "test2";
    const res: request.Response = await request(app).put("/roles").send({ description: rol }).set("Accept", "application/json");;
    expect(res.status).toEqual(404);
  });
});

describe("DELETE /roles/:id", () => {
  test("/roles/:id rol not create (number)", async () => {
    const id: number = 4;
    const res: request.Response = await request(app).delete(`/roles/${id}`);
    expect(res.status).toEqual(202);
    expect(res.body.Massage).toBe("Role not found");
  });
  test("/roles/:id rol not create (string)", async () => {
    const id: string = "test";
    const res: request.Response = await request(app).delete(`/roles/${id}`);
    expect(res.status).toEqual(202);
    expect(res.body.Massage).toBe("Role not found");
  });
  test("/roles/:id rol create", async () => {
    const id: number = 1;
    const res: request.Response = await request(app).delete(`/roles/${id}`);
    expect(res.status).toEqual(200);
    expect(res.body.Message).toBe("Rol delete sucess");
    expect(res.body.affectad).toEqual(1);
  });
  test("/roles/:id rol delate", async () => {
    const id: number = 1;
    const res: request.Response = await request(app).delete(`/roles/${id}`);
    expect(res.status).toEqual(202);
    expect(res.body.Massage).toBe("Role not found");
  });
  test("/roles", async () => {
    const res: request.Response = await request(app).delete("/roles");
    expect(res.status).toEqual(404);
  });
});