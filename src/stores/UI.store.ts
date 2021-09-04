// src/stores/UI.store.ts
import { makeAutoObservable, runInAction } from "mobx";
import { IRootStore } from "Store";

interface IBook {
  title: string,
  createdAt: string
}

export let createUIStore = (root: IRootStore) => {

  let store = makeAutoObservable({
    books: [] as IBook[],

    get uppercasedBooks(): IBook[] {
      return store.books.map((book: { title: string; }) => ({
        ...book,
        title: book.title.toUpperCase(),
      }))
    },
    async addBook(title: string) {
      const books = await root.api.addBook(title)

      if (books) {
        runInAction(() => {
          store.books = books
        })
      }
    },
    async fetchBooks() {
      const books = await root.api.fetchBooks()

      runInAction(() => {
        store.books = books
      })
    }
  })

  return store
}