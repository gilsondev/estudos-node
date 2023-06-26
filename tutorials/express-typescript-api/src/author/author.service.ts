import prisma from "../utils/db.server";

type Author = {
  id: number;
  firstName: string;
  lastName: string;
  createdAt: Date;
};

export const listAuthor = async (): Promise<Author[]> => {
  return await prisma.author.findMany({
    select: {
      id: true,
      firstName: true,
      lastName: true,
      createdAt: true,
    },
  });
};

export const getAuthor = async (id: number): Promise<Author | null> => {
  return await prisma.author.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      firstName: true,
      lastName: true,
      createdAt: true,
    },
  });
};

export const createAuthor = async (
  author: Omit<Author, "id">
): Promise<Author> => {
  const { firstName, lastName } = author;
  return await prisma.author.create({
    data: {
      firstName,
      lastName,
    },
    select: {
      id: true,
      firstName: true,
      lastName: true,
      createdAt: true,
    },
  });
};

export const updateAuthor = async (
  author: Omit<Author, "id">,
  id: number
): Promise<Author> => {
  const { firstName, lastName } = author;
  return await prisma.author.update({
    where: {
      id,
    },
    data: {
      firstName,
      lastName,
    },
    select: {
      id: true,
      firstName: true,
      lastName: true,
      createdAt: true,
    },
  });
};

export const deleteAuthor = async (id: number): Promise<void> => {
  await prisma.author.delete({
    where: {
      id,
    },
  });
};
