import { defineStore } from "pinia";
import { api } from "boot/axios";

export const DeskCounter=defineStore('desk',{
    state:()=>{
    return{
        Desk:[]  
    }
    },
    actions:{
        getDesks(){
            api.get('Desk').then((res)=>{
                this.Desk=res.data
            }).then((err)=>{console.log(err)})
        }
    }
})