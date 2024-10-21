import { Component, OnInit } from '@angular/core';
import { MeetingService } from '../services/meeting.service';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.css']
})
export class MeetingComponent implements OnInit {
  clients = [];
  meeting = {
    clientId: '',
    date: '',
    notes: ''
  };

  constructor(private meetingService: MeetingService, private clientService: ClientService) {}

  ngOnInit() {
    this.getClients(); // Fetch clients to populate the dropdown
  }

  getClients() {
    this.clientService.getClients().subscribe(data => {
      this.clients = data; // Ensuring a method to fetch clients from the API
    });
  }

  onSubmitMeeting() {
    this.meetingService.scheduleMeeting(this.meeting).subscribe(response => {
      console.log("Meeting Scheduled:", response);
      // Optionally reset the form or show a success message
      this.meeting = { clientId: '', date: '', notes: '' };
    });
  }
}
