import "dotenv/config";
import express from "express";
import { prisma } from "./libs/prisma.js";
const app = express();
app.use(express.json());
app.get("/accounts", async (req, res) => {
  const accounts = await prisma.accounts.findMany();
  res.json({ accounts });
});

app.post("/accounts", async (req, res) => {
  // const account = await prisma.accounts.create({
  //   data: req.body,
  // });
  // res.json({ account });
  await prisma.$transaction(async (tx) => {
    //Truy vấn trong transaction --> dùng qua tx
    //1. Trừ tiền
    const sender = await tx.accounts.update({
      where: { email: "user1@gmail.com" },
      data: {
        balance: {
          decrement: 50000,
        },
      },
    });
    //decrement ==> balance = balance - 50000
    //Lấy kết quả câu lệnh trên --> Kiểm tra --> rollback (throw new Error)
    // if (sender.balance < 0) {
    //   throw new Error("Balance không đủ"); //Gửi rollback lên database
    // }
    //2. Cộng tiền
    await tx.accounts.update({
      where: {
        email1: "user2@gmail.com",
      },
      data: {
        balance: {
          increment: 50000,
        },
      },
    });
  });
  res.json({});
});

app.get("/users", async (req, res) => {
  const { page = 1, limit = 10, q = "" } = req.query;
  const startTime = Date.now();
  // const users = await prisma.users.findMany({
  //   orderBy: {
  //     id: "asc",
  //   },
  //   cursor: {
  //     id: +cursor,
  //   },
  //   take: limit,
  //   skip: cursor !== 1 ? 1 : 0,
  // });
  // const users = await prisma.$queryRaw`
  // SELECT * FROM users
  // JOIN
  //   (SELECT id FROM users ORDER BY id LIMIT ${limit} OFFSET ${(page - 1) * limit}) AS limited_users
  // ON users.id = limited_users.id`;
  const users = await prisma.users.findMany({
    where: {
      name: {
        contains: q,
      },
    },
    take: 10,
  });
  const endTime = Date.now();
  console.log(`${endTime - startTime}ms`);
  res.json({
    users,
    // cursor: users.at(-1).id,
  });
});

app.listen(3000, () => {
  console.log("Running");
});
