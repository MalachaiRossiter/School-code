const express = require("express");
const app = express();
const port = 8000;

const {faker} = require('@faker-js/faker');

const createUser = () => {
    const newFake = {
        password: faker.internet.password(8),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(),
        id: faker.datatype.uuid()
    };
    return newFake;
}

const createCompany = () => {
    const newFake = {
        id: faker.datatype.uuid(),
        companyName: faker.company.name(),
        address: {
            street: faker.address.streetAddress(),
            city: faker.address.cityName(),
            state: faker.address.state(),
            zipcode: faker.address.zipCode(),
            country: faker.address.country()
        }
    };
    return newFake;
}

app.get("/api", (req, res) => {
    res.json({message: "BEANS"});
});

app.get("/api/user", (req, res) => {
    newUser = createUser();
    res.json(newUser);
});

app.get("/api/company", (req, res) => {
    newCompany = createCompany();
    res.json(newCompany);
});

app.get("/api/user/company", (req, res) => {
    newCompany = createCompany();
    newUser = createUser();
    newObject = {
        user: newUser,
        company: newCompany
    };
    res.json(newObject);
});

app.listen( port, () => console.log(`Listening on port: ${port}`));