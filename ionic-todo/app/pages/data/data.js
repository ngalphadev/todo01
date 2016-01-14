import {Storage, SqlStorage} from 'ionic/ionic';
import {Injectable} from 'angular2/core';
 
@Injectable()
export class DataService {
    constructor(){
 
        this.storage = new Storage(SqlStorage, {name:'todo'});
        this.data = null;
 
        this.storage.get('todos').then((todos) => {
            this.data = JSON.parse(todos);
        });
 
    }
 
    getData() {
        return this.storage.get('todos'); 
    }
 
    save(item){
 
        if(!this.data){
            this.data = [item];
            let newData = JSON.stringify(item);
            this.storage.set('todos', newData);
        } else {
            this.data.push(item);
            let newData = JSON.stringify(this.data);
            this.storage.set('todos', newData);
        }
    }
}