import createPassengerCommand from "../../../../../src/application/commands/passengers/create.passenger.command";

describe('Create Passenger Command tests', () => {

    const sut = createPassengerCommand;

    const commonValues = {
        fullname: "Facundo Bustos",
        email: "admin@hotmail.com",
        identityCard: "42788474"
    };

    it("happy test", () => {
        const command = new sut(
            commonValues.fullname,
            commonValues.email,
            commonValues.identityCard
        );

        expect({
            fullname: command.getFullName(),
            email: command.getEmail(),
            identityCard: command.getIdentityCard()
        }).toStrictEqual({
            fullname: commonValues.fullname,
            email: commonValues.email,
            identityCard: commonValues.identityCard
        })
    })

    it("create command with incorrect email", () => {
        expect(() => {
          new sut(
            commonValues.fullname,
            "admin@hotmailcom",
            commonValues.identityCard
          )
        }).toThrow('"email" must be a valid email'
        )
    })
})