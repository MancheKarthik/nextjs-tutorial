export default async function ProducDetails({params,}:{
  params:Promise<{productId:string}>

}){
  const productId=(await params).productId
  return <h1>details about product</h1>;
}