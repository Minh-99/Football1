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
    logo:
      'commons/thumb/d/d0/Logo_of_AC_Milan.svg/1200px-Logo_of_AC_Milan.svg.png',
    name: '	Milan',
    Match: 13,
    Point: 31,
    Win: 9,
    Draw: 4,
    Lose: 0,
    GF: 29,
    GA: 14,
    GD: '+15',
  },
  {
    Rank: 2,
    logo:
      'commons/thumb/8/89/FC_Internazionale_Milano_2014.svg/180px-FC_Internazionale_Milano_2014.svg.png',
    name: 'Inter ',
    Point: 30,
    Win: 9,
    Draw: 3,
    Lose: 1,
    GF: 32,
    GA: 16,
    GD: '+16',
    Match: 13,
  },
  {
    Rank: 3,
    logo: 'commons/thumb/2/2d/SSC_Neapel.svg/1200px-SSC_Neapel.svg.png',
    name: ' Napoli ',
    Point: 24,
    Win: 8,
    Draw: 0,
    Lose: 4,
    GF: 26,
    GA: 11,
    GD: '+15',
    Match: 12,
  },
  {
    Rank: 4,
    logo:
      'commons/thumb/b/bc/Juventus_FC_2017_icon_%28black%29.svg/1200px-Juventus_FC_2017_icon_%28black%29.svg.png',
    name: 'Juventus ',
    Point: 24,
    Win: 6,
    Draw: 6,
    Lose: 1,
    GF: 25,
    GA: 13,
    GD: '+12',
    Match: 13,
  },
  {
    Rank: 5,
    logo:
      'en/thumb/f/f7/AS_Roma_logo_%282017%29.svg/1200px-AS_Roma_logo_%282017%29.svg.png',
    name: '	Roma',
    Point: 24,
    Win: 7,
    Draw: 3,
    Lose: 3,
    GF: 28,
    GA: 21,
    GD: '+7',
    Match: 13,
  },
  {
    Rank: 6,
    logo:
      'en/thumb/1/1c/US_Sassuolo_Calcio_logo.svg/1200px-US_Sassuolo_Calcio_logo.svg.png',
    name: 'Sassuolo',
    Point: 23,
    Win: 6,
    Draw: 5,
    Lose: 2,
    GF: 23,
    GA: 15,
    GD: '+8',
    Match: 13,
  },
  {
    Rank: 7,
    logo: 'en/thumb/6/66/AtalantaBC.svg/1200px-AtalantaBC.svg.png',
    name: '	Atalanta',
    Point: 21,
    Win: 6,
    Draw: 3,
    Lose: 3,
    GF: 26,
    GA: 18,
    GD: '+8',
    Match: 12,
  },
  {
    Rank: 8,
    logo: 'en/thumb/c/ce/S.S._Lazio_badge.svg/1200px-S.S._Lazio_badge.svg.png',
    name: 'Lazio',
    Point: 21,
    Win: 6,
    Draw: 3,
    Lose: 4,
    GF: 20,
    GA: 20,
    GD: '0',
    Match: 13,
  },
  {
    Rank: 9,
    logo:
      'en/thumb/9/92/Hellas_Verona_FC_logo_%282020%29.svg/180px-Hellas_Verona_FC_logo_%282020%29.svg.png',
    name: 'Verona',
    Point: 20,
    Win: 5,
    Draw: 5,
    Lose: 3,
    GF: 17,
    GA: 12,
    GD: '+5',
    Match: 13,
  },
  {
    Rank: 10,
    logo:
      'en/thumb/d/d2/U.C._Sampdoria_logo.svg/1200px-U.C._Sampdoria_logo.svg.png',
    name: 'Sampdoria',
    Point: 17,
    Win: 5,
    Draw: 2,
    Lose: 6,
    GF: 21,
    GA: 21,
    GD: '0',
    Match: 13,
  },
  {
    Rank: 11,
    logo:
      'en/thumb/c/ce/Udinese_Calcio_logo.svg/1200px-Udinese_Calcio_logo.svg.png',
    name: '	Udinese',
    Point: 15,
    Win: 4,
    Draw: 3,
    Lose: 5,
    GF: 14,
    GA: 15,
    GD: '-1',
    Match: 12,
  },
  {
    Rank: 12,
    logo:
      'en/thumb/6/61/Benevento_Calcio_logo.svg/1200px-Benevento_Calcio_logo.svg.png',
    name: 'Benevento',
    Point: 15,
    Win: 4,
    Draw: 3,
    Lose: 6,
    GF: 15,
    GA: 23,
    GD: '-8',
    Match: 13,
  },
  {
    Rank: 13,
    logo: 'en/6/61/Cagliari_Calcio_1920.svg',
    name: '	Cagliari',
    Point: 14,
    Win: 3,
    Draw: 5,
    Lose: 5,
    GF: 19,
    GA: 24,
    GD: '-5',
    Match: 13,
  },
  {
    Rank: 14,
    logo:
      'en/thumb/5/5b/Bologna_F.C._1909_logo.svg/1200px-Bologna_F.C._1909_logo.svg.png',
    name: 'Bologna',
    Point: 14,
    Win: 4,
    Draw: 2,
    Lose: 7,
    GF: 19,
    GA: 25,
    GD: '-6',
    Match: 13,
  },
  {
    Rank: 15,
    logo: 'commons/thumb/7/79/ACF_Fiorentina.svg/1200px-ACF_Fiorentina.svg.png',
    name: 'Fiorentina',
    Point: 14,
    Win: 3,
    Draw: 5,
    Lose: 6,
    GF: 16,
    GA: 21,
    GD: '-5',
    Match: 14,
  },

  {
    Rank: 16,
    logo:
      'commons/thumb/9/97/Logo_Parma_Calcio_1913_%28adozione_2016%29.svg/1200px-Logo_Parma_Calcio_1913_%28adozione_2016%29.svg.png',
    name: '	Parma',
    Point: 12,
    Win: 2,
    Draw: 6,
    Lose: 6,
    GF: 13,
    GA: 25,
    GD: '-12',
    Match: 14,
  },
  {
    Rank: 17,
    logo: 'commons/thumb/a/aa/Spezia_Calcio.svg/1200px-Spezia_Calcio.svg.png',
    name: '	Spezia',
    Point: 11,
    Win: 2,
    Draw: 5,
    Lose: 6,
    GF: 18,
    GA: 27,
    GD: '-9',
    Match: 13,
  },
  {
    Rank: 18,
    logo: 'en/d/db/FC_Crotone_logo.svg',
    name: 'Crotone',
    Point: 9,
    Win: 2,
    Draw: 3,
    Lose: 9,
    GF: 13,
    GA: 29,
    GD: '-16',
    Match: 14,
  },
  {
    Rank: 19,
    logo: 'en/thumb/2/2e/Torino_FC_Logo.svg/1200px-Torino_FC_Logo.svg.png',
    name: '	Torino',
    Point: 7,
    Win: 1,
    Draw: 4,
    Lose: 8,
    GF: 21,
    GA: 31,
    GD: '-10',
    Match: 13,
  },
  {
    Rank: 20,
    logo:
      'en/thumb/6/6c/Genoa_C.F.C._logo.svg/1200px-Genoa_C.F.C._logo.svg.png',
    name: '	Genoa',
    Point: 7,
    Win: 1,
    Draw: 4,
    Lose: 8,
    GF: 12,
    GA: 26,
    GD: '-14',
    Match: 13,
  },
];

@Component({
  selector: 'app-rank-serie-a',
  templateUrl: './rank-serie-a.component.html',
  styleUrls: ['./rank-serie-a.component.css'],
})

export class RankSerieAComponent implements OnInit {
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
