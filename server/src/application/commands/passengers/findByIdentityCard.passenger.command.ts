import Joi from "joi";

export class findByIdentityCardPassengerCommand {
  private readonly identityCard: string;

  public constructor(
    identityCard: any,
  ) {

    const validIdentityCard = Joi.string().max(15).required();
    
    const error = validIdentityCard.validate(identityCard).error;
    if (error) throw new Error(error.message);

    this.identityCard = identityCard;
  }

  getIdentityCard() {
    return this.identityCard;
  }
}
