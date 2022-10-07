import { v4 } from 'uuid';

export class Accommodation {

  private id: string;
  private name: string;
  private pricePerNight: number;

  constructor(id: string, name: string, pricePerNigth: number) {
    this.id = id;
    this.name = name;
    this.pricePerNight = pricePerNigth;
  }

  public static create(name: string, pricePerNight: number): Accommodation {
    const id = v4();
    const accommodation = new Accommodation(id, name, pricePerNight);

    return accommodation;
  }

  static fromPrimitives(primitives: any): Accommodation {
    const accommodation = new Accommodation(
      primitives.id,
      primitives.name,
      primitives.pricePerNight
    );

    return accommodation;
  }

  getId(): string {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getPriceperNigth(): number {
    return this.pricePerNight;
  }

  toPrimitives(): any {
    return {
      id: this.id,
      name: this.name,
      pricePerNight: this.pricePerNight,
    }
  }
}
