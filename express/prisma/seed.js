import { prisma } from "../libs/prisma.js";
import { faker } from "@faker-js/faker";
function makeid(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const main = async () => {
  const number = 100000;
  const data = [];
  for (let i = 0; i < number; i++) {
    data.push({
      name: faker.person.firstName(),
      email: faker.internet.email({
        firstName: makeid(5) + "abc",
        lastName: makeid(5) + "abg",
      }),
      phone: faker.phone.number({ style: "international" }),
      status: faker.number.int({ min: 0, max: 1 }) ? true : false,
    });
  }
  await prisma.users.createMany({ data });
};

main()
  .then(async () => {
    console.log("Thanh cong");
    process.exit();
  })
  .catch(async (e) => {
    console.error(e);
    process.exit(1);
  });
