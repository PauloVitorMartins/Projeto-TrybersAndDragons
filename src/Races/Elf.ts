import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints = 99;
  public static quantityE = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf.quantityE += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this.quantityE;
  }
}