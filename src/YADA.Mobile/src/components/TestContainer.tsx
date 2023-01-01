import './TestContainer.css'

type SomeProps={
    greeting:string;
    name:string;
    age:number;
}

const TestComponent=(testProps:SomeProps)=><div className='container'>
    {testProps.greeting} {testProps.name} {testProps.age}
</div>

export default TestComponent;