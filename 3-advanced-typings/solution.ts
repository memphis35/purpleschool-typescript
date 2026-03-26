enum Gender {
    MALE = "male",
    FEMALE = "female",
}

interface Address {
    address: string;
    city: string;
    state: string;
    stateCode: string;
    postalCode: string;
    country: string;
}

interface User {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    gender: Gender;
    birthDate: string;
    image: string;
    bloodGroup: string;
    heigth: number;
    weight: number;
    eyeColor: string;
    ssn: string;
    address: Address;
}

const months: { [index: string]: string } = {
    "1": "January",
    "2": "February",
    "3": "March",
    "4": "April",
    "5": "May",
    "6": "June",
    "7": "July",
    "8": "August",
    "9": "September",
    "10": "October",
    "11": "November",
    "12": "December",
};

const formatDateMessage: (date: string[]) => string = (date) => {
    if (date.length !== 3) throw new Error("Date is incorrect!");
    const [year = "undefined", month = "undefined", day = "undefined"] = date;
    const monthName: string = months[month] ?? "Undefined";
    return `${monthName} ${day}, ${year}`;
};

const formatDate: (date: string) => string = (date) => {
    const dateArr: string[] = date.split("-");
    return formatDateMessage(dateArr);
};

const printUser: (user: User) => void = (user) =>
    console.log(
        `User ${user.firstName} ${user.lastName}, born ${formatDate(user.birthDate)}, ${user.gender}, ${user.age} y.o., SSN: ${user.ssn} lives in ${user.address.city}, ${user.address.stateCode}`,
    );

const url = "https://dummyjson.com/users?limit=5";
fetch(url)
    .then((resp) => resp.json())
    .then((body) => {
        const users = body.users as User[];
        users.forEach((user) => printUser(user));
    })
    .catch((e) => console.error(e));
