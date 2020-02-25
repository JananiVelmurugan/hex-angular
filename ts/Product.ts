import {Supplier} from './Supplier'; 
export interface Product{
  id:number
  name:string
  quantity:number
  supplier:Supplier
}