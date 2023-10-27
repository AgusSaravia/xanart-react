import Image from 'next/image'

const images = [
    {
        id:1,
        src:"/aletatuando.png",
        alt:"Imagen 1",
        
    }, 
    {
        id:2,
        src:"/aletatuando.png",
        alt:"Imagen 2",
        
    }, 
    {
        id:3,
        src:"/aletatuando.png",
        alt:"Imagen 3",
        
    },
    {
        id:5,
        src:"/aletatuando.png",
        alt:"Imagen 3",
        
    },
    {
        id:4,
        src:"/aletatuando.png",
        alt:"Imagen 3",
        
    },
   
]

const GalleryCard =( )=>{
    return(
            <div className="grid grid-flow-col grid-rows-2  gap-[1.5rem] ">
              {
                images.map((e)=>{
                 return   (
                 <div key={e.id} >
                 <Image
                        src={e.src}
                        width={500}
                        height={500}
                        alt={e.alt}
                        
                    
                    />
                    </div>)
                })
            
                
              }
              
            
            </div>
    )
}

export  const Gallery = () =>{
    return(

            
        <div className='w-full '><GalleryCard/></div>
    
    
    )
}