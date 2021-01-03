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
      'commons/thumb/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg/1200px-FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg.png',
    name: '		Bayern München	  ',
    Match: 13,
    Point: 30,
    Win: 9,
    Draw: 3,
    Lose: 1,
    GF: 39,
    GA: 19,
    GD: '+20',
  },
  {
    Rank: 2,
    logo:
      'sco/thumb/5/59/Bayer_04_Leverkusen_logo.svg/1200px-Bayer_04_Leverkusen_logo.svg.png',
    name: 'Leverkusen ',
    Point: 28,
    Win: 8,
    Draw: 4,
    Lose: 1,
    GF: 28,
    GA: 12,
    GD: '+16',
    Match: 13,
  },
  {
    Rank: 3,
    logo:
      'en/thumb/0/04/RB_Leipzig_2014_logo.svg/1200px-RB_Leipzig_2014_logo.svg.png',
    name: ' Leipzig ',
    Point: 28,
    Win: 8,
    Draw: 4,
    Lose: 1,
    GF: 24,
    GA: 9,
    GD: '+15',
    Match: 13,
  },
  {
    Rank: 4,
    logo:
      'commons/thumb/f/f3/Logo-VfL-Wolfsburg.svg/1200px-Logo-VfL-Wolfsburg.svg.png',
    name: '	Wolfsburg ',
    Point: 24,
    Win: 6,
    Draw: 6,
    Lose: 1,
    GF: 20,
    GA: 13,
    GD: '+7',
    Match: 13,
  },
  {
    Rank: 5,
    logo:
      'commons/thumb/6/67/Borussia_Dortmund_logo.svg/1200px-Borussia_Dortmund_logo.svg.png',
    name: '	Dortmund',
    Point: 22,
    Win: 7,
    Draw: 1,
    Lose: 5,
    GF: 26,
    GA: 18,
    GD: '+8',
    Match: 13,
  },
  {
    Rank: 6,
    logo: 'commons/4/44/1._FC_Union_Berlin_Logo.svg',
    name: 'Union Berlin',
    Point: 21,
    Win: 5,
    Draw: 6,
    Lose: 2,
    GF: 27,
    GA: 18,
    GD: '+9',
    Match: 13,
  },
  {
    Rank: 7,
    logo:
      'commons/thumb/e/eb/VfB_Stuttgart_1893_Logo.svg/1200px-VfB_Stuttgart_1893_Logo.svg.png',
    name: 'Stuttgart',
    Point: 18,
    Win: 4,
    Draw: 6,
    Lose: 3,
    GF: 26,
    GA: 20,
    GD: '+6',
    Match: 13,
  },
  {
    Rank: 8,
    logo:
      'commons/thumb/8/81/Borussia_M%C3%B6nchengladbach_logo.svg/160px-Borussia_M%C3%B6nchengladbach_logo.svg.png',
    name: "M'gladbach",
    Point: 18,
    Win: 4,
    Draw: 6,
    Lose: 3,
    GF: 24,
    GA: 22,
    GD: '+2',
    Match: 13,
  },
  {
    Rank: 9,
    logo:
      'commons/thumb/0/04/Eintracht_Frankfurt_Logo.svg/1200px-Eintracht_Frankfurt_Logo.svg.png',
    name: 'Frankfurt',
    Point: 17,
    Win: 3,
    Draw: 8,
    Lose: 2,
    GF: 21,
    GA: 22,
    GD: '-1',
    Match: 13,
  },
  {
    Rank: 10,
    logo: 'en/thumb/6/6d/SC_Freiburg_logo.svg/1200px-SC_Freiburg_logo.svg.png',
    name: 'Freiburg ',
    Point: 17,
    Win: 4,
    Draw: 5,
    Lose: 4,
    GF: 20,
    GA: 23,
    GD: '-3',
    Match: 13,
  },
  {
    Rank: 11,
    logo: 'en/thumb/c/c5/FC_Augsburg_logo.svg/1200px-FC_Augsburg_logo.svg.png',
    name: '	Augsburg',
    Point: 16,
    Win: 4,
    Draw: 4,
    Lose: 5,
    GF: 15,
    GA: 19,
    GD: '-4',
    Match: 13,
  },
  {
    Rank: 12,
    logo:
      'commons/thumb/e/e7/Logo_TSG_Hoffenheim.svg/1200px-Logo_TSG_Hoffenheim.svg.png',
    name: 'Hoffenheim',
    Point: 15,
    Win: 4,
    Draw: 3,
    Lose: 6,
    GF: 21,
    GA: 23,
    GD: '-2',
    Match: 13,
  },
  {
    Rank: 13,
    logo:
      'commons/thumb/b/be/SV-Werder-Bremen-Logo.svg/1200px-SV-Werder-Bremen-Logo.svg.png',
    name: 'Bremen',
    Point: 14,
    Win: 3,
    Draw: 5,
    Lose: 5,
    GF: 16,
    GA: 21,
    GD: '-5',
    Match: 13,
  },
  {
    Rank: 14,
    logo:
      'commons/thumb/8/81/Hertha_BSC_Logo_2012.svg/1200px-Hertha_BSC_Logo_2012.svg.png',
    name: '	Hertha BSC',
    Point: 13,
    Win: 3,
    Draw: 4,
    Lose: 6,
    GF: 20,
    GA: 24,
    GD: '-4',
    Match: 13,
  },
  {
    Rank: 15,
    logo: 'en/thumb/5/53/FC_Cologne_logo.svg/175px-FC_Cologne_logo.svg.png',
    name: 'Köln',
    Point: 11,
    Win: 2,
    Draw: 5,
    Lose: 6,
    GF: 13,
    GA: 21,
    GD: '-8',
    Match: 13,
  },

  {
    Rank: 16,
    logo:
      'en/thumb/9/9b/Arminia_Bielefeld_logo.svg/1200px-Arminia_Bielefeld_logo.svg.png',
    name: '		Bielefeld',
    Point: 10,
    Win: 3,
    Draw: 1,
    Lose: 9,
    GF: 9,
    GA: 23,
    GD: '-14',
    Match: 13,
  },
  {
    Rank: 17,
    logo: 'commons/thumb/9/9e/Logo_Mainz_05.svg/1200px-Logo_Mainz_05.svg.png',
    name: '		Mainz 05',
    Point: 6,
    Win: 1,
    Draw: 3,
    Lose: 9,
    GF: 12,
    GA: 26,
    GD: '-14',
    Match: 13,
  },
  {
    Rank: 18,
    logo:
      'commons/thumb/6/6d/FC_Schalke_04_Logo.svg/768px-FC_Schalke_04_Logo.svg.png',
    name: 'Schalke 04',
    Point: 4,
    Win: 0,
    Draw: 4,
    Lose: 9,
    GF: 8,
    GA: 36,
    GD: '-16',
    Match: 14,
  },
];
@Component({
  selector: 'app-rank-bundesliga',
  templateUrl: './rank-bundesliga.component.html',
  styleUrls: ['./rank-bundesliga.component.css'],
})
export class RankBundesligaComponent implements OnInit {
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
