import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints = 80;
  public static quantityD = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf.quantityD += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this.quantityD;
  }
}
