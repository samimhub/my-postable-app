import Hero from "./Components/page/ Hero";
import Faq from "./Components/page/Faq";
import Footer from "./Components/page/Footer";
import OneClickToCreate from "./Components/page/OneClickToCreate";
import SearchBar from "./Components/page/SearchBar";
import SocialMedia from "./Components/page/SocialMedia";
import SocialOptimization from "./Components/page/SocialOptimization";
import Solution from "./Components/page/Solution";
import WorkingProcess from "./Components/page/WorkingProcess";


export default function Home() {
  return (
    <div >
      <SearchBar/>
      <Hero/>
      <SocialMedia/>
      <WorkingProcess/>
      <SocialOptimization/>
      <Solution/>
      <Faq/>
      <OneClickToCreate/>
      <Footer/>
    </div>
  );
}
