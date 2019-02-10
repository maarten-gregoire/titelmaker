export class Arrays {
  static bepaalWillekeurigElemntUitRij<T>(rij: T[]): T {
    return rij[Math.floor(Math.random() * rij.length)];
  }

}
