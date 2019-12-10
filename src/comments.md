1. if store.js did not exist you would have to use static. In static you would have to add all the infomation you got from Store.js to make things work. 

  static defaultProp = {
    store: {
      lists: [],
      allCards: {},
    }
  }

2. Need to use export in Store.js so that it can be used anywhere.

4. Since App component want to only take in one prop we inculde STORE in index.js (look at it to see)