import { MatDialog } from '@angular/material/dialog';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { CreateEventComponent } from '../components/create-event/create-event.component';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss'],
})
export class TemplateComponent {
  selected: Date = new Date();
  current: string = new Date(this.selected).toDateString();

  hours: Array<any | number> = Array(
    {
      period: 'AM',
      time: '12:00',
      event: {}
    },
    {
      period: 'AM',
      time: '01:00',
      event: {}
    },
    {
      period: 'AM',
      time: '02:00',
      event: {}
    },
    {
      period: 'AM',
      time: '03:00',
      event: {}
    },
    {
      period: 'AM',
      time: '04:00',
      event: {}
    },
    {
      period: 'AM',
      time: '05:00',
      event: {}
    },
    {
      period: 'AM',
      time: '06:00',
      event: {}
    },
    {
      period: 'AM',
      time: '07:00',
      event: {}
    },
    {
      period: 'AM',
      time: '08:00',
      event: {}
    },
    {
      period: 'AM',
      time: '09:00',
      event: {}
    },
    {
      period: 'AM',
      time: '10:00',
      event: {}
    },
    {
      period: 'AM',
      time: '11:00',
      event: {}
    },
    {
      period: 'PM',
      time: '12:00',
      event: {}
    },
    {
      period: 'PM',
      time: '01:00',
      event: {}
    },
    {
      period: 'PM',
      time: '02:00',
      event: {}
    },
    {
      period: 'PM',
      time: '03:00',
      event: {}
    },
    {
      period: 'PM',
      time: '04:00',
      event: {}
    },
    {
      period: 'PM',
      time: '05:00',
      event: {}
    },
    {
      period: 'PM',
      time: '06:00',
      event: {}
    },
    {
      period: 'PM',
      time: '07:00',
      event: {}
    },
    {
      period: 'PM',
      time: '08:00',
      event: {}
    },
    {
      period: 'PM',
      time: '09:00',
      event: {}
    },
    {
      period: 'PM',
      time: '10:00',
      event: {}
    },
    {
      period: 'PM',
      time: '11:00',
      event: {}
    }
  );

  hoursKeys: Array<any> = Array(
    {
      period: 'AM',
      time: '12:00',
      event: {}
    },
    {
      period: 'AM',
      time: '01:00',
      event: {}
    },
    {
      period: 'AM',
      time: '02:00',
      event: {}
    },
    {
      period: 'AM',
      time: '03:00',
      event: {}
    },
    {
      period: 'AM',
      time: '04:00',
      event: {}
    },
    {
      period: 'AM',
      time: '05:00',
      event: {}
    },
    {
      period: 'AM',
      time: '06:00',
      event: {}
    },
    {
      period: 'AM',
      time: '07:00',
      event: {}
    },
    {
      period: 'AM',
      time: '08:00',
      event: {}
    },
    {
      period: 'AM',
      time: '09:00',
      event: {}
    },
    {
      period: 'AM',
      time: '10:00',
      event: {}
    },
    {
      period: 'AM',
      time: '11:00',
      event: {}
    },
    {
      period: 'PM',
      time: '12:00',
      event: {}
    },
    {
      period: 'PM',
      time: '01:00',
      event: {}
    },
    {
      period: 'PM',
      time: '02:00',
      event: {}
    },
    {
      period: 'PM',
      time: '03:00',
      event: {}
    },
    {
      period: 'PM',
      time: '04:00',
      event: {}
    },
    {
      period: 'PM',
      time: '05:00',
      event: {}
    },
    {
      period: 'PM',
      time: '06:00',
      event: {}
    },
    {
      period: 'PM',
      time: '07:00',
      event: {}
    },
    {
      period: 'PM',
      time: '08:00',
      event: {}
    },
    {
      period: 'PM',
      time: '09:00',
      event: {}
    },
    {
      period: 'PM',
      time: '10:00',
      event: {}
    },
    {
      period: 'PM',
      time: '11:00',
      event: {}
    }
  );
  
  events: any = []
  title!: string
  description!: string
  closer!: boolean

  constructor(private dialog: MatDialog) {
    this.events[this.current] = this.hours;
  }

  drop(event: CdkDragDrop<{ period: string, time: string, event: any }[]>) {
    
    moveItemInArray(this.events[this.current], event.previousIndex, event.currentIndex);
    
    this.events[this.current][event.currentIndex].event.time = this.hoursKeys[event.currentIndex].time
    this.events[this.current][event.currentIndex].event.period = this.hoursKeys[event.currentIndex].period
  }

  handleDate() {
    this.current = new Date(this.selected).toDateString();
    if (!this.events[this.current]) this.events[this.current] = this.hours;
  }

  handleDialog(hour: string, period: string, ev: any): any {
    if(Object.keys(ev).length || this.closer){
      this.closer = false
      return false 
    }

    let maker = this.dialog.open(CreateEventComponent,{
      data: {
        hour: hour,
        period: period,
        date: this.current,
        title: this.title,
        description: this.description
      }
    });

    maker.afterClosed().subscribe(res => {
      if(res) {
        let idx = this.events[this.current].findIndex((el: any) => ((el.time == res.hour) && (el.period == res.period)))

        this.events[this.current][idx].event = {
          title: res.title,
          description: res.description,
          time: this.hoursKeys[idx].time,
          period: this.hoursKeys[idx].period,
        }
      }
    })
  }

  removeItem(idx: number) {
    this.closer = true
    this.events[this.current][idx].event = {}
  }
}
