 function buildMakeTodo(){
    return function makeTodo(
        {
            id,
            title,
            description,
            date,
            status
        } = {}
    ){
        if(!title){
            throw new Error('Todo must have a title.')
        }
        if(!description){
            throw new Error('Todo must have a description.')
        }
        if(!date){
            throw new Error('Todo must have a date.')
        }
        if(!status){
            throw new Error('Todo must have a status.')
        }
        return Object.freeze({
            getId: () => id,
            getTitle: () => title,
            getDescription: () => description,
            getDate: () => date,
            getStatus: () => status
        })
    }
}


module.exports = {
    buildMakeTodo,
  };