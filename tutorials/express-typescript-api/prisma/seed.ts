import prisma from "../src/utils/db.server";

type Author = {
  firstName: String;
  lastName: String;
};

type Book = {
  title: String;
  isFiction: Boolean;
  datePublished: Date;
};

const getAuthors = () => {
  return [
    {
      firstName: "John",
      lastName: "Doe",
    },
    {
      firstName: "Jane",
      lastName: "Doe",
    },
    {
      firstName: "Jack",
      lastName: "Doe",
    },
  ];
};

const getBooks = () => {
  return [
    {
      title: "The Hobbit",
      isFiction: true,
      datePublished: new Date(),
      author: null,
    },
    {
      title: "The Lord of the Rings",
      isFiction: true,
      datePublished: new Date(),
    },
    {
      title: "The Silmarillion",
      isFiction: false,
      datePublished: new Date(),
    },
  ];
};

const seed = async () => {
  await Promise.all(
    getAuthors().map(async (author) => {
      return prisma.author.create({ data: author });
    })
  );

  const author = await prisma.author.findFirst({
    where: {
      firstName: "John",
    },
  });

  await Promise.all(
    getBooks().map((book) => {
      const { title, isFiction, datePublished } = book;
      const authorId = author?.id as NonNullable<number>;

      return prisma.book.create({
        data: {
          title,
          isFiction,
          datePublished,
          authorId,
        },
      });
    })
  );
};

seed();
