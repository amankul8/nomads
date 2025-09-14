import { Footer, Header} from "@/modules";
import React, {DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

interface ILayoutProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement>{
    children: ReactNode,
}

export const Layout:React.FC<ILayoutProps> = ({children}) => {

    return(
        <React.Fragment>
            <Header/>
            <main>
                {children}
            </main>
            <Footer/>
        </React.Fragment>
    )
}