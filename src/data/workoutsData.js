import benchPress from "../assets/bench-press.jpg";
import bicepsCurls from "../assets/bicepCurls.jpg";
import LatPullDown from "../assets/LatPullDown.jpg";
import shoulderpress from "../assets/ShoulderPress.jpg";
import legPress from "../assets/LegPress.jpg";
import Goblet from "../assets/gobletSquate.jpg";
import Deadlift from "../assets/deadlift.jpg";
import Lateral from "../assets/lateralRaises.jpg";
import Pull from "../assets/pullUpps.jpg";
import Elliptical from "../assets/elliptical.jpg";
import rowing from "../assets/Rowing machine.jpg";
import Mountain from "../assets/mountain.jpg";
import Stair from "../assets/stairClimber.jpg";
import shoulder from "../assets/ShoulderScratch.jpg";
import hip from "../assets/hip.jpg";
const workouts = [

{
id: 1,
name: "Bench Press",
category: "BodyBuilding",
description: "A chest exercise targeting the chest, shoulders, and triceps." ,
image : benchPress
},
{
id: 2,
name: "Dumbbell Bicep Curls",
category: "BodyBuilding",
description: "An isolation exercise targeting the biceps." ,
image : bicepsCurls
},
{
id: 3,
name: "Lat Pulldown",
category: "BodyBuilding",
description: "A machine exercise that strengthens the back muscles." ,
image : LatPullDown
},
{
id: 4,
name: "Shoulder Press",
category: "BodyBuilding",
description: "A compound exercise targeting the shoulders and triceps." ,
image : shoulderpress
},
{
id: 5,
name: "Leg Press",
category: "BodyBuilding",
description: "A machine exercise that works the quadriceps and glutes." ,
image : legPress
},
{
id: 6,
name: "Goblet Squat",
category: "BodyBuilding",
description: "A squat variation that strengthens the legs and core." ,
image : Goblet
},
{
id: 7,
name: "Romanian Deadlift",
category: "BodyBuilding",
description: "A hip-hinge exercise targeting the hamstrings and glutes." ,
image : Deadlift
},
{
id: 8,
name: "Pull-Ups",
category: "BodyBuilding",
description: "A bodyweight pulling exercise targeting the back and arms." ,
image : Pull
},
{
id: 9,
name: "Lateral Raises",
category: "BodyBuilding",
description: "An isolation exercise targeting the side shoulder muscles." ,
image : Lateral
},

{
    id: 10,
    name: "Rowing Machine",
    category: "Cardio",
    description: "A full-body cardiovascular workout using a rowing machine." ,
    image : rowing
},
{
    id: 11,
    name: "Elliptical Training",
    category: "Cardio",
    description: "A low-impact workout that engages the upper and lower body." ,
    image : Elliptical
},
{
    id: 12,
    name: "Mountain Climbers",
    category: "Cardio",
    description: "A dynamic exercise combining core engagement and cardio." ,
    image : Mountain
},
{
    id: 13,
    name: "Stair Climber",
    category: "Cardio",
    description: "A cardio activity that engages the legs and improves endurance." ,
    image : Stair
},


{
    id: 14,
    name: "Shoulder Stretch",
    category: "Flexibility",
    description: "A simple stretch that improves shoulder mobility." ,
    image : shoulder
},
{
    id: 15,
    name: "Hip Flexor Stretch",
    category: "Flexibility",
    description: "A stretch targeting the front of the hips." ,
    image : hip
},
];

export default workouts;