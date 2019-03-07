import { prisma } from "../../../generated/prisma-client";

export default {
  Comment: {
    user: ({ id }) => prisma.comment({ id }).user(),
    post: ({ id }) => prisma.comment({ id }).post()
  }
};
