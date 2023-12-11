export class GiftRegistry {
  
    presentList: { id: number, gift: string }[] = [];

    addGift = (id: number, gift: string) => {
        this.presentList.push({id, gift});
    }
    getGiftsForChild = (id: number) => {

        const childObject = [];
        const childGifts: string[] = [];
        childObject.push(...this.presentList.filter( childObject => childObject.id === id ));
        childGifts.push(...childObject.map( childObject => childObject.gift ));
        return childGifts
    }

    removeGift = (id: number, gift: string) => {

        const presentExist = this.presentList.find( childObject => (childObject.gift === gift && childObject.id === id))
        if(presentExist) {
        this.presentList = this.presentList.filter(element => !(element.gift === gift && element.id === id))
        }
        else{
            throw Error('Gift not found')
        }
    }
}