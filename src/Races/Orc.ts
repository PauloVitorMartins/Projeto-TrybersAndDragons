import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoints = 74;
  public static quantityO = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc.quantityO += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this.quantityO;
  }
}