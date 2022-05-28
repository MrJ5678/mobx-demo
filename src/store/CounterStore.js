import { action, makeObservable, observable } from 'mobx'

export default class CounterStore {
  constructor() {
    this.count = 0
    makeObservable(this, {
      count: observable,
      decrement: action.bound,
      increment: action.bound
    })
  }

  increment() {
    this.count += 1
  }

  decrement() {
    this.count -= 1
  }
}
