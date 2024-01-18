import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../ui/button'
import { useSignOutAccount } from '@/lib/react-query/queriesAndMutations'
import { useEffect } from 'react';

const Topbar = () => {
  const {mutate: signOut, isSuccess} = useSignOutAccount();
  const navigate = useNavigate();
  useEffect( ()=> {
    if (isSuccess) navigate(0)
  }, [isSuccess])


  return (
    <section className='topbar'>
      <div className='flex-between py-4 px-5'>
        <Link to='/' className="flex gap-3 item-center">
          <img src="/images/logo.svg" alt="logo" width={130} height={325} />
        </Link>

        <div className='flex gap-4'>
          <Button variant="ghost" className='shad-button_ghost' onClick={() => signOut()}>
            <img src='/assets/icons/logout.svg' alt='logout'/>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Topbar