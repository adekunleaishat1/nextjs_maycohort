export type Book = {
  id?:string,
  title: string,
  author:string,
  year:number
}


export const books: Book[] = [
{ id: "1", title: "The Pragmatic Programmer", author: "Andy Hunt", year: 1999 },
{ id: "2", title: "Clean Code", author: "Robert C. Martin", year: 2008 },
{ id: "3", title: "You Do Not Know JS", author: "Kyle Simpson", year: 2014 },
];