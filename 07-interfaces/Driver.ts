import { Coach } from './Coach';
import { CricketCoach } from './CricketCoach';
import { GolfCoach } from './GolfCoach';

const myCricketCoach = new CricketCoach();
const myGolfCoach = new GolfCoach();

const theCoaches: Coach[] = [];
theCoaches.push(myCricketCoach);
theCoaches.push(myGolfCoach);

for (const tempCoach of theCoaches) {
    console.log(tempCoach.getDailyWorkout());
}
