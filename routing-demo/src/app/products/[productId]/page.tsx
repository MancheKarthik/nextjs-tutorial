
import { notFound } from "next/navigation";

export default async function ProducDetails({params,}:{
  params:Promise<{productId:string}>

}){
  const productId=(await params).productId;
  if(parseInt(productId)>1000){
    notFound();
  }
  return <h1>details about product</h1>;
}