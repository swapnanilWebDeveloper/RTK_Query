import React from 'react'
import { useGetAccountsQuery , useAddAccountsMutation, useDeleteAccountsMutation,
           useUpdateAccountsMutation } from '../api/adminSlice'

function Admin() {
    
    const {data, error, isLoading} = useGetAccountsQuery();
    const [addAccount] = useAddAccountsMutation();
    const [deleteAccount] = useDeleteAccountsMutation();
    const [updateAccount] = useUpdateAccountsMutation();

  return (
    <div>
        <h3>Admin component...</h3>
        {
            data && data.map((account) => (
                <p key={account.id}>id : {account.id}  / amount : {account.amount}
                 
                    <button onClick={() => deleteAccount(account.id)}>delete Account</button>
                    <button onClick={() => updateAccount({id : account.id, amount : 777})}>update Account</button>
                </p>
            ))
        }
        <button onClick={() => addAccount(101, data.length+1)}>addAccount</button>
    </div>
  )
}

export default Admin
