class CreatePassengerCommand {
  private readonly fullName: string;
  private readonly email: string;
  private readonly identityCard: string; 

  constructor(fullName: string, email: string, identityCard: string) {
    
    if (!fullName || !email || !identityCard) {
      throw new Error('FullName, Email and Identity Card are required');
    }

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