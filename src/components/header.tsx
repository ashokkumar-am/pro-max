// import { MainNav } from "./main-nav"
// import UserButton from "./user-button"

export default function Header() {
  return (
    <header className="sticky flex justify-center bg-blue-50 border-solid border-indigo-200 border-b-indigo-500 ">
      <div className="flex items-center justify-between w-full h-16 max-w-3xl px-4 mx-auto sm:px-6">
        {/* <MainNav /> */}
        {/* <UserButton /> */}
        <p>Header Page</p>
      </div>
    </header>
  )
}