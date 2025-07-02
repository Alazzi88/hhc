import Card from "@/components/card";
import FoodPortions from "@/components/foodportions";
import Footer from "@/components/footer";
import Welcome from "@/components/welcome";
import Manager from "@/components/manager";
import StrategyPage from "@/components/strategy";
import CombinedPage from "@/components/CombinedPage";

export default function Main() {
  return (

    <>

      <Welcome />
      <CombinedPage/>
      <FoodPortions />
      <Card />
      <StrategyPage />
      <Manager />
      <Footer />
    </>
  )
}
