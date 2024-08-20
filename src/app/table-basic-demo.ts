import { Component, OnInit } from '@angular/core';
import { ImportsModule } from './imports';
import { Product } from '@domain/product';
import { ProductService } from '@service/productservice';
@Component({
    selector: 'table-basic-demo',
    templateUrl: 'table-basic-demo.html',
    standalone: true,
    imports: [ImportsModule],
    providers: [ProductService]
})

export class TableBasicDemo implements OnInit {
    products!: Product[];

    themes = [
        { name: 'Light', value: 'lara-light-blue' },
        { name: 'Dark', value: 'lara-dark-blue' }
      ];

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.productService.getProductsMini().then((data) => {
            this.products = data;
        });
        // this.changeTheme();
    }

    changeTheme(theme: string = 'lara-dark-blue') {
        let themeLink = document.getElementById('theme-link') as HTMLLinkElement;
        if (themeLink) {
          themeLink.href = `/assets/${theme}/theme.css`;
        } else {
          themeLink = document.createElement('link');
          themeLink.id = 'theme-link';
          themeLink.rel = 'stylesheet';
          themeLink.href = `/assets/${theme}/theme.css`;
          document.head.appendChild(themeLink);
        }
      }
}