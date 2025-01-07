import { ToursFirstBlock } from "@/components/pageFirstBlocks";
import ToursContent from "@/components/content/tours";
import {Layout} from "@/layouts"

export default function Main() {

  return (
    
    <Layout>
        <ToursFirstBlock/>
        <ToursContent/>
    </Layout>
  );
};
