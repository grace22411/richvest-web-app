import React from 'react'
import Layout from "../components/Layout";
import {Page, ComingSoon} from "../styles/DashboardStyles";

const Loan = () => {
    return (
        <>
            <Layout>
                <Page>
                    <ComingSoon>
                        <p>Coming Soon...</p>
                    </ComingSoon>
                </Page>
            </Layout>
        </>
    )
}

export default Loan;