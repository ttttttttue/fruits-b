import { Injectable } from '@nestjs/common';

export interface Vegetables {
  id: string;
  name: string;
  description: string;
  benefits: string;
  drawbacks?: string;
}

@Injectable()
export class VegetablesService {
  private vegetables: Vegetables[] = [
    {
      id: 'spinach',
      name: 'Шпинат',
      description:
        'Шпинат источник полезных антиоксидантов, которые могут сократить риск ряда заболеваний, например, рака.',
      benefits:
        'дин сырой лист (30 г) содержит 16% рекомендуемой дневной нормы витамина А и 120% нормы витамина К, при этом в нем всего 7 калорий.',
      drawbacks: '',
    },
    {
      id: 'carrot',
      name: 'Морковь',
      description: 'Морковь богата витамином А.',
      benefits:
        'Включает в себя также витамин С и калий. Морковь содержит бета-каротин, придающий ей яркий оранжевый цвет и преобразуемый в витамин А.',
      drawbacks: '',
    },
  ];

  findAll(): Vegetables[] {
    return this.vegetables;
  }

  findOne(id: string): Vegetables {
    return this.vegetables.find((veg) => veg.id === id);
  }

  create(veg: Vegetables) {
    this.vegetables.push(veg);
  }
}
