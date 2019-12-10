if store.js did not exist you would have to use static

  static defaultProp = {
    store: {
      lists: [],
      allCards: {},
    }
  }

In there you would have to inculde all the infomation that store.js has.

Need to use export in Store.js so that it can be used anywhere.

Since App component want to only take in one prop we inculde STORE in index.js (look at it to see)