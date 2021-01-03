import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
export interface PeriodicElement {
  name: string;
  logo: string;
  Rank: number;
  Point: number;
  Match: number;
  Win: number;
  Draw: number;
  Lose: number;
  GF: number;
  GA: number;
  GD: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    Rank: 1,
    logo: 'vi/f/f4/Atletico_Madrid_2017_logo.svg',
    name: 'Atlético',
    Match:12,
    Point: 29,
    Win: 9,
    Draw: 2,
    Lose: 1,
    GF: 24,
    GA: 5,
    GD: '+19',

  },
  {
    Rank: 2,
    logo: 'en/thumb/5/56/Real_Madrid_CF.svg/1200px-Real_Madrid_CF.svg.png',
    name: 'Real Madrid',
    Point: 29,
    Win: 9,
    Draw: 2,
    Lose: 3,
    GF: 25,
    GA: 14,
    GD: '+11',
    Match:14,
  },
  {
    Rank: 3,
    logo: 'en/thumb/f/f1/Real_Sociedad_logo.svg/180px-Real_Sociedad_logo.svg.png',
    name: '	Real Sociedad',
    Point: 26,
    Win: 7,
    Draw: 5,
    Lose: 3,
    GF: 25,
    GA: 10,
    GD: '+15',
    Match:15,
  },
  {
    Rank: 4,
    logo: 'en/thumb/7/70/Villarreal_CF_logo.svg/1200px-Villarreal_CF_logo.svg.png',
    name: '	Villarreal',
    Point: 25,
    Win: 6,
    Draw: 7,
    Lose: 1,
    GF: 19,
    GA: 13,
    GD: '+11',
    Match:14,
  },
  {
    Rank: 5,
    logo: 'vi/thumb/9/91/FC_Barcelona_logo.svg/592px-FC_Barcelona_logo.svg.png',
    name: '	Barcelona',
    Point: 21,
    Win: 6,
    Draw: 3,
    Lose: 4,
    GF: 25,
    GA: 14,
    GD: '+11',
    Match:13,
  },
  {
    Rank: 6,
    logo: 'en/0/0d/Grenada_logo.png',
    name: 'Granada',
    Point: 21,
    Win: 6,
    Draw: 3,
    Lose: 4,
    GF: 17,
    GA: 20,
    GD: '-3',
    Match:13,
  },
  {
    Rank: 7,
    logo: 'vi/a/ae/Sevilla_FC_logo.png',
    name: 'Sevilla',
    Point: 20,
    Win: 6,
    Draw: 2,
    Lose: 4,
    GF: 14,
    GA: 10,
    GD: '+4',
    Match:12,
  },
  {
    Rank: 8,
    logo: 'en/thumb/1/12/RC_Celta_de_Vigo_logo.svg/1200px-RC_Celta_de_Vigo_logo.svg.png',
    name: '	Celta de Vigo',
    Point: 19,
    Win: 5,
    Draw: 4,
    Lose: 5,
    GF: 19,
    GA: 20,
    GD: '-1',
    Match:14,
  },
  {
    Rank: 9,
    logo: 'en/thumb/5/58/C%C3%A1diz_CF_logo.svg/150px-C%C3%A1diz_CF_logo.svg.png',
    name: 'Cádiz',
    Point: 18,
    Win: 5,
    Draw: 3,
    Lose: 6,
    GF: 11,
    GA: 19,
    GD: '-8',
    Match:14,
  },
  {
    Rank: 10,
    logo: 'vi/8/8c/Athletic_c_de_bilbao.gif',
    name: 'Athletic Club',
    Point: 17,
    Win: 5,
    Draw: 2,
    Lose: 7,
    GF: 17,
    GA: 17,
    GD: '0',
    Match:14,
  },
  {
    Rank: 11,
    logo: 'vi/7/7f/Getafe_logo.png',
    name: 'Getafe',
    Point: 16,
    Win: 4,
    Draw: 4,
    Lose: 5,
    GF: 11,
    GA: 14,
    GD: '-3',
    Match:13,
  },
  {
    Rank: 12,
    logo: 'en/thumb/1/13/Real_betis_logo.svg/1200px-Real_betis_logo.svg.png',
    name: '	Real Betis',
    Point: 16,
    Win: 5,
    Draw: 1,
    Lose: 8,
    GF: 15,
    GA: 26,
    GD: '-11',
    Match:14,
  },
  {
    Rank: 13,
    logo: 'vi/f/fe/Valenciacf.png',
    name: 'Valencia',
    Point: 15,
    Win: 3,
    Draw: 6,
    Lose: 5,
    GF: 21,
    GA: 21,
    GD: '0',
    Match:14,
  },
  {
    Rank: 14,
    logo: 'en/thumb/3/3b/SD_Eibar_logo_2016.svg/1200px-SD_Eibar_logo_2016.svg.png',
    name: '	Eibar',
    Point: 15,
    Win: 3,
    Draw: 6,
    Lose: 5,
    GF: 10,
    GA: 13,
    GD: '-3',
    Match:14,
  },
  {
    Rank: 15,
    logo: 'en/thumb/7/7b/Levante_Uni%C3%B3n_Deportiva%2C_S.A.D._logo.svg/1200px-Levante_Uni%C3%B3n_Deportiva%2C_S.A.D._logo.svg.png',
    name: 'Levante',
    Point: 14,
    Win: 3,
    Draw: 5,
    Lose: 5,
    GF: 15,
    GA: 17,
    GD: '-2',
    Match:14,
  },
  {
    Rank: 16,
    logo: 'en/thumb/a/a7/Elche_CF_logo.svg/1200px-Elche_CF_logo.svg.png',
    name: '	Elche',
    Point: 14,
    Win: 3,
    Draw: 5,
    Lose: 4,
    GF: 10,
    GA: 14,
    GD: '-4',
    Match:12,
  },
  {
    Rank: 17,
    logo: 'en/f/f8/Deportivo_Alaves_logo_%282020%29.svg',
    name: 'Deportivo Alavés',
    Point: 14,
    Win: 3,
    Draw: 5,
    Lose: 6,
    GF: 11,
    GA: 16,
    GD: '-5',
    Match:14,
  },
  {
    Rank: 18,
    logo: 'en/thumb/6/6e/Real_Valladolid_Logo.svg/1200px-Real_Valladolid_Logo.svg.png',
    name: '	Real Valladolid',
    Point: 14,
    Win: 3,
    Draw: 5,
    Lose: 6,
    GF: 15,
    GA: 21,
    GD: '-6',
    Match:14,
  },
  {
    Rank: 19,
    logo: 'en/thumb/8/8a/Logo_of_SD_Huesca.svg/1200px-Logo_of_SD_Huesca.svg.png',
    name: 'Huesca',
    Point: 11,
    Win: 1,
    Draw: 8,
    Lose: 5,
    GF: 12,
    GA: 22,
    GD: '-10',
    Match:14,
  },
  {
    Rank: 20,
    logo: 'vi/5/53/Ca_osasuna.png',
    name: 'Osasuna',
    Point: 2,
    Win: 3,
    Draw: 2,
    Lose: 8,
    GF: 11,
    GA: 21,
    GD: '-10',
    Match:13,
  },
];
@Component({
  selector: 'app-rank-la-liga',
  templateUrl: './rank-la-liga.component.html',
  styleUrls: ['./rank-la-liga.component.css'],

})
export class RankLaLigaComponent implements OnInit {
  active = 'top';
  constructor() {}

  ngOnInit(): void {}
  displayedColumns: string[] = [
    'Rank',
    'name',
    'Match',
    'Win',
    'Draw',
    'Lose',
    'GF',
    'GA',
    'GD',
    'Point',
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}