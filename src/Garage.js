import Car from './Car';
export default function Garage(props){
    const cars = props.cars;

    return(
        <>
        <h1>Garage</h1>
            <h1>Who lives in my garage?</h1>
            <ul>
                {cars.map((car)=><Car key={car.id} brand={car.brand}/>)}
            </ul>

        


        </>
    );
}