export class Strings {

  static maakHoofdletterVanEersteLetter(titel: string): string {
    return titel.charAt(0).toUpperCase() + titel.slice(1);
  }
}
