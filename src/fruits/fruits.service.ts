import { Injectable } from '@nestjs/common';

export interface Fruit {
    id: string;
    name: string;
    description: string;
    benefits: string;
    drawbacks?: string;
}

@Injectable()
export class FruitsService {
    private fruits: Fruit[] = [
        {
            id: 'apple',
            name: 'Яблоко',
            description: 'Яблоки богаты витаминами и минералами, полезны для сердца.',
            benefits: 'Содержат витамины C и K, антиоксиданты, полезны для сердца.',
            drawbacks: 'Могут вызвать аллергию у некоторых людей.'
        },
        {
            id: 'banana',
            name: 'Банан',
            description: 'Бананы богаты калием, полезны для сердечно-сосудистой системы.',
            benefits: 'Высокое содержание калия, улучшают пищеварение.',
            drawbacks: 'Высокое содержание сахара, что может быть вредно при избыточном употреблении.'
        },
        // Добавьте больше фруктов и овощей по аналогии
    ];

    findAll(): Fruit[] {
        return this.fruits;
    }

    findOne(id: string): Fruit {
        return this.fruits.find(fruit => fruit.id === id);
    }

    create(fruit: Fruit) {
        this.fruits.push(fruit);
    }
}