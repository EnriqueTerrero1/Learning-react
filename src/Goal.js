import MadeGoal from "./MadeGoal";
import MissedGoal from "./MissedGoal";

export default function Goal(props){

    const isGoal=props.isGoal;
    if(isGoal ==true ){
        return <MadeGoal></MadeGoal>
    }else{
        return <MissedGoal></MissedGoal>
    }
}