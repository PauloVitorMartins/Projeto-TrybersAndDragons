import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  _energyType: EnergyType;
  public static quantityOfRangers = 0;

  constructor(name: string) {
    super(name);
    Ranger.quantityOfRangers += 1;
    this._energyType = 'stamina';
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return this.quantityOfRangers;
  }
}