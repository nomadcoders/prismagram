import { prisma } from "../../../../generated/prisma-client";
export default {
  Query: {
    userById: (_, args) => {
      const { id } = args;
      return prisma.user({ id });
    }
  }
};
