import React from 'react';
import StyledDashboard from '../../components/Styles/StyledDashboard';
import Header from '../../components/Layout/Header';
import Breadcrumb from '../../components/UI/Breadcrumb';
import BreadcrumItem from '../../components/UI/BreadcrumItem';

const Dashboard = () => {
    return (
        <StyledDashboard>
            <Header title="Welcome back, Demo User">
                <Breadcrumb>
                    <BreadcrumItem href='/'>Dashboard</BreadcrumItem>
                </Breadcrumb>
            </Header>
        </StyledDashboard>
    );
};

export default Dashboard;