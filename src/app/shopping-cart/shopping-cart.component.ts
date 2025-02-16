import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [CurrencyPipe, CommonModule, MatIconModule],
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {
  cartItems = [
    {
      name: 'Smartphone Samsung Galaxy S21',
      price: 2999.99,
      quantity: 1,
      image: 'https://samsungbrshop.vtexassets.com/arquivos/ids/222466/image-147812a827ce414cbeecb5bb91eecb25-1-.jpg?v=638315272752900000'
    },
    {
      name: 'Notebook Dell Inspiron 15',
      price: 4500.00,
      quantity: 1,
      image: 'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/inspiron-notebooks/15-3520/media-gallery/in3520-cnb-05000ff090-sl.psd?fmt=png-alpha&pscan=auto&scl=1&wid=3319&hei=2405&qlt=100,0&resMode=sharp2&size=3319,2405'
    },
    {
      name: 'Fone de Ouvido Sony WH-1000XM4',
      price: 1499.99,
      quantity: 2,
      image: 'https://m.media-amazon.com/images/I/61oqO1AMbdL._AC_UF1000,1000_QL80_.jpg'
    },
    {
      name: 'Smart TV LG 55" 4K UHD',
      price: 3499.99,
      quantity: 1,
      image: 'https://i.zst.com.br/thumbs/12/1f/1f/-1058297971.jpg'
    },
    {
      name: 'Câmera Canon EOS Rebel T7',
      price: 2799.99,
      quantity: 1,
      image: 'https://m.media-amazon.com/images/I/71PMCXRxt4L._AC_UF894,1000_QL80_.jpg'
    },
    {
      name: 'Console PlayStation 5',
      price: 4999.99,
      quantity: 1,
      image: 'https://gmedia.playstation.com/is/image/SIEPDC/ps5-product-thumbnail-01-en-14sep21?$1600px$'
    },
    {
      name: 'Tablet Apple iPad Pro 11"',
      price: 7999.99,
      quantity: 1,
      image: 'https://m.media-amazon.com/images/I/619vJME1gDS._AC_UF1000,1000_QL80_.jpg'
    },
    {
      name: 'Mochila para Notebook Dell',
      price: 199.99,
      quantity: 3,
      image: 'https://eletronicasantana.vteximg.com.br/arquivos/ids/101564-1000-1000/Mochila-para-Notebook-17-Dell-Pro-EcooLoop-460-BDLK-2.jpg?v=638061040379970000'
    },
    {
      name: 'Mouse Gamer Logitech G502',
      price: 399.99,
      quantity: 2,
      image: 'https://resource.logitechg.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/g502-hero/g502-hero-gallery-1.png?v=1'
    },
    {
      name: 'Teclado Mecânico HyperX Alloy FPS',
      price: 599.99,
      quantity: 1,
      image: 'https://http2.mlstatic.com/D_NQ_NP_874714-MLU75814158284_042024-O.webp'
    }
  ];

  // Aumenta a quantidade de um item
  increaseQuantity(item: any): void {
    item.quantity++;
  }

  // Diminui a quantidade de um item (não permite quantidade negativa)
  decreaseQuantity(item: any): void {
    if (item.quantity > 1) {
      item.quantity--;
    }
  }

  // Remove um item do carrinho
  removeItem(item: any): void {
    this.cartItems = this.cartItems.filter(i => i !== item);
  }

  // Calcula o valor total do carrinho
  getTotal(): number {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  // Finaliza a compra
  checkout(): void {
    alert('Compra finalizada!');
  }
}
