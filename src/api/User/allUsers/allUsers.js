import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    allUsers: () => prisma.users()
  }
};
