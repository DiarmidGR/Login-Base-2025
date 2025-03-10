
export default function Login() {
    
    const loginUser = (e:any) => {
        e.preventDefault()
    }

  return (
    <div>
        <form onSubmit={loginUser}>
            <label>Email</label>
            <input type='email' placeholder='enter email...'/>
            <label>Password</label>
            <input type='password' placeholder='enter password...'/>
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}
