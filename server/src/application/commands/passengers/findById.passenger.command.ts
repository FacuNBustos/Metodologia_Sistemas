

export class findByIdPassengerCommand {
    private readonly id: string;
  
    public constructor(
      identityCard: string,
    ) {
  
      if (!identityCard) {
        throw new Error('Identity Card is required');
      }
     
      this.id = identityCard;
    }
  
    getId() {
      return this.id;
    }
  }
  