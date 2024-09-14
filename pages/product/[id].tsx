import { useRouter } from "next/router";
import {  useState } from "react";
import Header from "../../components/header/header";
import { FirstLoading } from "../../components/loading/loading";
import Head from "next/head";
export default function ProductItem() {
  const [firstLoad, setFirstLoad]=useState(false)
  const router = useRouter()
  return (
    <div>
  <Head>
      <title>Homepage</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  <FirstLoading setFirstLoad={setFirstLoad}/>
    {firstLoad && <div>
      <Header/>
      </div>}
    </div>
  
  )
}