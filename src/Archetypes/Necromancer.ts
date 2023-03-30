import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  public static quantityNecromancers = 0;
  _energyType: EnergyType;

  constructor(name:string) {
    super(name);
    this._energyType = 'mana';
    Necromancer.quantityNecromancers += 1;
  }

  static createdArchetypeInstances(): number {
    return this.quantityNecromancers;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}