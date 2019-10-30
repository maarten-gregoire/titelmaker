export class Arrays {
  static bepaalWillekeurigElementUitRij<T>(rij: T[]): T {
    return rij[Math.floor(Math.random() * rij.length)];
  }

}
