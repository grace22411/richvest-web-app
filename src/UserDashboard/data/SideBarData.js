import React from 'react';
import investment from "../images/investment-icon.svg";
import savings from "../images/savings-icon.svg";
import wallet from "../images/wallet-Icon.svg";
import loan from "../images/loan-icon.svg";
import dashboard from "../images/dashboard-icon.svg";
import refer from "../images/referral.svg";

export const SidebarData = [
    {
      title: 'Dashboard',
      path: '/',
      icon: dashboard ,
    },
    {
      title: 'Wallet',
      path: '/my-wallet',
      icon: wallet,
    },
    {
      title: 'Project Fund',
      path: '/project-fund',
      icon: investment
    },
    {
        title: 'Savings',
        path: '/my-savings',
        icon: savings
      },
    {
      title: 'Loan',
      path: '/my-loan',
      icon: loan
    },
    {
      title: 'Referral',
      path: '/referral',
      icon: refer
    }
  ];