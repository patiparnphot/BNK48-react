import React from 'react';
import { Link } from 'react-router';
import NotFoundPage from './NotFoundPage';

export default class UserProfile extends React.Component {
  render() {
    return (
        <div class="row">
           <div class="col-md-4">
                <h1>{{ userprofile.user.firstname }} {{ userprofile.user.lastname }}</h1>
                <div class="thumbnail text-center">
                    <img src="{{ userprofile.user.avatar }}" alt="user profile image">
                    <div class="caption">{{ userprofile.user.email }}</div>
                </div>
                Bacon ipsum dolor amet shankle t-bone jerky, turducken prosciutto cow capicola andouille 
                beef ribs burgdoggen jowl pork loin leberkas boudin porchetta. Corned beef tail turducken 
                bresaola jerky strip steak, shoulder brisket pork belly picanha chicken andouille pork loin landjaeger.
                Tri-tip meatloaf pig rump filet mignon, ham hock short loin kevin flank swine spare ribs pork. Ham hock 
                capicola meatloaf t-bone ground round bacon short loin pork andouille salami picanha meatball pastrami.
                Bresaola jowl short ribs pork chop drumstick. Pancetta short loin brisket doner.<br>

                Corned beef biltong strip steak doner boudin turducken cow ham hock ground round shoulder rump jowl.
                Turkey filet mignon cupim meatloaf bacon tenderloin. Ball tip picanha shank meatball sausage, shoulder
                tri-tip prosciutto andouille. Tenderloin cow frankfurter pastrami, filet mignon salami ball tip strip
                steak sausage chuck leberkas buffalo bresaola sirloin pork belly. Ham hock sausage bacon corned beef 
                strip steak jowl, filet mignon jerky boudin swine shankle pancetta short loin turkey. Leberkas shank ham,
                andouille frankfurter burgdoggen chuck spare ribs capicola drumstick pork chop landjaeger bresaola cupim boudin.
                <hr>
            </div>  
            <div class="col-md-8">
                <h2>{{ userprofile.user.username }}'s idols:</h2>
                <div class="thumbnail text-center" *ngFor="let idol of userprofile.idols">
                    <img src="{{ idol.image }}">
                    <div class="caption">
                        <a routerLink="/idols/{{ idol._id }}">{{ idol.nickname }}</a>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}