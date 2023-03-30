import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  _energyType: EnergyType;
  public static quantityOfWarriors = 0;

  constructor(name: string) {
    super(name);
    Warrior.quantityOfWarriors += 1;
    this._energyType = 'stamina';
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return this.quantityOfWarriors;
  }
}