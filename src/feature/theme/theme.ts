import { useEffect } from "react"

const darkModeQuery = window.matchMedia('(prefers-color-scheme:dark)');


export const Theme = () =>{
    useEffect(() =>{
        const detectDarkMode =(event : MediaQueryListEvent) =>{
            if(event.matches){
                document.body.classList.add('dark')
            }else{
                document.body.classList.remove('dark')
            }
        }

        if(darkModeQuery.matches) document.body.classList.add('dark')
            else document.body.classList.remove('dark')
       darkModeQuery.addEventListener("change" , detectDarkMode)

       return(()=>{
        darkModeQuery.removeEventListener('change' , detectDarkMode)
       })
    },[])

}