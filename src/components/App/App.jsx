import { useState } from 'react'
import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
import './App.module.css'
import Profile from '../Profile/Profile'
import userData from "../../UserData.json"
import FriendList from '../FriendList/FriendList'
import friends from "../../Friends.json"
import TransactionHistory from '../TransactionHistory/TransactionHistory'
import transactionHistory from '../../TransactionHistory.json'




export default function App() {
  return (
    <>
      <Profile user={userData}/>  
      <FriendList friends={friends}/>
      <TransactionHistory transactionHistory={transactionHistory}/>
    </>
  )
}


