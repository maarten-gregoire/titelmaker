export class Randoms {
  static maakRandomGetalTussenEnInbegrepen(bodemGetal: number, plafondGetal: number) {
    return Math.floor(Math.random() * (plafondGetal + 0.99 - bodemGetal) + bodemGetal);
  }

  // TODO: implement correctly when used
  static maakRandomGetalTussenEnInbegrepenVerschillendVan(bodemGetal: number, plafondGetal: number, verschillendVan: number[]) {
    return Math.floor(Math.random() * (plafondGetal + 0.99 - bodemGetal) + bodemGetal);
  }

  static bepaalRandomEnumValue(enumeration) {
    const values = Object.keys(enumeration);
    const enumKey = values[Randoms.maakRandomGetalTussenEnInbegrepen(1, values.length)];
    return enumeration[enumKey];
  }
}
