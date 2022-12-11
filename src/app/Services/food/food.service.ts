import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { tag } from 'src/app/shared/models/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getAllFoodByTag(tag:string) : Foods[]{
    if(tag=='All')
    return this.getAll()
    else
    return this.getAll().filter(food =>food.tags?.includes(tag));

  }
  getAllTag():tag[]{
    return[
      {name:'All'},
      {name:'Fast Food'},
      {name:'International Food'},
      {name:'Tunisian Food'},
    ]
  }


  getAll():Foods[]{
    return[
      {
        id:1,
        name:'Couscous ',
        cookTime:'40-50',
        price: 15 ,
        origin: ['italy'],
        star: 4.5,
        imageUrl:'/assets/couscous.jpg',
        tags: ['Tunisian Food','International Food',''],
      },
      {
        id:2,
        name:'Makloub ',
        cookTime:'10-15',
        price:6 ,
        origin: ['italy'],
        star: 4.5,
        imageUrl:'/assets/ma9loub.jpeg',
        tags: ['Fast Food','',''],
      },
      {
        id:3,
        name:' Hamburger',
        cookTime:'10-15',
        price: 8,
        origin: ['italy'],
        star: 4.5,
        imageUrl:'/assets/Hamburger.jpg',
        tags: ['Fast Food','',''],
      },
      {
        id:4,
        name:'Pizza Normal',
        cookTime:'10-15',
        price:10 ,
        origin: ['italy'],
        star: 4.5,
        imageUrl:'/assets/pizza normal.jpg',
        tags: ['Fast Food','',''],
      },
      {
        id:5,
        name:' Mtabga ',
        cookTime:'10-15',
        price:4 ,
        origin: ['italy'],
        star: 4.5,
        imageUrl:'/assets/mtabga.jpg',
        tags: ['Fast Food','Tunisian Food','International Food'],
      },
      {
        id:6,
        name:'Riz ',
        cookTime:'20-25',
        price:15 ,
        origin: ['italy'],
        star: 4.5,
        imageUrl:'/assets/riz.webp',
        tags: ['International Food','',''],
      },
      {
        id:7,
        name:'spaghetti',
        cookTime:'15-20',
        price:12 ,
        origin: ['italy'],
        star: 4.5,
        imageUrl:'/assets/spaghetti.jpg',
        tags: ['International Food','',''],
      },
      {
        id:8,
        name:'kafteji Tunisien',
        cookTime:'10-15',
        price:3 ,
        origin: ['italy'],
        star: 4.5,
        imageUrl:'/assets/kafteji.jpg',
        tags: ['Fast Food','Tunisian Food',''],
      },
      {
        id:8,
        name:'greek-pizza',
        cookTime:'10-15',
        price:11 ,
        origin: ['italy'],
        star: 4.5,
        imageUrl:'/assets/greek-pizza.jpg',
        tags: ['Fast Food','',''],
      },
      {
        id:8,
        name:'Chicago Pizza',
        cookTime:'10-15',
        price:11 ,
        origin: ['italy'],
        star: 4.5,
        imageUrl:'/assets/Chicago Pizza.jpg',
        tags: ['Fast Food','',''],
      },
      {
        id:8,
        name:'pizza-napolitaine',
        cookTime:'10-15',
        price:12 ,
        origin: ['italy'],
        star: 4.5,
        imageUrl:'/assets/pizza-napolitaine.jpg',
        tags: ['Fast Food','',''],
      },
      {
        id:8,
        name:'Satay indonesia',
        cookTime:'10-15',
        price:15 ,
        origin: ['italy'],
        star: 4.5,
        imageUrl:'/assets/satay.jpg',
        tags: ['International Food','',''],
      },
      {
        id:8,
        name:'Biltong sud afrique',
        cookTime:'10-15',
        price:11 ,
        origin: ['italy'],
        star: 4.5,
        imageUrl:'/assets/Biltong.jpg',
        tags: ['International Food','',''],
      },
      {
        id:8,
        name:'Feijoada Brazil',
        cookTime:'10-15',
        price:10 ,
        origin: ['italy'],
        star: 4.5,
        imageUrl:'/assets/Feijoada Brazil.jpg',
        tags: ['International Food','',''],
      },
      {
        id:8,
        name:'Fondue au fromage',
        cookTime:'10-15',
        price:12 ,
        origin: ['italy'],
        star: 4.5,
        imageUrl:'/assets/Fondu au fromage.jpg',
        tags: ['International Food','',''],
      }






    ];
}
}
