import { Component } from '@angular/core';
import * as $ from 'jquery';
declare var $: $
import {  BlockUI, NgBlockUI } from 'ng-block-ui';
import { SpinnerLoadingComponent } from './spinner-loading/spinner-loading.component';
import {Idle, DEFAULT_INTERRUPTSOURCES} from '@ng-idle/core';
import {Keepalive} from '@ng-idle/keepalive';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  idleState = 'Not started.';
  timedOut = false;
  lastPing?: Date = null;
  title = 'app';
  @BlockUI() blockUI: NgBlockUI;
  blockTemplate = SpinnerLoadingComponent;
  blockMessage;

  constructor(private idle: Idle, private keepalive: Keepalive) {
    // sets an idle timeout of 5 seconds, for testing purposes.
    idle.setIdle(420);
    // sets a timeout period of 5 seconds. after 10 seconds of inactivity, the user will be considered timed out.
    idle.setTimeout(420);
    // sets the default interrupts, in this case, things like clicks, scrolls, touches to the document
    idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

    idle.onIdleEnd.subscribe(() => this.idleState = 'No longer idle.');
    idle.onTimeout.subscribe(() => {
     $("#myModal").modal('show');
      this.idleState = 'Timed out!';
      this.timedOut = true;
    });
    idle.onIdleStart.subscribe(() => this.idleState = 'You\'ve gone idle!');
    idle.onTimeoutWarning.subscribe((countdown) => this.idleState = 'You will time out in ' + countdown + ' seconds!');

    // sets the ping interval to 15 seconds
    keepalive.interval(420);

    keepalive.onPing.subscribe(() => this.lastPing = new Date());

    this.reset();
   
  }
  reset() {
   this.idle.watch();
   this.idleState = 'Started.';
   this.timedOut = false;
 }
 irComparador(){
   window.location.href ='https://www.grupobancolombia.com/wps/portal/personas/solicitud-de-productos-wcm';
 }

  public ngOnInit() {

    this.blockUI.start();
    setTimeout(() => {
      this.blockUI.stop();
    }, 4500);

    $(document).ready(function () {
      $('.step').tooltip({
        trigger: "hover",
        placement: 'bottom'
      });
      $('.icon-bc').tooltip({
        trigger: "hover",
        placement: function () {
          var tPos = ""
          var winWidth = $(window).width();
          if (winWidth > 820) {
            tPos = "right";
          } else {
            tPos = "top";
          }
          return tPos;
        }
      });
      $('.icon-info').tooltip({
        trigger: "click",
        placement: function () {
          var tPos = ""
          var winWidth = $(window).width();
          if (winWidth > 820) {
            tPos = "right";
          } else {
            tPos = "top";
          }
          return tPos;
        }
      });
      $('.icon-menu-responsive').on('click', function () {
        $('.back-nav').toggleClass('show-m');
        $('body').toggleClass('open-menu');
        $('.jumbotron').toggleClass('open-menu');
        $('.formulario').toggleClass('open-menu');
      });
      $('.close-mobile').on('click', function () {
        $('.back-nav').toggleClass('show-m');
        $('body').toggleClass('open-menu');
        $('.jumbotron').toggleClass('open-menu');
        $('.formulario').toggleClass('open-menu');
      });
      $("#ex8").slider({
        tooltip : 'always',
        precision : 0
      
      });
      // $('#ex1Slider .tooltip-main').css({
      //   'margin-left' : '-11.5px'
      // });
    });
  }
}