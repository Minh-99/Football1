import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
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
    logo: 'en/thumb/3/3f/Lille_OSC_2018_logo.svg/1200px-Lille_OSC_2018_logo.svg.png',
    name: '	Lille',
    Match:16,
    Point: 33,
    Win: 9,
    Draw: 6,
    Lose: 1,
    GF: 28,
    GA: 10,
    GD: '+18',

  },
  {
    Rank: 2,
    logo: 'en/thumb/c/c6/Olympique_Lyonnais.svg/1200px-Olympique_Lyonnais.svg.png',
    name: 'Lyon',
    Point: 33,
    Win: 9,
    Draw: 6,
    Lose: 1,
    GF: 31,
    GA: 14,
    GD: '+17',
    Match:16,
  },
  {
    Rank: 3,
    logo: 'vi/thumb/a/a7/Paris_Saint-Germain_F.C..svg/1200px-Paris_Saint-Germain_F.C..svg.png',
    name: '	PSG',
    Point: 32,
    Win: 10,
    Draw: 2,
    Lose: 4,
    GF: 35,
    GA: 10,
    GD: '+25',
    Match:16,
  },
  {
    Rank: 4,
    logo: 'commons/thumb/d/d8/Olympique_Marseille_logo.svg/1200px-Olympique_Marseille_logo.svg.png',
    name: 'Marseille',
    Point: 28,
    Win: 8,
    Draw: 4,
    Lose: 2,
    GF: 21,
    GA: 13,
    GD: '+8',
    Match:14,
  },
  {
    Rank: 5,
    logo: 'en/thumb/9/9e/Stade_Rennais_FC.svg/1200px-Stade_Rennais_FC.svg.png',
    name: '	Rennes',
    Point: 28,
    Win: 8,
    Draw: 4,
    Lose: 4,
    GF: 25,
    GA: 19,
    GD: '+6',
    Match:16,
  },
  {
    Rank: 6,
    logo: 'en/a/a8/Montpellier_HSC_logo.svg',
    name: '	Montpellier',
    Point: 27,
    Win: 8,
    Draw: 3,
    Lose: 5,
    GF: 27,
    GA: 25,
    GD: '+2',
    Match:16,
  },
  {
    Rank: 7,
    logo: 'vi/e/e1/AS_Monaco_Logo.png',
    name: 'Monaco',
    Point: 26,
    Win: 8,
    Draw: 2,
    Lose: 6,
    GF: 26,
    GA: 23,
    GD: '+3',
    Match:16,
  },
  {
    Rank: 8,
    logo: 'en/thumb/c/cc/RC_Lens_logo.svg/1200px-RC_Lens_logo.svg.png',
    name: 'Lens',
    Point: 24,
    Win: 7,
    Draw: 3,
    Lose: 5,
    GF: 24,
    GA: 23,
    GD: '+1',
    Match:15,
  },
  {
    Rank: 9,
    logo: 'en/thumb/d/d4/Angers_SCO_logo.svg/1200px-Angers_SCO_logo.svg.png',
    name: 'Angers',
    Point: 24,
    Win: 7,
    Draw: 3,
    Lose: 6,
    GF: 21,
    GA: 25,
    GD: '-4',
    Match:16,
  },
  {
    Rank: 10,
    logo: 'en/thumb/7/71/FC_Metz_logo.svg/1200px-FC_Metz_logo.svg.png',
    name: 'Metz',
    Point: 23,
    Win: 6,
    Draw: 5,
    Lose: 5,
    GF: 19,
    GA: 16,
    GD: '+3',
    Match:16,
  },
  {
    Rank: 11,
    logo: 'en/thumb/0/05/Stade_Brestois_29_logo.svg/1200px-Stade_Brestois_29_logo.svg.png',
    name: '	Brest',
    Point: 23,
    Win: 7,
    Draw: 2,
    Lose: 7,
    GF: 27,
    GA: 29,
    GD: '-2',
    Match:16,
  },
  {
    Rank: 12,
    logo: 'en/thumb/a/a1/FC_Girondins_de_Bordeaux_%282020%29_logo.svg/1200px-FC_Girondins_de_Bordeaux_%282020%29_logo.svg.png',
    name: '	Bordeaux',
    Point: 22,
    Win: 6,
    Draw: 4,
    Lose: 6,
    GF: 17,
    GA: 17,
    GD: '0',
    Match:16,
  },
  {
    Rank: 13,
    logo: 'en/thumb/2/2e/OGC_Nice_logo.svg/1200px-OGC_Nice_logo.svg.png',
    name: 'Nice',
    Point: 21,
    Win: 6,
    Draw: 3,
    Lose: 6,
    GF: 19,
    GA: 20,
    GD: '-1',
    Match:15,
  },
  {
    Rank: 14,
    logo: 'commons/thumb/2/2c/Logo_AS_Saint-%C3%89tienne.svg/1200px-Logo_AS_Saint-%C3%89tienne.svg.png',
    name: 'Saint-Étienne',
    Point: 17,
    Win: 4,
    Draw: 5,
    Lose: 7,
    GF: 16,
    GA: 23,
    GD: '-7',
    Match:16,
  },
  {
    Rank: 15,
    logo: 'commons/6/68/FC-Nantes-blason-rvb.png',
    name: 'Nantes',
    Point: 15,
    Win: 3,
    Draw: 6,
    Lose: 7,
    GF: 18,
    GA: 27,
    GD: '-9',
    Match:16,
  },
  {
    Rank: 16,
    logo: 'en/thumb/8/80/Racing_Club_de_Strasbourg_logo.svg/1200px-Racing_Club_de_Strasbourg_logo.svg.png',
    name: '	Strasbourg',
    Point: 14,
    Win: 4,
    Draw: 2,
    Lose: 10,
    GF: 22,
    GA: 28,
    GD: '-6',
    Match:16,
  },
  {
    Rank: 17,
    logo: 'vi/c/cb/Stade_de_Reims.png',
    name: '	Reims',
    Point: 12,
    Win: 3,
    Draw: 5,
    Lose: 8,
    GF: 21,
    GA: 27,
    GD: '-6',
    Match:16,
  },
  {
    Rank: 18,
    logo: 'en/thumb/0/05/N%C3%AEmes_Olympique_2018_logo.svg/1200px-N%C3%AEmes_Olympique_2018_logo.svg.png',
    name: 'Nîmes',
    Point: 12,
    Win: 3,
    Draw: 3,
    Lose: 10,
    GF: 13,
    GA: 31,
    GD: '-18',
    Match:16,
  },
  {
    Rank: 19,
    logo: 'en/thumb/4/4c/FC_Lorient_logo.svg/1200px-FC_Lorient_logo.svg.png',
    name: 'Lorient',
    Point: 11,
    Win: 3,
    Draw: 2,
    Lose: 11,
    GF: 15,
    GA: 29,
    GD: '-14',
    Match:16,
  },
  {
    Rank: 20,
    logo: 'en/thumb/f/f7/Dijon_FCO_logo.svg/1200px-Dijon_FCO_logo.svg.png',
    name: '	Dijon',
    Point: 9,
    Win: 1,
    Draw: 6,
    Lose: 9,
    GF: 9,
    GA: 25,
    GD: '-16',
    Match:16,
  },
];

@Component({
  selector: 'app-france',
  templateUrl: './france.component.html',
  styleUrls: ['./france.component.css']
})
export class FranceComponent implements OnInit {

  active = 'top';
  constructor() { }

  ngOnInit(): void {
  }
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
