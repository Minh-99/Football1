import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
export interface PeriodicElement {
  day: string;
  flag1: string;
  clb1: string;
  flag2: string;
  phase: string;
  clb2: string;
  time: string;
  stadium: string;
  live: string;
}
//////////////////////
///      Today     ///
//////////////////////
const Today: PeriodicElement[] = [

  // Vòng Đấu 15
  {
    day: '',
    time: '',
    live: '',
    clb2: '',
    flag2:
      'vi/thumb/f/f2/Premier_League_Logo.svg/1200px-Premier_League_Logo.svg.png',
    phase: 'Cup liên đoàn anh Vòng 13',
    clb1: '',
    flag1:
      'vi/thumb/f/f2/Premier_League_Logo.svg/1200px-Premier_League_Logo.svg.png',
    stadium: '',
  },

  {
    time: '19:30',
    day: '26/12',
    phase: 'vs',
    clb1: 'Leicester City',
    flag1:
      'en/thumb/2/2d/Leicester_City_crest.svg/1200px-Leicester_City_crest.svg.png',
    clb2: 'Manchester United',
    flag2: 'vi/a/a1/Man_Utd_FC_.svg',

    stadium: 'Stamford Bridge',
    live: 'K+1',
  },
  {
    day: '26/12',
    clb2: 'Crystal Palace',
    flag2: 'hif/c/c1/Crystal_Palace_FC_logo.png',

    phase: 'vs',
    clb1: 'Aston Villa',
    flag1: 'vi/0/0d/Aston_Villa_FC.png',

    time: '22:00',
    stadium: 'Stamford Bridge',
    live: 'K+PC',
  },
  {
    day: '26/12',
    clb2: 'Southampton',
    flag2: 'vi/4/4b/356px-FC_Southampton.svg.png',

    phase: 'vs',
    clb1: 'Fulham',
    flag1: 'vi/8/8d/Fulham_FC.png',

    time: '22:00',
    stadium: 'Stamford Bridge',
    live: 'K+PM',
  },
  {
    time: '00:30',
    day: '27/12',
    phase: 'vs',
    clb1: 'Arsenal',
    flag1: 'vi/thumb/5/53/Arsenal_FC.svg/1200px-Arsenal_FC.svg.png',
    flag2: 'vi/thumb/5/5c/Chelsea_crest.svg/1024px-Chelsea_crest.svg.png',
    clb2: 'Chelsea',

    stadium: 'Stamford Bridge',
    live: 'K+PC',
  },
  {
    time: '03:00',
    day: '27/12',
    phase: 'vs',
    clb1: 'Manchester City',
    flag1:
      'vi/thumb/1/1d/Manchester_City_FC_logo.svg/1200px-Manchester_City_FC_logo.svg.png',

    clb2: 'Newcastle United',
    flag2:
      'vi/thumb/0/0d/Newcastle_United_FC.png/150px-Newcastle_United_FC.png',
    stadium: 'Stamford Bridge',
    live: 'K+1',
  },
  {
    time: '03:00',
    day: '27/12',
    phase: 'vs',
    clb1: 'Sheffield United',
    flag1: 'vi/thumb/c/c9/Bladeslogo2.png/175px-Bladeslogo2.png',
    clb2: 'Everton',
    flag2: 'vi/thumb/7/7c/Everton_FC_logo.svg/1200px-Everton_FC_logo.svg.png',

    stadium: 'Stamford Bridge',
    live: 'K+1',
  },
  {
    time: '19:00',
    day: '27/12',
    phase: 'vs',
    clb1: 'Leeds United',
    flag1: 'vi/0/05/Leeds_United_Logo.png',
    clb2: 'Burnley',
    flag2: 'vi/thumb/1/1a/Burnley_FC.png/200px-Burnley_FC.png',
    stadium: 'Stamford Bridge',
    live: 'K+1',
  },
  {
    time: '21:15',
    day: '27/12',
    phase: 'vs',
    clb1: 'West Ham United',
    flag1: 'vi/thumb/b/b1/WestHam.png/220px-WestHam.png',
    clb2: 'Brighton & Hove Albion',
    flag2:
      'vi/thumb/f/fd/Brighton_%26_Hove_Albion_logo.svg/1200px-Brighton_%26_Hove_Albion_logo.svg.png',
    stadium: 'Stamford Bridge',
    live: 'K+1',
  },
  {
    time: '23:30',
    day: '27/12',
    phase: 'vs',
    clb1: 'Liverpool',
    flag1: 'vi/b/b2/Liverpool_FC_logo.png',
    flag2: 'vi/b/b1/West_Bromwich_Albion.png',
    clb2: 'West Bromwich Albion',
    stadium: 'Stamford Bridge',
    live: 'K+1',
  },

  {
    time: '02:15',
    day: '28/12',
    clb2: 'Tottenham Hotspur',
    flag2: 'vi/8/81/Tottenham_Hotspur_FC.png',

    flag1:
      'vi/thumb/6/6c/Wolverhampton_Wanderers.png/200px-Wolverhampton_Wanderers.png',
    phase: 'vs',
    clb1: 'Wolverhampton Wanderers',
    stadium: 'Stamford Bridge',
    live: 'K+1',
  },
  {
    day: '',
    time: '',
    live: '',
    clb2: '',
    flag2: 'commons/9/92/LaLiga_Santander.svg',
    phase: 'Vòng 15',
    clb1: '',
    flag1: 'commons/9/92/LaLiga_Santander.svg',
    stadium: '',
  },
  {
    time: '03:00',
    day: '19/12',
    clb1: 'Athletic Club',
    flag1: 'vi/8/8c/Athletic_c_de_bilbao.gif',
    phase: 'vs',
    clb2: 'Huesca',
    flag2:
      'en/thumb/8/8a/Logo_of_SD_Huesca.svg/1200px-Logo_of_SD_Huesca.svg.png',

    stadium: 'Stamford Bridge',
    live: 'BĐTV',
  },
  {
    day: '19/12',
    live: 'BDTV',
    clb2: 'Atletico Madrid',
    flag2:
      'vi/thumb/f/f4/Atletico_Madrid_2017_logo.svg/1200px-Atletico_Madrid_2017_logo.svg.png',
    phase: 'vs',
    clb1: 'Elche',
    flag1: 'en/thumb/a/a7/Elche_CF_logo.svg/1200px-Elche_CF_logo.svg.png',

    time: '20:00',
    stadium: 'Stamford Bridge',
  },
  {
    day: '19/12',
    time: '22:15',
    live: 'BDTV',
    clb2: 'Barcelona',
    flag2:
      'vi/thumb/9/91/FC_Barcelona_logo.svg/1200px-FC_Barcelona_logo.svg.png',
    phase: 'vs',
    clb1: 'Valencia',
    flag1: 'vi/f/fe/Valenciacf.png',
    stadium: 'Stamford Bridge',
  },
  {
    day: '20/12',
    time: '00:30',
    live: 'BDTV',
    clb2: 'Levante',
    flag2:
      'en/thumb/7/7b/Levante_Uni%C3%B3n_Deportiva%2C_S.A.D._logo.svg/1200px-Levante_Uni%C3%B3n_Deportiva%2C_S.A.D._logo.svg.png',
    phase: 'vs',
    clb1: 'Real Sociedad',
    flag1:
      'en/thumb/f/f1/Real_Sociedad_logo.svg/1200px-Real_Sociedad_logo.svg.png',
    stadium: 'Stamford Bridge',
  },
  {
    day: '20/12',
    time: '00:30',
    live: 'BDTV',
    clb2: 'Osasuna',
    flag2: 'vi/5/53/Ca_osasuna.png',
    phase: 'vs',
    clb1: 'Villarreal',
    flag1:
      'en/thumb/7/70/Villarreal_CF_logo.svg/1200px-Villarreal_CF_logo.svg.png',
    stadium: 'Stamford Bridge',
  },
  {
    day: '20/12',
    time: '00:30',
    live: 'BDTV',
    clb2: 'Sevilla',
    flag2: 'vi/a/ae/Sevilla_FC_logo.png',
    phase: 'vs',
    clb1: 'Real Valladolid',
    flag1:
      'en/thumb/6/6e/Real_Valladolid_Logo.svg/1200px-Real_Valladolid_Logo.svg.png',
    stadium: 'Stamford Bridge',
  },
  {
    day: '20/12',
    time: '20:00',
    live: 'BDTV',
    clb2: 'Celta Vigo',
    flag2:
      'en/thumb/1/12/RC_Celta_de_Vigo_logo.svg/1200px-RC_Celta_de_Vigo_logo.svg.png',
    phase: 'vs',
    clb1: 'Deportivo Alaves',
    flag1:
      'en/thumb/f/f8/Deportivo_Alaves_logo_%282020%29.svg/1200px-Deportivo_Alaves_logo_%282020%29.svg.png',
    stadium: 'Stamford Bridge',
  },

];

//////////////////////
/// Premier League ///
//////////////////////
const PremierLeague: PeriodicElement[] = [
  //vòng 13
  {
    day: '',
    time: '',
    live: '',
    clb2: '',
    flag2:
      'vi/thumb/f/f2/Premier_League_Logo.svg/1200px-Premier_League_Logo.svg.png',
    phase: 'Vòng 13',
    clb1: '',
    flag1:
      'vi/thumb/f/f2/Premier_League_Logo.svg/1200px-Premier_League_Logo.svg.png',
    stadium: '',
  },
  {
    day: '16/12/2020',
    flag1: 'vi/thumb/5/5c/Chelsea_crest.svg/1024px-Chelsea_crest.svg.png',
    phase: 'vs',
    clb1: 'Chelsea',
    flag2:
      'vi/thumb/6/6c/Wolverhampton_Wanderers.png/200px-Wolverhampton_Wanderers.png',
    clb2: 'Wolverhampton Wanderers',
    time: '01:00',
    stadium: 'Stamford Bridge',
    live: 'K+PC',
  },
  {
    day: '16/12/2020',
    flag1:
      'vi/thumb/1/1d/Manchester_City_FC_logo.svg/1200px-Manchester_City_FC_logo.svg.png',
    phase: 'vs',
    clb1: 'Manchester City',
    flag2: 'vi/b/b1/West_Bromwich_Albion.png',
    clb2: 'West Bromwich Albion',
    time: '01:00',
    stadium: 'Stamford Bridge',
    live: 'K+PM',
  },
  {
    time: '01:00',
    day: '17/12/2020',
    phase: 'vs',
    clb1: 'Arsenal',
    flag1: 'vi/thumb/5/53/Arsenal_FC.svg/1200px-Arsenal_FC.svg.png',
    clb2: 'Southampton',
    flag2: 'vi/4/4b/356px-FC_Southampton.svg.png',
    stadium: 'Stamford Bridge',
    live: 'K+PC',
  },
  {
    time: '01:00',
    day: '17/12/2020',
    phase: 'vs',
    clb1: 'Leeds United',
    flag1: 'vi/0/05/Leeds_United_Logo.png',
    clb2: 'Newcastle United',
    flag2:
      'vi/thumb/0/0d/Newcastle_United_FC.png/150px-Newcastle_United_FC.png',
    stadium: 'Stamford Bridge',
    live: 'K+1',
  },
  {
    time: '01:00',
    day: '17/12/2020',
    phase: 'vs',
    clb1: 'Leicester City',
    flag1:
      'en/thumb/2/2d/Leicester_City_crest.svg/1200px-Leicester_City_crest.svg.png',
    clb2: 'Everton',
    flag2: 'vi/thumb/7/7c/Everton_FC_logo.svg/1200px-Everton_FC_logo.svg.png',
    stadium: 'Stamford Bridge',
    live: 'K+1',
  },

  {
    time: '03:00',
    day: '17/12/2020',
    phase: 'vs',
    clb1: 'Fulham',
    flag1: 'vi/8/8d/Fulham_FC.png',
    clb2: 'Brighton & Hove Albion',
    flag2:
      'vi/thumb/f/fd/Brighton_%26_Hove_Albion_logo.svg/1200px-Brighton_%26_Hove_Albion_logo.svg.png',
    stadium: 'Stamford Bridge',
    live: 'K+1',
  },
  {
    time: '03:00',
    day: '17/12/2020',
    phase: 'vs',
    clb1: 'West Ham United',
    flag1: 'vi/thumb/b/b1/WestHam.png/220px-WestHam.png',
    clb2: 'Crystal Palace',
    flag2: 'hif/c/c1/Crystal_Palace_FC_logo.png',
    stadium: 'Stamford Bridge',
    live: 'K+1',
  },
  {
    time: '03:00',
    day: '17/12/2020',
    phase: 'vs',
    clb1: 'Liverpool',
    flag1: 'vi/b/b2/Liverpool_FC_logo.png',
    clb2: 'Tottenham Hotspur',
    flag2: 'vi/8/81/Tottenham_Hotspur_FC.png',
    stadium: 'Stamford Bridge',
    live: 'K+1',
  },
  {
    time: '01:00',
    day: '18/12/2020',
    phase: 'vs',
    clb1: 'Aston Villa',
    flag1: 'vi/0/0d/Aston_Villa_FC.png',
    clb2: 'Burnley',
    flag2: 'vi/thumb/1/1a/Burnley_FC.png/200px-Burnley_FC.png',
    stadium: 'Stamford Bridge',
    live: 'K+1',
  },
  {
    time: '01:00',
    day: '18/12/2020',
    phase: 'vs',
    clb1: 'Sheffield United',
    flag1: 'vi/thumb/c/c9/Bladeslogo2.png/175px-Bladeslogo2.png',
    clb2: 'Manchester United',
    flag2: 'vi/a/a1/Man_Utd_FC_.svg',
    stadium: 'Stamford Bridge',
    live: 'K+1',
  },
  // Vòng Đấu 14
  {
    day: '',
    time: '',
    live: '',
    clb2: '',
    flag2:
      'vi/thumb/f/f2/Premier_League_Logo.svg/1200px-Premier_League_Logo.svg.png',
    phase: 'Vòng 14',
    clb1: '',
    flag1:
      'vi/thumb/f/f2/Premier_League_Logo.svg/1200px-Premier_League_Logo.svg.png',
    stadium: '',
  },
  {
    day: '19/12/2020',
    clb2: 'Crystal Palace',
    flag2: 'hif/c/c1/Crystal_Palace_FC_logo.png',
    phase: 'vs',
    clb1: 'Liverpool',
    flag1: 'vi/b/b2/Liverpool_FC_logo.png',
    time: '19:30',
    stadium: 'Stamford Bridge',
    live: 'K+PC',
  },
  {
    day: '19/12/2020',
    clb2: 'Southampton',
    flag2: 'vi/4/4b/356px-FC_Southampton.svg.png',
    flag1:
      'vi/thumb/1/1d/Manchester_City_FC_logo.svg/1200px-Manchester_City_FC_logo.svg.png',
    phase: 'vs',
    clb1: 'Manchester City',
    time: '22:00',
    stadium: 'Stamford Bridge',
    live: 'K+PM',
  },
  {
    time: '00:30',
    day: '20/12/2020',
    phase: 'vs',
    clb1: 'Arsenal',
    flag1: 'vi/thumb/5/53/Arsenal_FC.svg/1200px-Arsenal_FC.svg.png',
    clb2: 'Everton',
    flag2: 'vi/thumb/7/7c/Everton_FC_logo.svg/1200px-Everton_FC_logo.svg.png',
    stadium: 'Stamford Bridge',
    live: 'K+PC',
  },
  {
    time: '01:00',
    day: '17/12/2020',
    phase: 'vs',
    clb1: 'Fulham',
    flag1: 'vi/8/8d/Fulham_FC.png',

    clb2: 'Newcastle United',
    flag2:
      'vi/thumb/0/0d/Newcastle_United_FC.png/150px-Newcastle_United_FC.png',
    stadium: 'Stamford Bridge',
    live: 'K+1',
  },
  {
    time: '19:00',
    day: '20/12/2020',
    phase: 'vs',
    clb1: 'Sheffield United',
    flag1: 'vi/thumb/c/c9/Bladeslogo2.png/175px-Bladeslogo2.png',
    clb2: 'Brighton & Hove Albion',
    flag2:
      'vi/thumb/f/fd/Brighton_%26_Hove_Albion_logo.svg/1200px-Brighton_%26_Hove_Albion_logo.svg.png',
    stadium: 'Stamford Bridge',
    live: 'K+1',
  },
  {
    time: '21:15',
    day: '20/12/2020',
    phase: 'vs',
    clb1: 'Leicester City',
    flag1:
      'en/thumb/2/2d/Leicester_City_crest.svg/1200px-Leicester_City_crest.svg.png',
    clb2: 'Tottenham Hotspur',
    flag2: 'vi/8/81/Tottenham_Hotspur_FC.png',
    stadium: 'Stamford Bridge',
    live: 'K+1',
  },
  {
    time: '23:30',
    day: '20/12/2020',
    phase: 'vs',
    clb1: 'Leeds United',
    flag1: 'vi/0/05/Leeds_United_Logo.png',
    clb2: 'Manchester United',
    flag2: 'vi/a/a1/Man_Utd_FC_.svg',
    stadium: 'Stamford Bridge',
    live: 'K+1',
  },
  {
    time: '02:15',
    day: '21/12/2020',
    phase: 'vs',
    clb1: 'Aston Villa',
    flag1: 'vi/0/0d/Aston_Villa_FC.png',
    flag2: 'vi/b/b1/West_Bromwich_Albion.png',
    clb2: 'West Bromwich Albion',
    stadium: 'Stamford Bridge',
    live: 'K+1',
  },

  {
    time: '00:30',
    day: '22/12/2020',
    clb2: 'Burnley',
    flag2: 'vi/thumb/1/1a/Burnley_FC.png/200px-Burnley_FC.png',

    flag1:
      'vi/thumb/6/6c/Wolverhampton_Wanderers.png/200px-Wolverhampton_Wanderers.png',
    phase: 'vs',
    clb1: 'Wolverhampton Wanderers',
    stadium: 'Stamford Bridge',
    live: 'K+1',
  },

  {
    time: '03:00',
    day: '22/12/2020',
    phase: 'vs',
    clb1: 'West Ham United',
    flag1: 'vi/thumb/b/b1/WestHam.png/220px-WestHam.png',
    flag2: 'vi/thumb/5/5c/Chelsea_crest.svg/1024px-Chelsea_crest.svg.png',
    clb2: 'Chelsea',
    stadium: 'Stamford Bridge',
    live: 'K+1',
  },
  // Vòng Đấu 15
  {
    day: '',
    time: '',
    live: '',
    clb2: '',
    flag2:
      'vi/thumb/f/f2/Premier_League_Logo.svg/1200px-Premier_League_Logo.svg.png',
    phase: 'Vòng 15',
    clb1: '',
    flag1:
      'vi/thumb/f/f2/Premier_League_Logo.svg/1200px-Premier_League_Logo.svg.png',
    stadium: '',
  },
  {
    time: '19:30',
    day: '26/12/2020',
    phase: 'vs',
    clb1: 'Leicester City',
    flag1:
      'en/thumb/2/2d/Leicester_City_crest.svg/1200px-Leicester_City_crest.svg.png',
    clb2: 'Manchester United',
    flag2: 'vi/a/a1/Man_Utd_FC_.svg',

    stadium: 'Stamford Bridge',
    live: 'K+1',
  },
  {
    day: '26/12/2020',
    clb2: 'Crystal Palace',
    flag2: 'hif/c/c1/Crystal_Palace_FC_logo.png',

    phase: 'vs',
    clb1: 'Aston Villa',
    flag1: 'vi/0/0d/Aston_Villa_FC.png',

    time: '22:00',
    stadium: 'Stamford Bridge',
    live: 'K+PC',
  },
  {
    day: '26/12/2020',
    clb2: 'Southampton',
    flag2: 'vi/4/4b/356px-FC_Southampton.svg.png',

    phase: 'vs',
    clb1: 'Fulham',
    flag1: 'vi/8/8d/Fulham_FC.png',

    time: '22:00',
    stadium: 'Stamford Bridge',
    live: 'K+PM',
  },
  {
    time: '00:30',
    day: '27/12/2020',
    phase: 'vs',
    clb1: 'Arsenal',
    flag1: 'vi/thumb/5/53/Arsenal_FC.svg/1200px-Arsenal_FC.svg.png',
    flag2: 'vi/thumb/5/5c/Chelsea_crest.svg/1024px-Chelsea_crest.svg.png',
    clb2: 'Chelsea',

    stadium: 'Stamford Bridge',
    live: 'K+PC',
  },
  {
    time: '03:00',
    day: '27/12/2020',
    phase: 'vs',
    clb1: 'Manchester City',
    flag1:
      'vi/thumb/1/1d/Manchester_City_FC_logo.svg/1200px-Manchester_City_FC_logo.svg.png',

    clb2: 'Newcastle United',
    flag2:
      'vi/thumb/0/0d/Newcastle_United_FC.png/150px-Newcastle_United_FC.png',
    stadium: 'Stamford Bridge',
    live: 'K+1',
  },
  {
    time: '03:00',
    day: '27/12/2020',
    phase: 'vs',
    clb1: 'Sheffield United',
    flag1: 'vi/thumb/c/c9/Bladeslogo2.png/175px-Bladeslogo2.png',
    clb2: 'Everton',
    flag2: 'vi/thumb/7/7c/Everton_FC_logo.svg/1200px-Everton_FC_logo.svg.png',

    stadium: 'Stamford Bridge',
    live: 'K+1',
  },

  {
    time: '19:00',
    day: '27/12/2020',
    phase: 'vs',
    clb1: 'Leeds United',
    flag1: 'vi/0/05/Leeds_United_Logo.png',
    clb2: 'Burnley',
    flag2: 'vi/thumb/1/1a/Burnley_FC.png/200px-Burnley_FC.png',
    stadium: 'Stamford Bridge',
    live: 'K+1',
  },
  {
    time: '21:15',
    day: '27/12/2020',
    phase: 'vs',
    clb1: 'West Ham United',
    flag1: 'vi/thumb/b/b1/WestHam.png/220px-WestHam.png',
    clb2: 'Brighton & Hove Albion',
    flag2:
      'vi/thumb/f/fd/Brighton_%26_Hove_Albion_logo.svg/1200px-Brighton_%26_Hove_Albion_logo.svg.png',
    stadium: 'Stamford Bridge',
    live: 'K+1',
  },
  {
    time: '23:30',
    day: '27/12/2020',
    phase: 'vs',
    clb1: 'Liverpool',
    flag1: 'vi/b/b2/Liverpool_FC_logo.png',
    flag2: 'vi/b/b1/West_Bromwich_Albion.png',
    clb2: 'West Bromwich Albion',
    stadium: 'Stamford Bridge',
    live: 'K+1',
  },

  {
    time: '02:15',
    day: '28/12/2020',
    clb2: 'Tottenham Hotspur',
    flag2: 'vi/8/81/Tottenham_Hotspur_FC.png',

    flag1:
      'vi/thumb/6/6c/Wolverhampton_Wanderers.png/200px-Wolverhampton_Wanderers.png',
    phase: 'vs',
    clb1: 'Wolverhampton Wanderers',
    stadium: 'Stamford Bridge',
    live: 'K+1',
  },
];
//////////////////////
///    La Liga     ///
//////////////////////
const LALIGA: PeriodicElement[] = [
  {
    day: '',
    time: '',
    live: '',
    clb2: '',
    flag2: 'commons/9/92/LaLiga_Santander.svg',
    phase: 'Vòng 14',
    clb1: '',
    flag1: 'commons/9/92/LaLiga_Santander.svg',
    stadium: '',
  },
  {
    time: '03:00',
    day: '19/12/2020',
    clb1: 'Athletic Club',
    flag1: 'vi/8/8c/Athletic_c_de_bilbao.gif',
    phase: 'vs',
    clb2: 'Huesca',
    flag2:
      'en/thumb/8/8a/Logo_of_SD_Huesca.svg/1200px-Logo_of_SD_Huesca.svg.png',

    stadium: 'Stamford Bridge',
    live: 'BĐTV',
  },
  {
    day: '19/12/2020',
    live: 'BDTV',
    clb2: 'Atletico Madrid',
    flag2:
      'vi/thumb/f/f4/Atletico_Madrid_2017_logo.svg/1200px-Atletico_Madrid_2017_logo.svg.png',
    phase: 'vs',
    clb1: 'Elche',
    flag1: 'en/thumb/a/a7/Elche_CF_logo.svg/1200px-Elche_CF_logo.svg.png',

    time: '20:00',
    stadium: 'Stamford Bridge',
  },
  {
    day: '19/12/2020',
    time: '22:15',
    live: 'BDTV',
    clb2: 'Barcelona',
    flag2:
      'vi/thumb/9/91/FC_Barcelona_logo.svg/1200px-FC_Barcelona_logo.svg.png',
    phase: 'vs',
    clb1: 'Valencia',
    flag1: 'vi/f/fe/Valenciacf.png',
    stadium: 'Stamford Bridge',
  },
  {
    day: '20/12/2020',
    time: '00:30',
    live: 'BDTV',
    clb2: 'Levante',
    flag2:
      'en/thumb/7/7b/Levante_Uni%C3%B3n_Deportiva%2C_S.A.D._logo.svg/1200px-Levante_Uni%C3%B3n_Deportiva%2C_S.A.D._logo.svg.png',
    phase: 'vs',
    clb1: 'Real Sociedad',
    flag1:
      'en/thumb/f/f1/Real_Sociedad_logo.svg/1200px-Real_Sociedad_logo.svg.png',
    stadium: 'Stamford Bridge',
  },
  {
    day: '20/12/2020',
    time: '00:30',
    live: 'BDTV',
    clb2: 'Osasuna',
    flag2: 'vi/5/53/Ca_osasuna.png',
    phase: 'vs',
    clb1: 'Villarreal',
    flag1:
      'en/thumb/7/70/Villarreal_CF_logo.svg/1200px-Villarreal_CF_logo.svg.png',
    stadium: 'Stamford Bridge',
  },
  {
    day: '20/12/2020',
    time: '00:30',
    live: 'BDTV',
    clb2: 'Sevilla',
    flag2: 'vi/a/ae/Sevilla_FC_logo.png',
    phase: 'vs',
    clb1: 'Real Valladolid',
    flag1:
      'en/thumb/6/6e/Real_Valladolid_Logo.svg/1200px-Real_Valladolid_Logo.svg.png',
    stadium: 'Stamford Bridge',
  },
  {
    day: '20/12/2020',
    time: '20:00',
    live: 'BDTV',
    clb2: 'Celta Vigo',
    flag2:
      'en/thumb/1/12/RC_Celta_de_Vigo_logo.svg/1200px-RC_Celta_de_Vigo_logo.svg.png',
    phase: 'vs',
    clb1: 'Deportivo Alaves',
    flag1:
      'en/thumb/f/f8/Deportivo_Alaves_logo_%282020%29.svg/1200px-Deportivo_Alaves_logo_%282020%29.svg.png',
    stadium: 'Stamford Bridge',
  },
  {
    day: '21/12/2020',
    time: '00:30',
    live: 'BDTV',
    clb2: 'Granada',
    flag2: 'bs/7/77/Logo_Granada_CF.png',
    phase: 'vs',
    clb1: 'Real Betis',
    flag1: 'en/thumb/1/13/Real_betis_logo.svg/1200px-Real_betis_logo.svg.png',
    stadium: 'Stamford Bridge',
  },
  {
    day: '21/12/2020',
    time: '00:30',
    live: 'BDTV',
    clb2: 'Cadiz',
    flag2:
      'en/thumb/5/58/C%C3%A1diz_CF_logo.svg/1200px-C%C3%A1diz_CF_logo.svg.png ',
    phase: 'vs',
    clb1: 'Getafe',
    flag1: 'vi/7/7f/Getafe_logo.png',
    stadium: 'Stamford Bridge',
  },
  {
    day: '20/12/2020',
    time: '22:15',
    live: 'BDTV',
    clb2: 'Eibar',
    flag2:
      'en/thumb/3/3b/SD_Eibar_logo_2016.svg/1200px-SD_Eibar_logo_2016.svg.png',
    phase: 'vs',
    clb1: 'Real Madrid',
    flag1: 'vi/thumb/c/c7/Logo_Real_Madrid.svg/419px-Logo_Real_Madrid.svg.png',
    stadium: 'Stamford Bridge',
  },
  // Vòng Đấu
  {
    day: '',
    time: '',
    live: '',
    clb2: '',
    flag2: 'commons/9/92/LaLiga_Santander.svg',
    phase: 'Vòng 15',
    clb1: '',
    flag1: 'commons/9/92/LaLiga_Santander.svg',
    stadium: '',
  },
];
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit {

  displayedColumns: string[] = [

    'Day',
    'Time',
    'match1',
    'phase',
    'match2',
    'stadium',
    'live',
  ];

  dataLaLiga = new MatTableDataSource(LALIGA);
  dataPremierLeague = new MatTableDataSource(PremierLeague);
  dataToday = new MatTableDataSource(Today);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataLaLiga.filter = filterValue.trim().toLowerCase();
    this.dataPremierLeague.filter = filterValue.trim().toLowerCase();
    this.dataToday.filter = filterValue.trim().toLowerCase();
  }
  constructor() {}
  ngOnInit(): void {}
}
export class ProgressSpinnerOverviewExample {}
export class TableFilteringExample {}
