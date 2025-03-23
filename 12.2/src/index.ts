interface User {
    name: string;
    age:number;
    college:string,
    dob:string,
    rollno:number,
    place:string
}

// type update_prop= Pick<User, 'age'| 'college'| 'place'| 'rollno'>
// type putoptns= Partial<update_prop>;

// const ans= (user:putoptns)=>{
//     console.log(`Name: ${user.age}, college: ${user.college}`);
// }

const user1: Readonly<User> = {
    name: 'John',
    age: 25,
    college:'IIT',
    dob:'12-12-1996',
    rollno:123,
    place:'Chennai'
}
