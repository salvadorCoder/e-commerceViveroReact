const productos = [
    {id:'01', name: 'planta01', masInfo:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan bibendum lacinia. In maximus ipsum et neque faucibus sagittis a ut arcu. Vivamus pharetra convallis lectus nec auctor. Quisque nibh felis, tempus tincidunt viverra nec, porttitor at turpis. Sed congue tristique sagittis. In interdum sit amet tellus quis vestibulum. Proin nec urna id elit consequat mollis non quis tellus. Maecenas ac cursus nisl. Nulla facilisi. Praesent at mollis mauris, non imperdiet felis. Nam fringilla magna eu urna consectetur facilisis. In ligula urna, vestibulum vel sodales nec, auctor at eros. Nunc dapibus ex eu odio sodales, sit amet placerat sem auctor. Morbi non lorem tellus.', description: 'sarasa para vender', img: 'https://images.unsplash.com/photo-1525923838299-2312b60f6d69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHBsYW50c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'},
    {id:'02', name: 'planta02', masInfo:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan bibendum lacinia. In maximus ipsum et neque faucibus sagittis a ut arcu. Vivamus pharetra convallis lectus nec auctor. Quisque nibh felis, tempus tincidunt viverra nec, porttitor at turpis. Sed congue tristique sagittis. In interdum sit amet tellus quis vestibulum. Proin nec urna id elit consequat mollis non quis tellus. Maecenas ac cursus nisl. Nulla facilisi. Praesent at mollis mauris, non imperdiet felis. Nam fringilla magna eu urna consectetur facilisis. In ligula urna, vestibulum vel sodales nec, auctor at eros. Nunc dapibus ex eu odio sodales, sit amet placerat sem auctor. Morbi non lorem tellus.', description: 'sarasa para vender', img: 'https://images.unsplash.com/photo-1533038590840-1cde6e668a91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBsYW50c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'},
    {id:'03', name: 'planta03', masInfo:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan bibendum lacinia. In maximus ipsum et neque faucibus sagittis a ut arcu. Vivamus pharetra convallis lectus nec auctor. Quisque nibh felis, tempus tincidunt viverra nec, porttitor at turpis. Sed congue tristique sagittis. In interdum sit amet tellus quis vestibulum. Proin nec urna id elit consequat mollis non quis tellus. Maecenas ac cursus nisl. Nulla facilisi. Praesent at mollis mauris, non imperdiet felis. Nam fringilla magna eu urna consectetur facilisis. In ligula urna, vestibulum vel sodales nec, auctor at eros. Nunc dapibus ex eu odio sodales, sit amet placerat sem auctor. Morbi non lorem tellus.', description: 'sarasa para vender', img: 'https://images.unsplash.com/photo-1491147334573-44cbb4602074?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGxhbnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'},
    {id:'04', name: 'planta04', masInfo:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan bibendum lacinia. In maximus ipsum et neque faucibus sagittis a ut arcu. Vivamus pharetra convallis lectus nec auctor. Quisque nibh felis, tempus tincidunt viverra nec, porttitor at turpis. Sed congue tristique sagittis. In interdum sit amet tellus quis vestibulum. Proin nec urna id elit consequat mollis non quis tellus. Maecenas ac cursus nisl. Nulla facilisi. Praesent at mollis mauris, non imperdiet felis. Nam fringilla magna eu urna consectetur facilisis. In ligula urna, vestibulum vel sodales nec, auctor at eros. Nunc dapibus ex eu odio sodales, sit amet placerat sem auctor. Morbi non lorem tellus.', description: 'sarasa para vender', img: 'https://images.unsplash.com/photo-1446071103084-c257b5f70672?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGxhbnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'},
    {id:'05', name: 'planta05', masInfo:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan bibendum lacinia. In maximus ipsum et neque faucibus sagittis a ut arcu. Vivamus pharetra convallis lectus nec auctor. Quisque nibh felis, tempus tincidunt viverra nec, porttitor at turpis. Sed congue tristique sagittis. In interdum sit amet tellus quis vestibulum. Proin nec urna id elit consequat mollis non quis tellus. Maecenas ac cursus nisl. Nulla facilisi. Praesent at mollis mauris, non imperdiet felis. Nam fringilla magna eu urna consectetur facilisis. In ligula urna, vestibulum vel sodales nec, auctor at eros. Nunc dapibus ex eu odio sodales, sit amet placerat sem auctor. Morbi non lorem tellus.', description: 'sarasa para vender', img: 'https://images.unsplash.com/photo-1525498128493-380d1990a112?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fHBsYW50c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'},
]

export const obtenerProductos = new Promise ((resolve, reject) =>{
    let condition = true 
    if(condition){
        setTimeout(()=>{
            resolve(productos)
        }, 2000);        
    }else {
        reject ('salio mal =(')
    }
})