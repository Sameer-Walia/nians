import React, { useEffect, useState } from 'react'
import Adminpanel from '../Adminpanel'
import { toast } from 'react-toastify'
import axios from 'axios'

function AdminContact()
{

    return (
        <div>
            <Adminpanel />
            <div className='content1 padd'>
                <section className="admin-contacts111">
                    <h2 className='text-center con111'>Contact On Email</h2>

                </section>
            </div>
        </div>
    )
}

export default AdminContact
