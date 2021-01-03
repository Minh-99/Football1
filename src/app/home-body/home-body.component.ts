import { Component, OnInit, ViewChild } from '@angular/core';
import { formatDistance } from 'date-fns';
import {MatDialog} from '@angular/material/dialog';
import {MatMenuTrigger} from '@angular/material/menu';

@Component({
  selector: 'app-home-body',
  templateUrl: './home-body.component.html',
  styleUrls: ['./home-body.component.scss'],

})
export class HomeBodyComponent implements OnInit {
  replikes = 0;
  repdislikes = 0;
  time = formatDistance(new Date(), new Date());

  replike(): void {
    this.replikes = 1;
    this.repdislikes = 0;
  }

  repdislike(): void {
    this.replikes = 0;
    this.repdislikes = 1;
  }

  like=0
  addlike(){
    this.like++;
  }
  public show:boolean = false;
  public buttonName:any = 'Show';



  toggle() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }
  public news = [
    {
      like:0,
      image:'',
      Status:'NÓNG: Ứng viên Chủ tịch Barca tuyên bố "tống cổ" Messi nếu không giảm lương',
      name: 'Nguyễn Văn Tèo',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate laboriosam, distinctio commodi maiores hic obcaecati quas, autem eius consequuntur molestiae cum. Repellat iste, ipsam magnam labore expedita sint soluta numquam ?\
    ',
      timeline: Date.now(),
      avarta:
        'https://cdn.iconscout.com/icon/free/png-256/avatar-369-456321.png',
    },
    {
      image:'https://cdn.24h.com.vn/upload/4-2020/images/2020-12-14/medium/arsenal-640-1607908511-832-width640height480.jpg',
      Status:'SAO Arsenal bóp cổ đối thủ bị thẻ đỏ: Fan nổi giận đòi đuổi, HLV Arteta...',
      name: 'Lê Văn B',
      description: 'Sentence 2',
      timeline: Date.now(),
      avarta:
        'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
    },
    {
      image:'https://cdn.24h.com.vn/upload/4-2020/images/2020-12-14/medium/liv-ava-ok-okok-1607906855-991-width640height480.jpg',
      Status:'Messi tỏa sáng cứu thầy: HLV Barca mừng ra mặt vẫn thừa nhận suýt thua',
      name: 'Ronaldo',
      description: 'Sentence 3',
      timeline: Date.now(),
      avarta:
        'https://cdn.iconscout.com/icon/free/png-256/avatar-367-456319.png',
    },
    {
      image:'https://cdn.24h.com.vn/upload/4-2020/images/2020-12-14/medium/truc-tiep-psg-vs-lyon-cuoc-chien-ngoi-dau1607747378-640-ok-1607890012-235-width640height480.jpg',
      Status:'Ronaldo vẫn tỏa sáng một cách đều đặn cho Juventus, dù theo những cách khác nhau.',
      name: 'Messi',
      description: "lorem" ,
      timeline :  Date.now() ,
      avarta:
        'https://cdn.iconscout.com/icon/free/png-512/avatar-372-456324.png',
    },
  ];

//   eventSelect(){

//     var element=document.getElementById(this.id) as HTMLSelectElement;

//     let value:number=+element.value;

//     if(value==0){
//         alert('Make a selection');
//         return false;
//     }

//     this.selected_g=value;
// }


  ngOnInit(): void {}
  // tslint:disable-next-line:no-any
  data: any[] = [];
  submitting = false;
  user = {
    author: 'Han Solo',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
  };
  inputValue = '';

  handleSubmit(): void {
    this.submitting = true;
    const content = this.inputValue;
    this.inputValue = '';
    setTimeout(() => {
      this.submitting = false;
      this.data = [
        ...this.data,
        {
          ...this.user,
          content,
          datetime: new Date(),
          displayTime: formatDistance(new Date(), new Date())
        }
      ].map(e => {
        return {
          ...e,
          displayTime: formatDistance(new Date(), e.datetime)
        };
      });
    }, 800);
  }
  @ViewChild('menuTrigger') menuTrigger: MatMenuTrigger;

  constructor(public dialog: MatDialog) {}


}

