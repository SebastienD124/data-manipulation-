const people=
[
    {
        name: 'robert',
        age: 22,
        occupation: 'developer',
    },
    {
        name: 'stanley',
        age: 25,
        occupation: 'athlete',
    },
    {
        name: 'donovan',
        age: 24,
        occupation: 'athlete',
    },
    {
        name: 'jean',
        age: 20,
        occupation: 'bagger',
    },
    {
        name: 'kevin',
        age: 20,
        occupation: 'athlete',
    },
    {
        name: 'mike',
        age: 23,
        occupation: 'engenieer',
    },
    {
        name: 'florence',
        age: 25,
        occupation: 'dancer',
    },
    {
        name: 'nelson',
        age: 23,
        occupation: 'dentist',
    },
    {
        name: 'nati',
        age: 28,
        occupation: 'lawyer',
    },
    {
        name: 'jaselyn',
        age:22,
        occupation: 'lawyer',
    },
]


const peopleList = document.querySelector('ul');
function showList(people){
    const template=people.map(people => ` 
        <li>
            <h3>${people.name}</h3>
            <h3>${people.age}</h3>
            <h3>${people.occupation}</h3>
        </li>
    `)
    peopleList.innerHTML=template.join('')
}
showList(people);


const all =document.querySelector('#all');
all.addEventListener('click',() =>{
    const allPeople =people.map(people=>people);
     showList(allPeople);
})


const underAge =document.querySelector('#underAge');
underAge.addEventListener('click',() =>{
    const peopleAge =people.filter(name => name.age<21);
     showList(peopleAge);
})


const sports =document.querySelector('#sports');
sports.addEventListener('click',() =>{
    const occupationAthletes =people.filter(name=>name.occupation==='athlete');
     showList(occupationAthletes);
})


const future =document.querySelector('#future');
future.addEventListener('click',() =>{
    const futureAge =people.map(people => {
        const copyPeople = {...people}
        copyPeople.age+=1;
        return copyPeople;
    });
     showList(futureAge);
})