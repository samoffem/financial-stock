import Dashboard from "@/components/Dashboard/Dashboard";
import { NextPageWithLayout } from "../_app";
import Layout from '../../../layout/Layout'

const Page: NextPageWithLayout = ()=>{
    return (
        <>
            <Dashboard />
        </>
    )
}

Page.getLayout = Layout

export default Page