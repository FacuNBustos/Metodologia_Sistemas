import { CreateBookingCommand } from "../../../../../src/application/commands/bookings/create.booking.command";

describe("Create Booking Command tests", () => {

    const sut = CreateBookingCommand;

    const commonValues = {
        owner: "75e2a6a3-be27-4c31-b3a8-f821da33601c",
        passengers: ["75e2a6a3-be27-4c31-b3a8-f821da33601c", "f0ced856-acda-4ad8-8344-4b2330cbed7c"],
        accommodation: "9b28ac15-b694-4a8c-bed0-777872585ba9",
        from: "2022-7-30",
        to: "2022-8-30"
    };

    it("Correct Creation of command", () => {
        const command = new sut(
            commonValues.owner,
            commonValues.passengers,
            commonValues.accommodation,
            commonValues.from,
            commonValues.to
        );

        expect({
            owner: command.getOwner(),
            passengers: command.getPassengers(),
            accommodation: command.getAccommodation(),
            from: command.getFromDate().getTime(),
            to: command.getToDate().getTime()
        })
        .toStrictEqual({
            owner: commonValues.owner,
            passengers: commonValues.passengers,
            accommodation: commonValues.accommodation,
            from: new Date(2022, 7, 30).getTime(),
            to: new Date(2022, 8, 30).getTime()
        })
    });

    it("Create command with a blank attribute", () => {

        expect(() => { 
            new sut(
                commonValues.owner,
                [],
                commonValues.accommodation,
                commonValues.from,
                commonValues.to
            )
        }).toThrow(Error)

        expect(() => { 
            new sut(
                commonValues.owner,
                commonValues.passengers,
                "",
                commonValues.from,
                commonValues.to
            )
        }).toThrow(Error)

        expect(() => { 
            new sut(
                commonValues.owner,
                commonValues.passengers,
                commonValues.accommodation,
                "",
                commonValues.to    
            )
        }).toThrow(Error)

        expect(() => { 
            new sut(
                commonValues.owner,
                commonValues.passengers,
                commonValues.accommodation,
                commonValues.from,
                ""    
            )
        }).toThrow(Error)
    });

    it("Create command with owner outside passengers", () => {
        expect(() => { 
            new sut(
                commonValues.owner,
                ["f0ced856-acda-4ad8-8344-4b2330cbed7c", "cf4182a7-75e4-4c4b-9520-7e3e96de48bc"],
                commonValues.accommodation,
                commonValues.from,
                commonValues.to
            )
        }).toThrow('"passengers" does not contain 1 required value(s)')
    });

    it("create command with incorrect information", () => {

        const ownerValues = ["75e2a6a3-be27-4c31-b3a8-f821da33601", "thisAValue", "123761287361237123", "   75e2a6a3-be27-4c31-b3a8-f821da33601c   ", "          "]
        ownerValues.forEach((owner) => {
            expect(() => {
                new sut(
                    owner,
                    commonValues.passengers,
                    commonValues.accommodation,
                    commonValues.from,
                    commonValues.to
                )
            }).toThrow(Error)
        });

        const passengersValues = ["75e2a6a3-be27-4c31-b3a8-f821da33601", "thisAValue", "123761287361237123", "   75e2a6a3-be27-4c31-b3a8-f821da33601c   ", "      "]
        passengersValues.forEach((passengers) => {
            expect(() => {
                new sut(
                    commonValues.owner,
                    [commonValues.owner, passengers],
                    commonValues.accommodation,
                    commonValues.from,
                    commonValues.to
                )
            }).toThrow(Error)
        });

        const accommodationValues = ["75e2a6a3-be27-4c31-b3a8-f821da33601", "thisAValue", "123761287361237123", "   75e2a6a3-be27-4c31-b3a8-f821da33601c   ", "     "]
        accommodationValues.forEach((accommodation) => {
            expect(() => {
                new sut(
                    commonValues.owner,
                    commonValues.passengers,
                    accommodation,
                    commonValues.from,
                    commonValues.to
                )
            }).toThrow(Error)
        });

        const fromValues = ["2022/7/30", "2020-7-30", "7-30", "2022-30", "2022-7", "   ", "yyyy-mm-dd", "2022-9-30"]
        fromValues.forEach((from) => {
            expect(() => {
                new sut(
                    commonValues.owner,
                    commonValues.passengers,
                    commonValues.accommodation,
                    from,
                    commonValues.to
                )
            }).toThrow(Error)
        });

        const toValues = ["2022/7/30", "2020-7-30", "7-30", "2022-30", "2022-7", "   ", "yyyy-mm-dd"]
        toValues.forEach((to) => {
            expect(() => {
                new sut(
                    commonValues.owner,
                    commonValues.passengers,
                    commonValues.accommodation,
                    commonValues.from,
                    to
                )
            }).toThrow(Error)
        });
    });

    it("create command with incorrect date difference", () => {

        const datesValues = [["2022-7-30","2022-7-30"], ["2022-07-30","2022-07-29"]]
        datesValues.forEach((dates) => {
            expect(()=> {
                new sut(
                    commonValues.owner,
                    commonValues.passengers,
                    commonValues.accommodation,
                    dates[0],
                    dates[1]
                )
            }).toThrow(Error)
        })
    })
})