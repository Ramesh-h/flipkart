import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  products: any = [
    {
      _id: 4,
      title: 'Blue jins',
      isNew: true,
      oldPrice: '70',
      price: 50,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.',
      category: 'women',
      image:
        'https://images.pexels.com/photos/1485031/pexels-photo-1485031.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 3,
    },
    {
      _id: 5,
      title: 'Skirts with full setup',
      isNew: true,
      oldPrice: '800',
      price: 695,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.',
      category: 'women',
      image:
        'https://images.pexels.com/photos/1631181/pexels-photo-1631181.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 5,
    },
    {
      _id: 6,
      title: 'Yellow Hoody',
      isNew: false,
      oldPrice: '200',
      price: 180,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.',
      category: 'men',
      image:
        'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 4,
    },
    {
      _id: 7,
      title: 'Black t-shirt for women',
      isNew: false,
      oldPrice: '60',
      price: 20,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.',
      category: 'women',
      image:
        'https://images.pexels.com/photos/2010812/pexels-photo-2010812.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 2,
    },

    {
      _id: 9,
      title: 'Pink beauty',
      isNew: false,
      oldPrice: '150',
      price: 100,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.',
      category: 'women',
      image:
        'https://images.pexels.com/photos/2065195/pexels-photo-2065195.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 3,
    },

    {
      _id: 11,
      title: 'Jamdani Saree',
      isNew: false,
      oldPrice: '1000',
      price: 800,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.',
      category: 'women',
      image:
        'https://images.pexels.com/photos/3363204/pexels-photo-3363204.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 4,
    },

    {
      _id: 13,
      title: 'Black top with jeans',
      isNew: false,
      oldPrice: '130',
      price: 120,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.',
      category: 'women',
      image:
        'https://images.pexels.com/photos/3672825/pexels-photo-3672825.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 4,
    },
    {
      _id: 14,
      title: 'Clothes with bag',
      isNew: false,
      oldPrice: '80',
      price: 50,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.',
      category: 'kids',
      image:
        'https://images.pexels.com/photos/36029/aroni-arsa-children-little.jpg?auto=compress&cs=tinysrgb&w=600',
      rating: 2,
    },

    {
      _id: 16,
      title: 'Unknown horizon',
      isNew: false,
      oldPrice: '400',
      price: 350,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.',
      category: 'men',
      image:
        'https://images.pexels.com/photos/2866077/pexels-photo-2866077.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 4,
    },

    {
      _id: 18,
      title: 'Khakhi jeans',
      isNew: false,
      oldPrice: '250',
      price: 190,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.',
      category: 'women',
      image:
        'https://images.pexels.com/photos/3054973/pexels-photo-3054973.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 4,
    },
    {
      _id: 19,
      title: 'Black full sleeve',
      isNew: false,
      oldPrice: '180',
      price: 170,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.',
      category: 'women',
      image:
        'https://images.pexels.com/photos/2693849/pexels-photo-2693849.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 3,
    },
    {
      _id: 20,
      title: 'Formal for Men',
      isNew: false,
      oldPrice: '500',
      price: 490,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.',
      category: 'women',
      image:
        'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 5,
    },
  ];
}
