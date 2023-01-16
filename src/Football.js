export default function Football(){

    const shoot =(a,b)=>{
        alert(b.type);
    }
    const ThanksForTry =()=>{
        alert("thanks for tryng")
    }

    return (
        <>
        <button onClick={ (event)=>shoot("Goal!",event)}>Take the shot!</button>
        <button onClick={ThanksForTry}>try!</button>
        </>
        );
}

