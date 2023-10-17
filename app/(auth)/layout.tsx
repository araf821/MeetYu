const layout = ({children} : {children : React.ReactNode}) => {
  return (
    <div>
        <div className="h-20 bg-black text-white text-3xl">
            Auth Navbar
        </div>
        {children}</div>
  )
}
export default layout