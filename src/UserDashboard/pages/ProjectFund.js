import React from 'react'
import FundEntry from '../components/FundEntry'
import Layout from '../components/Layout'
import PFModal from '../components/PFModal/PFModal'
import { Page } from '../styles/DashboardStyles'
import { TotalFund,TotalFundEntry } from '../styles/ProjectFundStyles'

const ProjectFund = () => {
    return (
        <>
        <Layout>
            <Page>
                <TotalFund>
                    <div className="underneath-head"></div>
                    <div className="text-contained">
                        <h2>Total Project Fund</h2>
                        <p>0.00</p>
                    </div>
                </TotalFund>
                <PFModal />
                <TotalFundEntry>
                    <FundEntry></FundEntry>
                </TotalFundEntry>
                </Page>
        </Layout>
            
        </>
    )
}

export default ProjectFund
