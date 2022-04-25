import {defineStore} from "pinia"
import {api} from "boot/axios"
export const ButtonDropdownPageCounter=defineStore('ButtonDropdownPage',{
  state:()=>{
      return{
        ButtonDropdownPage:[]
      }
  },
  actions:{
      GetButtonDropdownPage(){
    api.get('ButtonDropdownPage').then((res)=>{
          this.ButtonDropdownPage=res.data
      }).then((err)=>console.log(err))
  }
}  
})