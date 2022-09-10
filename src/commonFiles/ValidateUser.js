import { useEffect } from 'react'
import axios from 'axios'
import { authUserAtom } from '../recoil/recoil'
import { useRecoilState } from 'recoil'
import { useRouter } from 'next/router'

const ValidateUser = () => {
  const router = useRouter()
  const [user, setUser] = useRecoilState(authUserAtom)
  const getUserDetails = async () => {
    try {
      const res = await axios.get(`api/validateSession`, {
        withCredentials: true,
      })
      setUser({
        id: res.data.data._id,
        name: res.data.data.name,
        email: res.data.data.email,
        logoUrl: res.data.data.logoUrl,
        isLoggedIn: 'true',
      })
      console.log(user)
    } catch (error) {
      console.log('error: ', error)
      // router.push('/login')
    }
  }

  useEffect(() => {
    getUserDetails()
  }, [])

  return <div></div>
}

export default ValidateUser
