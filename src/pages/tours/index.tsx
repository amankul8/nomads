import { ToursFirstBlock } from "@/components/blocks/firstBlocks";
import ToursContent from "@/components/content/tours";
import {Layout} from "@/layout"

export default function Main() {

  return (
    
    <Layout>
        <ToursFirstBlock/>
        <ToursContent/>
    </Layout>
  );
};
