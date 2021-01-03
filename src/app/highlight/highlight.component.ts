import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { formatDistance } from 'date-fns';
import { MatTableDataSource } from '@angular/material/table';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
export interface Vegetable {
  name: string;
}
@Component({
  selector: 'app-highlight',
  templateUrl: './highlight.component.html',
  styleUrls: ['./highlight.component.css'],
})
export class HighlightComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  public highlight = [
    {
      video:
        'https://r1---sn-8qj-nbosz.googlevideo.com/videoplayback?expire=1608941115&ei=2ynmX-W1OIap4wLItrTgCg&ip=123.21.67.8&id=o-ANK49joNksVeph6Xg8EcoSNu29oyhlmacXZdBSPUYsH2&itag=22&source=youtube&requiressl=yes&mh=TO&mm=31%2C26&mn=sn-8qj-nbosz%2Csn-npoeened&ms=au%2Conr&mv=m&mvi=1&pl=20&gcr=vn&initcwndbps=970000&vprv=1&mime=video%2Fmp4&ns=ScF-orDATXXByQaXWw4Y4lwF&ratebypass=yes&dur=763.495&lmt=1608508728282509&mt=1608919240&fvip=1&c=WEB&txp=5535432&n=zxGpl-fieTd_YY_h&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cgcr%2Cvprv%2Cmime%2Cns%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRAIgeYulr21hRvGv2qikvHdgxff8h9FiQAbd5smn4XhG9fICIHCcmqZZAz1lQADfTN7fL7l-3N-6h_hogNfPJDDZDblA&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRgIhALVkfJT0JvcTUZtB7r5YqRhGwpiofzxyjrXZVvzWw0MzAiEA49YzMDQVcogcpapCKc_KqBlTq_mcbct2jzt-VKQ577g%3D',
      Title: '[NGOẠI HẠNG ANH 20/21]',
      description:
        'MAN UNITED - LEEDS UNITED: BÀN THẮNG, TỐC ĐỘ VÀ KĨ THUẬT, DERBY TUYỆT HẢO',
    },
    {
      video:
        'https://r5---sn-8qj-nboez.googlevideo.com/videoplayback?expire=1608941197&ei=LSrmX7uGCvqI1d8PmsqZgA4&ip=123.21.67.8&id=o-AJNcfSNsmejnOuhWJ92viyGjP8ClM-sQf95cnxIj8NvC&itag=22&source=youtube&requiressl=yes&mh=fZ&mm=31%2C26&mn=sn-8qj-nboez%2Csn-npoeened&ms=au%2Conr&mv=m&mvi=5&pl=20&gcr=vn&initcwndbps=1021250&vprv=1&mime=video%2Fmp4&ns=bZgGnNRMMDNzLtcGa4TrMUMF&ratebypass=yes&dur=659.655&lmt=1608518750368308&mt=1608919480&fvip=5&c=WEB&txp=5535432&n=2V-RRMtzIm-K9DEL&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cgcr%2Cvprv%2Cmime%2Cns%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRgIhAMkML7AueR46-aNKnbKWrCNFcMkkMfbRTZszu-Jj5MdqAiEAkYjz_72O0Kzz0N32Z5C3O21iDgKMrOSpEtxdifAbFWo%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIgREuZ8TRJt5NKe46sPvDczlnCO-E48i35B5CvOiyBplwCIQCF14GhYnBXfwOwKHMFoO3nSsabkETmRLoBgpudIc-mAw%3D%3D',
      Title: '[EPL 20/21] CRYSTAL PALACE - LIVERPOOL ',
      description: 'LỜI KHẲNG ĐỊNH CỦA VỊ THẾ DẪN ĐẦU',
    },
  ];
  vegetables: Vegetable[] = [
    { name: 'apple' },
    { name: 'banana' },
    { name: 'strawberry' },
    { name: 'orange' },
    { name: 'kiwi' },
    { name: 'cherry' },

  ];

  drop(event: CdkDragDrop<Vegetable[]>) {
    moveItemInArray(this.vegetables, event.previousIndex, event.currentIndex);
  }
}
