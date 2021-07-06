import React from 'react';
import investment from "../../UserDashboard/images/investment-icon.svg";
import savings from "../../UserDashboard/images/savings-icon.svg";
import wallet from "../../UserDashboard/images/wallet-icon.svg";
import loan from "../../UserDashboard/images/loan-icon.svg";
import dashboard from "../../UserDashboard/images/dashboard-icon.svg";
import refer from "../../UserDashboard/images/referral.svg";

export const SidebarData = [
    {
      title: 'Dashboard',
      path: '/admin/dashboard',
      icon: dashboard ,
    },
    {
      title: 'Project Fund',
      path: '/admin/project-fund',
      icon: investment
    },
    {
      title: 'Wallet',
      path: '/admin/my-wallet',
      icon: wallet,
    },
    
    {
        title: 'Savings',
        path: '/admin/my-savings',
        icon: savings
      },
    {
      title: 'Loan',
      path: '/admin/my-loan',
      icon: loan
    },
    {
      title: 'Referral',
      path: '/admin/referral',
      icon: refer
    },
    {
      title: 'User',
      path: '/admin/user',
      icon: refer
    },
    {
      title: 'Sign Out',
      path: '/',
      icon: refer
    }
  ];