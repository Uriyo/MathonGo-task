import logo from "../assets/NotePlay.webp";
const Header = () => {
  return (
    <div className="mx-2 flex flex-row">
      <img src={logo} alt="logo"  className="w-16 h-16"/>
      <h2 className="text-white my-4 font-bold text-xl">NotesPlay</h2>
    </div>
  );
}

export default Header