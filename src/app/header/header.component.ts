import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  searchForm: any;
  filteredItems: any = [];
  categories = [
    { name: 'Top Offers', items: [] },
    { name: 'Mobiles', items: [] },
    {
      name: "Men's top wear",
      items: [
        'All',
        "Men's Tshirts",
        "Men's Casual Shirts",
        "Men's Formal Shirts",
        "Men's Kurtas",
      ],
    },
    {
      name: "Men's bottom wear",
      items: [
        'All',
        "Men's Jeans",
        "Men's Trousers",
        "Men's Track Pants",
        "Men's Shorts",
        "Men's Cargos",
        "Men's Three Fourth",
      ],
    },
    {
      name: "Women's ethnic",
      items: [
        'Women Sarees',
        'Women Kurtas & Kurtis',
        'Women Kurtas sets & salwar suits',
        'Women Ethnic Dress',
        'Women Gowns',
      ],
    },
    {
      name: "Men's footwear",
      items: [
        'All',
        "Men's Sports Shoes",
        "Men's Casual Shoes",
        "Men's Sandals & Floaters",
      ],
    },
    {
      name: 'Audio',
      items: [
        'All',
        'Bluetooth headphones',
        'Wired Headphones',
        'True Wireless Earbuds',
        'Bluetooth Speakers',
      ],
    },
    { name: 'Electronics GST Store', items: [] },
    {
      name: 'Camera & Accessories',
      items: [
        'All',
        'DSLR & mirrorless',
        'Sports & Action',
        'Point & Shoot',
        'Instant Cameras',
        'Camera tripods',
        'Camera Lenses',
      ],
    },
    {
      name: 'Computer Peripherals',
      items: [
        'Printers',
        'Monitors',
        'Projectors',
        'Portable Projectors',
        'Ink bottles',
      ],
    },
    {
      name: 'Home Furnishings',
      items: ['All', 'Beds linens', 'Bedsheets', 'Blankets', 'Bath linens'],
    },
    {
      name: 'Living room furniture',
      items: ['All', 'TV units', 'Dining sets', 'Sofa beds', 'Recliners'],
    },
    { name: 'Kitchen & Dining', items: [] },
    { name: 'Bedroom Furniture', items: [] },
  ];

  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      searchInput: '',
    });
  }
  ngOnInit(): void {}

  private _filter(value: any) {
    console.log(value);

    const filterValue = value.toLowerCase();

    // return this.categories.filter((option: any) =>
    //   option.toLowerCase().includes(filterValue)
    // );
  }
  inputVal(e: any) {
    if (this.searchForm.get('searchInput').value) {
      this.filteredItems = this.searchForm.get('searchInput').valueChanges.pipe(
        startWith(''),
        map((value: any) => this._filter(value || ''))
      );
    }
  }
}
