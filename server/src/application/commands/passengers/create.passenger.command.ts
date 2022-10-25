import Joi from "joi";

class CreatePassengerCommand {
  private readonly fullName: string;
  private readonly email: string;
  private readonly identityCard: string; 

  constructor(fullName: string, email: string, identityCard: string) {

    const validObject = Joi.object({
      fullName: Joi.string().min(3).max(50).alphanum().required(),
      email: Joi.string().email().required(),
      identityCard: Joi.string().max(15).required()
    });

    const error = validObject.validate({
      fullName: fullName,
      email: email,
      identityCard: identityCard
    }).error;
    if (error) throw new Error(error.message);

    this.fullName = fullName;
    this.email = email;
    this.identityCard = identityCard;
  }

  getFullName() : string {
    return this.fullName;
  }

  getEmail() : string {
    return this.email;
  }

  getIdentityCard() : string {
    return this.identityCard;
  }
}

export default CreatePassengerCommand