import { Description, Hero } from "app/Components";

export default function HomeLayout({children}: {children: React.ReactNode}){
    return(
        <div>
            <Hero/>
            <Description/>
            {children}
        </div>
    )
}