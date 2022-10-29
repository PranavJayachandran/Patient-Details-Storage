import Banner from "./components/Banner";
import Details from "./components/Details";
import DetailsTaker from "./components/DetailsTaker";
import NavBar from "./components/NavBar";
import Screen from "./components/Screen";
function App() {
  return (
    <div className="">
      <NavBar />
      <Banner />
      <DetailsTaker />
      <Details />
      <Screen />
    </div>
  );
}

export default App;
