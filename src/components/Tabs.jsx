export default function Tabs ({children, buttons, ButtonsContainer = "menu" }) { 
    // const ButtonsContainer = ButtonsContainer;
    return <>
       <ButtonsContainer >   
        {buttons}          
       </ButtonsContainer>  
       {children}
       CONTENT 
    </>
}