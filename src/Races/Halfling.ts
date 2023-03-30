import Race from './Race';

export default class Halfing extends Race {
  private _maxLifePoints = 60;
  public static quantityH = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfing.quantityH += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this.quantityH;
  }
}