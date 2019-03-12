import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    seeUser: async (_, args) => {
      const { username } = args;
      return prisma.user({ username });
    }
  }
};
