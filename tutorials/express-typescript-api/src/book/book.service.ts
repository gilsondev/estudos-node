import prisma from "../utils/db.server";

type AuthorBook = {
  id: number;
  firstName: string;
  lastName: string;
  createdAt: Date;
};

type BookRead = {
  id: number;
  title: string;
  datePublished: Date;
  isFiction: boolean;
  author: AuthorBook;
};

type BookCreate = {
  title: string;
  isFiction: boolean;
  datePublished: Date;
  authorId: number;
};

export const getBooks = async (): Promise<BookRead[]> => {
  return await prisma.book.findMany({
    select: {
      id: true,
      title: true,
      datePublished: true,
      isFiction: true,
      author: {
        select: {
          id: true,
          firstName: true,
          lastName: true,
          createdAt: true,
        },
      },
    },
  });
};

export const getBook = async (id: number): Promise<BookRead | null> => {
  return await prisma.book.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      title: true,
      datePublished: true,
      isFiction: true,
      author: {
        select: {
          id: true,
          firstName: true,
          lastName: true,
          createdAt: true,
        },
      },
    },
  });
};

export const createBook = async (book: BookCreate): Promise<BookRead> => {
  const { title, isFiction, datePublished, authorId } = book;
  const parseDate: Date = new Date(datePublished);

  return await prisma.book.create({
    data: {
      title,
      isFiction,
      datePublished: parseDate,
      authorId,
    },
    select: {
      id: true,
      title: true,
      datePublished: true,
      isFiction: true,
      author: {
        select: {
          id: true,
          firstName: true,
          lastName: true,
          createdAt: true,
        },
      },
    },
  });
};

export const updateBook = async (
  book: BookCreate,
  id: number
): Promise<BookRead> => {
  const { title, isFiction, datePublished, authorId } = book;
  const parseDate: Date = new Date(datePublished);

  return await prisma.book.update({
    where: {
      id,
    },
    data: {
      title,
      isFiction,
      datePublished: parseDate,
      authorId,
    },
    select: {
      id: true,
      title: true,
      datePublished: true,
      isFiction: true,
      author: {
        select: {
          id: true,
          firstName: true,
          lastName: true,
          createdAt: true,
        },
      },
    },
  });
};

export const deleteBook = async (id: number): Promise<void> => {
  await prisma.book.delete({
    where: {
      id,
    },
  });
};
