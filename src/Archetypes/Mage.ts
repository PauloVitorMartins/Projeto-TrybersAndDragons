import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  _energyType: EnergyType;
  public static magesQuantity = 0;
  constructor(name:string) {
    super(name);
    this._energyType = 'mana';
    Mage.magesQuantity += 1;
  }

  static createdArchetypeInstances(): number {
    return this.magesQuantity;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}