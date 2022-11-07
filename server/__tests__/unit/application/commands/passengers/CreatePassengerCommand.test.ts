import createPassengerCommand from "../../../../../src/application/commands/passengers/create.passenger.command";
import PassengerPaoloMock from "../../../../../src/infraestructure/mocks/domain/entities/PassengerPaolo.mock";

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

    it("Create Command with empty fullname", () => {
        expect(() => {
            new createPassengerCommand(
                "",
                PassengerPaoloMock.getEmail(),
                PassengerPaoloMock.getIdentityCard()
            )
        }).toThrow('\"fullName\" is not allowed to be empty')
    })

    it("Create Command with incorrect email", () => {
        expect(() => {
            new createPassengerCommand(
                PassengerPaoloMock.getFullName(),
                "paolog10@hotmail",
                PassengerPaoloMock.getIdentityCard()
            )
        }).toThrow('\"email\" must be a valid email')
    })

    it("Create Command with identity card longer than the maximum allowed", () => {
        expect(() => {
            new createPassengerCommand(
                PassengerPaoloMock.getFullName(),
                PassengerPaoloMock.getEmail(),
                "qwewteoiuteoiyeiyeoityuitey"
            )
        }).toThrow('\"identityCard\" length must be less than or equal to 15 characters long')
    })
})