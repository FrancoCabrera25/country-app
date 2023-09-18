import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrls: ['./by-capital-page.component.scss'],
})
export class ByCapitalPageComponent {

  public countries: Country[] = [];
  constructor(private countriesService: CountriesService){}
  searchByCapital(term: string) {
    console.log('team search capital', term);

    this.countriesService.searchByCapital(term)
    .subscribe(countries => {
      this.countries = countries;
      console.log(countries);
    })
  }
}
