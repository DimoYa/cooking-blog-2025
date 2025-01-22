import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, OnDestroy {
  isLogged!: boolean;
  isAdmin!: boolean;
  avatar!: string;
  username!: string;
  userId!: string;
  isExpanded!: boolean;
  defaultAvatarPath: string = '../../../assets/profile.png';
  subscription: Subscription = new Subscription();

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.isLogged = false;
    this.isAdmin = false;
    this.avatar = '';
    this.username = '';
    this.userId = '123';
    this.isExpanded = false;
  }

  toggle(): void {
    this.isExpanded = !this.isExpanded;
  }

  logout(): void {
  }
}
