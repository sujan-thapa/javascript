console.log('this is thirty six');

class Library{
    constructor (boocList){
        this.boocList = boocList;
        this.issuedBooc = {};
    }
    getBoocList(){
        this.boocList.forEach(element => {
            console.log(element);
            
        });
    }
    issueBooc(boocName, user){
        if (this.issuedBooc[boocName] == undefined) {
            this.issuedBooc[boocName] = user;
        }else{
            console.log('this booc is already issued');
        }

    }
    returnBooc(boocName){
        delete this.issuedBooc[boocName];

    }
}