class User {
    constructor (firstName, lastName, age, location) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.location = location;
    }
    compareAge(anotherUser) {
        if (this.age > anotherUser.age) {
            console.log(this.firstName, "è più vecchio di", anotherUser.firstName)
        } else if (this.age < anotherUser.age) {
            console.log(this.firstName, "è più giovane di", anotherUser.firstName)
        } else {
            console.log(this.firstName, "ha la stessa età di", anotherUser.firstName)
        }
        
        

    }
    

}


const x = new User("Mario", "Rossi", 70, "Napoli");

const y = new User("Carlo", "Bianchi", 30, "Roma");

x.compareAge(y) 
y.compareAge(x)




